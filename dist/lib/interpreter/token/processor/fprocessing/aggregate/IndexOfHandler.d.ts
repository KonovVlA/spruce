import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractIndexOfHandler } from './AbstractIndexOfHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractIndexOfHandler
 */
export declare class IndexOfHandler extends AbstractIndexOfHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает название функции.
     *
     * @return {string} название функции.
     */
    getFunctionName(): string;
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    handle(token: Token, iContext: Array<any>): InterpreterToken;
}
export declare namespace IndexOfHandler {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * <p>
     * В связи со спецификой работы функции indexOf в качестве первого аргумента обрабатывает только массив.
     * @extends AbstractIndexOfHandler.AbstractIndexOfHandleRunner
     * @class
     */
    class IndexOfHandleRunner extends AbstractIndexOfHandler.AbstractIndexOfHandleRunner {
        __parent: any;
        constructor(__parent: any, args: any[], iContext: Array<any>);
        /**
         * Возвращает начальное значение переменной цикла в {@link #run()}.
         *
         * @return {number} начальное значение переменной цикла в {@link #run()}.
         */
        getInitialValueOfLoopVariable(): number;
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
         * @param {number} i      текущее значение переменной цикла в {@link #run()}.
         * @param {number} result текущее значение результата агрегации.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        shouldContinueLoop(i: number, result: number): boolean;
    }
}
