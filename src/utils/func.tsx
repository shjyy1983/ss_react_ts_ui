
/**
 * 根据16进制的颜色，提高其亮度
 * @param {*} hex  如：#ff00ff
 * @param {*} percent 如：0.2
 */
function increaseBrightness(hex: string, percent = 0.2) {
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, '');
  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, '$1$1');
  }
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return '#' +
     ((0 | (1 << 8) + r + (256 - r) * percent).toString(16)).substr(1) +
     ((0 | (1 << 8) + g + (256 - g) * percent).toString(16)).substr(1) +
     ((0 | (1 << 8) + b + (256 - b) * percent).toString(16)).substr(1);
}


export {
  increaseBrightness
};