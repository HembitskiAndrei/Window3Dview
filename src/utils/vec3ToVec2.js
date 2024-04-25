import {Vector2} from "@babylonjs/core/Maths/math.vector";

export const vec3ToVec2 = (array) => array.map(v => new Vector2(v.x, v.y))
