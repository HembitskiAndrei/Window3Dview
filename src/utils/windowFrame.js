import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { PBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { Vector3} from "@babylonjs/core/Maths/math.vector";
import { Axis, Space } from "@babylonjs/core/Maths/math.axis";
import { Color3 } from "@babylonjs/core";
import frameMaker from "./frameMaker";

const windowFrame = (options, scene) => {
  const nodeWindowFrame = new TransformNode("nodeWindowFrame");

  const {path, profile, color} = options;
  const frame = frameMaker("window", {path, profile}, scene);
  frame.parent = nodeWindowFrame;

  const frameMaterial = new PBRMaterial("windowFrameMaterial", scene); 
  frameMaterial.alpha = 0.75;
  frameMaterial.albedoColor = color;
  frameMaterial.metallic = 0;
  frameMaterial.roughness = 1;
  frame.material = frameMaterial;  

  // nodeWindowFrame.rotate(Axis.Y, Math.PI, Space.WORLD);

  return {
    nodeWindowFrame,
    frameMaterial,
    frame
  }
}

export default windowFrame