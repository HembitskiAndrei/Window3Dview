import {Curve3} from "@babylonjs/core/Maths/math.path";
import {Vector3} from "@babylonjs/core/Maths/math.vector";

const curvedFrameProfile = (width, height, frame) => {
    switch (frame) {
        case 1:
            return [
                ...Curve3.CreateCubicBezier(
                    new Vector3(width * 0.1, height * 0.6, 0),
                    new Vector3(0, height * 0.6, 0),
                    new Vector3(0, height, 0),
                    new Vector3(width * 0.1, height, 0),
                    5).getPoints(),
                    new Vector3(width - width * 0.1, height, 0),
                    new Vector3(width - width * 0.1, height * 0.5, 0),
                    new Vector3(width + 0.2, height * 0.5, 0),
                    new Vector3(width + 0.2, height * 0.3, 0),
                    new Vector3(width + 0.2, height * 0.3, 0),
                    new Vector3(width * 0.2, height * 0.3, 0),
                    new Vector3(width * 0.2, height * 0.2, 0),
                    new Vector3(width * 0.2, height * 0.2, 0),
                    new Vector3(width * 0.17, height * 0.2, 0),
                ...Curve3.CreateCubicBezier(
                    new Vector3(width * 0.17, height * 0.2, 0),
                    new Vector3(width * 0.17, 0, 0),
                    new Vector3(width * 0.1, 0, 0),
                    new Vector3(width * 0.1, height * 0.2, 0),
                    5).getPoints(),
                    new Vector3(width * 0.1, height * 0.6, 0),
            ]
        case 2:
            return [
                ...Curve3.CreateCubicBezier(
                    new Vector3(width, height * 0.25, 0),
                    new Vector3(width * 0.5, height * 0.2, 0),
                    new Vector3(width * 0.3, height * 0.1, 0),
                    new Vector3(width * 0.3, 0, 0),
                    5).getPoints(),
                ...Curve3.CreateCubicBezier(
                    new Vector3(width * 0.25, 0, 0),
                    new Vector3(-width * 0.1, 0, 0),
                    new Vector3(0, height, 0),
                    new Vector3(width * 0.15, height, 0),
                    10).getPoints(),
                {x: width - width * 0.1, y: height},
                {x: width - width * 0.1, y: height * 0.65},
                {x: width, y: height * 0.65},
                {x: width, y: height * 0.25},
            ]
        case 3:
            return [
                {x: 0, y: height},
                {x: width * 1.2, y: height},
                {x: width * 1.2, y: height * 0.8},
                {x: width * 0.9, y: height * 0.8},
                {x: width * 0.9, y: 0},
                {x: width * 0.42, y: 0},
                {x: width * 0.42, y: 0},
                {x: 0, y: height * 0.8},
                {x: 0, y: height * 0.8},
                {x: 0, y: height}
            ];
        case 4:
            return [
                {x: width * 0.075, y: height},
                {x: width * 0.9, y: height},
                {x: width * 0.9, y: height * 0.4},
                {x: width, y: height * 0.4},
                {x: width, y: height * 0.2},
                {x: width * 0.95, y: height * 0.2},

                ...Curve3.CreateCubicBezier(
                    new Vector3(width * 0.95, height * 0.2, 0),
                    new Vector3(width * 0.95, 0, 0),
                    new Vector3(width * 0.8, 0, 0),
                    new Vector3(width * 0.8, height * 0.2, 0),
                    10).getPoints(),

                {x: width * 0.8, y: height * 0.2},
                {x: width * 0.75, y: height * 0.2},
                ...Curve3.CreateCubicBezier(
                    new Vector3(width * 0.75, height * 0.2, 0),
                    new Vector3(width * 0.75, 0, 0),
                    new Vector3(width * 0.425, height * 0.25, 0),
                    new Vector3(width * 0.35, height * 0.4, 0),
                    10).getPoints(),
                ...Curve3.CreateCubicBezier(
                    new Vector3(width * 0.325, height * 0.45, 0),
                    new Vector3(width * 0.165, height * 0.75, 0),
                    new Vector3(width * 0.125, height * 0.7, 0),
                    new Vector3(width * 0.075, height * 0.7, 0),
                    10).getPoints(),
                ...Curve3.CreateCubicBezier(
                    new Vector3(width * 0.075, height * 0.7, 0),
                    new Vector3(0, height * 0.7, 0),
                    new Vector3(0, height, 0),
                    new Vector3(width * 0.075, height, 0),
                    10).getPoints(),
            ];
        case 5:
            return [
                {x: 0, y: height},
                {x: width, y: height},
                {x: width, y: height * 0.8},
                {x: width * 0.357, y: height * 0.8},
                {x: width * 0.357, y: 0},
                {x: 0, y: 0},
                {x: 0, y: height}
            ];
        
        default:
            return [
                {x: 0, y: 0},
                {x: 0, y: height},
                {x: width, y: height},
                {x: width, y: 0},
                {x: 0, y: 0}
            ];
    }


}

export default curvedFrameProfile