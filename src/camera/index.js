import {ArcRotateCamera} from "@babylonjs/core/Cameras/arcRotateCamera";

class Camera extends ArcRotateCamera {
  constructor(
    alpha,
    beta,
    radius,
    target,
    lowerRadiusLimit,
    upperRadiusLimit,
    scene,
    name = "camera"
  ) {
    super(name, alpha, beta, radius, target, scene);
    this.minZ = 0.0;
    this.maxZ = 100000;
    this.lowerRadiusLimit = lowerRadiusLimit;
    this.upperRadiusLimit = upperRadiusLimit;
    this.useBouncingBehavior = true;
    this.useFramingBehavior = true;
    this.framingBehavior.radiusScale = 1.65;
    this.wheelDeltaPercentage = 0.01;

    this.onViewMatrixChangedObservable.add(() => {
      if (this.alpha <= -Math.PI) {
        this.alpha += 2 * Math.PI;
      } else if (this.alpha >= Math.PI) {
        this.alpha -= 2 * Math.PI;
      }
    });
  }
}

export default Camera;
