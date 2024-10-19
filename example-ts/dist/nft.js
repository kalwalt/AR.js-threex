(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("three")) : factory(root["THREE"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, (__WEBPACK_EXTERNAL_MODULE_three__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../dist/ar.js":
/*!*********************!*\
  !*** ../dist/ar.js ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/***/ }),

/***/ "three":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","amd":"three","root":"THREE"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************!*\
  !*** ./nft.ts ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ar-js-org/ar.js-threejs */ "../dist/ar.js");
/* harmony import */ var _ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__);


_ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__.THREEx.ArToolkitContext.baseURL = "./";
console.log(_ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__.THREEx);
console.log(_ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__.ARjs);
var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color('lightgrey'), 0);
renderer.setSize(640, 480);
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '0px';
renderer.domElement.style.left = '0px';
document.body.appendChild(renderer.domElement);
var onRenderFcts = [];
var arToolkitContext, arMarkerControls;
var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera();
scene.add(camera);
var nft_arToolkitSource = new _ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__.THREEx.ArToolkitSource({
    sourceType: 'webcam',
    sourceWidth: window.innerWidth > window.innerHeight ? 640 : 480,
    sourceHeight: window.innerWidth > window.innerHeight ? 480 : 640,
});
nft_arToolkitSource.init(function onReady() {
    setTimeout(function () {
        onResize();
    }, 1000);
}, function onError() { });
window.addEventListener('resize', function () {
    onResize();
});
window.addEventListener('arjs-nft-loaded', function (ev) {
    console.log(ev);
});
function onResize() {
    nft_arToolkitSource.onResizeElement();
    nft_arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
        nft_arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
}
var arToolkitContext = new _ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__.THREEx.ArToolkitContext({
    detectionMode: 'mono',
    cameraParametersUrl: 'https://ar-js-org.github.io/AR.js/data/data/camera_para.dat',
    canvasWidth: 640,
    canvasHeight: 480,
});
arToolkitContext.init(function onCompleted() {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
});
console.log('context done!');
var markerControls = new _ar_js_org_ar_js_threejs__WEBPACK_IMPORTED_MODULE_1__.THREEx.ArMarkerControls(arToolkitContext, camera, {
    type: 'nft',
    descriptorsUrl: '' + 'AR.js-threejs/example-ts/data/dataNFT/pinball',
    changeMatrixMode: 'cameraTransformMatrix'
});
scene.visible = false;
var root = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();
scene.add(root);
var geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);
var material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial({
    transparent: true,
    opacity: 0.5,
    side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
});
var cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
cube.position.y = 90;
cube.scale.set(180, 180, 180);
root.matrixAutoUpdate = false;
root.add(cube);
window.addEventListener('arjs-nft-init-data', function (nft) {
    console.log(nft);
    var msg = nft.detail;
    cube.position.z = -(msg.height / msg.dpi * 2.54 * 10) / 2.0;
    cube.position.x = (msg.width / msg.dpi * 2.54 * 10) / 2.0;
});
var animate = function () {
    requestAnimationFrame(animate);
    if (!nft_arToolkitSource.ready) {
        return;
    }
    arToolkitContext.update(nft_arToolkitSource.domElement);
    scene.visible = camera.visible;
    renderer.render(scene, camera);
};
requestAnimationFrame(animate);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});