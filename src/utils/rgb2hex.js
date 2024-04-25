const hex = (x) => `0${parseInt(x).toString(16)}`.slice(-2);

export const rgb2hex = (rgb) => {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
  const tmpRGB = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  return `#${hex(tmpRGB[1])}${hex(tmpRGB[2])}${hex(tmpRGB[3])}`;
};
