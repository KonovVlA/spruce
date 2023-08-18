"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var big_js_1 = require("big.js");
var lodash_1 = require("lodash");
var parser_1 = require("./parser");
var Interpreter_1 = require("./interpreter/Interpreter");
var scriptContext = {
    v1: 1,
    v2: "ajkldfka",
    v3: true,
    v4: new Date(),
    v5: null,
    v6: undefined,
    v7: [],
    v8: {},
    v9: [12, "asasd", true, new Date(), null, undefined, [16, 19], {
            a: 1,
            b: [90, false]
        }],
    v10: {
        a: [16, { "op": new Date() }],
        b: {
            "r": "testr",
            c: 1
        }
    },
    v11: {
        a: [function () {
            }]
    },
    v12: [12, "asasd", true, new Date(), null, undefined, [16, 19], {
            a: 1,
            b: [90, false, function () {
                }]
        }],
    v13: [1, 2, 3],
    v14: [5, 6, 7]
};
var macroDefinitions = {
    "mySum": {
        "t": "j",
        "v": "a",
        "a": [{
                "t": "j",
                "v": "q",
                "a": [{
                        "t": "f",
                        "v": "$args"
                    }, {
                        "t": "h",
                        "v": "0"
                    }]
            }, {
                "t": "j",
                "v": "q",
                "a": [{
                        "t": "f",
                        "v": "$args"
                    }, {
                        "t": "h",
                        "v": "1"
                    }]
            }]
    }
};
var parsingResult = null;
var computeResult = null;
var handlers = {
    onParse: function () {
        try {
            parsingResult = parser_1.parser.parse(document.getElementById("expressionSource").value);
            document.getElementById("parseAndAnalyzeDestination").innerHTML =
                "<pre>" + syntaxHighlight(parsingResult) + "</pre>";
        }
        catch (e) {
            parsingResult = e.message;
            document.getElementById("parseAndAnalyzeDestination").innerHTML = "<pre>" + parsingResult + "</pre>";
            throw e;
        }
    },
    onAnalyze: function () {
        // В данный момент не реализовано ввиду отсутствия анализатора
    },
    onCompute: function () {
        try {
            var interpreter = new Interpreter_1.Interpreter(scriptContext, macroDefinitions);
            computeResult = interpreter.interpret((0, lodash_1.cloneDeep)(parsingResult));
            if (typeof computeResult === "string" || computeResult instanceof big_js_1.Big ||
                typeof computeResult === "boolean" || computeResult instanceof Date) {
                document.getElementById("computeDestination").innerHTML = "<pre>" + computeResult.toString() + "</pre>";
            }
            else if (computeResult === null) {
                document.getElementById("computeDestination").innerHTML = "<pre>null</pre>";
            }
            else if ((0, lodash_1.isPlainObject)(computeResult)) {
                document.getElementById("computeDestination").innerHTML =
                    "<pre>" + syntaxHighlight(computeResult) + "</pre>";
            }
            else if (computeResult instanceof Array) {
                document.getElementById("computeDestination").innerHTML =
                    "<pre>" + syntaxHighlight(computeResult) + "</pre>";
            }
            console.log(computeResult);
        }
        catch (e) {
            computeResult = e.message;
            document.getElementById("computeDestination").innerHTML = "<pre>" + computeResult + "</pre>";
            throw e;
        }
    }
};
function syntaxHighlight(json) {
    if (typeof json !== "string") {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = "number";
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = "key";
            }
            else {
                cls = "string";
            }
        }
        else if (/true|false/.test(match)) {
            cls = "boolean";
        }
        else if (/null/.test(match)) {
            cls = "null";
        }
        return "<span class=\"" + cls + "\">" + match + "</span>";
    });
}
console.log('start App!!!');
var parseButton = document.getElementById('parseButton');
parseButton.onclick = function () {
    console.log('parseButton');
    handlers.onParse();
};
var analyze = document.getElementById('analyze');
analyze.onclick = function () {
    console.log('analyze');
    handlers.onAnalyze();
};
var compute = document.getElementById('compute');
compute.onclick = function () {
    console.log('compute');
    handlers.onCompute();
};
