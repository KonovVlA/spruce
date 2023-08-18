"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextWriter = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var ContextPathException_1 = require("../../exception/ContextPathException");
var TValues_1 = require("../../token/TValues");
var CollectionUtils_1 = require("../CollectionUtils");
var CommonUtils_1 = require("../CommonUtils");
var StringUtils_1 = require("../StringUtils");
/**
 * Служебный класс для реализации функционала обновления контекста.
 * @class
 */
var ContextWriter = /** @class */ (function () {
    function ContextWriter(context, path, value) {
        if (this.context === undefined) {
            this.context = null;
        }
        if (this.path === undefined) {
            this.path = null;
        }
        if (this.value === undefined) {
            this.value = null;
        }
        if (this.lastPathIndex === undefined) {
            this.lastPathIndex = 0;
        }
        if (this.pathElements === undefined) {
            this.pathElements = null;
        }
        this.context = context;
        this.path = path;
        this.value = value;
        this.pathElements = null;
        this.lastPathIndex = -1;
    }
    /**
     * Осуществляет запись данных в контекст.
     *
     * @param {*} context контекст интерпретатора.
     * @param {string} path    путь, по которому будет происходить обновление данных в строковом виде.
     * @param {*} value   данные для записи.
     *
     * @throws ContextPathException в случае ошибки записи данных в контекст интерпретатора.
     */
    ContextWriter.write = function (context, path, value) {
        new ContextWriter(context, path, value).write$();
    };
    /**
     * Создает сообщение о проблеме записи значения в массив из-за недостаточного размера.
     *
     * @param {number} pathIndex индекс элемента пути, соответствующего массиву, в который должна быть запись.
     * @param {number} listIndex индекс массива, вызывающий ошибку.
     *
     * @return {string} сообщение о проблеме записи значения в массив из-за недостаточного размера.
     * @private
     */
    /*private*/ ContextWriter.prototype.getMessageIndexOutOfBounds = function (pathIndex, listIndex) {
        return this.getMessagePartProblem("\u0432 \u043c\u0430\u0441\u0441\u0438\u0432", pathIndex) + " \u043f\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0443 " + listIndex + ", \u0442.\u043a. \u043c\u0430\u0441\u0441\u0438\u0432 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432.";
    };
    /**
     * Создает часть сообщения об ошибке, описывающую, куда не удалось записать данные.
     *
     * @param {string} target    цель записи.
     * @param {number} pathIndex индекс элемента пути, соответствующего объекту, в который должна быть запись.
     *
     * @return {string} часть сообщения об ошибке, описывающую, куда не удалось записать данные.
     * @private
     */
    /*private*/ ContextWriter.prototype.getMessagePartProblem = function (target, pathIndex) {
        return "\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u043f\u0438\u0441\u044c " + target + " " + this.pathToString(pathIndex);
    };
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
    /*private*/ ContextWriter.prototype.getMessageWriteProblem = function (target, pathIndex, cause) {
        return this.getMessagePartProblem(target, pathIndex) + ", \u0442.\u043a. " + cause;
    };
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
    /*private*/ ContextWriter.prototype.getNextNode = function (node, key, pathIndex) {
        var nodeType = CommonUtils_1.CommonUtils.getType(node);
        var nextNode;
        if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.OBJECT, nodeType)) {
            nextNode = (CollectionUtils_1.CollectionUtils.get(node, key));
        }
        else {
            var list = node;
            var listIndex = parseInt(key);
            if (listIndex < /* size */ list.length) {
                nextNode = /* get */ list[listIndex];
            }
            else if (listIndex === /* size */ list.length) {
                nextNode = null;
            }
            else {
                throw new ContextPathException_1.ContextPathException(this.getMessageIndexOutOfBounds(pathIndex, listIndex));
            }
        }
        return nextNode;
    };
    /**
     * Преобразует путь в строку, используя элементы пути, не включая указанный.
     *
     * @param {number} endIndex индекс элемента контекста.
     *
     * @return {string} строковое представление пути.
     * @private
     */
    /*private*/ ContextWriter.prototype.pathToString = function (endIndex) {
        var result = "";
        for (var i = 0; i < endIndex; i++) {
            {
                result += /* get */ this.pathElements[i];
            }
            ;
        }
        return result.substring(1);
    };
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
    /*private*/ ContextWriter.prototype.updateNode = function (node, key, object) {
        var nodeType = CommonUtils_1.CommonUtils.getType(node);
        if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.OBJECT, nodeType)) {
            /* put */ (node[key] = object);
        }
        else {
            var list = node;
            var listIndex = parseInt(key);
            if (listIndex < /* size */ list.length) {
                /* set */ (list[listIndex] = object);
            }
            else if (listIndex === /* size */ list.length) {
                /* add */ (list.push(object) > 0);
            }
            else {
                throw new ContextPathException_1.ContextPathException(this.getMessageIndexOutOfBounds(this.lastPathIndex, listIndex));
            }
        }
    };
    ContextWriter.prototype.write$java_lang_Object$int = function (node, pathIndex) {
        if (pathIndex === this.lastPathIndex) {
            this.updateNode(node, /* get */ this.pathElements[pathIndex].getValue(), this.value);
        }
        else {
            var currentKey = this.pathElements[pathIndex].getValue();
            var nextNode = this.getNextNode(node, currentKey, pathIndex);
            var nextNodeType = CommonUtils_1.CommonUtils.getType(nextNode);
            var nextPathElementType = this.pathElements[pathIndex + 1].getType();
            if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.OBJECT, nextNodeType) && nextPathElementType !== PathElementTypeEnum_1.PathElementTypeEnum.INDEX || StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.ARRAY, nextNodeType) && nextPathElementType === PathElementTypeEnum_1.PathElementTypeEnum.INDEX) {
                this.write$java_lang_Object$int(nextNode, pathIndex + 1);
            }
            else if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.OBJECT, nextNodeType)) {
                throw new ContextPathException_1.ContextPathException(this.getMessageWriteProblem("\u0432 \u043e\u0431\u044a\u0435\u043a\u0442", pathIndex + 1, "\u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043d\u0435\u043c\u0443 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043a \u043c\u0430\u0441\u0441\u0438\u0432\u0443."));
            }
            else if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.ARRAY, nextNodeType)) {
                throw new ContextPathException_1.ContextPathException(this.getMessageWriteProblem("\u0432 \u043c\u0430\u0441\u0441\u0438\u0432", pathIndex + 1, "\u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043d\u0435\u043c\u0443 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0443."));
            }
            else if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.NULL, nextNodeType)) {
                var createdNode = nextPathElementType === PathElementTypeEnum_1.PathElementTypeEnum.INDEX ? ([]) : ({});
                this.updateNode(node, currentKey, createdNode);
                this.write$java_lang_Object$int(createdNode, pathIndex + 1);
            }
            else {
                throw new ContextPathException_1.ContextPathException(this.getMessageWriteProblem("\u043f\u043e \u043f\u0443\u0442\u0438", pathIndex + 1, "\u0438\u043c\u0435\u044e\u0449\u0435\u0435\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c."));
            }
        }
    };
    /**
     * Осуществляет шаг рекурсии по обходу контекста по заданному пути.
     *
     * @param {*} node      текущий элемент контекста.
     * @param {number} pathIndex индекс элемента пути, соответствующий ключу в текущем элементе контекста.
     *
     * @throws ContextPathException в случае ошибки установки значения.
     * @private
     */
    ContextWriter.prototype.write = function (node, pathIndex) {
        if (((node != null) || node === null) && ((typeof pathIndex === 'number') || pathIndex === null)) {
            return this.write$java_lang_Object$int(node, pathIndex);
        }
        else if (node === undefined && pathIndex === undefined) {
            return this.write$();
        }
        else
            throw new Error('invalid overload');
    };
    /*private*/ ContextWriter.prototype.write$ = function () {
        this.pathElements = PathParser_1.PathParser.parse(this.path);
        this.lastPathIndex = /* size */ this.pathElements.length - 1;
        this.write$java_lang_Object$int(this.context, 0);
    };
    return ContextWriter;
}());
exports.ContextWriter = ContextWriter;
ContextWriter["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.context.ContextWriter";
var PathParser_1 = require("./PathParser");
var PathElementTypeEnum_1 = require("./PathElementTypeEnum");
