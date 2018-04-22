import { BeanIdentity, BeansConfig, ClassConstructor } from './ioc/types';
import { Config } from './ioc/Config';
import { Injection } from './ioc/Injection';
import { BeansContext } from './ioc/BeansContext';
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
export declare function createContainer(config: BeansConfig | BeansConfig[], parentContext?: BeansContext): BeansContext;
/**
 * @deprecated Use createContainer instead
 */
export declare function bakeBeans(config: BeansConfig | BeansConfig[], parentContext?: BeansContext): BeansContext;
/**
 * Creates singleton bean definition using passed class type
 *
 */
export declare function singleton(clazz: ClassConstructor | Function): Config;
/**
 * @deprecated Use singleton instead
 */
export declare function instantiate(clazz: ClassConstructor | Function): Config;
/**
 * Creates lazy singleton bean definition using passed class type
 */
export declare function lazy(clazz: ClassConstructor | Function): Config;
/**
 * Injects dependency by its beanId or class type. It can be used as constructor dependency injection or by
 * property dependency injection.
 */
export declare function inject(beanIdOrType: BeanIdentity): Injection;
/**
 * Contains definitions of decorators
 */
export { Destroy, Init, Inject } from './ioc/decorators';
