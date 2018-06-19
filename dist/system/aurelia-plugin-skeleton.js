'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function configure(aurelia, configCallback) {
    if (typeof configCallback === 'function') {
      configCallback();
    } else {}
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});