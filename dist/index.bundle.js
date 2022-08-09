/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "analyzeArray": () => (/* binding */ analyzeArray),
/* harmony export */   "caesarCipher": () => (/* binding */ caesarCipher),
/* harmony export */   "calculator": () => (/* binding */ calculator),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "reverseString": () => (/* binding */ reverseString)
/* harmony export */ });
function add(a, b) {
  return a + b;
}
function capitalize(string) {
  string = string[0].toUpperCase() + string.slice(1);

  return string;
}
function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};
function caesarCipher(string) {
  const regex = /[A-Za-z]/;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      let newCharCode;
      if (string[i].charCodeAt() > 96) {
        newCharCode = ((string[i].charCodeAt() + 1 - 97) % 26) + 97;
      } else {
        newCharCode = ((string[i].charCodeAt() + 1 - 65) % 26) + 65;
      }

      result += String.fromCharCode(newCharCode);
    } else {
      result += string[i];
    }
  }
  return result;
}

function analyzeArray(array) {
  let obj = {};
  obj.average = array.reduce((a, b) => a + b, 0) / array.length;
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.length = array.length;
  return obj;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamVzdC10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2plc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamVzdC10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamVzdC10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamVzdC10ZXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZChhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VTdHJpbmcoc3RyaW5nKSB7XG4gIGxldCByZXZlcnNlZCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSBzdHJpbmcubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICByZXZlcnNlZCArPSBzdHJpbmdbaV07XG4gIH1cbiAgcmV0dXJuIHJldmVyc2VkO1xufVxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0b3IgPSB7XG4gIGFkZDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSArIGI7XG4gIH0sXG4gIHN1YnRyYWN0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSxcbiAgZGl2aWRlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhIC8gYjtcbiAgfSxcbiAgbXVsdGlwbHk6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgKiBiO1xuICB9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiBjYWVzYXJDaXBoZXIoc3RyaW5nKSB7XG4gIGNvbnN0IHJlZ2V4ID0gL1tBLVphLXpdLztcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlZ2V4LnRlc3Qoc3RyaW5nW2ldKSkge1xuICAgICAgbGV0IG5ld0NoYXJDb2RlO1xuICAgICAgaWYgKHN0cmluZ1tpXS5jaGFyQ29kZUF0KCkgPiA5Nikge1xuICAgICAgICBuZXdDaGFyQ29kZSA9ICgoc3RyaW5nW2ldLmNoYXJDb2RlQXQoKSArIDEgLSA5NykgJSAyNikgKyA5NztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0NoYXJDb2RlID0gKChzdHJpbmdbaV0uY2hhckNvZGVBdCgpICsgMSAtIDY1KSAlIDI2KSArIDY1O1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShuZXdDaGFyQ29kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBzdHJpbmdbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXplQXJyYXkoYXJyYXkpIHtcbiAgbGV0IG9iaiA9IHt9O1xuICBvYmouYXZlcmFnZSA9IGFycmF5LnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gYXJyYXkubGVuZ3RoO1xuICBvYmoubWluID0gTWF0aC5taW4oLi4uYXJyYXkpO1xuICBvYmoubWF4ID0gTWF0aC5tYXgoLi4uYXJyYXkpO1xuICBvYmoubGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gb2JqO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9