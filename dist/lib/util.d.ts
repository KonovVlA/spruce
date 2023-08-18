/**
 * Типизированное представление JS объекта в JSON.
 *
 * @prop {string} type Тип свойства.
 * @prop {string} [value] Значение свойства для простых типов.
 * @prop {string} [name] Имя свойства ( имя ключа в объекте ).
 * @prop {ITypedObject[]} [children] Дочерние свойства (члены массива или ключи объекта с их значениями).
 */
export interface ITypedObject {
    type: 'object' | 'array' | 'string' | 'boolean' | 'null' | 'datetime' | 'number';
    value?: number | string | boolean | null;
    name?: string;
    children?: ITypedObject[];
}
/**
 * Преобразование типизированного объекта, полученного с сервера, в JS объект.
 *
 * @param {ITypedObject} typedEntity Типизированный объект с сервера.
 */
export declare function fromTypedToJS(typedEntity: ITypedObject): Object | Array<any>;
/**
 * Преобразование JS объекта в типизированный серверный формат.
 *
 * @param value Значение свойства
 * @param [name] Имя свойства.
 */
export declare function fromJsToTyped(value: any, name?: string): any;
