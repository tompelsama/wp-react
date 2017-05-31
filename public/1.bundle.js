webpackJsonp([1],{

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./actions/DataActions": 360,
		"./actions/DataActions.js": 360,
		"./alt/alt": 343,
		"./alt/alt.js": 343,
		"./components/About": 389,
		"./components/About.js": 389,
		"./components/App": 276,
		"./components/App.js": 276,
		"./components/Home": 386,
		"./components/Home.js": 386,
		"./components/Nav": 277,
		"./components/Nav.js": 277,
		"./components/views": 387,
		"./components/views.js": 387,
		"./index": 77,
		"./index.js": 77,
		"./stores/DataStore": 342,
		"./stores/DataStore.js": 342,
		"./styles/main.scss": 275
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(184); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(184);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DataStore = __webpack_require__(342);
	
	var _DataStore2 = _interopRequireDefault(_DataStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);
	
	    function Home() {
	        _classCallCheck(this, Home);
	
	        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	    }
	
	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            var page = _DataStore2.default.getPageBySlug('about');
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    page.title.rendered
	                )
	            );
	        }
	    }]);
	
	    return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(357); if (makeExportsHot(module, __webpack_require__(184))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "About.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicGFnZSIsImdldFBhZ2VCeVNsdWciLCJ0aXRsZSIsInJlbmRlcmVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7Ozs7Ozs7OztrQ0FFTztBQUNMLGlCQUFJQyxPQUFPLG9CQUFVQyxhQUFWLENBQXdCLE9BQXhCLENBQVg7O0FBRUEsb0JBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUtELDBCQUFLRSxLQUFMLENBQVdDO0FBQWhCO0FBREosY0FESjtBQUtIOzs7O0dBVmMsZ0JBQU1DLFM7O21CQWFWTCxJIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FjdGlvbnMvRGF0YUFjdGlvbnNcIjogMzYwLFxuXHRcIi4vYWN0aW9ucy9EYXRhQWN0aW9ucy5qc1wiOiAzNjAsXG5cdFwiLi9hbHQvYWx0XCI6IDM0Myxcblx0XCIuL2FsdC9hbHQuanNcIjogMzQzLFxuXHRcIi4vY29tcG9uZW50cy9BYm91dFwiOiAzODksXG5cdFwiLi9jb21wb25lbnRzL0Fib3V0LmpzXCI6IDM4OSxcblx0XCIuL2NvbXBvbmVudHMvQXBwXCI6IDI3Nixcblx0XCIuL2NvbXBvbmVudHMvQXBwLmpzXCI6IDI3Nixcblx0XCIuL2NvbXBvbmVudHMvSG9tZVwiOiAzODYsXG5cdFwiLi9jb21wb25lbnRzL0hvbWUuanNcIjogMzg2LFxuXHRcIi4vY29tcG9uZW50cy9OYXZcIjogMjc3LFxuXHRcIi4vY29tcG9uZW50cy9OYXYuanNcIjogMjc3LFxuXHRcIi4vY29tcG9uZW50cy92aWV3c1wiOiAzODcsXG5cdFwiLi9jb21wb25lbnRzL3ZpZXdzLmpzXCI6IDM4Nyxcblx0XCIuL2luZGV4XCI6IDc3LFxuXHRcIi4vaW5kZXguanNcIjogNzcsXG5cdFwiLi9zdG9yZXMvRGF0YVN0b3JlXCI6IDM0Mixcblx0XCIuL3N0b3Jlcy9EYXRhU3RvcmUuanNcIjogMzQyLFxuXHRcIi4vc3R5bGVzL21haW4uc2Nzc1wiOiAyNzVcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMzg4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSZWFjdCAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFTdG9yZSAgICBmcm9tICcuLy4uL3N0b3Jlcy9EYXRhU3RvcmUuanMnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBEYXRhU3RvcmUuZ2V0UGFnZUJ5U2x1ZygnYWJvdXQnKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e3BhZ2UudGl0bGUucmVuZGVyZWR9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Fib3V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==