
/**
 * 根据16进制的颜色，提高其亮度
 * @param {*} hex  如：#ff00ff
 * @param {*} percent 如：0.2
 */
function increaseBrightness(hex: string, percent = 0.2): string {
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

// https://github.com/boycgit/ts-debounce-throttle.git
type SAnyFunction = (...args: any[]) => void;
function throttle(fn: SAnyFunction, delay: number): SAnyFunction {
  let context: any;
  let args: any[];
  let lastTime: number;
  let nowTime: number;
  let timer: any;
  const execute = () => {
    fn.apply(context, args);
    lastTime = nowTime;
  };
  const reFn = function (..._args: any[]) {
    context = this;
    args = _args;
    nowTime = Date.now();

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (lastTime) {
      const diff = delay - (nowTime - lastTime);
      if (diff < 0) {
        execute();
      } else {
        timer = setTimeout(() => {
          execute();
        }, diff);
      }
    } else {
      execute();
    }
  };
  return reFn;
}

function strRemoveUnit(str: string, units: string[] = ['px', '%', 'rem', 'Px', 'PX']): number {
  const reg = new RegExp(`${units.join('|')}`, 'ig');
  return parseFloat(str.replace(reg, ''));
}

export {
  increaseBrightness,
  throttle,
  strRemoveUnit
};