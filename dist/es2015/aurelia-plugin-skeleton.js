

export function configure(aurelia, configCallback) {
  if (typeof configCallback === 'function') {
    configCallback();
  } else {}
}