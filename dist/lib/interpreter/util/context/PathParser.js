"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathParser = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var ContextPathException_1 = require("../../exception/ContextPathException");
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
var PathParser = /** @class */ (function () {
    function PathParser(source) {
        if (this.path === undefined) {
            this.path = null;
        }
        if (this.source === undefined) {
            this.source = null;
        }
        this.source = source;
        this.path = ([]);
    }
    /**
     * Разбирает строковый путь на отдельные элементы {@link PathElement}.
     *
     * @param {string} source путь в контексте как строка.
     *
     * @return {PathElement[]} путь в контексте, разбитый на составляющие.
     *
     * @throws ContextPathException в случае ошибки в строковом пути.
     */
    PathParser.parse = function (source) {
        return new PathParser(source).parsePath();
    };
    /**
     * Добавляет точку в конец предложения.
     *
     * @param {string} sentence предложение.
     *
     * @return {string} текст предложения с точкой в конце.
     * @private
     */
    /*private*/ PathParser.endSentence = function (sentence) {
        return sentence + ".";
    };
    /**
     * Формирует сообщение о непредвиденном завершении строки.
     *
     * @param {string} expected ожидаемые символы.
     *
     * @return {string} общение о непредвиденном завершении строки.
     * @private
     */
    /*private*/ PathParser.getMessageUnexpectedEOL = function (expected) {
        return PathParser.endSentence("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438: \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f " + expected);
    };
    /**
     * Заключает символ в одинарные кавычки.
     *
     * @param {string} symbol символ.
     *
     * @return {string} символ, заключенный в одинарные кавычки.
     * @private
     */
    /*private*/ PathParser.quote = function (symbol) {
        return "\'" + symbol + "\'";
    };
    /**
     * Формирует сообщение о непредвиденном символе в строке.
     *
     * @param {number} position позиция.
     * @param {string} expected ожидаемые символы.
     *
     * @return {string} сообщение о непредвиденном символе в строке.
     * @private
     */
    /*private*/ PathParser.prototype.getMessageUnexpectedSymbol = function (position, expected) {
        return PathParser.endSentence("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b \u0432 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 " + position + ": \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f " + expected + ", \u043f\u043e\u043b\u0443\u0447\u0435\u043d " + PathParser.quote(this.source.charAt(position)));
    };
    /**
     * Проверяет, что символ является арабской цифрой.
     *
     * @param {string} symbol символ.
     *
     * @return {boolean} {@code true} если символ является арабской цифрой, {@code false} иначе.
     * @private
     */
    /*private*/ PathParser.prototype.isDigit = function (symbol) {
        return ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(symbol) >= '0'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(symbol) <= '9'.charCodeAt(0));
    };
    /**
     * Проверяет, что символ является латинской буквой.
     *
     * @param {string} symbol символ.
     *
     * @return {boolean} {@code true} если символ является латинской буквой, {@code false} иначе.
     * @private
     */
    /*private*/ PathParser.prototype.isLatin = function (symbol) {
        return ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(symbol) >= 'a'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(symbol) <= 'z'.charCodeAt(0)) || ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(symbol) >= 'A'.charCodeAt(0) && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(symbol) <= 'Z'.charCodeAt(0));
    };
    /**
     * Проверяет, что символ является символом ID (не первым).
     *
     * @param {string} symbol символ.
     *
     * @return {boolean} {@code true} если символ является символом ID (не первым), {@code false} иначе.
     * @private
     */
    /*private*/ PathParser.prototype.isNonFirstSymbolOfId = function (symbol) {
        return this.isLatin(symbol) || this.isDigit(symbol) || (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(symbol) == '_'.charCodeAt(0);
    };
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
    /*private*/ PathParser.prototype.parseAccessor = function (start) {
        var index = start;
        switch ((this.source.charAt(index)).charCodeAt(0)) {
            case 46 /* C_DOT */:
                index++;
                return this.parseId(index);
            case 91 /* C_LEFT_SQUARE_BRACKET */:
                index++;
                index = this.parseKeyAccessor(index);
                if (index < this.source.length && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(this.source.charAt(index)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(PathParser.C_RIGHT_SQUARE_BRACKET)) {
                    index++;
                }
                else if (index === this.source.length) {
                    throw new ContextPathException_1.ContextPathException(PathParser.getMessageUnexpectedEOL(PathParser.quote(PathParser.C_RIGHT_SQUARE_BRACKET)));
                }
                else {
                    throw new ContextPathException_1.ContextPathException(this.getMessageUnexpectedSymbol(index, PathParser.quote(PathParser.C_RIGHT_SQUARE_BRACKET)));
                }
                return index;
            default:
                throw new ContextPathException_1.ContextPathException(this.getMessageUnexpectedSymbol(index, PathParser.quote(PathParser.C_DOT) + " \u0438\u043b\u0438 " + PathParser.quote(PathParser.C_LEFT_SQUARE_BRACKET)));
        }
    };
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
    /*private*/ PathParser.prototype.parseAccessorList = function (start) {
        var index = start;
        index = this.parseAccessor(index);
        if (index < this.source.length) {
            index = this.parseAccessorList(index);
        }
        return index;
    };
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
    /*private*/ PathParser.prototype.parseDQString = function (start) {
        var index = start;
        if (index < this.source.length) {
            var noEscape = true;
            while ((index < this.source.length && !((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(this.source.charAt(index)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(PathParser.C_DOUBLE_QUOTE) && noEscape))) {
                {
                    noEscape = !((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(this.source.charAt(index)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(PathParser.C_SLASH) && noEscape);
                    index++;
                }
            }
            ;
            /* add */ (this.path.push(new PathElement_1.PathElement(PathElementTypeEnum_1.PathElementTypeEnum.DQ_KEY, this.source.substring(start, index))) > 0);
            return index;
        }
        else {
            throw new ContextPathException_1.ContextPathException(PathParser.getMessageUnexpectedEOL("\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b"));
        }
    };
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
    /*private*/ PathParser.prototype.parseId = function (start) {
        var index = start;
        if (index < this.source.length) {
            if (this.isLatin(this.source.charAt(index))) {
                index++;
                while ((index < this.source.length && this.isNonFirstSymbolOfId(this.source.charAt(index)))) {
                    {
                        index++;
                    }
                }
                ;
                /* add */ (this.path.push(new PathElement_1.PathElement(PathElementTypeEnum_1.PathElementTypeEnum.ID, this.source.substring(start, index))) > 0);
                return index;
            }
            else {
                throw new ContextPathException_1.ContextPathException(this.getMessageUnexpectedSymbol(index, "\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0431\u0443\u043a\u0432\u0430"));
            }
        }
        else {
            throw new ContextPathException_1.ContextPathException(PathParser.getMessageUnexpectedEOL("\u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0430\u044f \u0431\u0443\u043a\u0432\u0430"));
        }
    };
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
    /*private*/ PathParser.prototype.parseKeyAccessor = function (start) {
        var index = start;
        if (index < this.source.length) {
            switch ((this.source.charAt(index)).charCodeAt(0)) {
                case 39 /* C_QUOTE */:
                    index++;
                    index = this.parseQString(index);
                    if (index < this.source.length) {
                        index++;
                    }
                    else {
                        throw new ContextPathException_1.ContextPathException(PathParser.getMessageUnexpectedEOL(PathParser.quote(PathParser.C_QUOTE)));
                    }
                    return index;
                case 34 /* C_DOUBLE_QUOTE */:
                    index++;
                    index = this.parseDQString(index);
                    if (index < this.source.length) {
                        index++;
                    }
                    else {
                        throw new ContextPathException_1.ContextPathException(PathParser.getMessageUnexpectedEOL(PathParser.quote(PathParser.C_DOUBLE_QUOTE)));
                    }
                    return index;
                default:
                    return this.parseNumber(index);
            }
        }
        else {
            throw new ContextPathException_1.ContextPathException(PathParser.getMessageUnexpectedEOL(PathParser.quote(PathParser.C_QUOTE) + ", \u0438\u043b\u0438" + PathParser.quote(PathParser.C_DOUBLE_QUOTE) + ", \u0438\u043b\u0438 \u0430\u0440\u0430\u0431\u0441\u043a\u0430\u044f \u0446\u0438\u0444\u0440\u0430"));
        }
    };
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
    /*private*/ PathParser.prototype.parseNumber = function (start) {
        var index = start;
        if (this.isDigit(this.source.charAt(index))) {
            index++;
            while ((index < this.source.length && this.isDigit(this.source.charAt(index)))) {
                {
                    index++;
                }
            }
            ;
            try {
                var numberString = ('' + ( /* parseInt */parseInt(this.source.substring(start, index))));
                /* add */ (this.path.push(new PathElement_1.PathElement(PathElementTypeEnum_1.PathElementTypeEnum.INDEX, numberString)) > 0);
                return index;
            }
            catch (nfe) {
                throw new ContextPathException_1.ContextPathException(PathParser.endSentence("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0447\u0438\u0441\u043b\u0430 \u0441 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 " + start + " \u0434\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u0438 " + (index - 1)), nfe);
            }
        }
        else {
            throw new ContextPathException_1.ContextPathException(this.getMessageUnexpectedSymbol(index, "\u0430\u0440\u0430\u0431\u0441\u043a\u0430\u044f \u0446\u0438\u0444\u0440\u0430"));
        }
    };
    /**
     * Производит разбор токена PATH.
     *
     * @return {PathElement[]} результат разбора.
     *
     * @throws ContextPathException в случае ошибки разбора.
     * @private
     */
    /*private*/ PathParser.prototype.parsePath = function () {
        var index = this.parseId(0);
        if (index < this.source.length) {
            this.parseAccessorList(index);
        }
        return this.path;
    };
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
    /*private*/ PathParser.prototype.parseQString = function (start) {
        var index = start;
        if (index < this.source.length) {
            var noEscape = true;
            while ((index < this.source.length && !((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(this.source.charAt(index)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(PathParser.C_QUOTE) && noEscape))) {
                {
                    noEscape = !((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(this.source.charAt(index)) == (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(PathParser.C_SLASH) && noEscape);
                    index++;
                }
            }
            ;
            /* add */ (this.path.push(new PathElement_1.PathElement(PathElementTypeEnum_1.PathElementTypeEnum.Q_KEY, this.source.substring(start, index))) > 0);
            return index;
        }
        else {
            throw new ContextPathException_1.ContextPathException(PathParser.getMessageUnexpectedEOL("\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043c\u0432\u043e\u043b"));
        }
    };
    /**
     * Терминальный символ грамматики '.'.
     */
    PathParser.C_DOT = '.';
    /**
     * Терминальный символ грамматики '"'.
     */
    PathParser.C_DOUBLE_QUOTE = '\"';
    /**
     * Терминальный символ грамматики '['.
     */
    PathParser.C_LEFT_SQUARE_BRACKET = '[';
    /**
     * Терминальный символ грамматики '''.
     */
    PathParser.C_QUOTE = '\'';
    /**
     * Терминальный символ грамматики ']'.
     */
    PathParser.C_RIGHT_SQUARE_BRACKET = ']';
    /**
     * Символ экранирования в строковых константах грамматики.
     */
    PathParser.C_SLASH = '\\';
    return PathParser;
}());
exports.PathParser = PathParser;
PathParser["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.context.PathParser";
var PathElementTypeEnum_1 = require("./PathElementTypeEnum");
var PathElement_1 = require("./PathElement");
