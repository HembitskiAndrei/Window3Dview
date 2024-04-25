const getCameraConfig = (topCamera) => {
  const beta = topCamera ? Math.PI * 0.35 : Math.PI * 0.5;

  return {
    Top: {
      alpha: Math.PI * 0.5,
      beta: 0,
    },
    Left: {
      alpha: 0,
      beta: Math.PI * 0.5,
    },
    "Left Angle": {
      alpha: Math.PI * 0.25,
      beta,
    },
    Front: {
      alpha: Math.PI * 0.5,
      beta: Math.PI * 0.5,
    },
    "Right Angle": {
      alpha: Math.PI * 0.75,
      beta,
    },
    Right: {
      alpha: Math.PI,
      beta: Math.PI * 0.5,
    },
    Back: {
      alpha: -Math.PI * 0.5,
      beta: Math.PI * 0.5,
    },
  };
};

export { getCameraConfig };
