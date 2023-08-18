"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromJsToTyped = exports.fromTypedToJS = void 0;
var big_js_1 = require("big.js");
/**
 * Преобразование типизированного объекта, полученного с сервера, в JS объект.
 *
 * @param {ITypedObject} typedEntity Типизированный объект с сервера.
 */
function fromTypedToJS(typedEntity) {
    var _a;
    var name = typedEntity.name, value = typedEntity.value, type = typedEntity.type, children = typedEntity.children;
    var result;
    switch (type) {
        case 'number':
            result = new big_js_1.Big(value);
            break;
        case 'null':
            result = null;
            break;
        case 'string':
        case 'boolean':
            result = value;
            break;
        case 'datetime':
            result = new Date(value);
            break;
        case 'object':
            var temp_1 = {};
            children.forEach(function (child) {
                temp_1 = __assign(__assign({}, temp_1), fromTypedToJS(child));
            });
            result = temp_1;
            break;
        case 'array':
            result = children.map(fromTypedToJS);
            break;
        default:
            console.error("\u041F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0434\u043B\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0438\u043F ".concat(type, "!"));
            return null;
    }
    return name ? (_a = {}, _a[name] = result, _a) : result;
}
exports.fromTypedToJS = fromTypedToJS;
/**
 * Преобразование JS объекта в типизированный серверный формат.
 *
 * @param value Значение свойства
 * @param [name] Имя свойства.
 */
function fromJsToTyped(value, name) {
    var result;
    switch (typeof value) {
        case 'string':
        // case 'number': должен передаваться как Big.js
        case 'boolean':
            result = {
                name: name,
                type: typeof value,
                value: value,
            };
            break;
        case 'object':
            if (value === null) { // actually null
                result = {
                    name: name,
                    type: 'null',
                    value: value,
                };
            }
            else if (value instanceof Date) { // actually Date
                result = {
                    name: name,
                    type: 'datetime',
                    value: value.toISOString(),
                };
            }
            else if (value instanceof big_js_1.Big) { // actually Big.js number
                result = {
                    name: name,
                    type: 'number',
                    value: value.valueOf(),
                };
            }
            else if (value instanceof Array) { // actually Array
                result = {
                    name: name,
                    type: 'array',
                    children: value.map(function (arrayItem) {
                        return fromJsToTyped(arrayItem);
                    })
                };
            }
            else { // actually Object
                result = {
                    name: name,
                    type: 'object',
                    children: Object.keys(value).map(function (subKey) { return fromJsToTyped(value[subKey], subKey); })
                };
            }
            break;
        default:
            console.error("\u041F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0434\u043B\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u0438\u043F:".concat(typeof value, " \u0432 \u043A\u043B\u044E\u0447\u0435 spruce-jar"));
            return null;
    }
    if (typeof name === 'undefined') { // поле name лишнее, если оно неопределёно
        delete result.name;
    }
    return result;
}
exports.fromJsToTyped = fromJsToTyped;
