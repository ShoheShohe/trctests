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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/src/index.js: Expected corresponding JSX closing tag for <input> (27:4)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mlabel\u001b[39m\u001b[33m>\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mmailLabel}\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33minput\u001b[39m type\u001b[33m=\u001b[39m\u001b[32m\"text\"\u001b[39m placeholder\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mmailPH} name\u001b[33m=\u001b[39m\u001b[32m\"id\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m\t\t\t\t\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mlabel\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\t\t\t\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mlabel\u001b[39m\u001b[33m>\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mnameLabel}\u001b[0m\n\u001b[0m \u001b[90m 29 | \u001b[39m\t        \u001b[33m<\u001b[39m\u001b[33minput\u001b[39m type\u001b[33m=\u001b[39m\u001b[32m\"text\"\u001b[39m name\u001b[33m=\u001b[39m\u001b[32m\"familyname\"\u001b[39m placeholder\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mfamilyPH}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33minput\u001b[39m type\u001b[33m=\u001b[39m\u001b[32m\"text\"\u001b[39m name\u001b[33m=\u001b[39m\u001b[32m\"firstname\"\u001b[39m placeholder\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mfirstnamePH}\u001b[33m>\u001b[39m\u001b[0m\n    at _class.raise (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:3938:15)\n    at _class.jsxParseElementAt (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:3599:18)\n    at _class.jsxParseElementAt (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:3572:34)\n    at _class.jsxParseElementAt (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:3572:34)\n    at _class.jsxParseElement (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:3625:19)\n    at _class.parseExprAtom (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:3632:21)\n    at _class.parseExprSubscripts (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5923:21)\n    at _class.parseMaybeUnary (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5902:21)\n    at _class.parseExprOps (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5811:21)\n    at _class.parseMaybeConditional (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5783:21)\n    at _class.parseMaybeAssign (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5730:21)\n    at _class.parseParenAndDistinguishExpression (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:6473:28)\n    at _class.parseExprAtom (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:6283:21)\n    at _class.parseExprAtom (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:3634:52)\n    at _class.parseExprSubscripts (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5923:21)\n    at _class.parseMaybeUnary (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5902:21)\n    at _class.parseExprOps (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5811:21)\n    at _class.parseMaybeConditional (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5783:21)\n    at _class.parseMaybeAssign (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5730:21)\n    at _class.parseExpression (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:5683:21)\n    at _class.parseReturnStatement (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:7496:28)\n    at _class.parseStatementContent (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:7178:21)\n    at _class.parseStatement (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:7144:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:7695:23)\n    at _class.parseBlockBody (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:7682:10)\n    at _class.parseBlock (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:7671:10)\n    at _class.parseFunctionBody (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:6924:24)\n    at _class.parseFunctionBodyAndFinish (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:6904:10)\n    at _class.parseMethod (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:6856:10)\n    at _class.pushClassMethod (/Users/ShoheiOyagi/IntellijProjects/workspace/wp4react2/node_modules/@babel/parser/lib/index.js:8075:30)");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map