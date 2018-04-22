import { BeanIdentity, DecoratorInjectionConfig } from '../types';
export declare function Inject(beanIdOrType: BeanIdentity, injectionConfig?: DecoratorInjectionConfig): (target: Element, propertyKey: string) => void;
