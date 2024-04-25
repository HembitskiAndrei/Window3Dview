import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { Vector3} from "@babylonjs/core/Maths/math.vector";
import { Axis, Space } from "@babylonjs/core/Maths/math.axis";
import frameMaker from "./frameMaker";

const windowGlass = (options, scene) => {
  const nodeWindowGlass = new TransformNode("nodeWindowGlass");

  const glass = new PBRMaterial("glassMaterial", scene);
  glass.metallic = 0.0;
  glass.roughness = 0;
  glass.indexOfRefraction = 0.52;
  glass.alpha = 0.25;
  glass.directIntensity = 0.0;
  glass.environmentIntensity = 1;
  glass.cameraExposure = 0.66;
  glass.cameraContrast = 1.66;
  glass.microSurface = 1;
  glass.subSurface.isRefractionEnabled = true;

const {
    width,
    height,
    depth
} = options;

  const glassPlane = MeshBuilder.CreateBox("glass", {
    width,
    height,
    depth,
    sideOrientation: Mesh.DOUBLESIDE
  });
  glassPlane.material = glass;  
  glassPlane.parent = nodeWindowGlass;
  glassPlane.position.z += depth + 10

//   nodeWindowGlass.rotate(Axis.Y, Math.PI, Space.WORLD);

  return {
    nodeWindowGlass   
  }
}

export default windowGlass