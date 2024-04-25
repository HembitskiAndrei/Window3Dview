import { Engine } from "@babylonjs/core/Engines/engine";
import "@babylonjs/loaders/glTF";

class BabylonEngine {
  createScene({
    engineOptions,
    adaptToDeviceRatio = true,
    onMount,
    canvasRef,
    windowConfig,
    onSuccessfulLoadingAssets
  }) {
    this.engine = new Engine(
      canvasRef,
      true,
      engineOptions,
      adaptToDeviceRatio
    );

    if (typeof onMount === "function") {
      onMount({ engine: this.engine, canvas: canvasRef, windowConfig, onSuccessfulLoadingAssets });
    }

    window.addEventListener("resize", this.handleWindowResize);
  }

  onDeleteScene() {    
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize() {
    if (this.engine) {
      this.engine.resize();
    }
  };
}

export default BabylonEngine;
