/**
 * Служебный класс для реализации функционала обновления контекста.
 * @class
 */
export declare class ContextWriter {
    /**
     * Контекст интерпретатора.
     */
    context: any;
    /**
     * Путь, по которому будет происходить обновление данных в строковом виде.
     */
    path: string;
    /**
     * Данные для записи.
     */
    value: any;
    /**
     * Индекс последнего элемента пути.
     */
    lastPathIndex: number;
    /**
     * Путь, разобранный на составляющие.
     */
    pathElements: Array<PathElement>;
    constructor(context: any, path: string, value: any);
    /**
     * Осуществляет запись данных в контекст.
     *
     * @param {*} context контекст интерпретатора.
     * @param {string} path    путь, по которому будет происходить обновление данных в строковом виде.
     * @param {*} value   данные для записи.
     *
     * @throws ContextPathException в случае ошибки записи данных в контекст интерпретатора.
     */
    static write(context: any, path: string, value: any): void;
    /**
     * Создает сообщение о проблеме записи значения в массив из-за недостаточного размера.
     *
     * @param {number} pathIndex индекс элемента пути, соответствующего массиву, в который должна быть запись.
     * @param {number} listIndex индекс массива, вызывающий ошибку.
     *
     * @return {string} сообщение о проблеме записи значения в массив из-за недостаточного размера.
     * @private
     */
    getMessageIndexOutOfBounds(pathIndex: number, listIndex: number): string;
    /**
     * Создает часть сообщения об ошибке, описывающую, куда не удалось записать данные.
     *
     * @param {string} target    цель записи.
     * @param {number} pathIndex индекс элемента пути, соответствующего объекту, в который должна быть запись.
     *
     * @return {string} часть сообщения об ошибке, описывающую, куда не удалось записать данные.
     * @private
     */
    getMessagePartProblem(target: string, pathIndex: number): string;
    /**
     * Создает сообщение о проблеме записи значения.
     *
     * @param {string} target    цель записи.
     * @param {number} pathIndex индекс элемента пути, соответствующего объекту, в который должна быть запись.
     * @param {string} cause     причина ошибки.
     *
     * @return {string} сообщение о проблеме записи значения.
     * @private
     */
    getMessageWriteProblem(target: string, pathIndex: number, cause: string): string;
    /**
     * Возвращает дочерний элемент контекста относительно текущего.
     * <p>
     * Для объекта - значение по ключу.
     * <p>
     * Для массива - значение по индексу - если этот индекс уже используется, {@code null} - если элемент с указанным
     * индексом может быть добавлен в конец массива. Если добавление элемента по указанному индексу невозможно, то будет
     * поднято исключение.
     *
     * @param {*} node      текущий элемент контекста.
     * @param {string} key       ключ в текущем элементе контекста.
     * @param {number} pathIndex индекс элемента пути текущего элемента контекста.
     *
     * @return {*} дочерний элемент контекста относительно текущего.
     *
     * @throws ContextPathException в случае невозможности получения дочернего элемента контекста.
     * @private
     */
    getNextNode(node: any, key: string, pathIndex: number): any;
    /**
     * Преобразует путь в строку, используя элементы пути, не включая указанный.
     *
     * @param {number} endIndex индекс элемента контекста.
     *
     * @return {string} строковое представление пути.
     * @private
     */
    pathToString(endIndex: number): string;
    /**
     * Устанавливает значение в текущем элементе контекста по указанному ключу.
     *
     * @param {*} node   текущий элемент контекста.
     * @param {string} key    ключ в текущем элементе контекста.
     * @param {*} object значение.
     *
     * @throws ContextPathException в случае ошибки установки значения.
     * @private
     */
    updateNode(node: any, key: string, object: any): void;
    write$java_lang_Object$int(node: any, pathIndex: number): void;
    /**
     * Осуществляет шаг рекурсии по обходу контекста по заданному пути.
     *
     * @param {*} node      текущий элемент контекста.
     * @param {number} pathIndex индекс элемента пути, соответствующий ключу в текущем элементе контекста.
     *
     * @throws ContextPathException в случае ошибки установки значения.
     * @private
     */
    write(node?: any, pathIndex?: any): any;
    write$(): void;
}
import { PathElement } from './PathElement';
