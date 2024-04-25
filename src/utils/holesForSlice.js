import {Vector2} from "@babylonjs/core/Maths/math.vector";

export const holesForSlice = (array, offset) => array.map(v => new Vector2(v.x, v.y).add(offset))
