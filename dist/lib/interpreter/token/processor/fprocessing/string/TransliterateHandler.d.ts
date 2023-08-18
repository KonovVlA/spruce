import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractOneArgStringHandler } from './AbstractOneArgStringHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractOneArgStringHandler
 */
export declare class TransliterateHandler extends AbstractOneArgStringHandler {
    /**
     * Мапинг символов кириллицы на строки латиницы, используемый при транслитерации в соответствии с ИКАО.
     */
    static TRANSLITERATION_MAP: any;
    static TRANSLITERATION_MAP_$LI$(): any;
    constructor(interpreter: Interpreter);
    /**
     * Генерирует мапинг символов кириллицы на строки латиницы, используемый при транслитерации в соответствии с ИКАО.
     *
     * @return {*} мапинг символов кириллицы на строки латиницы, используемый при транслитерации в соответствии с ИКАО.
     * @private
     */
    static initTransliterationMap(): any;
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
