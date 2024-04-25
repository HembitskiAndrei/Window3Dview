import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

const frameMaker = (name, options, scene) => {
  const {path} = options;
  const {profile} = options;

  let originX = Number.MAX_VALUE;

  for(let m = 0; m < profile.length; m+=1) {
    originX = Math.min(originX, profile[m].x);
  }

  let angle = 0;
  let width = 0;
  const cornerProfile = [];

  const nbPoints = path.length;
  let line = Vector3.Zero();
  const nextLine = Vector3.Zero();
  path[1].subtractToRef(path[0], line);
  path[2].subtractToRef(path[1], nextLine);

  for(let p = 0; p < nbPoints; p+=1) {
    angle = Math.PI - Math.acos(Vector3.Dot(line, nextLine)/(line.length() * nextLine.length()));
    const direction = Vector3.Cross(line, nextLine).normalize().z;
    const lineNormal = new Vector3(line.y, -1 * line.x, 0).normalize();
    line.normalize();
    cornerProfile[(p + 1) % nbPoints] = [];

    for(let m = 0; m < profile.length; m+=1) {
      width = profile[m].x - originX;
      cornerProfile[(p + 1) % nbPoints].push(path[(p + 1) % nbPoints].subtract(lineNormal.scale(width)).subtract(line.scale(direction * width/Math.tan(angle/2))));
    }

    line = nextLine.clone();
    path[(p + 3) % nbPoints].subtractToRef(path[(p + 2) % nbPoints], nextLine);
  }

  const frame = [];
  let extrusionPaths = []

  for(let p = 0; p < nbPoints; p+=1) {
    extrusionPaths = [];
    for(let m = 0; m < profile.length; m+=1) {
      extrusionPaths[m] = [];
      extrusionPaths[m].push(new Vector3(cornerProfile[p][m].x, cornerProfile[p][m].y, profile[m].y));
      extrusionPaths[m].push(new Vector3(cornerProfile[(p + 1) % nbPoints][m].x, cornerProfile[(p + 1) % nbPoints][m].y, profile[m].y));
    }

    frame[p] = MeshBuilder.CreateRibbon("frame", {pathArray: extrusionPaths, sideOrientation: Mesh.DOUBLESIDE, updatable: true, closeArray: true}, scene);
  }

  return Mesh.MergeMeshes(frame, true);
}

export default frameMaker