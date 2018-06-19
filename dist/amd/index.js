define(['exports', './aurelia-plugin-skeleton'], function (exports, _aureliaPluginSkeleton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaPluginSkeleton).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPluginSkeleton[key];
      }
    });
  });
});