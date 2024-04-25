import {DirectionalLight} from "@babylonjs/core/Lights/directionalLight";
import {HemisphericLight} from "@babylonjs/core/Lights/hemisphericLight";
import {Vector3} from "@babylonjs/core/Maths/math.vector";
import {Tools} from "@babylonjs/core/Misc/tools";
import { ASSETS_URL } from "./constants";

const createEnvironment = (scene) => {
  const environmentTask = scene.assetsManager.addCubeTextureTask("environmentTask", `${ASSETS_URL}/assets/scene_preview/sky/environmentGloss.env`);
  environmentTask.onSuccess = task => {
    task.texture.rotationY = Tools.ToRadians(270);
    scene.environmentTexture = task.texture;    
    new DirectionalLight("DirectionalLight", new Vector3(0.25, -1, -1), scene);   
    // new HemisphericLight("HemisphericLight", new Vector3(0.5, -1, 1), scene);    
    // new HemisphericLight("HemisphericLight", new Vector3(0, 0, -1), scene);
  };
};

export default createEnvironment
