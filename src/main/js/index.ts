import { BeanIdentity, BeansConfig, ClassConstructor } from './ioc/types'
import { SingletonStrategy } from './ioc/bean/SingletonStrategy'
import { Config } from './ioc/Config'
import { LazySingletonStrategy } from './ioc/bean/LazySingletonStrategy'
import { Injection } from './ioc/Injection'
import { BeansContext } from './ioc/BeansContext'

/**
 * Creates beans context using passed config. It can be one configuration, like:
 *
 *     izi.bakeBeans({ FooClass });
 *
 * Or multiple configurations as an array:
 *
 *     const config1 = { FooClass };
 *     const config2 = { BarClass };
 *
 *     izi.bakeBeans([config1, config2]);
 */
export function createContainer (config: BeansConfig | BeansConfig[], parentContext?: BeansContext): BeansContext {
  return new BeansContext(config, parentContext)
}

/**
 * @deprecated Use createContainer instead
 */
export function bakeBeans (config: BeansConfig | BeansConfig[], parentContext?: BeansContext): BeansContext {
  return createContainer(config, parentContext)
}

/**
 * Creates singleton bean definition using passed class type
 *
 */
export function singleton (clazz: ClassConstructor | Function): Config {
  return new Config(clazz as ClassConstructor, SingletonStrategy)
}

/**
 * @deprecated Use singleton instead
 */
export function instantiate (clazz: ClassConstructor | Function): Config {
  return new Config(clazz as ClassConstructor, SingletonStrategy)
}

/**
 * Creates lazy singleton bean definition using passed class type
 */
export function lazy (clazz: ClassConstructor | Function): Config {
  return new Config(clazz as ClassConstructor, LazySingletonStrategy)
}

/**
 * Injects dependency by its beanId or class type. It can be used as constructor dependency injection or by
 * property dependency injection.
 */
export function inject (beanIdOrType: BeanIdentity): Injection {
  if (!beanIdOrType) {
    throw new Error('Trying to inject invalid empty bean')
  }
  return new Injection(beanIdOrType)
}

/**
 * Contains definitions of decorators
 */
export { Destroy, Init, Inject } from './ioc/decorators'
