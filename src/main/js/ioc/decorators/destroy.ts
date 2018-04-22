import _get = require('lodash/get')

export function Destroy (target: Element, propertyKey: string) {
  Object.defineProperty(target, 'iziDestroy', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _get(target, propertyKey)
  })
}
