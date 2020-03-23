/* eslint-disable prefer-rest-params */
/* eslint-disable no-var */
/* istanbul ignore next */

const isServer = false;
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(document.documentMode);

/**
 * 去掉首尾空格
 * @param {*} string 字符串
 */
const trim = (string) => {
  console.log('trim =>', string);
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/**
 * 转换成驼峰字符串
 * 如 hello_world hello-world hello:world 都会转换成如下
 * helloWorld
 *
 * @param {*} name 字符串
 */
const camelCase = (name) => {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/**
 * 判断元素是否包含样式类
 * @param {*} el 元素
 * @param {*} cls 类名，没有 . 的名称
 */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/**
 * 元素添加样式类
 * @param {*} el  元素
 * @param {*} cls 类名，没有 . 的名称
 */
function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  const classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/**
 * 移除元素的样式类
 * @param {*} el 元素
 * @param {*} cls 类名，没有 . 的名称
 */
function removeClass(el, cls) {
  if (!el || !cls) return;
  const classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/**
 * 获取元素的内联样式
 * @param {*} element 元素
 * @param {*} styleName 样式名，如：font-size
 */
const getStyle = ieVersion < 9 ? function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
    case 'opacity':
      try {
        return element.filters.item('alpha').opacity / 100;
      } catch (e) {
        return 1.0;
      }
    default:
      return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/**
 * 设置元素内联样式
 * @param {*} element 元素
 * @param {*} styleName 样式名，如：font-size
 * @param {*} value 值，如：20px
 */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (const prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

/**
 * 判断元素是否有属性
 * @param {*} el 元素
 * @param {*} attributeName 属性名
 */
const hasAttribute = (el, attributeName) => {
  if (!el || !attributeName) {
    return false;
  }
  return el.hasAttribute(attributeName);
};

/**
 * 设置元素属性
 * @param {*} el 元素
 * @param {*} attributeName 属性名
 * @param {*} value 属性值，如果需要设置无值属性，则该值为空字符串
 */
const setAttribute = (el, attributeName, value) => {
  if (!el || !attributeName) {
    return;
  }
  el.setAttribute(attributeName, value || '');
};

/**
 * 获取元素属性值
 * @param {*} el 元素
 * @param {*} attributeName 属性名
 */
const getAttribute = (el, attributeName) => {
  if (!el || !attributeName) {
    return null;
  }
  return el.getAttribute(attributeName);
};

/**
 * 获取元素的子元素，子元素有指定的类名
 * @param {*} el 元素
 * @param {*} clsName 子元素的类名
 */
const getChildrenByClass = (el, clsName) => {
  if (!el || !clsName) {
    return [];
  }
  const children = el.children;
  const list = [];
  for (const child of children) {
    if (hasClass(child, clsName)) {
      list.push(child);
    }
  }
  return list;
};

/**
 * 获取元素的子元素(递归子元素)，匹配子元素是否有指定的属性，忽略属性值
 * @param {*} el 元素
 * @param {*} attributeName 属性名
 * @param {*} recursive 是否递归的查找子元素，默认不进行递归
 * @param {*} stopRecurseWhenFind 如果父元素找到匹配，是否继续其子元素查找，默认为不进行查找
 */
const getChildrenByAttribute = (el, attributeName, recursive = false, stopRecurseWhenFind = true) => {
  const list = [];
  const recursiveFind = (list, el, attributeName) => {
    for (const child of el.children) {
      if (child.children.length > 0 && recursive) {
        if (hasAttribute(child, attributeName)) {
          list.push(child);
          // 元素匹配，该元素是否需要进行子元素递归查询
          if (!stopRecurseWhenFind) {
            recursiveFind(list, child, attributeName);
          }
        } else {
          recursiveFind(list, child, attributeName);
        }
      } else {
        if (hasAttribute(child, attributeName)) {
          list.push(child);
        }
      }
    }
  };
  recursiveFind(list, el, attributeName);
  return list;
};

/**
 * 检测是否支持某个css样式
 * @param {*} attr 如：position
 * @param {*} value 如：sticky
 */
function cssSupport(attr, value) {
  const element = document.createElement('div');
  if (attr in element.style) {
    element.style[attr] = value;
    return element.style[attr] === value;
  } else {
    return false;
  }
}

/**
 * 获取当前元素的上一级滚动元素
 * @param {*} currentElement 当前元素
 */
function getScrollEventTarget(currentElement) {
  let currentNode = currentElement;
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    const overflowY = getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
}

export {
  trim,
  camelCase,
  cssSupport,
  once,
  hasClass,
  addClass,
  removeClass,
  getStyle,
  setStyle,
  hasAttribute,
  setAttribute,
  getAttribute,
  getChildrenByClass,
  getChildrenByAttribute,
  getScrollEventTarget
};
