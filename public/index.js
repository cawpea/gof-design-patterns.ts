/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar interpreter_1 = __importDefault(__webpack_require__(/*! ./patterns/interpreter */ \"./src/patterns/interpreter/index.ts\"));\n/* You can execute by \"node public/index.js\" command. */\n// iterator();\n// adapterByClass();\n// adapterByInstance();\n// template();\n// factory();\n// singleton();\n// prototype();\n// builder();\n// bridge();\n// strategy();\n// composite();\n// decorator();\n// visitor();\n// chainOfResponsibility();\n// facade();\n// mediator();\n// observer();\n// memento();\n// state();\n// flyweight();\n// proxy();\n// command();\ninterpreter_1.default();\n/* You can execute by \"npm run start:dev\" command. */\n// abstractFactory();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/CommandListNode.ts":
/*!*****************************************************!*\
  !*** ./src/patterns/interpreter/CommandListNode.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Node_1 = __importDefault(__webpack_require__(/*! ./Node */ \"./src/patterns/interpreter/Node.ts\"));\nvar ParseException_1 = __importDefault(__webpack_require__(/*! ./ParseException */ \"./src/patterns/interpreter/ParseException.ts\"));\nvar CommandNode_1 = __importDefault(__webpack_require__(/*! ./CommandNode */ \"./src/patterns/interpreter/CommandNode.ts\"));\nvar CommandListNode = /** @class */ (function (_super) {\n    __extends(CommandListNode, _super);\n    function CommandListNode() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.list = [];\n        return _this;\n    }\n    CommandListNode.prototype.parse = function (context) {\n        while (true) {\n            if (context.getCurrentToken() === null) {\n                throw new ParseException_1.default();\n            }\n            else if (context.getCurrentToken() === 'end') {\n                context.skipToken('end');\n                break;\n            }\n            else {\n                var commandNode = new CommandNode_1.default();\n                commandNode.parse(context);\n                this.list.push(commandNode);\n            }\n        }\n    };\n    CommandListNode.prototype.toString = function () {\n        return this.list.toString();\n    };\n    return CommandListNode;\n}(Node_1.default));\nexports.default = CommandListNode;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/CommandListNode.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/CommandNode.ts":
/*!*************************************************!*\
  !*** ./src/patterns/interpreter/CommandNode.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Node_1 = __importDefault(__webpack_require__(/*! ./Node */ \"./src/patterns/interpreter/Node.ts\"));\nvar RepeatCommandNode_1 = __importDefault(__webpack_require__(/*! ./RepeatCommandNode */ \"./src/patterns/interpreter/RepeatCommandNode.ts\"));\nvar PrimitiveCommandNode_1 = __importDefault(__webpack_require__(/*! ./PrimitiveCommandNode */ \"./src/patterns/interpreter/PrimitiveCommandNode.ts\"));\nvar CommandNode = /** @class */ (function (_super) {\n    __extends(CommandNode, _super);\n    function CommandNode() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.node = null;\n        return _this;\n    }\n    CommandNode.prototype.parse = function (context) {\n        if (context.getCurrentToken() === 'repeat') {\n            this.node = new RepeatCommandNode_1.default();\n            this.node.parse(context);\n        }\n        else {\n            this.node = new PrimitiveCommandNode_1.default();\n            this.node.parse(context);\n        }\n    };\n    CommandNode.prototype.toString = function () {\n        if (!this.node) {\n            return '';\n        }\n        return this.node.toString();\n    };\n    return CommandNode;\n}(Node_1.default));\nexports.default = CommandNode;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/CommandNode.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/Context.ts":
/*!*********************************************!*\
  !*** ./src/patterns/interpreter/Context.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ParseException_1 = __importDefault(__webpack_require__(/*! ./ParseException */ \"./src/patterns/interpreter/ParseException.ts\"));\nvar Context = /** @class */ (function () {\n    function Context(text) {\n        this.tokens = [];\n        this.tokenIndex = -1;\n        this.currentToken = null;\n        this.tokens = text.split(' ');\n        this.nextToken();\n    }\n    Context.prototype.nextToken = function () {\n        if (this.tokens.length >= this.tokenIndex + 1) {\n            this.currentToken = this.tokens[this.tokenIndex + 1];\n            this.tokenIndex += 1;\n        }\n        else {\n            this.currentToken = null;\n        }\n        return this.currentToken;\n    };\n    Context.prototype.getCurrentToken = function () {\n        return this.currentToken;\n    };\n    Context.prototype.skipToken = function (token) {\n        if (token !== this.currentToken) {\n            throw new ParseException_1.default();\n        }\n        this.nextToken();\n    };\n    Context.prototype.currentNumber = function () {\n        if (!this.currentToken) {\n            return -1;\n        }\n        var number = 0;\n        try {\n            number = parseInt(this.currentToken);\n        }\n        catch (e) {\n            throw new ParseException_1.default(e);\n        }\n        return number;\n    };\n    return Context;\n}());\nexports.default = Context;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/Context.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/Node.ts":
/*!******************************************!*\
  !*** ./src/patterns/interpreter/Node.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Node = /** @class */ (function () {\n    function Node() {\n    }\n    return Node;\n}());\nexports.default = Node;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/Node.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/ParseException.ts":
/*!****************************************************!*\
  !*** ./src/patterns/interpreter/ParseException.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ParseException = /** @class */ (function (_super) {\n    __extends(ParseException, _super);\n    function ParseException() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    return ParseException;\n}(Error));\nexports.default = ParseException;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/ParseException.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/PrimitiveCommandNode.ts":
/*!**********************************************************!*\
  !*** ./src/patterns/interpreter/PrimitiveCommandNode.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Node_1 = __importDefault(__webpack_require__(/*! ./Node */ \"./src/patterns/interpreter/Node.ts\"));\nvar ParseException_1 = __importDefault(__webpack_require__(/*! ./ParseException */ \"./src/patterns/interpreter/ParseException.ts\"));\nvar PrimitiveCommandNode = /** @class */ (function (_super) {\n    __extends(PrimitiveCommandNode, _super);\n    function PrimitiveCommandNode() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.name = null;\n        return _this;\n    }\n    PrimitiveCommandNode.prototype.parse = function (context) {\n        this.name = context.getCurrentToken();\n        if (!this.name) {\n            return;\n        }\n        context.skipToken(this.name);\n        if (['go', 'right', 'left'].indexOf(this.name) === -1) {\n            throw new ParseException_1.default();\n        }\n    };\n    PrimitiveCommandNode.prototype.toString = function () {\n        if (!this.name) {\n            return '';\n        }\n        return this.name;\n    };\n    return PrimitiveCommandNode;\n}(Node_1.default));\nexports.default = PrimitiveCommandNode;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/PrimitiveCommandNode.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/ProgramNode.ts":
/*!*************************************************!*\
  !*** ./src/patterns/interpreter/ProgramNode.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Node_1 = __importDefault(__webpack_require__(/*! ./Node */ \"./src/patterns/interpreter/Node.ts\"));\nvar CommandListNode_1 = __importDefault(__webpack_require__(/*! ./CommandListNode */ \"./src/patterns/interpreter/CommandListNode.ts\"));\nvar ProgramNode = /** @class */ (function (_super) {\n    __extends(ProgramNode, _super);\n    function ProgramNode() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.commandListNode = null;\n        return _this;\n    }\n    ProgramNode.prototype.parse = function (context) {\n        context.skipToken('program');\n        this.commandListNode = new CommandListNode_1.default();\n        this.commandListNode.parse(context);\n    };\n    ProgramNode.prototype.toString = function () {\n        if (!this.commandListNode) {\n            return '';\n        }\n        return \"[program \" + this.commandListNode.toString() + \"]\";\n    };\n    return ProgramNode;\n}(Node_1.default));\nexports.default = ProgramNode;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/ProgramNode.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/RepeatCommandNode.ts":
/*!*******************************************************!*\
  !*** ./src/patterns/interpreter/RepeatCommandNode.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Node_1 = __importDefault(__webpack_require__(/*! ./Node */ \"./src/patterns/interpreter/Node.ts\"));\nvar CommandListNode_1 = __importDefault(__webpack_require__(/*! ./CommandListNode */ \"./src/patterns/interpreter/CommandListNode.ts\"));\nvar RepeatCommandNode = /** @class */ (function (_super) {\n    __extends(RepeatCommandNode, _super);\n    function RepeatCommandNode() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.num = null;\n        _this.commandListNode = null;\n        return _this;\n    }\n    RepeatCommandNode.prototype.parse = function (context) {\n        context.skipToken('repeat');\n        this.num = context.currentNumber();\n        context.nextToken();\n        this.commandListNode = new CommandListNode_1.default();\n        this.commandListNode.parse(context);\n    };\n    RepeatCommandNode.prototype.toString = function () {\n        if (!this.commandListNode) {\n            return '';\n        }\n        return \"[repeat \" + this.num + \" \" + this.commandListNode.toString() + \"]\";\n    };\n    return RepeatCommandNode;\n}(Node_1.default));\nexports.default = RepeatCommandNode;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/RepeatCommandNode.ts?");

/***/ }),

/***/ "./src/patterns/interpreter/index.ts":
/*!*******************************************!*\
  !*** ./src/patterns/interpreter/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ProgramNode_1 = __importDefault(__webpack_require__(/*! ./ProgramNode */ \"./src/patterns/interpreter/ProgramNode.ts\"));\nvar Context_1 = __importDefault(__webpack_require__(/*! ./Context */ \"./src/patterns/interpreter/Context.ts\"));\nvar miniProgram = 'program repeat 4 repeat 3 go right go left end right end end';\nfunction default_1() {\n    console.log(\"text = \" + miniProgram);\n    var node = new ProgramNode_1.default();\n    node.parse(new Context_1.default(miniProgram));\n    console.log(\"node = \" + node);\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/patterns/interpreter/index.ts?");

/***/ })

/******/ });