import BabylonEngine from "../../engine";
import MainScene from "../../components/MainScene";

class ScenePreview extends BabylonEngine {
    constructor(canvasRef, windowConfig) {
        super();
        const onMount = this.onMount.bind(this);
        const engineOptions = {preserveDrawingBuffer: true};
        this.createScene({ canvasRef, windowConfig, onMount, engineOptions });
    }

    onMount({ windowConfig, engine, canvas }) {
       engine.displayLoadingUI();       
       this.scene = new MainScene(windowConfig, engine, canvas);       
    }
}

export default ScenePreview;