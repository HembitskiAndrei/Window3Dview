module.exports = {
  env: {
    "browser": true,
    "node": true,
    "jasmine": true,
    "jquery": true
  },
  extends: ["airbnb", "prettier"],
  parserOptions: { requireConfigFile: false },
  rules: {
    "radix": "off",
    "import/prefer-default-export": "off",
    "no-new": "off",
    "no-param-reassign": [
      "error",
      { ignorePropertyModificationsFor: ["scene"] },
    ],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-restricted-globals": ["off", "self"],
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "import/no-named-default": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": [
      "error",
      {
        allow: [
          "_currentMeasure",
          "_scene",
          "_onLoad",
          "_createInternalTexture",
          "_createRenderer",
          "_createRenderLoopCallback",
          "_renderLoopCallback",
          "_loadGifTexture",
          "_texture",
          "_engine",
          "_patchEffectWrapper",
          "_patchEffectRenderer",
          "_renderFrame",
          "_parseGifData",
          "_createGifResources",
          "_loadFile",
          "_frames",
          "_releaseTexture",
          "_swapAndDie",
          "_currentFrame",
          "_previousDate",
          "_nextFrameIndex",
          "_drawPatch",
          "_bindTexture",
        ],
      },
    ],
  },
};