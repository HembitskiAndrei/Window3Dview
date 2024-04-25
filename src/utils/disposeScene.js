export const disposeScene = (currentScenePreview) => {
    if (currentScenePreview) {
      currentScenePreview.engine.dispose();
    }
}