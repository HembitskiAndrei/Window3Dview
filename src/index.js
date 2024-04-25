import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Curve3} from "@babylonjs/core/Maths/math.path";
import { Color3 } from "@babylonjs/core";
import ScenePreview from "./scenes";
import { disposeScene } from "./utils/disposeScene";
// disposeScene(window.currentScenePreview);

const w = 2;
const h = 2;
const w1 = 0.25;
const h1 = 0.25;
const tmpWidth = 20;
const tmpHeight = 20;
const halfWidth = tmpWidth * 0.5;
const halfHeight = tmpHeight * 0.5;    
const currentScenePreview = new ScenePreview(
  document.getElementById("3d-preview"),
  {
    width: tmpWidth,
    height: tmpHeight,
    glassWidth: 8,
    glassHeight: 8,
    glassThickness: 0.2,
    path: [
        new Vector3(-halfWidth, -halfHeight, 0),
        new Vector3(halfWidth, -halfHeight, 0),
        new Vector3(halfWidth * 1.25, -halfHeight * 0.5, 0),
        new Vector3(halfWidth, halfHeight, 0),
        new Vector3(-halfWidth, halfHeight, 0)
    ],
    profiles: [
        {
          profile: [
          ...Curve3.CreateCubicBezier(
              new Vector3(w * 0.1, h * 0.6, 0),
              new Vector3(0, h * 0.6, 0),
              new Vector3(0, h, 0),
              new Vector3(w * 0.1, h, 0),
              5).getPoints(),
              new Vector3(w - w * 0.1, h, 0),
              new Vector3(w - w * 0.1, h * 0.5, 0),
              new Vector3(w + 0.2, h * 0.5, 0),
              new Vector3(w + 0.2, h * 0.3, 0),
              new Vector3(w + 0.2, h * 0.3, 0),
              new Vector3(w * 0.2, h * 0.3, 0),
              new Vector3(w * 0.2, h * 0.2, 0),
              new Vector3(w * 0.2, h * 0.2, 0),
              new Vector3(w * 0.17, h * 0.2, 0),
          ...Curve3.CreateCubicBezier(
              new Vector3(w * 0.17, h * 0.2, 0),
              new Vector3(w * 0.17, 0, 0),
              new Vector3(w * 0.1, 0, 0),
              new Vector3(w * 0.1, h * 0.2, 0),
              5).getPoints(),
              new Vector3(w * 0.1, h * 0.6, 0) 
          ],
          offset: Vector3.Zero(),
          color: Color3.Gray(),
          scale: 1
      },
      {
        profile: [          
          new Vector3(w1, h1, 0),
          new Vector3(w1, -h1, 0),
          new Vector3(w1, -h1, 0),
          new Vector3(-w1, -h1, 0),
          new Vector3(-w1, h1, 0)    
        ],
        offset: new Vector3(1, 1, 1),
        color: new Color3(1, 0, 0),
        scale: 0.8
      }
    ] 
  }
);
// window.currentScenePreview = currentScenePreview;
