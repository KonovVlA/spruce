import { Interpreter } from '../../../../Interpreter';
import { AbstractFoldHandler } from './AbstractFoldHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractFoldHandler
 */
export declare class FoldRightHandler extends AbstractFoldHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     *
     * @param {java.lang.Object[]} args     аргументы вызова функции.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {AbstractFoldHandler.AbstractFoldHandleRunner} экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     */
    getFoldHandleRunner(args: any[], iContext: Array<any>): AbstractFoldHandler.AbstractFoldHandleRunner;
}
export declare namespace FoldRightHandler {
    /**
     * Класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractFoldHandler.AbstractFoldHandleRunner
     * @class
     */
    class FoldRightHandleRunner extends AbstractFoldHandler.AbstractFoldHandleRunner {
        __parent: any;
        constructor(__parent: any, args: any[], iContext: Array<any>);
        /**
         * Возвращает начальное значение переменной цикла в {@link #run()}.
         *
         * @return {number} начальное значение переменной цикла в {@link #run()}.
         */
        getInitialValueOfLoopVariable(): number;
        /**
         * Возвращает значение, которым инициализируется стартовое значение для агрегации.
         *
         * @return {*} значение, которым инициализируется стартовое значение для агрегации.
         */
        getInitialValueOfResult(): any;
        /**
         * Возвращает следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         */
        getNextValueOfLoopVariable(i: number): number;
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        shouldContinueLoop(i: number): boolean;
    }
}
