'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMaxZIndex = exports.getMaxZIndex = function getMaxZIndex() {
  return [].slice.call(document.getElementsByTagName("*")).reduce(function (a, b) {
    return Math.max(a, +window.getComputedStyle(b).zIndex || 0);
  }, 0);
};

var checkType = exports.checkType = function checkType(data) {
  return {}.toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

var shuffleArray = exports.shuffleArray = function shuffleArray(array) {
  var m = array.length,
      t = void 0,
      i = void 0;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

var createFrame = exports.createFrame = function createFrame(name) {
  if (!document.querySelector('#' + name)) {
    var dom = document.createElement('div');
    dom.id = name;
    dom.style.zIndex = getMaxZIndex();
    dom.style.position = 'relative';
    document.body.appendChild(dom);
  }
  return document.querySelector('#' + name);
};

var removeDom = exports.removeDom = function removeDom(name) {
  var dom = document.querySelector('#' + name);
  if (dom) dom.parentNode.removeChild(dom);
};

var fixedBody = exports.fixedBody = function fixedBody(status) {
  if (status) {
    var scrollTop = document.scrollingElement ? document.scrollingElement.scrollTop : document.body.scrollTop;
    document.body.classList.add('fixedbody');
    document.body.style.top = -scrollTop + 'px';
    sessionStorage.setItem('fixedBodyTop', scrollTop);
  } else {
    var _scrollTop = Number(sessionStorage.getItem('fixedBodyTop')) || 0;
    document.body.classList.remove('fixedbody');
    document.body.style.top = '';
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = _scrollTop;
    } else {
      document.body.scrollTop = _scrollTop;
    }
    sessionStorage.removeItem('fixedBodyTop');
  }
};