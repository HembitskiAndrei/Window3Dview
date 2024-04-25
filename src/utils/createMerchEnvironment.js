import {Tools} from "@babylonjs/core/Misc/tools";
import { ASSETS_URL } from "./constants";

const createMerchEnvironment = (scene) => {
    const environmentTask = scene.assetsManager.addCubeTextureTask("environmentTask", `${ASSETS_URL}/assets/scene_preview/sky/environmentGloss.env`);
    environmentTask.onSuccess = task => {
        task.texture.rotationY = Tools.ToRadians(270);
        scene.environmentTexture = task.texture;
    };
};

export default createMerchEnvironment
