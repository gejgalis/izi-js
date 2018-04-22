import { inject as injectBean } from '../../index'
import { BeanIdentity, DecoratorInjectionConfig } from '../types'

export function Inject (beanIdOrType: BeanIdentity, injectionConfig: DecoratorInjectionConfig = {}) {
  return function (target: Element, propertyKey: string) {
    let injection = injectBean(beanIdOrType)

    if (injectionConfig.property) {
      injection = injection.property(injectionConfig.property)
    }

    if (injectionConfig.through) {
      injection = injection.through(injectionConfig.through)
    }

    if (injectionConfig.by) {
      injection = injection.by(injectionConfig.by)
    }

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: injection
    })
  }
}
