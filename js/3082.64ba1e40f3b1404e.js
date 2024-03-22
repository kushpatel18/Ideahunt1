(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3082],{33082:function(e,t,o){var i,n;e.exports=(i=o(67294),n=o(73935),function(e){var t={};function __nested_webpack_require_757__(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,__nested_webpack_require_757__),i.l=!0,i.exports}return __nested_webpack_require_757__.m=e,__nested_webpack_require_757__.c=t,__nested_webpack_require_757__.d=function(e,t,o){__nested_webpack_require_757__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},__nested_webpack_require_757__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__nested_webpack_require_757__.t=function(e,t){if(1&t&&(e=__nested_webpack_require_757__(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(__nested_webpack_require_757__.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)__nested_webpack_require_757__.d(o,i,(function(t){return e[t]}).bind(null,i));return o},__nested_webpack_require_757__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __nested_webpack_require_757__.d(t,"a",t),t},__nested_webpack_require_757__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_757__.p="",__nested_webpack_require_757__(__nested_webpack_require_757__.s=4)}([function(e,t,o){e.exports=o(5)()},function(e,t){e.exports=i},function(e,t){e.exports=n},function(e,t){e.exports=function(e,t,o){var i=e.direction,n=e.value;switch(i){case"top":return o.top+n<t.top&&o.bottom>t.bottom&&o.left<t.left&&o.right>t.right;case"left":return o.left+n<t.left&&o.bottom>t.bottom&&o.top<t.top&&o.right>t.right;case"bottom":return o.bottom-n>t.bottom&&o.left<t.left&&o.right>t.right&&o.top<t.top;case"right":return o.right-n>t.right&&o.left<t.left&&o.top<t.top&&o.bottom>t.bottom}}},function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return u});var i=o(1),n=o.n(i),r=o(2),a=o.n(r),s=o(0),l=o.n(s),c=o(3),p=o.n(c);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var u=function(e){var t;function VisibilitySensor(e){var t,o;return function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,VisibilitySensor),t=(o=_getPrototypeOf(VisibilitySensor).call(this,e))&&("object"===_typeof(o)||"function"==typeof o)?o:_assertThisInitialized(this),_defineProperty(_assertThisInitialized(t),"getContainer",function(){return t.props.containment||window}),_defineProperty(_assertThisInitialized(t),"addEventListener",function(e,o,i,n){t.debounceCheck||(t.debounceCheck={});var r,later=function(){r=null,t.check()},a={target:e,fn:n>-1?function(){r||(r=setTimeout(later,n||0))}:function(){clearTimeout(r),r=setTimeout(later,i||0)},getLastTimeout:function(){return r}};e.addEventListener(o,a.fn),t.debounceCheck[o]=a}),_defineProperty(_assertThisInitialized(t),"startWatching",function(){t.debounceCheck||t.interval||(t.props.intervalCheck&&(t.interval=setInterval(t.check,t.props.intervalDelay)),t.props.scrollCheck&&t.addEventListener(t.getContainer(),"scroll",t.props.scrollDelay,t.props.scrollThrottle),t.props.resizeCheck&&t.addEventListener(window,"resize",t.props.resizeDelay,t.props.resizeThrottle),t.props.delayedCall||t.check())}),_defineProperty(_assertThisInitialized(t),"stopWatching",function(){if(t.debounceCheck){for(var e in t.debounceCheck)if(t.debounceCheck.hasOwnProperty(e)){var o=t.debounceCheck[e];clearTimeout(o.getLastTimeout()),o.target.removeEventListener(e,o.fn),t.debounceCheck[e]=null}}t.debounceCheck=null,t.interval&&(t.interval=clearInterval(t.interval))}),_defineProperty(_assertThisInitialized(t),"check",function(){var e,o,i=t.node;if(!i)return t.state;if(void 0===(e=t.roundRectDown(i.getBoundingClientRect())).width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),t.props.containment){var n=t.props.containment.getBoundingClientRect();o={top:n.top,left:n.left,bottom:n.bottom,right:n.right}}else o={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var r=t.props.offset||{};"object"===_typeof(r)&&(o.top+=r.top||0,o.left+=r.left||0,o.bottom-=r.bottom||0,o.right-=r.right||0);var a={top:e.top>=o.top,left:e.left>=o.left,bottom:e.bottom<=o.bottom,right:e.right<=o.right},s=e.height>0&&e.width>0,l=s&&a.top&&a.left&&a.bottom&&a.right;if(s&&t.props.partialVisibility){var c=e.top<=o.bottom&&e.bottom>=o.top&&e.left<=o.right&&e.right>=o.left;"string"==typeof t.props.partialVisibility&&(c=a[t.props.partialVisibility]),l=t.props.minTopValue?c&&e.top<=o.bottom-t.props.minTopValue:c}"string"==typeof r.direction&&"number"==typeof r.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",r.direction,r.value),l=p()(r,e,o));var u=t.state;return t.state.isVisible!==l&&(u={isVisible:l,visibilityRect:a},t.setState(u),t.props.onChange&&t.props.onChange(l)),u}),t.state={isVisible:null,visibilityRect:{}},t}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(VisibilitySensor,e),_defineProperties(VisibilitySensor.prototype,[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=a.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):n.a.Children.only(this.props.children)}}]),t&&_defineProperties(VisibilitySensor,t),VisibilitySensor}(n.a.Component);_defineProperty(u,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:n.a.createElement("span",null)}),_defineProperty(u,"propTypes",{onChange:l.a.func,active:l.a.bool,partialVisibility:l.a.oneOfType([l.a.bool,l.a.oneOf(["top","right","bottom","left"])]),delayedCall:l.a.bool,offset:l.a.oneOfType([l.a.shape({top:l.a.number,left:l.a.number,bottom:l.a.number,right:l.a.number}),l.a.shape({direction:l.a.oneOf(["top","right","bottom","left"]),value:l.a.number})]),scrollCheck:l.a.bool,scrollDelay:l.a.number,scrollThrottle:l.a.number,resizeCheck:l.a.bool,resizeDelay:l.a.number,resizeThrottle:l.a.number,intervalCheck:l.a.bool,intervalDelay:l.a.number,containment:"undefined"!=typeof window?l.a.instanceOf(window.Element):l.a.any,children:l.a.oneOfType([l.a.element,l.a.func]),minTopValue:l.a.number})},function(e,t,o){"use strict";var i=o(6);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,o,n,r,a){if(a!==i){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]))}}]);
//# sourceMappingURL=3082.64ba1e40f3b1404e.js.map