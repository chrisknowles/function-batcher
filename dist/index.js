'use strict';

var add = function add(fns) {
  return function () {
    for (var _len = arguments.length, f = Array(_len), _key = 0; _key < _len; _key++) {
      f[_key] = arguments[_key];
    }

    f.map(function (fn, index) {
      return dedupe(fns, fn, index);
    });
    fns.push.apply(fns, f);
  };
};

var dedupe = function dedupe(fns, fn, index) {
  return fns.indexOf(fn) !== -1 ? delete f[index] : void 0;
};

var remove = function remove(fns) {
  return function () {
    for (var _len2 = arguments.length, f = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      f[_key2] = arguments[_key2];
    }

    return f.map(function (fn) {
      return delete fns[fns.indexOf(fn)];
    });
  };
};

var run = function run(fns) {
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    fns.map(function (fn) {
      if (fn && {}.toString.call(fn) === '[object Function]') {
        fn.apply(undefined, args);
      }
    });
  };
};

function main() {
  var fns = [];
  add(fns).apply(undefined, arguments);
  return {
    add: add(fns),
    remove: remove(fns),
    run: run(fns)
  };
}

module.exports = main;
