'use strict';

exports.__esModule = true;

var _aureliaPluginSkeleton = require('./aurelia-plugin-skeleton');

Object.keys(_aureliaPluginSkeleton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaPluginSkeleton[key];
    }
  });
});