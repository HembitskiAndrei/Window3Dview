import { Vector2 } from "@babylonjs/core/Maths/math.vector";
import { Tools } from "@babylonjs/core/Misc/tools";

const getAngleBetweenVectors = (firstVector, secondVector) => {
    const product = firstVector.multiply(secondVector);
    return Tools.ToDegrees(Math.acos(product.x + product.y) / (firstVector.length() * firstVector.length()));
}

const pickDoublePoint = (prevPoint, curPoint, nextPoint, phong) => {
    const firstVector = curPoint.subtract(prevPoint);
    const secondVector = nextPoint.subtract(curPoint);
    return getAngleBetweenVectors(firstVector, secondVector) <= phong;
}

const setBabylonProfile = (profile, phong) => {
    const outProfile = [];
    profile.forEach((point, index) => {
        outProfile.push(new Vector2(point.x, point.y));
        if (index > 0 && index < profile.length - 1) {
           if (pickDoublePoint(new Vector2(profile[index - 1].x, profile[index - 1].y), new Vector2(point.x, point.y), new Vector2(profile[index + 1].x, profile[index + 1].y), phong)) {
               outProfile.push(new Vector2(point.x, point.y));
           }
        }
    })

    return outProfile
}

export default setBabylonProfile;