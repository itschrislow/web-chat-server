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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/controller.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var socket = io();\nvar containerDiv = document.getElementById('container');\nvar usernameBtn = document.getElementById('usernameBtn');\nvar usernameInput = document.getElementById('username');\nvar messageInput = document.getElementById('message');\nvar messageBtn = document.getElementById('sendMessageBtn');\nvar collection = document.getElementById('message-list');\nvar id;\nvar Chat = (function () {\n    function Chat() {\n        this.currentID = socket.id;\n        this.checkForMessages();\n        this.checkForUsers();\n    }\n    Chat.prototype.sendMessage = function (message) {\n        if (message) {\n            socket.emit('chat message', message);\n            this.createNewMessage({ id: id, message: message });\n        }\n    };\n    Chat.prototype.checkForMessages = function () {\n        var _this = this;\n        socket.on('chat message', function (msg) {\n            _this.createNewMessage(msg);\n        });\n    };\n    Chat.prototype.createNewMessage = function (msg) {\n        var div = document.createElement('div');\n        div.classList.add('card');\n        div.classList.add('hoverable');\n        var div2 = document.createElement('div');\n        div2.classList.add('card-content');\n        var spanTitle = document.createElement('span');\n        spanTitle.classList.add('card-title');\n        spanTitle.innerHTML = msg.id + \" - \" + msg.message;\n        if (id && msg.id === id) {\n            div.classList.add('blue-grey');\n            div.classList.add('darken-1');\n            div2.classList.add('white-text');\n        }\n        div2.appendChild(spanTitle);\n        div.appendChild(div2);\n        collection.appendChild(div);\n    };\n    Chat.prototype.checkForUsers = function () {\n        var _this = this;\n        socket.on('user joined', function (username) {\n            _this.createNewMessage({ id: username, message: \"just joined\" });\n        });\n    };\n    return Chat;\n}());\nsocket.on('connect', function () {\n    socket.on('username set', function (myId) {\n        id = myId;\n        containerDiv.style.visibility = 'visible';\n    });\n    var chat = new Chat();\n    usernameBtn.onclick = function () {\n        var username = usernameInput.value;\n        if (username) {\n            socket.emit('set username', username);\n        }\n    };\n    messageBtn.onclick = function () {\n        if (id) {\n            var message = messageInput.value;\n            chat.sendMessage(message);\n        }\n    };\n});\n\n\n//# sourceURL=webpack:///./src/controller.ts?");

/***/ })

/******/ });