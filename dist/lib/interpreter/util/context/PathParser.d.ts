/**
 * Класс для осуществления разбора и проверки текстового пути в контексте.
 * </p>
 * Под текстовым путем в контексте понимается строка, соответствующая следующей грамматике:
 * {@code
 * <PATH> ::= <ID> | <ID><ACCESSOR_LIST>
 * <ACCESSOR_LIST> ::= <ACCESSOR> | <ACCESSOR><ACCESSOR_LIST>
 * <ACCESSOR> ::= .<ID> | [<KEY_ACCESSOR>]
 * <KEY_ACCESSOR> ::= '<Q_STRING>' | "<DQ_STRING>" | NUMBER
 *
 * <ID> ::= [a-zA-Z][a-zA-Z0-9_]* - произвольная последовательность латинских букв, арабских цифр и '_',
 * начинающаяся с латинской буквы
 * <NUMBER> ::= [0-9]+ - произвольная непустая последовательность арабских цифр
 * <Q_STRING> ::= ((\')*(\[^'])*[^'\]*)* - возможно пустая последовательность состоящая из трех видов элементов:
 * экранированный символ ''',
 * произвольный экранированный символ, кроме ''',
 * произвольный неэкранированный символ кроме '\' и '''
 * <DQ_STRING> ::= ((\")*(\[^"])*[^"\]*)* - возможно пустая последовательность состоящая из трех видов элементов:
 * экранированный символ '"',
 * произвольный экранированный символ, кроме '"',
 * произвольный неэкранированный символ кроме '\' и '"'
 * }
 * @class
 */
export declare class PathParser {
    /**
     * Терминальный символ грамматики '.'.
     */
    static C_DOT: string;
    /**
     * Терминальный символ грамматики '"'.
     */
    static C_DOUBLE_QUOTE: string;
    /**
     * Терминальный символ грамматики '['.
     */
    static C_LEFT_SQUARE_BRACKET: string;
    /**
     * Терминальный символ грамматики '''.
     */
    static C_QUOTE: string;
    /**
     * Терминальный символ грамматики ']'.
     */
    static C_RIGHT_SQUARE_BRACKET: string;
    /**
     * Символ экранирования в строковых константах грамматики.
     */
    static C_SLASH: string;
    /**
     * Путь в контексте, разбитый на составляющие.
     */
    path: Array<PathElement>;
    /**
     * Путь в контексте как строка.
     */
    source: string;
    constructor(source: string);
    /**
     * Разбирает строковый путь на отдельные элементы {@link PathElement}.
     *
     * @param {string} source путь в контексте как строка.
     *
     * @return {PathElement[]} путь в контексте, разбитый на составляющие.
     *
     * @throws ContextPathException в случае ошибки в строковом пути.
     */
    static parse(source: string): Array<PathElement>;
    /**
     * Добавляет точку в конец предложения.
     *
     * @param {string} sentence предложение.
     *
     * @return {string} текст предложения с точкой в конце.
     * @private
     */
    static endSentence(sentence: string): string;
    /**
     * Формирует сообщение о непредвиденном завершении строки.
     *
     * @param {string} expected ожидаемые символы.
     *
     * @return {string} общение о непредвиденном завершении строки.
     * @private
     */
    static getMessageUnexpectedEOL(expected: string): string;
    /**
     * Заключает символ в одинарные кавычки.
     *
     * @param {string} symbol символ.
     *
     * @return {string} символ, заключенный в одинарные кавычки.
     * @private
     */
    static quote(symbol: string): string;
    /**
     * Формирует сообщение о непредвиденном символе в строке.
     *
     * @param {number} position позиция.
     * @param {string} expected ожидаемые символы.
     *
     * @return {string} сообщение о непредвиденном символе в строке.
     * @private
     */
    getMessageUnexpectedSymbol(position: number, expected: string): string;
    /**
     * Проверяет, что символ является арабской цифрой.
     *
     * @param {string} symbol символ.
     *
     * @return {boolean} {@code true} если символ является арабской цифрой, {@code false} иначе.
     * @private
     */
    isDigit(symbol: string): boolean;
    /**
     * Проверяет, что символ является латинской буквой.
     *
     * @param {string} symbol символ.
     *
     * @return {boolean} {@code true} если символ является латинской буквой, {@code false} иначе.
     * @private
     */
    isLatin(symbol: string): boolean;
    /**
     * Проверяет, что символ является символом ID (не первым).
     *
     * @param {string} symbol символ.
     *
     * @return {boolean} {@code true} если символ является символом ID (не первым), {@code false} иначе.
     * @private
     */
    isNonFirstSymbolOfId(symbol: string): boolean;
    /**
     * Производит разбор токена ACCESSOR.
     *
     * @param {number} start позиция в строке, с которой необходимо вести разбор.
     *
     * @return {number} позиция в строке, с которой необходимо продолжить разбор следующему обработчику.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parseAccessor(start: number): number;
    /**
     * Производит разбор токена ACCESSOR_LIST.
     *
     * @param {number} start позиция в строке, с которой необходимо вести разбор.
     *
     * @return {number} позиция в строке, с которой необходимо продолжить разбор следующему обработчику.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parseAccessorList(start: number): number;
    /**
     * Производит разбор токена DQ_STRING.
     *
     * @param {number} start позиция в строке, с которой необходимо вести разбор.
     *
     * @return {number} позиция в строке, с которой необходимо продолжить разбор следующему обработчику.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parseDQString(start: number): number;
    /**
     * Производит разбор токена ID.
     *
     * @param {number} start позиция в строке, с которой необходимо вести разбор.
     *
     * @return {number} позиция в строке, с которой необходимо продолжить разбор следующему обработчику.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parseId(start: number): number;
    /**
     * Производит разбор токена KEY_ACCESSOR.
     *
     * @param {number} start позиция в строке, с которой необходимо вести разбор.
     *
     * @return {number} позиция в строке, с которой необходимо продолжить разбор следующему обработчику.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parseKeyAccessor(start: number): number;
    /**
     * Производит разбор токена NUMBER.
     *
     * @param {number} start позиция в строке, с которой необходимо вести разбор.
     *
     * @return {number} позиция в строке, с которой необходимо продолжить разбор следующему обработчику.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parseNumber(start: number): number;
    /**
     * Производит разбор токена PATH.
     *
     * @return {PathElement[]} результат разбора.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parsePath(): Array<PathElement>;
    /**
     * Производит разбор токена Q_STRING.
     *
     * @param {number} start позиция в строке, с которой необходимо вести разбор.
     *
     * @return {number} позиция в строке, с которой необходимо продолжить разбор следующему обработчику.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    parseQString(start: number): number;
}
import { PathElement } from './PathElement';
