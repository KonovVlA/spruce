import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractTokenHandler } from '../../AbstractTokenHandler';
/**
 * Абстрактный класс обработчика функции работы с датой-временем с двумя аргументами.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractTwoArgsDatetimeHandler extends AbstractTokenHandler {
    constructor(interpreter: Interpreter);
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    validate(token: Token): void;
}
