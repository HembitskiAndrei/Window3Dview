import {Ray} from "@babylonjs/core/Culling/ray";

const castRay = (origin, direction, scene, callback) => {
    const length = 20;
    const ray = new Ray(origin, direction, length);
    const hit = scene.pickWithRay(ray);
    if (hit){
        callback(hit)
    }
}

export default castRay