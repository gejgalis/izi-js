import _get = require('lodash/get')

export function Init (target: Element, propertyKey: string) {
  Object.defineProperty(target, 'iziInit', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: _get(target, propertyKey)
  })
}
