/**
 * Элемент пути в контексте.
 * @class
 */
export declare class PathElement {
    /**
     * Тип элемента пути.
     */
    type: PathElementTypeEnum;
    /**
     * Значение элемента пути.
     */
    value: string;
    constructor(type: PathElementTypeEnum, value: string);
    /**
     * Возвращает тип элемента пути.
     *
     * @return {PathElementTypeEnum} тип элемента пути.
     */
    getType(): PathElementTypeEnum;
    /**
     * Возвращает значение элемента пути.
     *
     * @return {string} значение элемента пути.
     */
    getValue(): string;
    /**
     *
     * @return {string}
     */
    toString(): string;
}
import { PathElementTypeEnum } from './PathElementTypeEnum';
