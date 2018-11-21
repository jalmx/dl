(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _suma = _interopRequireDefault(require("./modules/suma"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (d) {
  var toogleMenu = function toogleMenu() {
    var menu = d.querySelector('.nav__menu');
    menu.classList.toggle('active-menu');
  };

  var btMenu = d.getElementById('menu');
  btMenu.addEventListener('click', toogleMenu);
  var btBack = d.getElementById('back');
  btBack.addEventListener('click', function (e) {
    e.preventDefault();
    toogleMenu();
  });
})(document);

(function (d) {
  var banner = d.querySelector('.banner');
  var path = '../assets/img/full/full-';
  var index = 1;
  setInterval(function () {
    banner.style.backgroundImage = "url(".concat(path).concat(index, ".png)");
    index++;
    if (index == 21) index = 1;
  }, 3000);
})(document);

(function () {
  console.log((0, _suma.default)(5, 9));
})();
},{"./modules/suma":2}],2:[function(require,module,exports){
module.exports = function suma(a,b){
    return a+b;
}
},{}]},{},[1])