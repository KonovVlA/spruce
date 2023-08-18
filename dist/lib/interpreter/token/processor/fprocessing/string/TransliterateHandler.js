"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransliterateHandler = void 0;
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractOneArgStringHandler_1 = require("./AbstractOneArgStringHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractOneArgStringHandler
 */
var TransliterateHandler = /** @class */ (function (_super) {
    __extends(TransliterateHandler, _super);
    function TransliterateHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    TransliterateHandler.TRANSLITERATION_MAP_$LI$ = function () { if (TransliterateHandler.TRANSLITERATION_MAP == null) {
        TransliterateHandler.TRANSLITERATION_MAP = TransliterateHandler.initTransliterationMap();
    } return TransliterateHandler.TRANSLITERATION_MAP; };
    /**
     * Генерирует мапинг символов кириллицы на строки латиницы, используемый при транслитерации в соответствии с ИКАО.
     *
     * @return {*} мапинг символов кириллицы на строки латиницы, используемый при транслитерации в соответствии с ИКАО.
     * @private
     */
    /*private*/ TransliterateHandler.initTransliterationMap = function () {
        var result = ({});
        /* put */ (result["\u0410"] = "A");
        /* put */ (result["\u0411"] = "B");
        /* put */ (result["\u0412"] = "V");
        /* put */ (result["\u0413"] = "G");
        /* put */ (result["\u0414"] = "D");
        /* put */ (result["\u0415"] = "E");
        /* put */ (result["\u0401"] = "E");
        /* put */ (result["\u0416"] = "Zh");
        /* put */ (result["\u0417"] = "Z");
        /* put */ (result["\u0418"] = "I");
        /* put */ (result["\u0419"] = "I");
        /* put */ (result["\u041a"] = "K");
        /* put */ (result["\u041b"] = "L");
        /* put */ (result["\u041c"] = "M");
        /* put */ (result["\u041d"] = "N");
        /* put */ (result["\u041e"] = "O");
        /* put */ (result["\u041f"] = "P");
        /* put */ (result["\u0420"] = "R");
        /* put */ (result["\u0421"] = "S");
        /* put */ (result["\u0422"] = "T");
        /* put */ (result["\u0423"] = "U");
        /* put */ (result["\u0424"] = "F");
        /* put */ (result["\u0425"] = "Kh");
        /* put */ (result["\u0426"] = "Ts");
        /* put */ (result["\u0427"] = "Ch");
        /* put */ (result["\u0428"] = "Sh");
        /* put */ (result["\u0429"] = "Shch");
        /* put */ (result["\u042a"] = "Ie");
        /* put */ (result["\u042b"] = "Y");
        /* put */ (result["\u042c"] = "");
        /* put */ (result["\u042d"] = "E");
        /* put */ (result["\u042e"] = "Iu");
        /* put */ (result["\u042f"] = "Ia");
        /* put */ (result["\u0430"] = "a");
        /* put */ (result["\u0431"] = "b");
        /* put */ (result["\u0432"] = "v");
        /* put */ (result["\u0433"] = "g");
        /* put */ (result["\u0434"] = "d");
        /* put */ (result["\u0435"] = "e");
        /* put */ (result["\u0451"] = "e");
        /* put */ (result["\u0436"] = "zh");
        /* put */ (result["\u0437"] = "z");
        /* put */ (result["\u0438"] = "i");
        /* put */ (result["\u0439"] = "i");
        /* put */ (result["\u043a"] = "k");
        /* put */ (result["\u043b"] = "l");
        /* put */ (result["\u043c"] = "m");
        /* put */ (result["\u043d"] = "n");
        /* put */ (result["\u043e"] = "o");
        /* put */ (result["\u043f"] = "p");
        /* put */ (result["\u0440"] = "r");
        /* put */ (result["\u0441"] = "s");
        /* put */ (result["\u0442"] = "t");
        /* put */ (result["\u0443"] = "u");
        /* put */ (result["\u0444"] = "f");
        /* put */ (result["\u0445"] = "kh");
        /* put */ (result["\u0446"] = "ts");
        /* put */ (result["\u0447"] = "ch");
        /* put */ (result["\u0448"] = "sh");
        /* put */ (result["\u0449"] = "shch");
        /* put */ (result["\u044a"] = "ie");
        /* put */ (result["\u044b"] = "y");
        /* put */ (result["\u044c"] = "");
        /* put */ (result["\u044d"] = "e");
        /* put */ (result["\u044e"] = "iu");
        /* put */ (result["\u044f"] = "ia");
        return result;
    };
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
    TransliterateHandler.prototype.handle = function (token, iContext) {
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.STRING, StringUtils_1.StringUtils.replaceUsingMap(this.getStringArgumentValue(token, iContext), TransliterateHandler.TRANSLITERATION_MAP_$LI$()));
    };
    return TransliterateHandler;
}(AbstractOneArgStringHandler_1.AbstractOneArgStringHandler));
exports.TransliterateHandler = TransliterateHandler;
TransliterateHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.string.TransliterateHandler";
