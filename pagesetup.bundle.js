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
/*!**************************!*\
  !*** ./src/pagesetup.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanPage: () => (/* binding */ cleanPage),
/* harmony export */   setAboutUs: () => (/* binding */ setAboutUs),
/* harmony export */   setHome: () => (/* binding */ setHome),
/* harmony export */   setMenu: () => (/* binding */ setMenu)
/* harmony export */ });
const pageContent = document.getElementById('content');

// Home

function setHome ()
{
    cleanPage();
    const homeParagraph = document.createElement('p');
    homeParagraph.innerText = "Welcome to my website, created using WebPacks, it also implements most of the DOM elements using JS!";
    pageContent.appendChild(homeParagraph);
}

// Menu

function setMenu ()
{
    cleanPage();
    const menuParagraph = document.createElement('p');
    menuParagraph.innerText = "Lets pretend there is a menu here with restaurant itens";
    pageContent.appendChild(menuParagraph);
}

// About Us

function setAboutUs ()
{
    cleanPage();
    const aboutUsParagraph = document.createElement('p');
    aboutUsParagraph.innerText = "Well there is not 'us' in here since I created this project alone. Anyway, time to promote myself:";
    const aboutUsGithubLink = document.createElement('a');
    aboutUsGithubLink.innerText = "Please give me a job";
    aboutUsGithubLink.setAttribute('href', 'https://github.com/pedrogamedev');

    pageContent.appendChild(aboutUsParagraph);
    pageContent.appendChild(aboutUsGithubLink);
}

// Clean Page Content

function cleanPage ()
{
    while(pageContent.firstChild)
    {
        pageContent.removeChild(pageContent.lastChild);
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXNldHVwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXNldHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vLyBIb21lXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRIb21lICgpXG57XG4gICAgY2xlYW5QYWdlKCk7XG4gICAgY29uc3QgaG9tZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob21lUGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiV2VsY29tZSB0byBteSB3ZWJzaXRlLCBjcmVhdGVkIHVzaW5nIFdlYlBhY2tzLCBpdCBhbHNvIGltcGxlbWVudHMgbW9zdCBvZiB0aGUgRE9NIGVsZW1lbnRzIHVzaW5nIEpTIVwiO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYXJhZ3JhcGgpO1xufVxuXG4vLyBNZW51XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNZW51ICgpXG57XG4gICAgY2xlYW5QYWdlKCk7XG4gICAgY29uc3QgbWVudVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51UGFyYWdyYXBoLmlubmVyVGV4dCA9IFwiTGV0cyBwcmV0ZW5kIHRoZXJlIGlzIGEgbWVudSBoZXJlIHdpdGggcmVzdGF1cmFudCBpdGVuc1wiO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lbnVQYXJhZ3JhcGgpO1xufVxuXG4vLyBBYm91dCBVc1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QWJvdXRVcyAoKVxue1xuICAgIGNsZWFuUGFnZSgpO1xuICAgIGNvbnN0IGFib3V0VXNQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRVc1BhcmFncmFwaC5pbm5lclRleHQgPSBcIldlbGwgdGhlcmUgaXMgbm90ICd1cycgaW4gaGVyZSBzaW5jZSBJIGNyZWF0ZWQgdGhpcyBwcm9qZWN0IGFsb25lLiBBbnl3YXksIHRpbWUgdG8gcHJvbW90ZSBteXNlbGY6XCI7XG4gICAgY29uc3QgYWJvdXRVc0dpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYWJvdXRVc0dpdGh1YkxpbmsuaW5uZXJUZXh0ID0gXCJQbGVhc2UgZ2l2ZSBtZSBhIGpvYlwiO1xuICAgIGFib3V0VXNHaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vcGVkcm9nYW1lZGV2Jyk7XG5cbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzUGFyYWdyYXBoKTtcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzR2l0aHViTGluayk7XG59XG5cbi8vIENsZWFuIFBhZ2UgQ29udGVudFxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5QYWdlICgpXG57XG4gICAgd2hpbGUocGFnZUNvbnRlbnQuZmlyc3RDaGlsZClcbiAgICB7XG4gICAgICAgIHBhZ2VDb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==