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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
var extend = __webpack_require__(3);
var categoryList = __webpack_require__(4);
console.log(extend);
console.log(categoryList());
console.log('hello world');
alert('메롱');



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Copyright (c) 2015 NAVER corp.
* egjs projects are licensed under the MIT license
* https://naver.github.io/egjs/license.txt
*
* egjs JavaScript library
* http://naver.github.io/egjs
*
* @version 1.5.0
* @SHA-1 a22f4c1 (1.5.0-rc)
*/

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

(function(jQueryName, ns, global) {
var eg;
	if (!global[ns]) {
		global[ns] = {};
	}
	eg = global[ns];

	var $ = global[jQueryName];

	var dependency = {
		"jQuery": {
			"url": "http://jquery.com/"
		},
		"Hammer": {
			"url": "http://hammerjs.github.io/"
		}
	};

	// jscs:disable maximumLineLength
	var templateMessage = [
		"[egjs] The {{name}} library must be loaded before {{componentName}}.",
		"[egjs] For AMD environment (like RequireJS), \"{{name}}\" must be declared, which is required by {{componentName}}.",
        "[egjs] The {{index}} argument of {{componentName}} is missing.\r\nDownload {{name}} from [{{url}}].",
		"[egjs] The {{name}} parameter of {{componentName}} is not valid.\r\nPlease check and try again.",
        "[egjs] The {{index}} argument of {{componentName}} is undefined.\r\nPlease check and try again."
	];

	// jscs:enable maximumLineLength

	var ordinal = [ "1st", "2nd", "3rd"];

	function changeOrdinal(index) {
		return index > 2 ? (index + 1) + "th" : ordinal[index];
	}

	function replaceStr(str, obj) {
		var i;
		for (i in obj) {
			str = str.replace(new RegExp("{{" + i + "}}","gi"), obj[i]);
		}
		return str;
	}

	function checkDependency(componentName, di) {
		var i = 0;
		var l = di.length;
		var message = [];
		var paramList = [];
		var require = global.require;
		var dependencyInfo;
		var param;
		var messageInfo;
		var isString;
		var isUndefined;
		var registedDependency;
		var isNotGlobal;
		var specifiedAMD;

		for (; i < l; i++) {
			param = di[i];
			messageInfo = {
				"index": changeOrdinal(i),
				"name": param,
				"componentName": componentName
			};

			isString = typeof di[i] === "string";
			isUndefined = di[i] === undefined;
			registedDependency = isString && (dependencyInfo = dependency[di[i]]);
			isNotGlobal = isString && dependencyInfo && !global[di[i]];
			specifiedAMD = isNotGlobal &&
				require && require.specified && require.specified(di[i]);

			// Message decision flow
			//             argument
			// |--------------|--------------|
			// undefined    string    !string&&!undefined
			// |              |              |
			// msg(4)         |             (OK)
			//         defined dependency
			//                |
			// |-----------------------------|
			// |                             |
			// msg(3)                     in global
			//                               |
			//                 |------------------------------|
			//              use AMD                          (OK)
			//                 |
			//  |------------------------------|
			//  msg(2)                  require.specified
			// 	                               |
			// 	                |------------------------------|
			//                  msg(1)                  require.defined
			// 	                                               |
			//                                  |------------------------------|
			//                                  msg(0)                        (OK)

			if (!isString && !isUndefined) {
				paramList.push(param);
				continue;
			}

			if (specifiedAMD && require.defined(di[i])) {
				param = require(di[i]);
				paramList.push(param);
				continue;
			}

			if (specifiedAMD && !require.defined(di[i])) {
				messageInfo.url = dependencyInfo.url;
				message.push(replaceStr(templateMessage[0], messageInfo));
				continue;
			}

			if (isNotGlobal && require &&
				require.specified && !require.specified(di[i])) {
				messageInfo.url = dependencyInfo.url;
				message.push(replaceStr(templateMessage[1], messageInfo));
				continue;
			}

			if (isNotGlobal && !require) {
				messageInfo.url = dependencyInfo.url;
				message.push(replaceStr(templateMessage[2], messageInfo));
				continue;
			}

			if (registedDependency && global[di[i]]) {
				param = global[di[i]];
				paramList.push(param);
				continue;
			}

			if (isString && !dependencyInfo) {
				message.push(replaceStr(templateMessage[3], messageInfo));
				continue;
			}

			if (di[i] === undefined) {
				message.push(replaceStr(templateMessage[4], messageInfo));
				continue;
			}
		}

		return [paramList, message];
	}

	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function plugin(name) {
		var upperCamelCase = capitalizeFirstLetter(name);
		var events;
		var special;
		var componentMethodNames;

		if (!(eg[upperCamelCase] && eg[upperCamelCase].prototype &&
			eg[upperCamelCase].prototype._events)) {
			return false;
		}

		// jscs:disable validateLineBreaks, maximumLineLength
		if ($.fn[name]) {
			throw new Error("The name '" + upperCamelCase + "' has already been used and registered as plugin. Try with different one.");
		}

		// jscs:enable validateLineBreaks, maximumLineLength

		// Extend method.
		$.fn[name] = function(options) {
			var ins;
			var result;
			if (typeof options === "string") {
				ins = this.data(ns + "-" + name);
				if (options === "instance") {
					return ins;
				} else {
					result = ins[options].apply(ins, Array.prototype.slice.call(arguments, 1));
					return result === ins ? this : result;
				}
			}

			if (options === undefined || $.isPlainObject(options)) {
				this.data(ns + "-" + name, new eg[upperCamelCase](
					this, options || {}, name + ":"
				));
			}
			return this;
		};

		componentMethodNames = {
			trigger: "trigger",
			add: "on",
			remove: "off"
		};
		events = eg[upperCamelCase].prototype._events();

		for (var i in events) {
			special = $.event.special[name + ":" + events[i]] = {};

			// to not bind native event
			special.setup = function() {
				return true;
			};

			for (var j in componentMethodNames) {
				// jscs:disable validateLineBreaks, maximumLineLength
				/*jshint loopfunc: true */
				special[j] = (function(componentMethodName) {
					return function(event, param) {
						$(this).data(ns + "-" + name)[componentMethodName](
							event.type,
							componentMethodName === "trigger" ? param : event.handler
						);
						return false;
					};
				})(componentMethodNames[j]);

				// jscs:enable validateLineBreaks, maximumLineLength
			}
		}
	}

	var warn = function(msg) {
		/* jshint ignore:start */
		if (global.console && global.console.warn) {
			warn = function(msg) {
				global.console.warn(msg);
			};
		} else {
			warn = function(msg) {
			};
		}
		/* jshint ignore:end */
		warn(msg);
	};

	/**
	 * Regist module.
	 * @private
	 */
	if (!eg.module) {
		eg.module = function(name, di, fp) {
			var result = checkDependency(name, di);
			if (result[1].length) {
				warn(result[1].join("\r\n"));
			} else {
				fp.apply(global, result[0]);
				plugin(name);
			}
		};
	}

})("jQuery", "eg", window);
/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

eg.module("agent", [eg], function(ns) {
/*
	*	{String|RegEx} criteria
	*	{String|RegEx} identity
	*	{String} versionSearch
	*	{String} versionAlias
	*	{String|RegEx} webviewBrowserVersion
	*	{String|RegEx} webviewToken
	*/
	var userAgentRules = {
		browser: [{
			criteria: "PhantomJS",
			identity: "PhantomJS"
		}, {
			criteria: /Opera Mini/,
			identity: "Opera mini",
			versionSearch: "Opera Mini"
		}, {
			criteria: /Opera|OPR/,
			identity: "Opera",
			versionSearch: "Opera|OPR"
		}, {
			criteria: /Edge/,
			identity: "Edge",
			versionSearch: "Edge"
		}, {
			criteria: /MSIE|Trident|Windows Phone/,
			identity: "IE",
			versionSearch: "IEMobile|MSIE|rv"
		}, {
			criteria: /SAMSUNG|SamsungBrowser/,
			identity: "SBrowser",
			versionSearch: "Chrome"
		}, {
			criteria: /Chrome|CriOS/,
			identity: "Chrome"
		}, {
			criteria: /Android/,
			identity: "default"
		}, {
			criteria: /iPhone|iPad/,
			identity: "Safari",
			versionSearch: "Version"
		}, {
			criteria: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		}, {
			criteria: "Firefox",
			identity: "Firefox"
		}],
		os: [{
			criteria: /Windows Phone|Windows NT/,
			identity: "Window",
			versionSearch: "Windows Phone|Windows NT"
		}, {
			criteria: "Windows 2000",
			identity: "Window",
			versionAlias: "5.0"
		}, {
			criteria: /iPhone|iPad/,
			identity: "iOS",
			versionSearch: "iPhone OS|CPU OS"
		}, {
			criteria: "Mac",
			versionSearch: "OS X",
			identity: "MAC"
		}, {
			criteria: /Android/,
			identity: "Android"
		}],

		// Webview check condition
		// ios: If has no version information
		// Android 5.0 && chrome 40+: Presence of "; wv" in userAgent
		// Under android 5.0:  Presence of "NAVER" or "Daum" in userAgent
		webview: [{
			criteria: /iPhone|iPad/,
			browserVersionSearch: "Version",
			webviewBrowserVersion: /-1/
		}, {
			criteria: /iPhone|iPad|Android/,
			webviewToken: /NAVER|DAUM|; wv/

		}],
		defaultString: {
			browser: {
				version: "-1",
				name: "default"
			},
			os: {
				version: "-1",
				name: "unknown"
			}
		}
	};

	var UA;

	function getBrowserName(browserRules) {
		return getIdentityStringFromArray(
			browserRules,
			userAgentRules.defaultString.browser
		);
	}

	function getBrowserVersion(browserName) {
		var browserVersion;
		var versionToken;

		if (!browserName) {
			return;
		}
		versionToken = getBrowserRule(browserName).versionSearch || browserName;
		browserVersion = extractBrowserVersion(versionToken, UA);
		return browserVersion;
	}

	function extractBrowserVersion(versionToken, ua) {
		var browserVersion = userAgentRules.defaultString.browser.version;
		var versionIndex;
		var versionTokenIndex;
		var versionRegexResult =
			(new RegExp("(" + versionToken + ")", "i")).exec(ua);

		if (!versionRegexResult) {
			return browserVersion;
		}

		versionTokenIndex = versionRegexResult.index;
		versionToken = versionRegexResult[0];
		if (versionTokenIndex > -1) {
			versionIndex = versionTokenIndex + versionToken.length + 1;
			browserVersion = ua.substring(versionIndex)
				.split(" ")[0]
				.replace(/_/g, ".")
				.replace(/\;|\)/g, "");
		}
		return browserVersion;
	}

	function getOSName(osRules) {
		return getIdentityStringFromArray(
			osRules,
			userAgentRules.defaultString.os
		);
	}

	function getOSVersion(osName) {
		var ua = UA;
		var osRule = getOSRule(osName) || {};
		var defaultOSVersion = userAgentRules.defaultString.os.version;
		var osVersion;
		var osVersionToken;
		var osVersionRegex;
		var osVersionRegexResult;
		if (!osName) {
			return;
		}
		if (osRule.versionAlias) {
			return osRule.versionAlias;
		}
		osVersionToken = osRule.versionSearch || osName;
		osVersionRegex =
			new RegExp(
				"(" + osVersionToken + ")\\s([\\d_\\.]+|\\d_0)",
				"i"
			);

		osVersionRegexResult = osVersionRegex.exec(ua);
		if (osVersionRegexResult) {
			osVersion = osVersionRegex.exec(ua)[2].replace(/_/g, ".")
												.replace(/\;|\)/g, "");
		}
		return osVersion || defaultOSVersion;
	}

	function getOSRule(osName) {
		return getRule(userAgentRules.os, osName);
	}

	function getBrowserRule(browserName) {
		return getRule(userAgentRules.browser, browserName);
	}

	function getRule(rules, targetIdentity) {
		var criteria;
		var identityMatched;

		for (var i = 0, rule; rule = rules[i]; i++) {
			criteria = rule.criteria;
			identityMatched =
				new RegExp(rule.identity, "i").test(targetIdentity);
			if (criteria ?
				identityMatched && isMatched(UA, criteria) :
				identityMatched) {
				return rule;
			}
		}
	}
	function getIdentityStringFromArray(rules, defaultStrings) {
		for (var i = 0, rule; rule = rules[i]; i++) {
			if (isMatched(UA, rule.criteria)) {
				return rule.identity || defaultStrings.name;
			}
		}
		return defaultStrings.name;
	}
	function isMatched(base, target) {
		return target &&
			target.test ? !!target.test(base) : base.indexOf(target) > -1;
	}
	function isWebview() {
		var ua = UA;
		var webviewRules = userAgentRules.webview;
		var ret = false;
		var browserVersion;

		for (var i = 0, rule; rule = webviewRules[i]; i++) {
			if (!isMatched(ua, rule.criteria)) {
				continue;
			}

			browserVersion =
				extractBrowserVersion(rule.browserVersionSearch, ua);

			if (isMatched(ua, rule.webviewToken) ||
				isMatched(browserVersion, rule.webviewBrowserVersion)) {
				ret = true;
				break;
			}
		}

		return ret;
	}

	/**
	 * agent post processing
	 */
	function postProcess(agent) {
		agent.browser.name = agent.browser.name.toLowerCase();
		agent.os.name = agent.os.name.toLowerCase();

		if (agent.os.name === "ios" && agent.browser.webview) {
			agent.browser.version = "-1";
		}
		return agent;
	}

	ns.Agent = {
		"create": function(useragent) {
			this.ua = UA = useragent;
			var agent = {
				os: {},
				browser: {}
			};
			agent.browser.name = getBrowserName(userAgentRules.browser);
			agent.browser.version = getBrowserVersion(agent.browser.name);
			agent.os.name = getOSName(userAgentRules.os);
			agent.os.version = getOSVersion(agent.os.name);
			agent.browser.webview = isWebview();

			return postProcess(agent);
		}
	};
});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

eg.module("raf", [eg, window], function(ns, global) {
var raf = global.requestAnimationFrame || global.webkitRequestAnimationFrame ||
				global.mozRequestAnimationFrame || global.msRequestAnimationFrame;
	var caf = global.cancelAnimationFrame || global.webkitCancelAnimationFrame ||
				global.mozCancelAnimationFrame || global.msCancelAnimationFrame;

	// https://gist.github.com/paulirish/5438650
	(function() {

		if ("performance" in global === false) {
			global.performance = {};
		}

		global.Date.now = (global.Date.now || function () {  // thanks IE8
			return new global.Date().getTime();
		});

		if ("now" in global.performance === false) {

			var nowOffset = global.Date.now();

			if (global.performance.timing && global.performance.timing.navigationStart) {
				nowOffset = global.performance.timing.navigationStart;
			}

			global.performance.now = function now() {
				return global.Date.now() - nowOffset;
			};
		}

	})();

	if (raf && !caf) {
		var keyInfo = {};
		var oldraf = raf;
		raf = function(callback) {
			function wrapCallback(timestamp) {
				if (keyInfo[key]) {
					callback(timestamp);
				}
			}
			var key = oldraf(wrapCallback);
			keyInfo[key] = true;
			return key;
		};
		caf = function(key) {
			delete keyInfo[key];
		};
	} else if (!(raf && caf)) {
		raf = function(callback) {
			return global.setTimeout(function() {
				callback(global.performance.now());
			}, 16);
		};
		caf = global.clearTimeout;
	}

	/**
	* A polyfill for the window.requestAnimationFrame() method.
	* @ko window.requestAnimationFrame() 메서드의 polyfill 함수다
	* @method eg#requestAnimationFrame
	* @param {Function} timer The function returned through a call to the requestAnimationFrame() method <ko>requestAnimationFrame() 메서드가 호출할 함수</ko>
	* @return {Number} ID of the requestAnimationFrame() method. <ko>requestAnimationFrame() 메서드의 아이디</ko>
	* @example
		var timerId = eg.requestAnimationFrame(function() {
			console.log("call");
		});
	* @see  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
	*/
	ns.requestAnimationFrame = function(fp) {
		return raf(fp);
	};
	/**
	* A polyfill for the window.cancelAnimationFrame() method. It cancels an animation executed through a call to the requestAnimationFrame() method.
	* @ko window.cancelAnimationFrame() 메서드의 polyfill 함수다. requestAnimationFrame() 메서드로 실행한 애니메이션을 중단한다
	* @method eg#cancelAnimationFrame
	* @param {Number} key −	The ID value returned through a call to the requestAnimationFrame() method. <ko>requestAnimationFrame() 메서드가 반환한 아이디 값</ko>
	* @example
		eg.cancelAnimationFrame(timerId);
	* @see  https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame
	*/
	ns.cancelAnimationFrame = function(key) {
		caf(key);
	};
});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

eg.module("eg", ["jQuery", eg, window, eg.Agent], function($, ns, global, Agent) {
function resultCache(scope, name, param, defaultValue) {
		var method = scope.hook[name];
		if (method) {
			defaultValue = method.apply(scope, param);
		}

		scope[name] = function() {
			var method = scope.hook[name];
			if (method) {
				return method.apply(scope, param);
			}
			return defaultValue;
		};
		return defaultValue;
	}

	/**
	 * @namespace eg
	 * @group egjs
	 */

	/**
	 * @name eg.VERSION
	 * @description The version numbers of egjs.
	 * @ko egjs 버전
	 */
	ns.VERSION = "1.5.0";
	ns.hook =  {};
	/**
	* Returns the User-Agent information
	* @ko user-agent 정보를 반환한다.
	* @method eg#agent
	* @return {Object} agent
	* @return {Object} agent.os os Operating system information <ko>운영체제 정보</ko>
	* @return {String} agent.os.name Operating system name (android, ios, window, mac) <ko>운영체제 이름 (android, ios, window, mac)</ko>
	* @return {String} agent.os.version Operating system version <ko>운영체제 버전</ko>
	* @return {String} agent.browser Browser information <ko>브라우저 정보</ko>
	* @return {String} agent.browser.name Browser name (default, safari, chrome, sbrowser, ie, firefox) <ko>브라우저 이름 (default, safari, chrome, sbrowser, ie, firefox)</ko>
	* @return {String} agent.browser.version Browser version <ko>브라우저 버전 </ko>
	* @return {String} agent.browser.webview Indicates whether a WebView browser is available<ko>웹뷰 브라우저 여부</ko>
	* @example
eg.agent();
// {
//     os : {
//          name : "ios",
//          version : "8.2"
//     },
//     browser : {
//          name : "safari",
//          version : "8.2"
//          nativeVersion : "-1"
//     }
// }
eg.hook.agent = function(agent) {
if(agent.os.name === "naver") {
	agent.browser.name = "inapp";
	return agent;
}
}
	*/
	ns.agent = function() {
		var info = Agent.create(global.navigator.userAgent);
		return resultCache(this, "agent", [info], info);
	};

	/**
	 * Returns the syntax of the translate style which is applied to CSS transition properties.
	 *
	 * @ko CSS 트랜지션 속성에 적용할 translate 스타일 구문을 반환한다
	 * @method eg#translate
	 * @param {String} x Distance to move along the X axis <ko>x축을 따라 이동할 거리</ko>
	 * @param {String} y Distance to move along the Y axis <ko>y축을 따라 이동할 거리</ko>
	 * @param {Boolean} [isHA] Force hardware acceleration <ko>하드웨어 가속 사용 여부</ko>
	 * @return {String} Syntax of the translate style <ko>translate 스타일 구문</ko>
	 * @example
eg.translate('10px', '200%');  // translate(10px,200%);
eg.translate('10px', '200%', true);  // translate3d(10px,200%,0);
	 */
	ns.translate = function(x, y, isHA) {
		isHA = isHA || false;
		return "translate" + (isHA ?
								"3d(" : "(") + x + "," + y + (isHA ? ",0)" :
								")");
	};

	/**
	 * Checks whether hardware acceleration is enabled.
	 *
	 * @ko 하드웨어 가속을 사용할 수 있는 환경인지 확인한다
	 * @method eg#isHWAccelerable
	 * @return {Boolean} Indicates whether hardware acceleration is enabled. <ko>하드웨어 가속 사용 가능 여부</ko>
	 * @example
eg.isHWAccelerable();  // Returns 'true' when hardware acceleration is supported

// also, you can control return value
eg.hook.isHWAccelerable = function(defalutVal,agent) {
if(agent.os.name === "ios") {
	// if os is 'ios', return value is 'false'
	return false;
} else if(agent.browser.name === "chrome" ) {
	// if browser is 'chrome', return value is 'true'
	return true;
}
return defaultVal;
}
	 */
	ns.isHWAccelerable = function() {
		var result = false;
		var agent = ns.agent();
		var osVersion = agent.os.version;
		var browser = agent.browser.name;
		var browserVersion = agent.browser.version;
		var useragent;

		// chrome 25- has a text blur bug (except Samsung's sbrowser)
		if (browser.indexOf("chrome") !== -1) {
			result = browserVersion >= "25";
		} else if (/ie|edge|firefox|safari|inapp/.test(browser)) {
			result = true;
		} else if (agent.os.name.indexOf("android") !== -1) {
			// for Xiaomi
			useragent = (Agent.ua.match(/\(.*\)/) || [null])[0];

			// android 4.1+ blacklist
			// EK-GN120 : Galaxy Camera, SM-G386F : Galaxy Core LTE
			// SHW-M420 : Galaxy Nexus , SHW-M200 : NexusS , GT-S7562 : Galaxy S duos
			result = (osVersion >= "4.1.0" && !/EK-GN120|SM-G386F/.test(useragent)) ||
				(osVersion >= "4.0.3" &&
					/SHW-|SHV-|GT-|SCH-|SGH-|SPH-|LG-F160|LG-F100|LG-F180|LG-F200|EK-|IM-A|LG-F240|LG-F260/.test(useragent) && !/SHW-M420|SHW-M200|GT-S7562/.test(useragent));
		}
		return resultCache(this, "isHWAccelerable", [result, agent], result);
	};

	/**
	 * Checks whether CSS transition properties can be used.
	 *
	 * @ko CSS 트랜지션 속성을 사용할 수 있는 환경인지 확인한다.
	 * @method eg#isTransitional
	 * @return {Boolean} Indicates whether CSS transition properties can be used. <ko>CSS 트랜지션 속성 사용 가능 여부</ko>
	 * @example
eg.isTransitional();  // Returns 'true' when CSS transition is supported.

// also, you can control return value
eg.hook.isTransitional = function(defaultVal, agent) {
if(agent.os.name === "ios") {
	// if os is 'ios', return value is 'false'
	return false;
} else if(agent.browser.name === "chrome" ) {
	// if browser is 'chrome', return value is 'true'
	return true;
}
return defaultVal;
}
	 */
	ns.isTransitional = function() {
		var result = false;
		var agent = ns.agent();
		var browser = agent.browser.name;

		if (/chrome|firefox|sbrowser/.test(browser)) {
			result = true;
		} else {
			switch (agent.os.name) {
				case "ios" :
					result = /safari|inapp/.test(browser) &&
							parseInt(agent.os.version, 10) < 6;
					break;
				case "window" :
					result = /safari/.test(browser) ||
							(/ie/.test(browser) &&
								parseInt(agent.browser.nativeVersion, 10) >= 10);
					break;
				default :
					result = /safari/.test(browser);
					break;
			}
		}
		return resultCache(this, "isTransitional", [result, agent], result);
	};

	// 1. user press one position on screen.
	// 2. user moves to the other position on screen.
	// 3. when user releases fingers on screen, 'click' event is fired at previous position.
	ns._hasClickBug = function() {
		var agent = ns.agent();
		var result = agent.browser.name === "safari";

		return resultCache(this, "_hasClickBug", [result, agent], result);
	};

	$ && $.extend($.easing, {
		easeOutCubic: function(p) {
			return 1 - Math.pow(1 - p, 3);
		}
	});
});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

eg.module("class", [eg], function(ns) {
/**
	 *
	 * A module used to implement an application in object-oriented programming style
	 * @group egjs
	 * @ko 애플리케이션을 객체지향 프로그래밍 방식으로 구현할 때 사용하는 모듈
	 * @class
	 * @name eg.Class
	 *
	 * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
	 * @param {Object} def definition. Follow the rules under <a href="https://en.wikipedia.org/wiki/Literal_(computer_programming)">Literals of objects</a>. Note that "construct" is a key reserved as a constructor function. <ko>클래스를 정의하는 부분. <a href="https://en.wikipedia.org/wiki/Literal_(computer_programming)">객체 리터럴 규칙</a>을 따른다. 단, 'construct'는 생성자 함수로 예약된 키다</ko>
	 * @param {Function} [def.construct] The constructor of the class <ko>클래스 생성자 함수 (Optional)</ko>
	 *
	 * @example
	 	var Some = eg.Class({
	 		//Class initialize
			"construct" : function(val){
				this.val = val;
			},
			"sumVal" : function(val) {
				return this.val + val;
			}
	 	});

	 	var some = new Some(5);
	 	some.sumVal(5);//10
	 */
	ns.Class = function(def) {
		var typeClass = function typeClass() {
			if (typeof def.construct === "function") {
				def.construct.apply(this, arguments);
			}
		};

		typeClass.prototype = def;

		/**
		 * Returns an instance of a class itself.
		 * @ko 클래스 자신의 인스턴스를 반환한다.
		 * @method eg.Class#instance
		 * @return {eg.Class} An instance of a class itself<ko>클래스 자신의 인스턴스</ko>
		 */
		typeClass.prototype.instance = function() {
			return this;
		};

		typeClass.prototype.constructor = typeClass;
		return typeClass;
	};
	/**
	 * Extends a class.
	 * @ko 클래스를 상속한다.
	 * @static
	 * @method eg.Class.extend
	 * @param {eg.Class} oSuperClass Superclass <ko>상속하려는 클래스</ko>
	 * @param {Object} def Class definition. Follow the rules under <a href="https://en.wikipedia.org/wiki/Literal_(computer_programming)">Literals of objects</a>. Note that "construct" is a key reserved as a constructor function. <ko>클래스를 정의하는 부분. <a href="https://en.wikipedia.org/wiki/Literal_(computer_programming)">객체 리터럴 규칙</a>을 따른다. 단, 'construct'는 생성자 함수로 예약된 키다.</ko>
	 * @param {Function} [def.construct] The constructor of the class <ko>클래스 생성자 함수 (Optional)</ko>
	 * @return {eg.Class} An instance of a new class <ko>새로 생성된 클래스의 인스턴스</ko>
	 * @example
	 	var Some = eg.Class.extend(eg.Component,{
			"some" : function(){}
	 	})
	 */

	ns.Class.extend = function(superClass, def) {
		var extendClass = function extendClass() {
			// Call a parent constructor
			superClass.apply(this, arguments);

			// Call a child constructor
			if (typeof def.construct === "function") {
				def.construct.apply(this, arguments);
			}
		};

		var ExtProto = function() {};
		ExtProto.prototype = superClass.prototype;

		//extendClass.$super = oSuperClass.prototype; //'super' is supported not yet.

		var extProto = new ExtProto();
		for (var i in def) {
			extProto[i] = def[i];
		}
		extProto.constructor = extendClass;
		extendClass.prototype = extProto;

		return extendClass;
	};
});
/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

eg.module("component", [eg], function(ns) {
/**
	 * A class used to manage events and options in a component
	 * @class
	 * @group egjs
	 * @name eg.Component
	 * @ko 컴포넌트의 이벤트와 옵션을 관리할 수 있게 하는 클래스
	 *
	 * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
	 */
	ns.Component = ns.Class({
		construct: function() {
			// The reference count does not support yet.
			// this.constructor.$count = (this.constructor.$count || 0) + 1;
			this.eventHandler = {};
			this.options = {};
		},
		/**
		 * Sets options in a component or returns them.
		 * @ko 컴포넌트에 옵션을 설정하거나 옵션을 반환한다
		 * @method eg.Component#option
		 * @param {String} key The key of the option<ko>옵션의 키</ko>
		 * @param {Object} [value] The option value that corresponds to a given key <ko>키에 해당하는 옵션값</ko>
		 * @return {eg.Component|Object} An instance, an option value, or an option object of a component itself.<br>- If both key and value are used to set an option, it returns an instance of a component itself.<br>- If only a key is specified for the parameter, it returns the option value corresponding to a given key.<br>- If nothing is specified, it returns an option object. <ko>컴포넌트 자신의 인스턴스나 옵션값, 옵션 객체.<br>- 키와 값으로 옵션을 설정하면 컴포넌트 자신의 인스턴스를 반환한다.<br>- 파라미터에 키만 설정하면 키에 해당하는 옵션값을 반환한다.<br>- 파라미터에 아무것도 설정하지 않으면 옵션 객체를 반환한다.</ko>
		 * @example
			var Some = eg.Class.extend(eg.Component, {
				construct: function(options){
					this.options = options; // You have to set this.options.
				}
			});

			var some = new Some({
				"foo": 1,
				"bar": 2,
			});
			some.option("foo"); // return 1
			some.option("foo",3); // return some instance
			some.option(); // return options object.
			some.option({
				"foo" : 10,
				"bar" : 20,
				"baz" : 30
			}); // return some instance.
		 */
		option: function(key, value) {
			if (arguments.length >= 2) {
				this.options[key] = value;
				return this;
			}

			if (typeof key === "string") {
				return this.options[key];
			}

			if (arguments.length === 0) {
				return this.options;
			}

			for (var i in key) {
				this.options[i] = key[i];
			}

			return this;
		},
		/**
		 * Triggers a custom event.
		 * @ko 커스텀 이벤트를 발생시킨다
		 * @method eg.Component#trigger
		 * @param {String} eventName The name of the custom event to be triggered <ko>발생할 커스텀 이벤트의 이름</ko>
		 * @param {Object} customEvent Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
		 * @return {Boolean} Indicates whether the event has occurred. If the stop() method is called by a custom event handler, it will return false and prevent the event from occurring. <ko>이벤트 발생 여부. 커스텀 이벤트 핸들러에서 stop() 메서드를 호출하면 'false'를 반환하고 이벤트 발생을 중단한다.</ko>
		 * @example
			var Some = eg.Class.extend(eg.Component,{
				"some": function(){
					this.trigger("hi");// fire hi event.
				}
			});
		 */
		trigger: function(eventName, customEvent) {
			customEvent = customEvent || {};
			var handlerList = this.eventHandler[eventName] || [];
			var hasHandlerList = handlerList.length > 0;

			if (!hasHandlerList) {
				return true;
			}

			// If detach method call in handler in first time then handeler list calls.
			handlerList = handlerList.concat();

			customEvent.eventType = eventName;

			var isCanceled = false;
			var arg = [customEvent];
			var i;
			var len;
			var handler;

			customEvent.stop = function() {
				isCanceled = true;
			};

			if ((len = arguments.length) > 2) {
				arg = arg.concat(Array.prototype.slice.call(arguments, 2, len));
			}

			for (i = 0; handler = handlerList[i]; i++) {
				handler.apply(this, arg);
			}

			return !isCanceled;
		},
		/**
		 * Executed event just one time.
		 * @ko 이벤트가 한번만 실행된다.
		 * @method eg.Component#once
		 * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
		 * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
		 * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
		 * @example
			var Some = eg.Class.extend(eg.Component,{
				"hi": function(){
					alert("hi");
				},
				"thing": function(){
					this.once("hi",this.hi);
				}
			});

			var some = new Some();
			some.thing();
			some.trigger("hi");
			// fire alert("hi");
			some.trigger("hi");
			// Nothing happens
		 */
		once: function(eventName, handlerToAttach) {
			if (typeof eventName === "object" &&
			typeof handlerToAttach === "undefined") {
				var eventHash = eventName;
				var i;
				for (i in eventHash) {
					this.once(i, eventHash[i]);
				}
				return this;
			} else if (typeof eventName === "string" &&
				typeof handlerToAttach === "function") {
				var self = this;
				this.on(eventName, function listener() {
					var arg = Array.prototype.slice.call(arguments);
					handlerToAttach.apply(self, arg);
					self.off(eventName, listener);
				});
			}

			return this;
		},
		/**
		 * Checks whether an event has been attached to a component.
		 * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
		 * @method eg.Component#hasOn
		 * @param {String} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
		 * @return {Boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
		 * @example
			var Some = eg.Class.extend(eg.Component,{
				"some": function(){
					this.hasOn("hi");// check hi event.
				}
			});
		 */
		hasOn: function(eventName) {
			return !!this.eventHandler[eventName];
		},
		/**
		 * Attaches an event to a component.
		 * @ko 컴포넌트에 이벤트를 등록한다.
		 * @method eg.Component#on
		 * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
		 * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
		 * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
		 * @example
			var Some = eg.Class.extend(eg.Component,{
				"hi": function(){},
				"some": function(){
					this.on("hi",this.hi); //attach event
				}
			});
		 */
		on: function(eventName, handlerToAttach) {
			if (typeof eventName === "object" &&
			typeof handlerToAttach === "undefined") {
				var eventHash = eventName;
				var i;
				for (i in eventHash) {
					this.on(i, eventHash[i]);
				}
				return this;
			} else if (typeof eventName === "string" &&
				typeof handlerToAttach === "function") {
				var handlerList = this.eventHandler[eventName];

				if (typeof handlerList === "undefined") {
					handlerList = this.eventHandler[eventName] = [];
				}

				handlerList.push(handlerToAttach);
			}

			return this;
		},
		/**
		 * Detaches an event from the component.
		 * @ko 컴포넌트에 등록된 이벤트를 해제한다
		 * @method eg.Component#off
		 * @param {eventName} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
		 * @param {Function} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
		 * @return {eg.Component} An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
		 * @example
			var Some = eg.Class.extend(eg.Component,{
				"hi": function(){},
				"some": function(){
					this.off("hi",this.hi); //detach event
				}
			});
		 */
		off: function(eventName, handlerToDetach) {
			// All event detach.
			if (arguments.length === 0) {
				this.eventHandler = {};
				return this;
			}

			// All handler of specific event detach.
			if (typeof handlerToDetach === "undefined") {
				if (typeof eventName === "string") {
					this.eventHandler[eventName] = undefined;
					return this;
				} else {
					var eventHash = eventName;
					for (var i in eventHash) {
						this.off(i, eventHash[i]);
					}
					return this;
				}
			}

			// The handler of specific event detach.
			var handlerList = this.eventHandler[eventName];
			if (handlerList) {
				var k;
				var handlerFunction;
				for (k = 0; handlerFunction = handlerList[k]; k++) {
					if (handlerFunction === handlerToDetach) {
						handlerList.splice(k, 1);
						break;
					}
				}
			}

			return this;
		}
	});
});


/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

// jscs:disable maximumLineLength
eg.module("rotate", ["jQuery", eg, window, document], function($, ns, global, doc) {
// jscs:enable maximumLineLength
	/**
	 * @namespace jQuery
	 * @group jQuery Extension
	 */
	/**
	 * This jQuery custom event is fired when device rotates.
	 *
	 * @ko 기기가 회전할 때 발생하는 jQuery 커스텀 이벤트
	 * @name jQuery#rotate
	 * @event
	 * @param {Event} e The Event object in jQuery<ko>jQuery의 Event 객체</ko>
	 * @param {Object} info The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
	 * @param {Boolean} info.isVertical The orientation of the device (true: portrait, false: landscape) <ko>기기의 화면 방향(true: 수직 방향, false: 수평 방향)</ko>
	 * @support { "ios" : "7+", "an" : "2.1+ (except 3.x)"}
	 * @example
	 * $(window).on("rotate",function(e, info){
	 *      info.isVertical;
	 * });
	 *
	 */

	var beforeScreenWidth = -1;
	var beforeVertical = null;
	var rotateTimer = null;

	var agent = (function() {
		var ua = global.navigator.userAgent;
		var match = ua.match(/(iPhone OS|CPU OS|Android)\s([^\s;-]+)/);  // fetch Android & iOS env only
		var res = {
			os: "",
			version: ""
		};

		if (match) {
			res.os = match[1].replace(/(?:CPU|iPhone)\sOS/, "ios").toLowerCase();
			res.version = match[2].replace(/\D/g, ".");
		}

		return res;
	})();

	var isMobile = /android|ios/.test(agent.os);

	if (!isMobile) {
		ns.isPortrait = function() {
			return false;
		};

		return;
	}

	/**
	 * Return event name string for orientationChange according browser support
	 */
	var orientationChange = function() {
		var type;
		/**
		 * Some platform/broswer returns previous widht/height state value. For workaround, give some delays.
		 *
		 * Android bug:
		 * - Andorid 2.3 - Has orientationchange with bug. Needs 500ms delay.
		 *
		 *   Note: Samsung's branded Android 2.3
		 *   When check orientationchange using resize event, could cause browser crash if user binds resize event on window
		 *
		 * - Android 2.2 - orientationchange fires twice(at first time width/height are not updated, but second returns well)
		 * - Lower than 2.2 - use resize event
		 *
		 * InApp bug:
		 * - Set 200ms delay
		 */
		if ((agent.os === "android" && agent.version === "2.1")) {//|| htInfo.galaxyTab2)
			type = "resize";
		} else {
			type = "onorientationchange" in global ? "orientationchange" : "resize";
		}

		orientationChange = function() {
			return type;
		};
		return type;

	};
	/**
	* When viewport orientation is portrait, return true otherwise false
	*/
	function isVertical() {
		var eventName = orientationChange();
		var screenWidth;
		var degree;
		var vertical;

		if (eventName === "resize") {
			screenWidth = doc.documentElement.clientWidth;

			if (beforeScreenWidth === -1) { //first call isVertical
				vertical = screenWidth < doc.documentElement.clientHeight;
			} else {
				if (screenWidth < beforeScreenWidth) {
					vertical = true;
				} else if (screenWidth === beforeScreenWidth) {
					vertical = beforeVertical;
				} else {
					vertical = false;
				}
			}
		} else {
			degree = global.orientation;
			if (degree === 0 || degree === 180) {
				vertical = true;
			} else if (degree === 90 || degree === -90) {
				vertical = false;
			}
		}
		return vertical;
	}

	/**
	* Trigger rotate event
	*/
	function triggerRotate() {

		var currentVertical = isVertical();
		if (isMobile) {
			if (beforeVertical !== currentVertical) {
				beforeVertical = currentVertical;
				beforeScreenWidth = doc.documentElement.clientWidth;
				$(global).trigger("rotate", {
					isVertical: beforeVertical
				});
			}
		}
	}

	/**
	* Trigger event handler
	*/
	function handler(e) {

		var eventName = orientationChange();
		var delay;
		var screenWidth;

		if (eventName === "resize") {
			global.setTimeout(function() {
				triggerRotate();
			}, 0);
		} else {
			delay = 300;
			if (agent.os === "android") {
				screenWidth = doc.documentElement.clientWidth;
				if (e.type === "orientationchange" && screenWidth === beforeScreenWidth) {
					global.setTimeout(function() {
						handler(e);
					}, 500);

					// When width value wasn't changed after firing orientationchange, then call handler again after 300ms.
					return false;
				}
			}

			global.clearTimeout(rotateTimer);
			rotateTimer = global.setTimeout(function() {
				triggerRotate();
			}, delay);
		}
	}

	$.event.special.rotate = {
		setup: function() {
			beforeVertical = isVertical();
			beforeScreenWidth = doc.documentElement.clientWidth;
			$(global).on(orientationChange(), handler);
		},
		teardown: function() {
			$(global).off(orientationChange(), handler);
		},
		trigger: function(e) {
			e.isVertical = beforeVertical;
		}
	};

	/**
	 * Checks whether the current orientation of the device is portrait.
	 * @ko 기기의 화면이 수직 방향인지 확인한다
	 * @method eg#isPortrait
	 * @return {Boolean} The orientation of the device (true: portrait, false: landscape) <ko>기기의 화면 방향(true: 수직 방향, false: 수평 방향)</ko>
	 * @example
eg.isPortrait();  // Check if device is in portrait mode
	*/
	ns.isPortrait = isVertical;

	return {
		"orientationChange": orientationChange,
		"isVertical": isVertical,
		"triggerRotate": triggerRotate,
		"handler": handler
	};
});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

// jscs:disable maximumLineLength
eg.module("scrollEnd", ["jQuery", eg, window], function($, ns, global) {
// jscs:eable maximumLineLength
	/**
	* A custom event in jQuery occurs when scroll ends.
	* @ko 스크롤이 끝날 때 발생하는 jQuery 커스텀 이벤트
	* @name jQuery#scrollEnd
	* @event
	* @param {Event} e The Event object in jQuery <ko>jQuery의 Event 객체</ko>
	* @param {Object} info The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
	* @param {Number} info.top The size of the vertical scroll pane (unit: px)<ko>세로 스크롤 영역의 크기(단위: px)</ko>
	* @param {Number} info.left The size of horizontal scroll pane (unit: px)<ko>가로 스크롤 영역의 크기(단위: px)</ko>
	* @support {"ie": "9+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
	* @example
	* $(window).on("scrollend",function(e, info){
	*      info.top;
	*      info.left;
	* });
	*
	*/

	var scrollEndTimer;
	var userAgent = global.navigator.userAgent;
	var rotateFlag = false;

	var CHROME = 3;
	var TIMERBASE = 2;
	var TOUCHBASE = 1;
	var SCROLLBASE = 0;

	var latency = 250;

	var detectType = getDetectType(userAgent);

	$.event.special.scrollend = {
		setup: function() {
			attachEvent();
		},
		teardown: function() {
			removeEvent();
		}
	};

	/**
	 * iOS & Safari:
	 * 		iOS7 and lower, scroll event occurs once when the scroll is stopped
	 * 		iOS8 and upper, scroll event occurs on every scroll
	 * 		Scroll event occurs when the rotation
	 * Android:
	 *		Scroll event occurs on every scroll
	 *		Scroll event occurs on rotation and should be ignored to handle
	 * @ko
	 * iOS & Safari :
	 *		iOS 7.x 이하에서는 스크롤이 멈췄을때 scroll 이벤트 한번 발생
	 *      iOS 8.x 이상에서는 scroll 이벤트가 android 와 동일하게 스크롤시 매번 발생
	 *		회전시 scroll 이벤트가 발생되어 이를 무시처리해야함
	 *		(orientationchange 에 의해 발생하는 scroll 이벤트 1회만 무시)
	 * Android :
	 *		스크롤시 scroll 이벤트 매번 발생
	 *		회전시 scroll 이벤트가 발생되어 이를 무시 처리해야 함
	 */
	function getDetectType(userAgent) {
		var deviceName;
		var osVersion;
		var retValue = TIMERBASE;
		var matchedDevice = userAgent.match(/iPhone|iPad|Android/);
		var webviewToken = /NAVER|DAUM|; wv/;
		var webviewToken2 = /Version/;

		// webview : TIMERBASE
		if (matchedDevice !== null && !webviewToken.test(userAgent)) {
			deviceName = matchedDevice[0];

			// Browsers that trigger scroll event like scrollstop : SCROLLBASE
			osVersion = userAgent.match(/\s(\d{1,2})_\d/);

			if (deviceName !== "Android" && webviewToken2.test(userAgent) && osVersion && parseInt(osVersion[1], 10) <= 7) {
				retValue = SCROLLBASE;
			} else if (deviceName === "Android") {
				osVersion = userAgent.match(/Android\b(.*?);/);
				if (!/Chrome/.test(userAgent) && osVersion && parseFloat(osVersion) <= 2.3) {
					retValue = SCROLLBASE;
				}
			}
		}
		return retValue;
	}

	function attachEvent() {
		$(global).on("scroll", scroll);
		$(global).on("orientationchange", onOrientationchange);
	}

	function onOrientationchange() {
		rotateFlag = true;
	}

	function scroll() {
		if (rotateFlag) {
			rotateFlag = false;
			return;
		}

		switch (detectType) {
			case SCROLLBASE :
				triggerScrollEnd();
				break;
			case TIMERBASE :
				triggerScrollEndAlways();
				break;
		}

	}

	function triggerScrollEnd() {
		$(global).trigger("scrollend", {
			top: global.pageYOffset,
			left: global.pageXOffset
		});
	}

	function triggerScrollEndAlways() {
		clearTimeout(scrollEndTimer);
		scrollEndTimer = setTimeout(function() {
			if (rotateFlag) {
				rotateFlag = false;
				return;
			}
			triggerScrollEnd();
		}, latency);
	}

	function removeEvent() {
		$(global).off("scroll", scroll);
		$(global).off("orientationchange", onOrientationchange);
	}

	return {
		detectType: detectType,
		getDetectType: getDetectType,
		CHROME: CHROME,
		TIMERBASE: TIMERBASE,
		TOUCHBASE: TOUCHBASE,
		SCROLLBASE: SCROLLBASE
	};
});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

/**
 * A method that extends the <a href=http://api.jquery.com/animate/>.animate()</a> method provided by jQuery. With this method, you can use the transform property and 3D acceleration
 * @ko jQuery의<a href=http://api.jquery.com/animate/>animate() 메서드</a>를 확장한 메서드. CSS의 transform 속성과 3D 가속을 사용할 수 있다.
 * @name jQuery#animate
 * @method
 * @param {Object} properties An object composed of the CSS property and value which will be applied to an animation<ko>애니메이션을 적용할 CSS 속성과 값으로 구성된 객체</ko>
 * @param {Number|String} [duration=4000] Duration of the animation (unit: ms)<ko>애니메이션 진행 시간(단위: ms)</ko>
 * @param {String} [easing="swing"] The easing function to apply to an animation<ko>애니메이션에 적용할 easing 함수</ko>
 * @param {Function} [complete] A function that is called once the animation is complete.<ko>애니메이션을 완료한 다음 호출할 함수</ko>
 *
 * @example
 * $("#box")
 * 		.animate({"transform" : "translate3d(150px, 100px, 0px) rotate(20deg) scaleX(1)"} , 3000)
 * 		.animate({"transform" : "+=translate3d(150px, 10%, -20px) rotate(20deg) scale3d(2, 4.2, 1)"} , 3000);
 * @see {@link http://api.jquery.com/animate/}
 *
 * @support {"ie": "10+", "ch" : "latest", "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
 */
eg.module("transform", ["jQuery", window], function($) {
/**
	 * Get a 'px' converted value if it has a %.
	 * Otherwise it returns value appened with 'px'.
	 */
	function getConverted(val, base) {
		var ret = val;
		var num = val.match(/((-|\+)*[0-9]+)%/);

		if (num && num.length >= 1) {
			ret = base * (parseFloat(num[1]) / 100) + "px";
		} else if (val.indexOf("px") === -1) {
			ret = val + "px";
		}

		return ret;
	}

	function correctUnit(transform, width, height) {
		var m;
		var ret = "";
		var arr = transform.split(")");

		for (var i = 0, len = arr.length - 1; i < len; i++) {
			var name = arr[i];

			// '%' is only meaningful on translate.
			if ((m = name.match(/(translate([XYZ]|3d)?|rotate)\(([^)]*)/)) && m.length > 1) {
				if (m[1] === "rotate") {
					if (m[3].indexOf("deg") === -1) {
						name = m[1] + "(" + m[3] + "deg";
					}
				} else {
					switch (m[2]) {
					case "X":
						name = m[1] + "(" + getConverted(m[3], width);
						break;
					case "Y":
						name = m[1] + "(" +  getConverted(m[3], height);
						break;
					case "Z":

						//Meaningless. Do nothing
						break;
					default://2d, 3d
						var nums = m[3].split(",");
						var bases = [width, height, 100];

						for (var k = 0, l = nums.length; k < l; k++) {
							nums[k] = getConverted(nums[k], bases[k]);
						}
						name = m[1] + "(" + nums.join(",");
						break;
					}
				}
			}

			name = " " + name + ")";
			ret += name;
		}

		//Remove wrong '%'s and '+=' because it cannot be translated to a matrix.
		ret = ret.replace("%", "").replace("+=", "");
		return ret;
	}

	/**
	 * Parse a transform atom value.
	 *
	 * "30px" --> {num: 30, unit: "px"}
	 *
	 * Because calculation of string number is heavy,
	 * In advance, convert a string number to a float number with an unit for the use of transformByPos,
	 * which is called very frequently.
	 */
	function toParsedFloat(val) {
		var m = val.match(/((-|\+)*[\d|\.]+)(px|deg|rad)*/);
		if (m && m.length >= 1) {
			return {"num": parseFloat(m[1]), "unit": m[3]};
		}
	}

	function getTransformGenerateFunction(transform) {
		var splitted = transform.split(")");
		var list = [];

		//Make parsed transform list.
		for (var i = 0, len = splitted.length - 1; i < len; i++) {
			var parsed = parseStyle(splitted[i]);

			parsed[1] = $.map(parsed[1], toParsedFloat);
			list.push(parsed);
		}

		return function transformByPos(pos) {
			var transform = "";
			var defaultVal = 0;

			$.each(list, function(i) {
				if (list[i][0].indexOf("scale") >= 0) {
					defaultVal = 1;
				} else {
					defaultVal = 0;
				}

				var valStr = $.map(list[i][1], function(value) {
					var val = value.num;
					defaultVal === 1 && (val = val - 1);
					return (defaultVal + val * pos) + (value.unit || "");
				}).join(",");

				transform += list[i][0] + "(" + valStr + ") ";
			});

			return transform;
		};
	}

	function rateFn(element, startTf, endTf) {
		var isRelative = endTf.indexOf("+=") >= 0;
		var start;
		var end;
		var basePos;

		// Convert translate unit to 'px'.
		endTf = correctUnit(endTf,
					parseFloat($.css(element, "width")) || 0,
					parseFloat($.css(element, "height")) || 0);

		if (isRelative) {
			start = (!startTf || startTf === "none") ?
						"matrix(1, 0, 0, 1, 0, 0)" : startTf;
			end = getTransformGenerateFunction(endTf);
		} else {
			start = toMatrixArray(startTf);
			basePos = toMatrixArray("none");//transform base-position

			//If the type of matrix is not equal, then match to matrix3d
			if (start[1].length < basePos[1].length) {
				start = toMatrix3d(start);
			} else if (start[1].length > basePos[1].length) {
				basePos = toMatrix3d(basePos);
			}

			end = getTransformGenerateFunction(endTf);
		}

		return function(pos) {
			var result = [];
			var ret = "";//matrix for interpolated value from current to base(1, 0, 0, 1, 0, 0)

			if (isRelative) {
				// This means a muliply between a matrix and a transform.
				return start + end(pos);
			}

			if (pos === 1) {
				ret = data2String(basePos);
			} else {
				for (var i = 0, s, e, l = start[1].length; i < l; i++) {
					s = parseFloat(start[1][i]);
					e = parseFloat(basePos[1][i]);

					result.push(s + (e - s) * pos);
				}

				ret = data2String([start[0], result]);
			}

			return ret + end(pos);
		};
	}

	/**
	 * ["translate", [100, 0]] --> translate(100px, 0)
	 * {translate : [100, 0]} --> translate(100px, 0)
	 * {matrix : [1, 0, 1, 0, 100, 0]} --> matrix(1, 0, 1, 0, 100, 0)
	 */
	function data2String(property) {
		var name;
		var tmp = [];

		if ($.isArray(property)) {
			name = property[0];
			return name + "(" + property[1].join(unit(name) + ",") + unit(name) + ")";
		} else {
			for (name in property) {
				tmp.push(name);
			}

			return $.map(tmp, function(v) {
				return v + "(" +  property[v] + unit(v) + ")";
			}).join(" ");
		}
	}

	function unit(name) {
		return name.indexOf("translate") >= 0 ?
				"px" : name.indexOf("rotate") >= 0 ? "deg" : "";
	}

	// ["translate" , ["10", "20"]]
	function parseStyle(property) {
		var m = property.match(/(\b\w+?)\((\s*[^\)]+)/);
		var name;
		var value;
		var result = ["",""];

		if (m && m.length > 2) {
			name = m[1];
			value = m[2].split(",");
			value = $.map(value, function(v) {
				return $.trim(v);
			});
			result = [ $.trim(name), value ];
		}
		return result;
	}

	/**
	 * Convert matrix string to array type.
	 *
	 * eg. matrix(1, 0, 0, 1, 0, 0) ==>  ["matrix", [1, 0, 0, 1, 0, 0]]
	 * matrix3d(1,0,0,0,0,1,-2.44929e-16,0,0,2.44929e-16,1,0,0,0,0,1)
	 */
	function toMatrixArray(matrixStr) {
		var matched;

		if (!matrixStr || matrixStr === "none") {
			return ["matrix", [ "1", "0", "0", "1", "0", "0"] ];
		}

		matrixStr = matrixStr.replace(/\s/g, "");
		matched = matrixStr.match(/(matrix)(3d)*\((.*)\)/);

		return [matched[1] + (matched[2] || ""), matched[3].split(",")];
	}

	function toMatrix3d(matrix) {
		var name = matrix[0];
		var val = matrix[1];

		if (name === "matrix3d") {
			return matrix;
		}

		// matrix(a, b, c, d, tx, ty) is a shorthand for matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)
		return [
			name + "3d", [val[0], val[1], "0", "0",
						val[2], val[3], "0", "0",
						"0", "0", "1", "0",
						val[4], val[5], "0", "1"]
		];
	}

	$.fx.step.transform = function(fx) {
		fx.rateFn = fx.rateFn || rateFn(fx.elem, fx.start, fx.end);
		$.style(fx.elem, "transform", fx.rateFn(fx.pos));
	};

	// All of this interfaces are functions for unit testing.
	return {
		toMatrix: toMatrixArray,
		toMatrix3d: toMatrix3d
	};
});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

eg.module("cssPrefix", ["jQuery", document], function($, doc) {
/**
	 * Enables to add CSS vendor prefixes when you use some jQuery version(1.4.3 ~ 1.8.x) that does not support them.
	 * @ko css에 vender prefix를 자동으로 추가하는 cssHooks이다. 지원하지 않는 jQuery 1.4.3 ~ 1.8.x에서만 활성화 된다.
	 *
	 * @name jQuery#cssPrefix
	 * @method
	 *
	 * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
	 * @example
	 * $("#ID").css("transform", "translate('10px', '10px');
	 * $("#ID").css("Transform", "translate('10px', '10px');
	 * $("#ID").css("webkitTransform", "translate('10px', '10px');
	 * $("#ID").css("transform");
	 * $("#ID").css("webkitTransform");
	 */

	if (!$.cssHooks) {
		throw (new Error("jQuery 1.4.3+ is needed for this plugin to work"));
	}

	// run in jQuery 1.8.x below
	var matchTest = ($.fn.jquery.match(/^\d\.\d+/) || [])[0];
	if (!matchTest || +matchTest.replace(/\D/, "") >= 18) {
		return;
	}

	var cssPrefixes = [ "Webkit", "Moz", "O", "ms" ];
	var acts = ["transitionProperty", "transitionDuration", "transition",
				"transform", "transitionTimingFunction"];

	var vendorPrefix = (function() {
		var bodyStyle = (doc.head || doc.getElementsByTagName("head")[0]).style;
		for (var i = 0, len = cssPrefixes.length ; i < len ; i++) {
			if (cssPrefixes[i] + "Transition" in bodyStyle) {
				return cssPrefixes[i];
			}
		}
	})();

	// ie7, 8 - transform and transition are not supported
	// ie9 - transition not supported
	if (!vendorPrefix) {
		return;
	}

	// If "ms" using "Ms" property in the get function
	var setCssHooks = function(prop) {
		var upperProp = prop.charAt(0).toUpperCase() + prop.slice(1);
		var vendorProp = vendorPrefix + upperProp;
		var getVendorProp = vendorPrefix === "ms" ? "Ms" + upperProp : vendorProp;

		$.cssHooks[upperProp] =
		$.cssHooks[vendorPrefix.toLowerCase() + upperProp] =
		$.cssHooks[prop] = {
			get: function(elem, computed) {
				return computed ? $.css(elem, getVendorProp) : elem.style[vendorProp];
			},
			set: function(elem, value) {
				elem.style[vendorProp] = value;
			}
		};
	};

	for (var n = 0, actsLen = acts.length; n < actsLen; n++) {
		setCssHooks(acts[n]);
	}

	return {
		vendorPrefix: vendorPrefix,
		setCssHooks: setCssHooks
	};

});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/
eg.module("pauseResume", ["jQuery"], function($) {
var animateFn = $.fn.animate;
	var stopFn = $.fn.stop;
	var delayFn = $.fn.delay;
	var uuid = 1;

	function AniProperty(type, el, prop, optall) {
		this.el = el;
		this.opt = optall;
		this.start = -1;
		this.elapsed = 0;
		this.paused = false;
		this.uuid = uuid++;
		this.easingNames = [];
		this.prop = prop;
		this.type = type;
	}

	/**
	 * Generate a new absolute value maker.
	 *
	 * function to avoid JS Hint error "Don't make functions within a loop"
	 */
	function generateAbsoluteValMaker(prevValue, propName, sign) {
		return function absoluteValMaker(match) {
			if (!prevValue || prevValue === "auto") {
				// Empty strings, null, undefined and "auto" are converted to 0.
				// This solution is somewhat extracted from jQuery Tween.propHooks._default.get
				// TODO: Should we consider adopting a Tween.propHooks?
				prevValue = 0;
			} else {
				prevValue = parseFloat(prevValue);
			}
			return prevValue + (match * sign);
		};
	}

	AniProperty.prototype.init = function() {
		var currValue;
		this.start = $.now();
		this.elapsed = 0;

		for (var propName in this.prop) {
			var propValue = this.prop[propName];
			var markIndex;
			var sign;

			// DO NOT SUPPORT TRANSFORM YET
			// TODO: convert from relative value to absolute value on transform
			if (propName === "transform") {
				continue;
			}

			//If it has a absoulte value.
			if (typeof propValue !== "string" ||
				(markIndex = propValue.search(/[+|-]=/)) < 0) {
				// this.prop[propName] = propValue;
				continue;
			}

			//If it has a relative value
			sign = propValue.charAt(markIndex) === "-" ? -1 : 1;

			// Current value
			currValue = $.css(this.el, propName);

			// CurrValue + (relativeValue)
			this.prop[propName] = propValue
				.replace(/([-|+])*([\d|\.])+/g,
					generateAbsoluteValMaker(currValue, propName, sign))
				.replace(/[-|+]+=/g, "");
		}
	};

	AniProperty.prototype.addEasingFn = function(easingName) {
		this.easingNames.push(easingName);
	};

	AniProperty.prototype.clearEasingFn = function() {
		var easing;
		while (easing = this.easingNames.shift()) {
			delete $.easing[easing];
		}
		this.easingNames = [];
	};

	function addAniProperty(type, el, prop, optall) {
		var newProp;

		newProp = new AniProperty(type, el, prop, optall);
		el.__aniProps = el.__aniProps || [];

		//Animation is excuted immediately.
		if (el.__aniProps.length === 0) {
			newProp.init();
		}
		el.__aniProps.push(newProp);
	}

	function removeAniProperty(el) {
		var removeProp = el.__aniProps.shift();
		removeProp && removeProp.clearEasingFn();

		el.__aniProps[0] && el.__aniProps[0].init();
	}

	$.fn.animate = function(prop, speed, easing, callback) {
		return this.each(function() {
			//optall should be made for each elements.
			var optall = $.speed(speed, easing, callback);

			// prepare next animation when current animation completed.
			optall.complete = function() {
				prepareNextAniProp(this);
			};

			//Queue animation property to recover the current animation.
			addAniProperty("animate", this, prop, optall);
			animateFn.call($(this), prop, optall);
		});

		// TODO: Below code is more reasonable?
		// return animateFn.call(this, prop, optall); // and declare optall at outside this.each loop.
	};

	// Check if this element can be paused/resume.
	function getStatus(el) {
		if (!el.__aniProps || el.__aniProps.length === 0) {
			// Current element doesn't have animation information.
			// Check 'animate' is applied to this element.
			return "empty";
		}

		return el.__aniProps[0].paused ? "paused" : "inprogress";
	}

	/**
	 * Set a timer to delay execution of subsequent items in the queue.
	 * And it internally manages "fx"queue to support pause/resume if "fx" type.
	 *
	 * @param {Number} An integer indicating the number of milliseconds to delay execution of the next item in the queue.
	 * @param {String} A string containing the name of the queue. Defaults to fx, the standard effects queue.
	 */
	$.fn.delay = function(time, type) {
		var t;
		var isCallByResume = arguments[2];//internal used value.

		if (type && type !== "fx") {
			return delayFn.call(this, time, type);
		}

		t = parseInt(time, 10);
		t = isNaN(t) ? 0 : t;

		return this.each(function() {
			if (!isCallByResume) {
				// Queue delay property to recover the current animation.
				// Don't add property when delay is called by resume.
				addAniProperty("delay", this, null, {duration: t});
			}

			var self = this;
			delayFn.call($(this), time).queue(function(next) {
				next();

				// Remove delay property when delay has been expired.
				removeAniProperty(self);
			});
		});
	};

	/**
	 * Pauses the animation executed through a call to the jQuery <a href=http://api.jquery.com/animate/>.animate()</a> method.
	 * @ko jQuery의<a href=http://api.jquery.com/animate/>animate() 메서드</a>가 실행한 애니메이션을 일시 정지한다
	 *
	 * @name jQuery#pause
	 * @method
	 * @support {"ie": "10+", "ch" : "latest", "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
	 * @example
	 * $("#box").pause(); //paused the current animation
	 */
	$.fn.pause = function() {
		return this.each(function() {
			var p;
			var type = "fx";

			if (getStatus(this) !== "inprogress") {
				return;
			}

			//Clear fx-queue except 1 dummy function
			//for promise not to be expired when calling stop()
			$.queue(this, type, [$.noop]);
			stopFn.call($(this));

			//Remember current animation property
			if (p = this.__aniProps[0]) {
				p.elapsed += $.now() - p.start;

				// Complement native timer's inaccuracy (complete timer can be different from your request.)
				// (eg. your request:400ms -> real :396 ~ 415 ms ))
				if (p.elapsed >= p.opt.duration) {
					p = prepareNextAniProp(this);
				}

				p && (p.paused = true);
			}
		});
	};

	function prepareNextAniProp(el) {
		var removeProp;
		var userCallback;

		// Dequeue animation property that was ended.
		removeProp = el.__aniProps.shift();
		removeProp.clearEasingFn();
		userCallback = removeProp.opt.old;

		// Callback should be called before aniProps.init()
		if (userCallback && typeof userCallback === "function") {
			userCallback.call(el);
		}

		// If next ani property exists
		el.__aniProps[0] && el.__aniProps[0].init();
		return el.__aniProps[0];
	}

	/**
	 * Resumes the animation paused through a call to the pause() method.
	 * @ko pause() 메서드가 일시 정지한 애니메이션을 다시 실행한다
	 *
	 * @name jQuery#resume
	 * @method
	 * @support {"ie": "10+", "ch" : "latest", "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
	 * @example
	 * $("#box").resume(); //resume the paused animation
	 */
	$.fn.resume = function() {
		return this.each(function() {
			var type = "fx";
			var p;
			var i;

			if (getStatus(this) !== "paused") {
				return;
			}

			//Clear fx-queue,
			//And this queue will be initialized by animate call.
			$.queue(this, type, []);

			// Restore __aniProps
			i = 0;
			while (p = this.__aniProps[i]) {
				// Restore easing status
				if (p.elapsed > 0 && p.opt.easing) {
					var resumePercent = p.elapsed / p.opt.duration;
					var remainPercent = 1 - resumePercent;
					var originalEasing = $.easing[p.opt.easing];
					var startEasingValue = originalEasing(resumePercent);
					var scale = scaler([startEasingValue, 1], [0, 1]);
					var newEasingName = p.opt.easing + "_" + p.uuid;

					// Make new easing function that continues from pause point.
					$.easing[newEasingName] = generateNewEasingFunc(
						resumePercent, remainPercent, scale, originalEasing);
					p.opt.easing = newEasingName;

					//Store new easing function to clear it later.
					p.addEasingFn(newEasingName);
				}

				p.paused = false;
				p.opt.duration -= p.elapsed;

				// If duration remains, request 'animate' with storing aniProps
				if (p.opt.duration > 0 || p.elapsed === 0) {
					i === 0 && p.init();

					if (p.type === "delay") {
						// pass last parameter 'true' not to add an aniProperty.
						$(this).delay(p.opt.duration, "fx", true);
					} else {
						animateFn.call($(this), p.prop, p.opt);
					}
				}

				i++;
			}
		});
	};

	/**
	 * Generate a new easing function.
	 *
	 * function to avoid JS Hint error "Don't make functions within a loop"
	 */
	function generateNewEasingFunc(resumePercent, remainPercent, scale, originalEasing) {
		return function easingFunc(percent) {
			var newPercent = resumePercent + remainPercent * percent;
			return scale(originalEasing(newPercent));
		};
	}

	$.fn.stop = function(type, clearQueue) {
		var clearQ = clearQueue;
		stopFn.apply(this, arguments);

		if (typeof type !== "string") {
			clearQ = type;
		}

		return this.each(function() {
			var p;

			// When this element was not animated properly, do nothing.
			if (getStatus(this) === "empty") {
				return;
			}

			if (!clearQ) {
				p = this.__aniProps.shift();
				p && p.clearEasingFn();
			} else {
				//If clearQueue is requested,
				//then all properties must be initialized
				//for element not to be resumed.
				while (p = this.__aniProps.shift()) {
					p.clearEasingFn();
				}
				this.__aniProps = [];
			}
		});
	};

	jQuery.expr.filters.paused = function(elem) {
		return getStatus(elem) === "paused";
	};

	//Adopt linear scale from d3
	function scaler(domain, range) {
		var u = uninterpolateNumber(domain[0], domain[1]);
		var i = interpolateNumber(range[0], range[1]);

		return function(x) {
			return i(u(x));
		};
	}

	function interpolateNumber(a, b) {
		a = +a, b = +b;
		return function(t) {
			return a * (1 - t) + b * t;
		};
	}

	function uninterpolateNumber(a, b) {
		b = (b -= a = +a) || 1 / b;
		return function(x) {
			return (x - a) / b;
		};
	}
});

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

// jscs:disable maximumLineLength
eg.module("persist", ["jQuery", eg, window, document], function($, ns, global, doc) {
// jscs:enable maximumLineLength
	var wp = global.performance;
	var history = global.history;
	var agent = ns.agent();

	var isNeeded = (function() {
		var version = parseFloat(agent.os.version);

		return !(
				agent.os.name === "ios" ||
				(agent.os.name === "mac" && agent.browser.name === "safari") ||
				(agent.os.name === "android" &&
					(version <= 4.3 && agent.browser.webview === true || version < 3))
		);
	})();

	var JSON = global.JSON;
	var CONST_PERSIST = "___persist___";
	var GLOBAL_KEY = "KEY" + CONST_PERSIST;
	var $global = $(global);
	var isPersisted = $global.attr(CONST_PERSIST) === true;

	// In case of IE8, TYPE_BACK_FORWARD is undefined.
	var isBackForwardNavigated = (wp && wp.navigation &&
									(wp.navigation.type === (wp.navigation.TYPE_BACK_FORWARD || 2)));
	var isSupportState = "replaceState" in history && "state" in history;

	var storage = (function() {
		if (isStorageAvailable(global.sessionStorage)) {
			return global.sessionStorage;
		} else if (isStorageAvailable(global.localStorage)) {
			return global.localStorage;
		}
	})();

	function isStorageAvailable(storage) {
		if (!storage) {
			return;
		}
		var TMP_KEY = "__tmp__" + CONST_PERSIST;

		try {
			// In case of iOS safari private mode, calling setItem on storage throws error
			storage.setItem(TMP_KEY, CONST_PERSIST);

			// In Chrome incognito mode, can not get saved value
			// In IE8, calling storage.getItem occasionally makes "Permission denied" error
			return storage.getItem(TMP_KEY) === CONST_PERSIST;
		} catch (e) {
			return false;
		}
	}
	if (!isSupportState && !storage) {
		return;
	}

	// jscs:disable maximumLineLength
	/* jshint ignore:start */
	if (!JSON) {
		console.warn(
		"The JSON object is not supported in your browser.\r\n" +
		"For work around use polyfill which can be found at:\r\n" +
		"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#Polyfill");
		return;
	}
	/* jshint ignore:end */

	// jscs:enable maximumLineLength

	/**
	 * This jQuery custom event is fired when device rotates.
	 *
	 * @ko 기기가 회전할 때 발생하는 jQuery 커스텀 이벤트
	 * @name jQuery#persist
	 * @event
	 * @deprecated since version 1.2.0
	 * @example
	 * $(window).on("persist",function(){
	 *      var state = $.persist("KEY");
	 *		// Restore state
	 * });
	 *
	 */
	function onPageshow(e) {
		isPersisted = isPersisted || (e.originalEvent && e.originalEvent.persisted);
		if (!isPersisted && isBackForwardNavigated) {
			$global.trigger("persist");
		} else {
			reset();
		}
	}

	/*
	 * flush current history state
	 */
	function reset() {
		setState(null);
	}
	/*
	 * Get state value
	 */
	function getState() {
		var state;
		var stateStr = storage ?
			storage.getItem(global.location.href + CONST_PERSIST) : history.state;

		// the storage is clean
		if (stateStr === null) {
			return {};
		}

		// "null" is not a valid
		var isValidStateStr = typeof stateStr === "string" &&
									stateStr.length > 0 && stateStr !== "null";
		var isValidType;

		try {
			state = JSON.parse(stateStr);

			// like '[ ... ]', '1', '1.234', '"123"' is also not valid
			isValidType = !($.type(state) !== "object" || state instanceof Array);

			if (!isValidStateStr || !isValidType) {
				throw new Error();
			}
		} catch (e) {
			warnInvalidStorageValue();
			state = {};
		}

		// Note2 (Android 4.3) return value is null
		return state;
	}

	function warnInvalidStorageValue() {
		/* jshint ignore:start */
		console.warn("window.history or session/localStorage has no valid " +
				"format data to be handled in persist.");
		/* jshint ignore:end */
	}

	function getStateByKey(key) {
		var result = getState()[key];

		// some device returns "null" or undefined
		if (result === "null" || typeof result === "undefined") {
			result = null;
		}
		return result;
	}
	/*
	 * Set state value
	 */
	function setState(state) {
		if (storage) {
			if (state) {
				storage.setItem(
					global.location.href + CONST_PERSIST, JSON.stringify(state));
			} else {
				storage.removeItem(global.location.href  + CONST_PERSIST);
			}
		} else {
			try {
				history.replaceState(
					state === null ? null : JSON.stringify(state),
					doc.title,
					global.location.href
				);
			} catch (e) {
				/* jshint ignore:start */
				console.warn(e.message);
				/* jshint ignore:end */
			}
		}

		state ? $global.attr(CONST_PERSIST, true) : $global.attr(CONST_PERSIST, null);
	}

	function setStateByKey(key, data) {
		var beforeData = getState();
		beforeData[key] = data;
		setState(beforeData);
	}
	/**
	* Get or store the current state of the web page using JSON.
	* @ko 웹 페이지의 현재 상태를 JSON 형식으로 저장하거나 읽는다.
	* @method jQuery.persist
    * @param {String} key The key of the state information to be stored <ko>저장할 상태 정보의 키</ko>
    * @param {Object} [state] The value to be stored in a given key <ko>키에 저장할 값</ko>
	* @example
	// when 'key' and 'value' are given, it saves state object
	$.persist("KEY",state);
	// when only 'key' is given, it loads state object
	var state = $.persist("KEY");
	* @example
	// this is deprecated API
	// save state without Key
	$.persist(state);
	// get state without Key
	var state = $.persist();
	*/
	$.persist = function(state, data) {
		var key;

		if (typeof state === "string") {
			key = state;
		} else {
			key = GLOBAL_KEY;
			data = arguments.length === 1 ? state : null;
		}

		if (data || arguments.length === 2) {
			setStateByKey(key, data);
		}

		return getStateByKey(key);
	};

	/**
	* Return whether you need "Persist" module by checking the bfCache support of the current browser
	* @ko 현재 브라우저의 bfCache 지원여부에 따라 persist 모듈의 필요여부를 반환한다.
	* @group jQuery Extension
	* @namespace
	* @property {function} isNeeded
	* @example
	$.persist.isNeeded();
	*/
	$.persist.isNeeded = function() {
		return isNeeded;
	};

	// in case of reload
	!isBackForwardNavigated && reset();

	$.event.special.persist = {
		setup: function() {
			$global.on("pageshow", onPageshow);
		},
		teardown: function() {
			$global.off("pageshow", onPageshow);
		},
		trigger: function(e) {
			//If you use 'persist' event, you can get global-key only!
			e.state = getStateByKey(GLOBAL_KEY);
		}
	};
	return {
		"isBackForwardNavigated": isBackForwardNavigated,
		"onPageshow": onPageshow,
		"reset": reset,
		"getState": getState,
		"setState": setState,
		"GLOBALKEY": GLOBAL_KEY
	};
});
/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

eg.module("visible", ["jQuery", eg, document], function($, ns, doc) {
/**
	 * A module used to check whether an element is visible in the base element or viewport.
	 * @ko 엘리먼트가 기준 엘리먼트나 뷰포트 안에 보이는지 확인하는 모듈
	 * @class
	 * @name eg.Visible
	 * @extends eg.Component
	 * @group egjs
	 *
	 * @param {HTMLElement|String|jQuery} [element=document] A base element that detects if another element is visible<ko>엘리먼트가 보이는 기준 엘리먼트</ko>
	 * @param {Object} options The option object of the eg.Visible module<ko>eg.Visible 모듈의 옵션 객체</ko>
	 * @param {String} [options.targetClass="check_visible"] The class name of the element to be checked<ko>보이는지 확인할 엘리먼트의 클래스 이름</ko>
	 * @param {Number} [options.expandSize=0] The size of the expanded area to be checked whether an element is visible. If this value is less than zero, the size of the area is smaller than that of the base element. <ko>기준 엘리먼트의 경계를 넘어 엘리먼트가 보이는지 확인할 영역의 크기. 값이 0보다 작으면 엘리먼트가 보이는지 확인할 영역의 크기가 기준 엘리먼트보다 작아진다</ko>
	 * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
	 *
	 * @codepen {"id":"WbWzqq", "ko":"Visible 기본 예제", "en":"Visible basic example", "collectionId":"Ayrabj", "height" : 403}
	 */
	var EVENTS = {
		"change": "change"
	};
	ns.Visible = ns.Class.extend(ns.Component, {
		_events: function() {
			return EVENTS;
		},
		construct: function(element, options, _prefix) {
			this._prefix = _prefix || "";
			this.options = {
				targetClass: "check_visible",
				expandSize: 0
			};
			$.extend(this.options, options);

			this._wrapper = $(element)[0] || doc;

			// this._wrapper is Element, or may be Window
			if (this._wrapper.nodeType && this._wrapper.nodeType === 1) {
				this._getAreaRect = this._getWrapperRect;
			} else {
				this._getAreaRect = this._getWindowRect;
			}

			this._targets = [];
			this._timer = null;
			this._supportElementsByClassName = (function() {
				var dummy = doc.createElement("div");
				var dummies;
				if (!dummy.getElementsByClassName) {
					return false;
				}
				dummies = dummy.getElementsByClassName("dummy");
				dummy.innerHTML = "<span class='dummy'></span>";
				return dummies.length === 1;
			})();

			this.refresh();
		},
		/**
		 * Updates the list of elements where the visibility property is to be checked
		 * @ko visibility 속성을 검사할 엘리먼트의 목록을 갱신한다
		 * @method eg.Visible#refresh
		 * @return {eg.Visible} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 *
		 * @remark
		 * If targets was added or removed from DOM tree, must call refresh method to update internal target list.
		 * <ko>확인 대상이 영역 안에 추가되거나 삭제된 경우, 모듈내부에서 사용하는 확인 대상 목록을 이 메소드를 호출하여 갱신해야한다.<ko>
		 */
		refresh: function() {
			if (this._supportElementsByClassName) {
				this._targets = this._wrapper
					.getElementsByClassName(this.options.targetClass);
				this.refresh = function() {
					return this;
				};
			} else {
				this.refresh = function() {
					this._targets = $(this._wrapper)
						.find("." + this.options.targetClass)
						.get();
					return this;
				};
			}
			return this.refresh();
		},
		/**
		 * Checks whether the visible of the target elements has changed. It trigger that change event on a component.
		 * @ko 대상 엘리먼트의 가시성이 변경됐는지 체크한다. change 이벤트를 발생한다.
		 * @method eg.Visible#check
		 * @param {Number} [delay=-1] Delay time. It delay that change event trigger.<ko>지연시간. change 이벤트 발생을 지연한다.</ko>
		 * @param {Boolean} [containment=false] Whether to check only elements that are completely contained within the reference area.<ko>기준 영역 안에 완전히 포함된 엘리먼트만 체크할지 여부.</ko>
		 * @return {eg.Visible} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 */
		check: function(delay, containment) {
			if (typeof delay !== "number") {
				containment = delay;
				delay = -1;
			}

			if (typeof containment === "undefined") {
				containment = false;
			}

			clearTimeout(this._timer);
			if (delay < 0) {
				this._check(containment);
			} else {
				this._timer = setTimeout($.proxy(function() {
					this._check(containment);
					this._timer = null;
				}, this), delay);
			}
			return this;
		},
		_getWrapperRect: function() {
			return this._wrapper.getBoundingClientRect();
		},
		_getWindowRect: function() {
			// [IE7] document.documentElement.clientHeight has always value 0 (bug)
			return {
				top: 0,
				left: 0,
				bottom: doc.documentElement.clientHeight ||
							doc.body.clientHeight,
				right: doc.documentElement.clientWidth ||
							doc.body.clientWidth
			};
		},
		_reviseElements: function(target, i) {
			if (this._supportElementsByClassName) {
				this._reviseElements = function() {
					return true;
				};
			} else {
				this._reviseElements = function(target, i) {
					if (!$(target).hasClass(this.options.targetClass)) {
						target.__VISIBLE__ = null;
						this._targets.splice(i, 1);
						return false;
					}
					return true;
				};
			}
			return this._reviseElements(target, i);
		},
		_check: function(containment) {
			var expandSize = parseInt(this.options.expandSize, 10);
			var visibles = [];
			var invisibles = [];
			var area = this._getAreaRect();

			// Error Fix: Cannot set property top of #<ClientRect> which has only a getter
			area = $.extend({}, area);

			area.top -= expandSize;
			area.left -= expandSize;
			area.bottom += expandSize;
			area.right += expandSize;
			for (var i = this._targets.length - 1, target, targetArea, after, before;
					target = this._targets[i] ; i--) {
				targetArea = target.getBoundingClientRect();
				if (targetArea.width === 0 && targetArea.height === 0) {
					continue;
				}
				if (this._reviseElements(target, i)) {
					before = !!target.__VISIBLE__;

					if (containment) {
						target.__VISIBLE__ = after = !(
							targetArea.top < area.top  ||
							targetArea.bottom > area.bottom  ||
							targetArea.right > area.right ||
							targetArea.left < area.left
						);
					} else {
						target.__VISIBLE__ = after = !(
							targetArea.bottom < area.top ||
							area.bottom < targetArea.top ||
							targetArea.right < area.left ||
							area.right < targetArea.left
						);
					}

					(before !== after) && (after ? visibles : invisibles).unshift(target);
				}
			}
			/**
			 * This event is fired when the event is compared with the last verified one and there is an element of which the visibility property has changed.
			 * @ko 마지막으로 확인한 결과와 비교해 visibility 속성이 변경된 엘리먼트가 있을 때 발생하는 이벤트
			 * @name eg.Visible#change
			 * @event
			 * @param {Array} visible Visible elements  (the element type is `HTMLElement`) <ko>보이게 된 엘리먼트들</ko>
			 * @param {Array} invisible Invisible elements  (the element type is `HTMLElement`) <ko>안 보이게 된 엘리먼트들</ko>
			 */
			this.trigger(this._prefix + EVENTS.change, {
				visible: visibles,
				invisible: invisibles
			});
		},
		destroy: function() {
			this.off();
			this._targets = [];
			this._wrapper = this._timer = null;
		}
	});
});
/**
 * A jQuery custom event of the eg.Visible module. This event is fired when the event is compared with the last verified one and there is an element of which the visibility property has changed.
 *
 * @ko eg.Visible 모듈의 jQuery 커스텀 이벤트. 마지막으로 확인한 결과와 비교해 visibility 속성이 변경된 엘리먼트가 있을 때 발생한다
 * @name jQuery#visible:change
 * @event
 * @example
	// create
	$("body").visible();

 	// event
 	$("body").on("visible:change",callback);
 	$("body").off("visible:change",callback);
 	$("body").trigger("visible:change",callback);
 * @see eg.Visble
 */
/**
 * A jQuery plugin available in the eg.Visible module.
 * @ko eg.Visible 모듈의 jQuery 플러그인
 * @method jQuery.visible
 * @example
	// create
	$("body").visible();

 	// event
 	$("body").on("visible:change",callback);
 	$("body").off("visible:change",callback);
 	$("body").trigger("visible:change",callback);

 	// method
 	$("body").visible("option","circular",true); //Set option
 	$("body").visible("instance"); // Return flicking instance
 	$("body").visible("check",10); // Check to change target elements.
 * @see eg.Visble#event:change
 */

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

// jscs:disable maximumLineLength
eg.module("movableCoord", [eg, window, "Hammer"], function(ns, global, HM) {
var SUPPORT_TOUCH = "ontouchstart" in global;
	var assignFn = HM.assign || HM.merge;

	// jscs:enable maximumLineLength
	/**
	 * A module used to change the information of user action entered by various input devices such as touch screen or mouse into logical coordinates within the virtual coordinate system. The coordinate information sorted by time events occurred is provided if animations are made by user actions. You can implement a user interface by applying the logical coordinates provided. For more information on the eg.MovableCoord module, see demos.
	 * @group egjs
	 * @ko 터치 입력 장치나 마우스와 같은 다양한 입력 장치로 전달 받은 사용자의 동작을 가상 좌표계의 논리적 좌표로 변경하는 모듈. 사용자의 동작으로 애니메이션이 일어나면 시간순으로 변경되는 좌표 정보도 제공한다. 변경된 논리적 좌표를 반영해 UI를 구현할 수 있다. eg.MovableCoord 모듈의 자세한 작동 방식은 데모를 참고한다.
	 * @class
	 * @name eg.MovableCoord
	 * @extends eg.Component
	 *
	 * @param {Object} options The option object of the eg.MovableCoord module<ko>eg.MovableCoord 모듈의 옵션 객체</ko>
	 * @param {Array} options.min The minimum value of X and Y coordinates <ko>좌표계의 최솟값</ko>
	 * @param {Number} [options.min.0=0] The X coordinate of the minimum <ko>최소 x좌표</ko>
	 * @param {Number} [options.min.1=0] The Y coordinate of the minimum <ko>최소 y좌표</ko>
	 *
	 * @param {Array} options.max The maximum value of X and Y coordinates <ko>좌표계의 최댓값</ko>
	 * @param {Number} [options.max.0=100] The X coordinate of the maximum<ko>최대 x좌표</ko>
	 * @param {Number} [options.max.1=100] The Y coordinate of the maximum<ko>최대 y좌표</ko>
	 *
	 * @param {Array} options.bounce The size of bouncing area. The coordinates can exceed the coordinate area as much as the bouncing area based on user action. If the coordinates does not exceed the bouncing area when an element is dragged, the coordinates where bouncing effects are applied are retuned back into the coordinate area<ko>바운스 영역의 크기. 사용자의 동작에 따라 좌표가 좌표 영역을 넘어 바운스 영역의 크기만큼 더 이동할 수 있다. 사용자가 끌어다 놓는 동작을 했을 때 좌표가 바운스 영역에 있으면, 바운스 효과가 적용된 좌표가 다시 좌표 영역 안으로 들어온다</ko>
	 * @param {Boolean} [options.bounce.0=10] The size of top area <ko>위쪽 바운스 영역의 크기</ko>
	 * @param {Boolean} [options.bounce.1=10] The size of right area <ko>오른쪽 바운스 영역의 크기</ko>
	 * @param {Boolean} [options.bounce.2=10] The size of bottom area <ko>아래쪽 바운스 영역의 크기</ko>
	 * @param {Boolean} [options.bounce.3=10] The size of left area <ko>왼쪽 바운스 영역의 크기</ko>
	 *
	 * @param {Array} options.margin The size of accessible space outside the coordinate area. If an element is dragged outside the coordinate area and then dropped, the coordinates of the element are returned back into the coordinate area. The size of margins that can be exceeded <ko>−	좌표 영역을 넘어 이동할 수 있는 바깥 영역의 크기. 사용자가 좌표를 바깥 영역까지 끌었다가 놓으면 좌표가 좌표 영역 안으로 들어온다.</ko>
	 * @param {Boolean} [options.margin.0=0] The size of top margin <ko>위쪽 바깥 영역의 크기</ko>
	 * @param {Boolean} [options.margin.1=0] The size of right margin <ko>오른쪽 바깥 영역의 크기</ko>
	 * @param {Boolean} [options.margin.2=0] The size of bottom margin <ko>아래쪽 바깥 영역의 크기</ko>
	 * @param {Boolean} [options.margin.3=0] The size of left margin <ko>왼쪽 바깥 영역의 크기</ko>
	 * @param {Array} options.circular Indicates whether a circular element is available. If it is set to "true" and an element is dragged outside the coordinate area, the element will appear on the other side.<ko>순환 여부. 'true'로 설정한 방향의 좌표 영역 밖으로 엘리먼트가 이동하면 반대 방향에서 엘리먼트가 나타난다</ko>
	 * @param {Boolean} [options.circular.0=false] Indicates whether to circulate to top <ko>위로 순환 여부</ko>
	 * @param {Boolean} [options.circular.1=false] Indicates whether to circulate to right <ko>오른쪽으로 순환 여부</ko>
	 * @param {Boolean} [options.circular.2=false] Indicates whether to circulate to bottom  <ko>아래로 순환 여부</ko>
	 * @param {Boolean} [options.circular.3=false] Indicates whether to circulate to left  <ko>왼쪽으로 순환 여부</ko>
	 *
	 * @param {Function} [options.easing=easing.easeOutCubic] The easing function to apply to an animation <ko>애니메이션에 적용할 easing 함수</ko>
	 * @param {Number} [options.maximumDuration=Infinity] Maximum duration of the animation <ko>가속도에 의해 애니메이션이 동작할 때의 최대 좌표 이동 시간</ko>
	 * @param {Number} [options.deceleration=0.0006] Deceleration of the animation where acceleration is manually enabled by user. A higher value indicates shorter running time. <ko>사용자의 동작으로 가속도가 적용된 애니메이션의 감속도. 값이 높을수록 애니메이션 실행 시간이 짧아진다</ko>
	 * @see HammerJS {@link http://hammerjs.github.io}
	 * @see •	Hammer.JS applies specific CSS properties by default when creating an instance (See {@link http://hammerjs.github.io/jsdoc/Hammer.defaults.cssProps.html}). The eg.MovableCoord module removes all default CSS properties provided by Hammer.JS <ko>Hammer.JS는 인스턴스를 생성할 때 기본으로 특정 CSS 속성을 적용한다(참고: @link{http://hammerjs.github.io/jsdoc/Hammer.defaults.cssProps.html}). 특정한 상황에서는 Hammer.JS의 속성 때문에 사용성에 문제가 있을 수 있다. eg.MovableCoord 모듈은 Hammer.JS의 기본 CSS 속성을 모두 제거했다</ko>
	 *
	 * @codepen {"id":"jPPqeR", "ko":"MovableCoord Cube 예제", "en":"MovableCoord Cube example", "collectionId":"AKpkGW", "height": 403}
	 *
	 * @see Easing Functions Cheat Sheet {@link http://easings.net/}
	 * @see If you want to try a different easing function, use the jQuery easing plugin ({@link http://gsgd.co.uk/sandbox/jquery/easing}) or the jQuery UI easing library ({@link https://jqueryui.com/easing}) <ko>다른 easing 함수를 사용하려면 jQuery easing 플러그인({@link http://gsgd.co.uk/sandbox/jquery/easing})이나, jQuery UI easing 라이브러리({@lin https://jqueryui.com/easing})를 사용한다</ko>
	 *
	 * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
	 */
	var MC = ns.MovableCoord = ns.Class.extend(ns.Component, {
		construct: function(options) {
			assignFn(this.options = {
				min: [0, 0],
				max: [100, 100],
				bounce: [10, 10, 10, 10],
				margin: [0,0,0,0],
				circular: [false, false, false, false],
				easing: function easeOutCubic(x) {
					return 1 - Math.pow(1 - x, 3);
				},
				maximumDuration: Infinity,
				deceleration: 0.0006
			}, options);
			this._reviseOptions();
			this._status = {
				grabOutside: false,		// check whether user's action started on outside
				curHammer: null,		// current hammer instance
				moveDistance: null,		// a position of the first user's action
				animationParam: null,	// animation information
				prevented: false		//  check whether the animation event was prevented
			};
			this._hammers = {};
			this._pos = this.options.min.concat();
			this._subOptions = {};
			this._raf = null;
			this._animationEnd = HM.bindFn(this._animationEnd, this);	// for caching
			this._restore = HM.bindFn(this._restore, this);	// for caching
			this._panmove = HM.bindFn(this._panmove, this);	// for caching
			this._panend = HM.bindFn(this._panend, this);	// for caching
		},
		/**
		 * Registers an element to use the eg.MovableCoord module.
		 * @ko eg.MovableCoord 모듈을 사용할 엘리먼트를 등록한다
		 * @method eg.MovableCoord#bind
		 * @param {HTMLElement|String|jQuery} element An element to use the eg.MovableCoord module<ko>−	eg.MovableCoord 모듈을 사용할 엘리먼트</ko>
		 * @param {Object} options The option object of the bind() method <ko>bind() 메서드의 옵션 객체</ko>
		 * @param {Number} [options.direction=eg.MovableCoord.DIRECTION_ALL] Coordinate direction that a user can move<br>- eg.MovableCoord.DIRECTION_ALL: All directions available.<br>- eg.MovableCoord.DIRECTION_HORIZONTAL: Horizontal direction only.<br>- eg.MovableCoord.DIRECTION_VERTICAL: Vertical direction only<ko>사용자의 동작으로 움직일 수 있는 좌표의 방향.<br>- eg.MovableCoord.DIRECTION_ALL: 모든 방향으로 움직일 수 있다.<br>- eg.MovableCoord.DIRECTION_HORIZONTAL: 가로 방향으로만 움직일 수 있다.<br>- eg.MovableCoord.DIRECTION_VERTICAL: 세로 방향으로만 움직일 수 있다.</ko>
		 * @param {Array} options.scale Coordinate scale that a user can move<ko>사용자의 동작으로 이동하는 좌표의 배율</ko>
		 * @param {Number} [options.scale.0=1] X-axis scale <ko>x축 배율</ko>
		 * @param {Number} [options.scale.1=1] Y-axis scale <ko>y축 배율</ko>
		 * @param {Number} [options.thresholdAngle=45] The threshold value that determines whether user action is horizontal or vertical (0~90) <ko>사용자의 동작이 가로 방향인지 세로 방향인지 판단하는 기준 각도(0~90)</ko>
		 * @param {Number} [options.interruptable=true] Indicates whether an animation is interruptible.<br>- true: It can be paused or stopped by user action or the API.<br>- false: It cannot be paused or stopped by user action or the API while it is running.<ko>진행 중인 애니메이션 중지 가능 여부.<br>- true: 사용자의 동작이나 API로 애니메이션을 중지할 수 있다.<br>- false: 애니메이션이 진행 중일 때는 사용자의 동작이나 API가 적용되지 않는다</ko>
		 * @param {Array} [options.inputType] Types of input devices. (default: ["touch", "mouse"])<br>- touch: Touch screen<br>- mouse: Mouse <ko>입력 장치 종류.(기본값: ["touch", "mouse"])<br>- touch: 터치 입력 장치<br>- mouse: 마우스</ko>
		 *
		 * @return {eg.MovableCoord} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
		 */
		bind: function(element, options) {
			var el = this._getEl(element);
			var keyValue = el[MC._KEY];
			var subOptions = {
				direction: MC.DIRECTION_ALL,
				scale: [ 1, 1 ],
				thresholdAngle: 45,
				interruptable: true,
				inputType: [ "touch", "mouse" ]
			};

			assignFn(subOptions, options);

			var inputClass = this._convertInputType(subOptions.inputType);
			if (!inputClass) {
				return this;
			}

			if (keyValue) {
				this._hammers[keyValue].inst.destroy();
			} else {
				keyValue = Math.round(Math.random() * new Date().getTime());
			}
			this._hammers[keyValue] = {
				inst: this._createHammer(
					el,
					subOptions,
					inputClass
				),
				el: el,
				options: subOptions
			};
			el[MC._KEY] = keyValue;
			return this;
		},

		_createHammer: function(el, subOptions, inputClass) {
			try {
				// create Hammer
				var hammer = new HM.Manager(el, {
						recognizers: [
							[
								HM.Pan, {
									direction: subOptions.direction,
									threshold: 0
								}
							]
						],

						// css properties were removed due to usablility issue
						// http://hammerjs.github.io/jsdoc/Hammer.defaults.cssProps.html
						cssProps: {
							userSelect: "none",
							touchSelect: "none",
							touchCallout: "none",
							userDrag: "none"
						},
						inputClass: inputClass
					});

				return this._attachHammerEvents(hammer, subOptions);
			} catch (e) {}
		},

		_attachHammerEvents: function(hammer, options) {
			return hammer.on("hammer.input", HM.bindFn(function(e) {
					var enable = hammer.get("pan").options.enable;
					if (e.isFirst) {
						// apply options each
						this._subOptions = options;
						this._status.curHammer = hammer;
						enable && this._panstart(e);
					} else if (e.isFinal) {
						// substitute .on("panend tap", this._panend); Because it(tap, panend) cannot catch vertical(horizontal) movement on HORIZONTAL(VERTICAL) mode.
						enable && this._panend(e);
					}
				}, this))
				.on("panstart panmove", this._panmove);
		},

		_detachHammerEvents: function(hammer) {
			hammer.off("hammer.input panstart panmove panend");
		},

		_convertInputType: function(inputType) {
			var hasTouch = false;
			var hasMouse = false;
			inputType = inputType || [];
			inputType.forEach(function(v) {
				switch (v) {
					case "mouse" : hasMouse = true; break;
					case "touch" : hasTouch = SUPPORT_TOUCH;
				}
			});

			return hasTouch && HM.TouchInput || hasMouse && HM.MouseInput || null;
		},

		/**
		 * Detaches an element using the eg.MovableCoord module.
		 * @ko eg.MovableCoord 모듈을 사용하는 엘리먼트를 해제한다
		 * @method eg.MovableCoord#unbind
		 * @param {HTMLElement|String|jQuery} element An element from which the eg.MovableCoord module is detached<ko>eg.MovableCoord 모듈을 해제할 엘리먼트</ko>
		 * @return {eg.MovableCoord} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 */
		unbind: function(element) {
			var el = this._getEl(element);
			var key = el[MC._KEY];
			if (key) {
				this._hammers[key].inst.destroy();
				delete this._hammers[key];
				delete el[MC._KEY];
			}
			return this;
		},

		/**
		 * get a hammer instance from elements using the eg.MovableCoord module.
		 * @ko eg.MovableCoord 모듈을 사용하는 엘리먼트에서 hammer 객체를 얻는다
		 * @method eg.MovableCoord#getHammer
		 * @param {HTMLElement|String|jQuery} element An element from which the eg.MovableCoord module is using<ko>eg.MovableCoord 모듈을 사용하는 엘리먼트</ko>
		 * @return {Hammer|null} An instance of Hammer.JS<ko>Hammer.JS의 인스턴스</ko>
		 */
		getHammer: function(element) {
			var el = this._getEl(element);
			var key = el ? el[MC._KEY] : null;
			if (key && this._hammers[key]) {
				return this._hammers[key].inst;
			} else {
				return null;
			}
		},

		_grab: function() {
			if (this._status.animationParam) {
				this.trigger("animationEnd");
				var pos = this._getCircularPos(this._pos);
				if (pos[0] !== this._pos[0] || pos[1] !== this._pos[1]) {
					this._pos = pos;
					this._triggerChange(this._pos, true);
				}
				this._status.animationParam = null;
				this._raf && ns.cancelAnimationFrame(this._raf);
				this._raf = null;
			}
		},

		_getCircularPos: function(pos, min, max, circular) {
			min = min || this.options.min;
			max = max || this.options.max;
			circular = circular || this.options.circular;

			if (circular[0] && pos[1] < min[1]) { // up
				pos[1] = (pos[1] - min[1]) % (max[1] - min[1] + 1) + max[1];
			}
			if (circular[1] && pos[0] > max[0]) { // right
				pos[0] = (pos[0] - min[0]) % (max[0] - min[0] + 1) + min[0];
			}
			if (circular[2] && pos[1] > max[1]) { // down
				pos[1] = (pos[1] - min[1]) % (max[1] - min[1] + 1) + min[1];
			}
			if (circular[3] && pos[0] < min[0]) { // left
				pos[0] = (pos[0] - min[0]) % (max[0] - min[0] + 1) + max[0];
			}
			pos[0] = +pos[0].toFixed(5), pos[1] = +pos[1].toFixed(5);

			return pos;
		},

		// determine outside
		_isOutside: function(pos, min, max) {
			return pos[0] < min[0] || pos[1] < min[1] ||
				pos[0] > max[0] || pos[1] > max[1];
		},

		// from outside to outside
		_isOutToOut: function(pos, destPos) {
			var min = this.options.min;
			var max = this.options.max;
			return (pos[0] < min[0] || pos[0] > max[0] ||
				pos[1] < min[1] || pos[1] > max[1]) &&
				(destPos[0] < min[0] || destPos[0] > max[0] ||
				destPos[1] < min[1] || destPos[1] > max[1]);
		},

		// panstart event handler
		_panstart: function(e) {
			if (!this._subOptions.interruptable && this._status.prevented) {
				return;
			}
			this._setInterrupt(true);
			var pos = this._pos;
			this._grab();
			/**
			 * This event is fired when a user holds an element on the screen of the device.
			 * @ko 사용자가 기기의 화면에 손을 대고 있을 때 발생하는 이벤트
			 * @name eg.MovableCoord#hold
			 * @event
			 * @param {Object} param The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
			 * @param {Array} param.pos coordinate <ko>좌표 정보</ko>
			 * @param {Number} param.pos.0 The X coordinate<ko>x 좌표</ko>
			 * @param {Number} param.pos.1 The Y coordinate<ko>y 좌표</ko>
			 * @param {Object} param.hammerEvent The event information of Hammer.JS. It returns null if the event is fired through a call to the setTo() or setBy() method.<ko>Hammer.JS의 이벤트 정보. setTo() 메서드나 setBy() 메서드를 호출해 이벤트가 발생했을 때는 'null'을 반환한다.</ko>
			 *
			 */
			this.trigger("hold", {
				pos: pos.concat(),
				hammerEvent: e
			});
			this._status.moveDistance = pos.concat();
			this._status.grabOutside = this._isOutside(
				pos,
				this.options.min,
				this.options.max
			);
		},

		// panmove event handler
		_panmove: function(e) {
			if (!this._isInterrupting() || !this._status.moveDistance) {
				return;
			}
			var tv;
			var tn;
			var tx;
			var pos = this._pos;
			var min = this.options.min;
			var max = this.options.max;
			var bounce = this.options.bounce;
			var margin = this.options.margin;
			var direction = this._subOptions.direction;
			var scale = this._subOptions.scale;
			var userDirection = this._getDirection(e.angle);
			var out = [
				margin[0] + bounce[0],
				margin[1] + bounce[1],
				margin[2] + bounce[2],
				margin[3] + bounce[3]
			];
			var prevent  = false;

			// not support offset properties in Hammerjs - start
			var prevInput = this._status.curHammer.session.prevInput;
			if (prevInput) {
				e.offsetX = e.deltaX - prevInput.deltaX;
				e.offsetY = e.deltaY - prevInput.deltaY;
			} else {
				e.offsetX = e.offsetY = 0;
			}

			// not support offset properties in Hammerjs - end
			if (direction === MC.DIRECTION_ALL ||
				(direction & MC.DIRECTION_HORIZONTAL &&
				userDirection & MC.DIRECTION_HORIZONTAL)
			) {
				this._status.moveDistance[0] += (e.offsetX * scale[0]);
				prevent = true;
			}
			if (direction === MC.DIRECTION_ALL ||
				(direction & MC.DIRECTION_VERTICAL &&
				userDirection & MC.DIRECTION_VERTICAL)
			) {
				this._status.moveDistance[1] += (e.offsetY * scale[1]);
				prevent = true;
			}
			if (prevent) {
				e.srcEvent.preventDefault();
				e.srcEvent.stopPropagation();
			}

			e.preventSystemEvent = prevent;
			pos[0] = this._status.moveDistance[0];
			pos[1] = this._status.moveDistance[1];
			pos = this._getCircularPos(pos, min, max);

			// from outside to inside
			if (this._status.grabOutside && !this._isOutside(pos, min, max)) {
				this._status.grabOutside = false;
			}

			// when move pointer is held in outside
			if (this._status.grabOutside) {
				tn = min[0] - out[3], tx = max[0] + out[1], tv = pos[0];
				pos[0] = tv > tx ? tx : (tv < tn ? tn : tv);
				tn = min[1] - out[0], tx = max[1] + out[2], tv = pos[1];
				pos[1] = tv > tx ? tx : (tv < tn ? tn : tv);
			} else {

				// when start pointer is held in inside
				// get a initialization slope value to prevent smooth animation.
				var initSlope = this._easing(0.00001) / 0.00001;

				if (pos[1] < min[1]) { // up
					tv = (min[1] - pos[1]) / (out[0] * initSlope);
					pos[1] = min[1] - this._easing(tv) * out[0];
				} else if (pos[1] > max[1]) { // down
					tv = (pos[1] - max[1]) / (out[2] * initSlope);
					pos[1] = max[1] + this._easing(tv) * out[2];
				}
				if (pos[0] < min[0]) { // left
					tv = (min[0] - pos[0]) / (out[3] * initSlope);
					pos[0] = min[0] - this._easing(tv) * out[3];
				} else if (pos[0] > max[0]) { // right
					tv = (pos[0] - max[0]) / (out[1] * initSlope);
					pos[0] = max[0] + this._easing(tv) * out[1];
				}

			}
			this._triggerChange(pos, true, e);
		},

		// panend event handler
		_panend: function(e) {
			var pos = this._pos;

			if (!this._isInterrupting() || !this._status.moveDistance) {
				return;
			}

			// Abort the animating post process when "tap" occurs
			if (e.distance === 0 /*e.type === "tap"*/) {
				this._setInterrupt(false);
				this.trigger("release", {
					depaPos: pos.concat(),
					destPos: pos.concat(),
					hammerEvent: e || null
				});
			} else {
				var direction = this._subOptions.direction;
				var scale = this._subOptions.scale;
				var vX =  Math.abs(e.velocityX);
				var vY = Math.abs(e.velocityY);

				!(direction & MC.DIRECTION_HORIZONTAL) && (vX = 0);
				!(direction & MC.DIRECTION_VERTICAL) && (vY = 0);

				var offset = this._getNextOffsetPos([
					vX * (e.deltaX < 0 ? -1 : 1) * scale[0],
					vY * (e.deltaY < 0 ? -1 : 1) * scale[1]
				]);
				var destPos = [ pos[0] + offset[0], pos[1] + offset[1] ];
				destPos = this._getPointOfIntersection(pos, destPos);
				/**
				 * This event is fired when a user release an element on the screen of the device.
				 * @ko 사용자가 기기의 화면에서 손을 뗐을 때 발생하는 이벤트
				 * @name eg.MovableCoord#release
				 * @event
				 *
				 * @param {Object} param The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
				 * @param {Array} param.depaPos The coordinates when releasing an element<ko>손을 뗐을 때의 좌표현재 </ko>
				 * @param {Number} param.depaPos.0 The X coordinate <ko> x 좌표</ko>
				 * @param {Number} param.depaPos.1 The Y coordinate <ko> y 좌표</ko>
				 * @param {Array} param.destPos The coordinates to move to after releasing an element<ko>손을 뗀 뒤에 이동할 좌표</ko>
				 * @param {Number} param.destPos.0 The X coordinate <ko>x 좌표</ko>
				 * @param {Number} param.destPos.1 The Y coordinate <ko>y 좌표</ko>
				 * @param {Object} param.hammerEvent The event information of Hammer.JS. It returns null if the event is fired through a call to the setTo() or setBy() method.<ko>Hammer.JS의 이벤트 정보. setTo() 메서드나 setBy() 메서드를 호출해 이벤트가 발생했을 때는 'null'을 반환한다</ko>
				 *
				 */
				this.trigger("release", {
					depaPos: pos.concat(),
					destPos: destPos,
					hammerEvent: e || null
				});

				if (pos[0] !== destPos[0] || pos[1] !== destPos[1]) {
					this._animateTo(destPos, null, e || null);
				} else {
					this._setInterrupt(false);
				}
			}
			this._status.moveDistance = null;
		},

		_isInterrupting: function() {
			// when interruptable is 'true', return value is always 'true'.
			return this._subOptions.interruptable || this._status.prevented;
		},

		// get user's direction
		_getDirection: function(angle) {
			var thresholdAngle = this._subOptions.thresholdAngle;
			if (thresholdAngle < 0 || thresholdAngle > 90) {
				return MC.DIRECTION_NONE;
			}
			angle = Math.abs(angle);
			return angle > thresholdAngle && angle < 180 - thresholdAngle ?
					MC.DIRECTION_VERTICAL : MC.DIRECTION_HORIZONTAL;
		},

		_getNextOffsetPos: function(speeds) {
			var normalSpeed = Math.sqrt(
				speeds[0] * speeds[0] + speeds[1] * speeds[1]
			);
			var duration = Math.abs(normalSpeed / -this.options.deceleration);
			return [
				speeds[0] / 2 * duration,
				speeds[1] / 2 * duration
			];
		},

		_getDurationFromPos: function(pos) {
			var normalPos = Math.sqrt(pos[0] * pos[0] + pos[1] * pos[1]);
			var duration = Math.sqrt(
				normalPos / this.options.deceleration * 2
			);

			// when duration is under 100, then value is zero
			return duration < 100 ? 0 : duration;
		},

		_getPointOfIntersection: function(depaPos, destPos) {
			var circular = this.options.circular;
			var bounce = this.options.bounce;
			var min = this.options.min;
			var max = this.options.max;
			var boxLT = [ min[0] - bounce[3], min[1] - bounce[0] ];
			var boxRB = [ max[0] + bounce[1], max[1] + bounce[2] ];
			var xd;
			var yd;
			destPos = [destPos[0], destPos[1]];
			xd = destPos[0] - depaPos[0], yd = destPos[1] - depaPos[1];
			if (!circular[3]) {
				destPos[0] = Math.max(boxLT[0], destPos[0]);
			} // left
			if (!circular[1]) {
				destPos[0] = Math.min(boxRB[0], destPos[0]);
			} // right
			destPos[1] = xd ?
							depaPos[1] + yd / xd * (destPos[0] - depaPos[0]) :
							destPos[1];

			if (!circular[0]) {
				destPos[1] = Math.max(boxLT[1], destPos[1]);
			} // up
			if (!circular[2]) {
				destPos[1] = Math.min(boxRB[1], destPos[1]);
			} // down
			destPos[0] = yd ?
							depaPos[0] + xd / yd * (destPos[1] - depaPos[1]) :
							destPos[0];
			return [
				Math.min(max[0], Math.max(min[0], destPos[0])),
				Math.min(max[1], Math.max(min[1], destPos[1]))
			];
		},

		_isCircular: function(destPos) {
			var circular = this.options.circular;
			var min = this.options.min;
			var max = this.options.max;
			return (circular[0] && destPos[1] < min[1]) ||
					(circular[1] && destPos[0] > max[0]) ||
					(circular[2] && destPos[1] > max[1]) ||
					(circular[3] && destPos[0] < min[0]);
		},

		_prepareParam: function(absPos, duration, hammerEvent) {
			var pos = this._pos;
			var destPos = this._getPointOfIntersection(pos, absPos);
			destPos = this._isOutToOut(pos, destPos) ? pos : destPos;
			var distance = [
				Math.abs(destPos[0] - pos[0]),
				Math.abs(destPos[1] - pos[1])
			];
			duration = duration == null ? this._getDurationFromPos(distance) : duration;
			duration = this.options.maximumDuration > duration ?
						duration : this.options.maximumDuration;
			return {
				depaPos: pos.concat(),
				destPos: destPos.concat(),
				isBounce: this._isOutside(destPos, this.options.min, this.options.max),
				isCircular: this._isCircular(absPos),
				duration: duration,
				distance: distance,
				hammerEvent: hammerEvent || null,
				done: this._animationEnd
			};
		},

		_restore: function(complete, hammerEvent) {
			var pos = this._pos;
			var min = this.options.min;
			var max = this.options.max;
			this._animate(this._prepareParam([
				Math.min(max[0], Math.max(min[0], pos[0])),
				Math.min(max[1], Math.max(min[1], pos[1]))
			], null, hammerEvent), complete);
		},

		_animationEnd: function() {
			this._status.animationParam = null;
			this._pos = this._getCircularPos([
				Math.round(this._pos[0]),
				Math.round(this._pos[1])
			]);
			this._setInterrupt(false);
			/**
			 * This event is fired when animation ends.
			 * @ko 에니메이션이 끝났을 때 발생한다.
			 * @name eg.MovableCoord#animationEnd
			 * @event
			 */
			this.trigger("animationEnd");
		},

		_animate: function(param, complete) {
			param.startTime = new Date().getTime();
			this._status.animationParam = param;
			if (param.duration) {
				var info = this._status.animationParam;
				var self = this;
				(function loop() {
					self._raf = null;
					if (self._frame(info) >= 1) {
						// deferred.resolve();
						complete();
						return;
					} // animationEnd
					self._raf = ns.requestAnimationFrame(loop);
				})();
			} else {
				this._triggerChange(param.destPos, false);
				complete();
			}
		},

		_animateTo: function(absPos, duration, hammerEvent) {
			var param = this._prepareParam(absPos, duration, hammerEvent);
			var retTrigger = this.trigger("animationStart", param);

			// You can't stop the 'animationStart' event when 'circular' is true.
			if (param.isCircular && !retTrigger) {
				throw new Error(
					"You can't stop the 'animation' event when 'circular' is true."
				);
			}

			if (retTrigger) {
				var self = this;
				var queue = [];
				var dequeue = function() {
					var task = queue.shift();
					task && task.call(this);
				};
				if (param.depaPos[0] !== param.destPos[0] ||
					param.depaPos[1] !== param.destPos[1]) {
					queue.push(function() {
						self._animate(param, dequeue);
					});
				}
				if (this._isOutside(param.destPos, this.options.min, this.options.max)) {
					queue.push(function() {
						self._restore(dequeue, hammerEvent);
					});
				}
				queue.push(function() {
					self._animationEnd();
				});
				dequeue();
			}
		},

		// animation frame (0~1)
		_frame: function(param) {
			var curTime = new Date() - param.startTime;
			var easingPer = this._easing(curTime / param.duration);
			var pos = [ param.depaPos[0], param.depaPos[1] ];

			for (var i = 0; i < 2 ; i++) {
				(pos[i] !== param.destPos[i]) &&
				(pos[i] += (param.destPos[i] - pos[i]) * easingPer);
			}
			pos = this._getCircularPos(pos);
			this._triggerChange(pos, false);
			return easingPer;
		},

		// set up 'css' expression
		_reviseOptions: function() {
			var key;
			var self = this;
			(["bounce", "margin", "circular"]).forEach(function(v) {
				key = self.options[v];
				if (key != null) {
					if (key.constructor === Array) {
						self.options[v] = key.length === 2 ?
							key.concat(key) : key.concat();
					} else if (/string|number|boolean/.test(typeof key)) {
						self.options[v] = [ key, key, key, key ];
					} else {
						self.options[v] = null;
					}
				}
			});
		},

		// trigger 'change' event
		_triggerChange: function(pos, holding, e) {
			/**
			 * This event is fired when coordinate changes.
			 * @ko 좌표가 변경됐을 때 발생하는 이벤트
			 * @name eg.MovableCoord#change
			 * @event
			 *
			 * @param {Object} param The object of data to be sent when the event is fired <ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
			 * @param {Array} param.pos departure coordinate  <ko>좌표</ko>
			 * @param {Number} param.pos.0 The X coordinate <ko>x 좌표</ko>
			 * @param {Number} param.pos.1 The Y coordinate <ko>y 좌표</ko>
			 * @param {Boolean} param.holding Indicates whether a user holds an element on the screen of the device.<ko>사용자가 기기의 화면을 누르고 있는지 여부</ko>
			 * @param {Object} param.hammerEvent The event information of Hammer.JS. It returns null if the event is fired through a call to the setTo() or setBy() method.<ko>Hammer.JS의 이벤트 정보. setTo() 메서드나 setBy() 메서드를 호출해 이벤트가 발생했을 때는 'null'을 반환한다.</ko>
			 *
			 */
			this._pos = pos.concat();
			this.trigger("change", {
				pos: pos.concat(),
				holding: holding,
				hammerEvent: e || null
			});
		},

		/**
		 * Returns the current position of the logical coordinates.
		 * @ko 논리적 좌표의 현재 위치를 반환한다
		 * @method eg.MovableCoord#get
		 * @return {Array} pos <ko>좌표</ko>
		 * @return {Number} pos.0 The X coordinate <ko>x 좌표</ko>
		 * @return {Number} pos.1 The Y coordinate <ko>y 좌표</ko>
		 */
		get: function() {
			return this._pos.concat();
		},

		/**
		 * Moves an element to specific coordinates.
		 * @ko 좌표를 이동한다.
		 * @method eg.MovableCoord#setTo
		 * @param {Number} x The X coordinate to move to <ko>이동할 x좌표</ko>
		 * @param {Number} y The Y coordinate to move to  <ko>이동할 y좌표</ko>
		 * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
		 * @return {eg.MovableCoord} An instance of a module itself <ko>자신의 인스턴스</ko>
		 */
		setTo: function(x, y, duration) {
			this._grab();
			var pos = this._pos.concat();
			var circular = this.options.circular;
			var min = this.options.min;
			var max = this.options.max;
			if (x === pos[0] && y === pos[1]) {
				return this;
			}
			this._setInterrupt(true);
			if (x !== pos[0]) {
				if (!circular[3]) {
					x = Math.max(min[0], x);
				}
				if (!circular[1]) {
					x = Math.min(max[0], x);
				}
			}
			if (y !== pos[1]) {
				if (!circular[0]) {
					y = Math.max(min[1], y);
				}
				if (!circular[2]) {
					y = Math.min(max[1], y);
				}
			}
			if (duration) {
				this._animateTo([ x, y ], duration);
			} else {
				this._pos = this._getCircularPos([ x, y ]);
				this._triggerChange(this._pos, false);
				this._setInterrupt(false);
			}
			return this;
		},
		/**
		 * Moves an element from the current coordinates to specific coordinates. The change event is fired when the method is executed.
		 * @ko 현재 좌표를 기준으로 좌표를 이동한다. 메서드가 실행되면 change 이벤트가 발생한다
		 * @method eg.MovableCoord#setBy
		 * @param {Number} x The X coordinate to move to <ko>이동할 x좌표</ko>
		 * @param {Number} y The Y coordinate to move to <ko>이동할 y좌표</ko>
		 * @param {Number} [duration=0] Duration of the animation (unit: ms) <ko>애니메이션 진행 시간(단위: ms)</ko>
		 * @return {eg.MovableCoord} An instance of a module itself <ko>자신의 인스턴스</ko>
		 */
		setBy: function(x, y, duration) {
			return this.setTo(
				x != null ? this._pos[0] + x : this._pos[0],
				y != null ? this._pos[1] + y : this._pos[1],
				duration
			);
		},

		_easing: function(p) {
			return p > 1 ? 1 : this.options.easing(p);
		},

		_setInterrupt: function(prevented) {
			!this._subOptions.interruptable &&
			(this._status.prevented = prevented);
		},

		_getEl: function(el) {
			if (typeof el === "string") {
				return document.querySelector(el);
			} else if (el instanceof jQuery && el.length > 0) {
				return el[0];
			}
			return el;
		},

		/**
		 * Enables input devices
		 * @ko 입력 장치를 사용할 수 있게 한다
		 * @method eg.MovableCoord#enableInput
		 * @param {HTMLElement|String|jQuery} [element] An element from which the eg.MovableCoord module is using (if the element parameter is not present, it applies to all binded elements)<ko>eg.MovableCoord 모듈을 사용하는 엘리먼트 (element 파라미터가 존재하지 않을 경우, 바인드된 모든 엘리먼트에 적용된다)</ko>
		 * @return {eg.MovableCoord} An instance of a module itself <ko>자신의 인스턴스</ko>
		 */
		enableInput: function(element) {
			return this._inputControl(true, element);
		},

		/**
		 * Disables input devices
		 * @ko 입력 장치를 사용할 수 없게 한다.
		 * @method eg.MovableCoord#disableInput
		 * @param {HTMLElement|String|jQuery} [element] An element from which the eg.MovableCoord module is using (if the element parameter is not present, it applies to all binded elements)<<ko>eg.MovableCoord 모듈을 사용하는 엘리먼트 (element 파라미터가 존재하지 않을 경우, 바인드된 모든 엘리먼트에 적용된다)</ko>
		 * @return {eg.MovableCoord} An instance of a module itself <ko>자신의 인스턴스</ko>
		 */
		disableInput: function(element) {
			return this._inputControl(false, element);
		},

		_inputControl: function(isEnable, element) {
			var option = { enable: isEnable };
			if (element) {
				var hammer = this.getHammer(element);
				hammer && hammer.get("pan").set(option);
			} else { // for multi
				for (var p in this._hammers) {
					this._hammers[p].inst.get("pan").set(option);
				}
			}
			return this;
		},

		/**
		 * Destroys elements, properties, and events used in a module.
		 * @ko 모듈에 사용한 엘리먼트와 속성, 이벤트를 해제한다.
		 * @method eg.MovableCoord#destroy
		 */
		destroy: function() {
			this.off();
			for (var p in this._hammers) {
				this._hammers[p].inst.destroy();
				delete this._hammers[p].el[MC._KEY];
				delete this._hammers[p];
			}
		}
	});
	MC._KEY = "__MOVABLECOORD__";
	/**
	 * @name eg.MovableCoord.DIRECTION_NONE
	 * @constant
	 * @type {Number}
	 */
	MC.DIRECTION_NONE = 1;
	/**
	 * @name eg.MovableCoord.DIRECTION_LEFT
	 * @constant
	 * @type {Number}
	*/
	MC.DIRECTION_LEFT = 2;
	/**
	 * @name eg.MovableCoord.DIRECTION_RIGHT
	 * @constant
	 * @type {Number}
	*/
	MC.DIRECTION_RIGHT = 4;
	/**
	 * @name eg.MovableCoord.DIRECTION_UP
	 * @constant
	 * @type {Number}
	  */
	MC.DIRECTION_UP = 8;
	/**
	 * @name eg.MovableCoord.DIRECTION_DOWN
	 * @constant
	 * @type {Number}
	*/
	MC.DIRECTION_DOWN = 16;
	/**
	 * @name eg.MovableCoord.DIRECTION_HORIZONTAL
	 * @constant
	 * @type {Number}
	*/
	MC.DIRECTION_HORIZONTAL = 2 | 4;
	/**
	 * @name eg.MovableCoord.DIRECTION_VERTICAL
	 * @constant
	 * @type {Number}
	*/
	MC.DIRECTION_VERTICAL = 8 | 16;

	/**
	 * @name eg.MovableCoord.DIRECTION_ALL
	 * @constant
	 * @type {Number}
	*/
	MC.DIRECTION_ALL = MC.DIRECTION_HORIZONTAL | MC.DIRECTION_VERTICAL;

	return {
		"MovableCoord": ns.MovableCoord,
		"assignFn": assignFn
	};
});

// jscs:disable validateLineBreaks, maximumLineLength
/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/
eg.module("flicking", ["jQuery", eg, window, document, eg.MovableCoord], function ($, ns, global, doc, MC) {
// jscs:enable validateLineBreaks, maximumLineLength
	/**
	 * A module used to implement flicking interactions. With this module, you can make flicking gestures, which are ways to navigate left and right to move between panels arranged side by side.
	 * @group egjs
	 * @ko 플리킹 UI를 구현하는 모듈. 나란히 배치한 패널을 쓸어 넘겨 다음 패널이나 이전 패널로 이동하는 플리킹 UI를 만들 수 있다.
	 * @class
	 * @name eg.Flicking
	 * @extends eg.Component
	 *
	 * @param {HTMLElement|String|jQuery} element A base element for the eg.Flicking module <ko>eg.Flicking 모듈을 사용할 기준 엘리먼트</ko>
	 * @param {Object} options The option object of the eg.Flicking module<ko>eg.Flicking 모듈의 옵션 객체</ko>
	 * @param {Boolean} [options.hwAccelerable=eg.isHWAccelerable()] Force hardware compositing <ko>하드웨어 가속 사용 여부</ko>
	 * @param {String} [options.prefix=eg-flick] A prefix for class names of the panel elements <ko>패널 엘리먼트의 클래스 이름에 설정할 접두사</ko>
	 * @param {Number} [options.deceleration=0.0006] Deceleration of the animation where acceleration is manually enabled by user. A higher value indicates shorter running time <ko>사용자의 동작으로 가속도가 적용된 애니메이션의 감속도. 값이 높을수록 애니메이션 실행 시간이 짧아진다</ko>
	 * @param {Boolean} [options.horizontal=true] Direction of the panel movement (true: horizontal, false: vertical) <ko>패널 이동 방향 (true 가로방향, false 세로방향)</ko>
	 * @param {Boolean} [options.circular=false] Indicates whether a circular panel is available <ko>패널 순환 여부</ko>
	 * @param {Number|Array} [options.previewPadding=[0,0]] The preview size for the previous or next panel. If direction is set to "horizontal", the preview section will be displayed on the left and right of the panel. If direction is set to "vertical", it will be displayed on the top and bottom of the panel <ko>이전 패널과 다음 패널을 미리 보는 영역의 크기. 패널 이동 방향이 가로 방향이면 패널 왼쪽과 오른쪽에 미리 보는 영역이 나타난다. 패널 이동 방향이 세로 방향이면 패널 위쪽과 아래쪽에 미리 보는 영역이 나타난다</ko>
	 * @param {Number|Array} [options.bounce=[10,10]] −	The size of bouncing area. If a panel is set to "non-circulable", the start and end panels can exceed the base element area and move further as much as the bouncing area. If a panel is dragged to the bouncing area and then dropped, the panel where bouncing effects are applied is retuned back into the base element area. <ko>바운스 영역의 크기. 패널이 순환하지 않도록 설정됐다면 시작 패널과 마지막 패널은 기준 엘리먼트 영역을 넘어 바운스 영역의 크기만큼 더 이동할 수 있다. 패널을 바운스 영역까지 끌었다가 놓으면, 바운스 효과가 적용된 패널이 다시 기준 엘리먼트 영역 안으로 들어온다</ko>
	 * @param {Number} [options.threshold=40] Distance threshold. If the drag exceeds the threshold value, it will be changed to the next panel <ko>다음 패널로 바뀌는 기준 이동 거리. 패널을 기준 이동 거리 이상 끌었다 놓으면 패널이 다음 패널로 바뀐다</ko>
	 * @param {Number} [options.duration=100] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
	 * @param {Function} [options.panelEffect=easeOutCubic] The easing function to apply to a panel moving animation <ko>패널 이동 애니메이션에 적용할 easing 함수</ko>
	 * @param {Number} [options.defaultIndex=0] The index number of a panel to be selected upon module initialization <ko>모듈이 초기화될 때 선택할 패널의 인덱스 번호</ko>
	 * @param {Array} [options.inputType] Types of input devices.<br>- touch: A touch screen can be used to move a panel.<br>- mouse: A mouse can be used to move a panel. <ko>입력 장치 종류.<br>- touch: 터치 입력 장치로 패널을 이동할 수 있다.<br>- mouse: 마우스로 패널을 이동할 수 있다.</ko>
	 * @param {Number} [options.thresholdAngle=45] The threshold value that determines whether user action is horizontal or vertical (0~90) <ko>사용자의 동작이 가로 방향인지 세로 방향인지 판단하는 기준 각도(0~90)</ko>
	 * @param {Boolean} [options.adaptiveHeight=false] Set container's height be adaptive according panel's height.<br>(Note: on Android 4.1.x stock browser, has rendering bug which not correctly render height value on panel with single node. To avoid just append another empty node at the end.)<ko>컨테이너 영역이 패널의 높이값에 따라 변경될지 여부<br>(참고: Android 4.1.x 스톡 브라우저에서 단일 노드로 구성된 패널의 높이값 변경이 제대로 렌더링 되지 않는 버그가 있음. 비어있는 노드를 추가하면 해결이 가능하다.)</ko>
	 *
	 * @codepen {"id":"rVOpPK", "ko":"플리킹 UI 기본 예제", "en":"Flicking UI default example", "collectionId":"ArxyLK", "height" : 403}
	 * @support {"ie": "10+", "ch" : "latest", "ff" : "latest",  "sf" : "latest" , "edge" : "latest", "ios" : "7+", "an" : "2.3+ (except 3.x)"}
	 *
	 * @see Easing Functions Cheat Sheet {@link http://easings.net/}
	 * @see If you want to try a different easing function, use the jQuery easing plugin ({@link http://gsgd.co.uk/sandbox/jquery/easing}) or the jQuery UI easing library ({@link https://jqueryui.com/easing}). <ko>다른 easing 함수를 사용하려면 jQuery easing 플러그인({@link http://gsgd.co.uk/sandbox/jquery/easing})이나, jQuery UI easing 라이브러리({@link https://jqueryui.com/easing})를 사용한다</ko>
	 * @example
	 	<!-- HTML -->
		<div id="mflick">
			<div>
				<p>Layer 0</p>
			</div>
			<div>
				<p>Layer 1</p>
			</div>
			<div>
				<p>Layer 2</p>
			</div>
		</div>
		<script>
	 	var some = new eg.Flicking("#mflick", {
				circular : true,
				threshold : 50
			}).on({
				beforeRestore : function(e) { ... },
				flickStart : function(e) { ... }
			});
	 	</script>
	 */

	// define custom events name
	var EVENTS = {
		"beforeFlickStart": "beforeFlickStart",
		"beforeRestore": "beforeRestore",
		"flick": "flick",
		"flickEnd": "flickEnd",
		"restore": "restore"
	};

	// check for css transform support
	var SUPPORT_TRANSFORM = doc.documentElement.style;
	SUPPORT_TRANSFORM = "transform" in SUPPORT_TRANSFORM ||
		"webkitTransform" in SUPPORT_TRANSFORM;

	// check for will-change support
	var SUPPORT_WILLCHANGE = global.CSS && global.CSS.supports &&
		global.CSS.supports("will-change", "transform");

	// check for Android 2.x
	var IS_ANDROID2 = ns.agent().os;
	IS_ANDROID2 = IS_ANDROID2.name === "android" && /^2\./.test(IS_ANDROID2.version);

	// data-height attribute's name for adaptiveHeight option
	var DATA_HEIGHT = "data-height";

	ns.Flicking = ns.Class.extend(ns.Component, {
		_events: function() {
			return EVENTS;
		},
		/**
		 * Constructor
		 * @param {HTMLElement|String|jQuery} element - base element
		 * @param {Object} options
		 */
		construct: function (element, options, _prefix) {
			this.$wrapper = $(element);

			var $children = this.$wrapper.children();
			if (!$children.length) {
				// jscs:disable validateLineBreaks, maximumLineLength
				throw new Error("Given base element doesn't exist or it hasn't proper DOM structure to be initialized.");

				// jscs:enable validateLineBreaks, maximumLineLength
			}

			this._setOptions(options);
			this._setConfig($children, _prefix);

			!ns._hasClickBug() && (this._setPointerEvents = $.noop);

			this._build();
			this._bindEvents(true);

			this._applyPanelsCss();
			this._arrangePanels();

			this.options.hwAccelerable && SUPPORT_WILLCHANGE && this._setHint();
			this.options.adaptiveHeight && this._setAdaptiveHeight();

			this._adjustContainerCss("end");
		},

		/**
		 * Set options values
		 * @param {Object} options
		 */
		_setOptions: function(options) {
			var arrVal = {
				previewPadding: [ 0, 0 ],
				bounce: [ 10, 10 ]
			};

			$.extend(this.options = {
				hwAccelerable: ns.isHWAccelerable(),  // check weather hw acceleration is available
				prefix: "eg-flick",         // prefix value of class name
				deceleration: 0.0006,       // deceleration value
				horizontal: true,           // move direction (true == horizontal, false == vertical)
				circular: false,			// circular mode. In this mode at least 3 panels are required.
				previewPadding: arrVal.previewPadding,	// preview padding value in left(up) to right(down) order. In this mode at least 5 panels are required.
				bounce: arrVal.bounce,      // bounce value in left(up) to right(down) order. Works only in non-circular mode.
				threshold: 40,				// the distance pixel threshold value for change panel
				duration: 100,				// duration ms for animation
				panelEffect: $.easing.easeOutCubic,  // $.easing function for panel change animation
				defaultIndex: 0,			// initial panel index to be shown
				inputType: ["touch", "mouse"],  // input type
				thresholdAngle: 45,			// the threshold value that determines whether user action is horizontal or vertical (0~90)
				adaptiveHeight: false		// Set container's height be adaptive according panel's height
			}, options);

			var self = this;
			$.each(arrVal, function(i, v) {
				var val = self.options[i];

				if ($.isNumeric(val)) {
					val = [ val, val ];
				} else if (!$.isArray(val)) {
					val = v;
				}

				self.options[i] = val;
			});
		},

		/**
		 * Set config values
		 * @param {jQuery} $children wrappers' children elements
		 * @param {String} _prefix event prefix
		 */
		_setConfig: function($children, _prefix) {
			var options = this.options;
			var padding = options.previewPadding;
			var $container = $children.filter("." + options.prefix + "-container:first");

			if ($container.length) {
				this.$container = $container;
				$children = $container.children();
			}

			// config value
			this._conf = {
				panel: {
					$list: $children,	// panel list
					index: 0,			// dom index used among process
					no: 0,				// panel no used among process
					currIndex: 0,       // current physical dom index
					currNo: 0,          // current logical panel number
					size: 0,			// panel size
					count: 0,			// total physical panel count
					origCount: 0,		// total count of given original panels
					changed: false,		// if panel changed
					animating: false,	// current animating status boolean
					minCount: padding[0] + padding[1] > 0 ? 5 : 3  // minimum panel count
				},
				touch: {
					holdPos: [0, 0],	// hold x,y coordinate
					destPos: [0, 0],	// destination x,y coordinate
					distance: 0,		// touch distance pixel of start to end touch
					direction: null,	// touch direction
					lastPos: 0,			// to determine move on holding
					holding: false
				},
				customEvent: {			// for custom events value
					flick: true,
					restore: false,
					restoreCall: false
				},
				origPanelStyle: {		// remember original class and inline style in case of restoration on destroy()
					wrapper: {
						className: this.$wrapper.attr("class") || null,
						style: this.$wrapper.attr("style") || null
					},
					list: $children.map(function(i, v) {
						return {
							className: $(v).attr("class") || null,
							style: $(v).attr("style") || null
						};
					})
				},
				useLayerHack: options.hwAccelerable && !SUPPORT_WILLCHANGE,
				dirData: [],			// direction constant value according horizontal or vertical
				indexToMove: 0,
				eventPrefix: _prefix || "",

				// For buggy link highlighting on Android 2.x
				$dummyAnchor: null
			};

			$([["LEFT", "RIGHT"], ["UP", "DOWN"]][+!options.horizontal]).each(
				$.proxy(function (i, v) {
					this._conf.dirData.push(MC["DIRECTION_" + v]);
				}, this));
		},

		/**
		 * Build and set panel nodes to make flicking structure
		 */
		_build: function () {
			var panel = this._conf.panel;
			var options = this.options;
			var $children = panel.$list;
			var padding = options.previewPadding.concat();
			var prefix = options.prefix;
			var horizontal = options.horizontal;
			var panelCount = panel.count = panel.origCount = $children.length;
			var cssValue;
			var bounce = options.bounce;

			this._setPadding(padding, true);
			var sizeValue = this._getDataByDirection([ panel.size, "100%" ]);

			// create container element
			cssValue = "position:relative;z-index:2000;width:100%;height:100%;" +
				(horizontal ? "" : "top:0;");

			if (this.$container) {
				this.$container.attr("style", cssValue);
			} else {
				this.$container = $children.wrapAll(
					"<div class='" + prefix + "-container' style='" + cssValue + "'>"
				).parent();
			}

			// panels' css values
			$children.addClass(prefix + "-panel").css({
				position: "absolute",
				width: sizeValue[0],
				height: sizeValue[1],
				boxSizing: "border-box",
				top: 0,
				left: 0
			});

			if (this._addClonePanels()) {
				panelCount = panel.count = (
					panel.$list = this.$container.children()
				).length;
			}

			// create MovableCoord instance
			this._mcInst = new MC({
				min: [0, 0],
				max: this._getDataByDirection([panel.size * (panelCount - 1), 0]),
				margin: 0,
				circular: false,
				easing: options.panelEffect,
				deceleration: options.deceleration,
				bounce: this._getDataByDirection([ 0, bounce[1], 0, bounce[0] ])
			});

			this._setDefaultPanel(options.defaultIndex);
		},

		/**
		 * Set preview padding value
		 * @param {Array} padding
		 * @param {Boolean} build
		 */
		_setPadding: function(padding, build) {
			var horizontal = this.options.horizontal;
			var panel = this._conf.panel;
			var paddingSum = padding[0] + padding[1];
			var cssValue = {};

			if (paddingSum || !build) {
				cssValue.padding = (horizontal ?
					"0 " + padding.reverse().join("px 0 ") :
					padding.join("px 0 ")) + "px";
			}

			if (build) {
				cssValue.overflow = "hidden";
				cssValue.boxSizing = "border-box";
			}

			!$.isEmptyObject(cssValue) &&
				this.$wrapper.css(cssValue);

			panel.size = this.$wrapper[ horizontal ? "width" : "height" ]();
		},

		/**
		 * To fulfill minimum panel count cloning original node when circular or previewPadding option are set
		 * @return {Boolean} true : added clone node, false : not added
		 */
		_addClonePanels: function () {
			var panel = this._conf.panel;
			var panelCount = panel.origCount;
			var cloneCount = panel.minCount - panelCount;
			var list = panel.$list;
			var cloneNodes;

			// if panels are given less than required when circular option is set, then clone node to apply circular mode
			if (this.options.circular && panelCount < panel.minCount) {
				cloneNodes = list.clone();

				while (cloneNodes.length < cloneCount) {
					cloneNodes = cloneNodes.add(list.clone());
				}

				return this.$container.append(cloneNodes);
			}
		},

		/**
		 * Move panel's position within array
		 * @param {Number} count element counts to move
		 * @param {Boolean} append where the list to be appended(moved) (true: to the end, false: to the beginning)
		 */
		_movePanelPosition: function (count, append) {
			var panel = this._conf.panel;
			var list = panel.$list.toArray();
			var listToMove;

			listToMove = list.splice(append ? 0 : panel.count - count, count);
			panel.$list = $(append ? list.concat(listToMove) : listToMove.concat(list));
		},

		/**
		 * Set default panel to show
		 * @param {Number} index
		 */
		_setDefaultPanel: function (index) {
			var panel = this._conf.panel;
			var lastIndex = panel.count - 1;
			var coords;
			var baseIndex;

			if (this.options.circular) {
				// if default index is given, then move correspond panel to the first position
				if (index > 0 && index <= lastIndex) {
					this._movePanelPosition(index, true);
				}

				// set first panel's position according physical node length
				baseIndex = this._getBasePositionIndex();
				this._movePanelPosition(baseIndex, false);

				this._setPanelNo({
					no: index,
					currNo: index
				});
			} else {
				// if defaultIndex option is given, then move to that index panel
				if (index > 0 && index <= lastIndex) {
					this._setPanelNo({
						index: index,
						no: index,
						currIndex: index,
						currNo: index
					});

					coords = [ -(panel.size * index), 0];

					this._setTranslate(coords);
					this._setMovableCoord("setTo", [
						Math.abs(coords[0]), Math.abs(coords[1])
					], true, 0);
				}
			}
		},

		/**
		 * Arrange panels' position
		 * @param {Boolean} sort Need to sort panel's position
		 * @param {Number} indexToMove Number to move from current position (negative: left, positive: right)
		 */
		_arrangePanels: function (sort, indexToMove) {
			var conf = this._conf;
			var panel = conf.panel;
			var touch = conf.touch;
			var dirData = conf.dirData;
			var baseIndex;

			if (this.options.circular) {
				// when arranging panels, set flag to not trigger flick custom event
				conf.customEvent.flick = false;

				// move elements according direction
				if (sort) {
					indexToMove && (touch.direction = dirData[+!Boolean(indexToMove > 0)]);
					this._arrangePanelPosition(touch.direction, indexToMove);
				}

				// set index for base element's position
				baseIndex = this._getBasePositionIndex();

				this._setPanelNo({
					index: baseIndex,
					currIndex: baseIndex
				});

				// arrange MovableCoord's coord position
				conf.customEvent.flick = !!this._setMovableCoord("setTo", [
					panel.size * panel.index, 0
				], true, 0);
			}

			this._applyPanelsPos();
		},

		/**
		 * Set each panel's position in DOM
 		 */
		_applyPanelsPos: function() {
			this._conf.panel.$list.each(
				$.proxy(this._applyPanelsCss, this)
			);
		},

		/**
		 * Set CSS style values to move elements
		 *
		 * Initialize setting up checking if browser support transform css property.
		 * If browser doesn't support transform, then use left/top properties instead.
		 */
		_setMoveStyle: (function () {
			return SUPPORT_TRANSFORM ?
				function ($element, coords) {
					$element.css("transform",
						ns.translate(coords[0], coords[1], this._conf.useLayerHack)
					);
				} :	function ($element, coords) {
					$element.css({ left: coords[0], top: coords[1] });
				};
		})(),

		/**
		 * Callback function for applying CSS values to each panels
		 *
		 * Need to be initialized before use, to set up for Android 2.x browsers or others.
		 */
		_applyPanelsCss: function () {
			var conf = this._conf;
			var dummyAnchorClassName = "__dummy_anchor";

			if (IS_ANDROID2) {
				conf.$dummyAnchor = $("." + dummyAnchorClassName);

				!conf.$dummyAnchor.length && this.$wrapper.append(
					conf.$dummyAnchor = $("<a href='javascript:void(0);' class='" +
						dummyAnchorClassName +
						"' style='position:absolute;height:0px;width:0px;'>")
				);

				this._applyPanelsCss = function (i, v) {
					var coords = this._getDataByDirection([
						(this._conf.panel.size * i) + "px", 0
					]);

					$(v).css({
						left: coords[0],
						top: coords[1]
					});
				};
			} else {
				this._applyPanelsCss = function (i, v) {
					var coords = this._getDataByDirection([
						SUPPORT_TRANSFORM ?
							(100 * i) + "%" :
							(this._conf.panel.size * i) + "px", 0]);

					this._setMoveStyle($(v), coords);
				};
			}
		},

		/**
		 * Adjust container's css value to handle Android 2.x link highlighting bug
		 *
		 * @param {String} phase
		 *    start - set left/top value to 0
		 *    end - set translate value to 0
		 * @param {Array} coords coordinate value
		 */
		_adjustContainerCss: function (phase, coords) {
			var conf = this._conf;
			var panel = conf.panel;
			var options = this.options;
			var horizontal = options.horizontal;
			var paddingTop = options.previewPadding[0];
			var container = this.$container;
			var value;

			if (IS_ANDROID2) {
				if (!coords) {
					coords = [-panel.size * panel.index, 0];
				}

				if (phase === "start") {
					container = container[0].style;
					value = parseInt(container[horizontal ? "left" : "top"], 10);

					if (horizontal) {
						value && (container.left = 0);
					} else {
						value !== paddingTop && (container.top = "0px");
					}

					this._setTranslate([-coords[+!options.horizontal], 0]);

				} else if (phase === "end") {
					coords = this._getCoordsValue(coords);

					container.css({
						left: coords.x,
						top: coords.y,
						transform: ns.translate(0, 0, conf.useLayerHack)
					});

					conf.$dummyAnchor[0].focus();
				}
			}
		},

		/**
		 * Set MovableCoord coord value
		 * @param {String} method
		 * @param {Array} coord
		 * @param {Boolean} isDirVal
		 * @param {Number} duration
		 * @return {eg.MovableCoord} MovableCoord instance
		 */
		_setMovableCoord: function (method, coord, isDirVal, duration) {
			if (isDirVal) {
				coord = this._getDataByDirection(coord);
			}

			return this._mcInst[method](coord[0], coord[1], duration);
		},

		/**
		 * Set hint for browser to decide efficient way of doing transform changes(or animation)
		 * https://dev.opera.com/articles/css-will-change-property/
		 */
		_setHint: function () {
			var value = "transform";
			this.$container.css("willChange", value);
			this._conf.panel.$list.css("willChange", value);
		},

		/**
		 * Get data according options.horizontal value
		 *
		 * @param {Array} value primary data to handle
		 * @return {Array}
		 */
		_getDataByDirection: function (value) {
			value = value.concat();
			!this.options.horizontal && value.reverse();
			return value;
		},

		/**
		 * Move nodes
		 * @param {Boolean} direction
		 * @param {Number} indexToMove
		 */
		_arrangePanelPosition: function (direction, indexToMove) {
			var next = direction === this._conf.dirData[0];
			this._movePanelPosition(Math.abs(indexToMove || 1), next);
		},

		/**
		 * Get the base position index of the panel
		 */
		_getBasePositionIndex: function () {
			return Math.floor(this._conf.panel.count / 2 - 0.1);
		},

		/**
		 * Bind events
		 * @param {Boolean} bind
		 */
		_bindEvents: function (bind) {
			var options = this.options;
			var $wrapper = this.$wrapper;
			var mcInst = this._mcInst;

			if (bind) {
				mcInst.bind($wrapper, {
					scale: this._getDataByDirection([-1, 0]),
					direction: MC["DIRECTION_" +
					(options.horizontal ? "HORIZONTAL" : "VERTICAL")],
					interruptable: false,
					inputType: options.inputType,
					thresholdAngle: options.thresholdAngle
				}).on({
					hold: $.proxy(this._holdHandler, this),
					change: $.proxy(this._changeHandler, this),
					release: $.proxy(this._releaseHandler, this),
					animationStart: $.proxy(this._animationStartHandler, this),
					animationEnd: $.proxy(this._animationEndHandler, this)
				});
			} else {
				mcInst.unbind($wrapper).off();
			}
		},

		/**
		 * 'hold' event handler
		 */
		_holdHandler: function (e) {
			var conf = this._conf;

			conf.touch.holdPos = e.pos;
			conf.touch.holding = true;
			conf.panel.changed = false;

			this._adjustContainerCss("start", e.pos);
		},

		/**
		 * 'change' event handler
		 */
		_changeHandler: function (e) {
			var conf = this._conf;
			var touch = conf.touch;
			var posIndex = +!this.options.horizontal;
			var pos = e.pos[posIndex];
			var holdPos = touch.holdPos[posIndex];
			var direction;
			var eventRes = null;
			var movedPx;

			this._setPointerEvents(e);  // for "click" bug

			/**
			 * This event is fired when panel moves.
			 * @ko 패널이 이동할 때 발생하는 이벤트
			 * @name eg.Flicking#flick
			 * @event
			 * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
			 * @param {String} param.eventType The name of the event<ko>이름명</ko>
			 * @param {Number} param.index Physical index number of the current panel element, which is relative to DOM (@deprecated since 1.3.0)<ko>현재 패널 엘리먼트의 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다 (@deprecated since 1.3.0)</ko>
			 * @param {Number} param.no Logical index number of the current panel element, which is relative to the panel content <ko>현재 패널 엘리먼트의 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다</ko>
			 * @param {Number} param.direction Direction of the movement (see eg.MovableCoord.DIRECTION_* constant) <ko>이동 방향(eg.MovableCoord.DIRECTION_* constant 참고)</ko>
			 * @param {Array} param.pos Start coordinate <ko>출발점 좌표</ko>
			 * @param {Number} param.pos.0 x-coordinate <ko>x 좌표</ko>
			 * @param {Number} param.pos.1 y-coordinate <ko>y 좌표</ko>
			 * @param {Boolean} param.holding Indicates whether a user holds an element on the screen of the device. <ko>사용자가 기기의 화면을 누르고 있는지 여부</ko>
			 * @param {Number} param.distance Distance moved from then starting point. According the move direction, positive on eg.MovableCoord.DIRECTION_LEFT/UP and negative on eg.MovableCoord.DIRECTION_RIGHT/DOWN <ko>시작점부터 이동된 거리의 값. 이동 방향에 따라 eg.MovableCoord.DIRECTION_LEFT/UP의 경우 양수를 eg.MovableCoord.DIRECTION_RIGHT/DOWN의 경우는 음수를 반환</ko>
			 */
			if (e.hammerEvent) {
				direction = e.hammerEvent.direction;

				// Adjust direction in case of diagonal touch move
				movedPx = e.hammerEvent[ this.options.horizontal ? "deltaX" : "deltaY" ];

				if (!~$.inArray(direction, conf.dirData)) {
					direction = conf.dirData[ +(Math.abs(touch.lastPos) <= movedPx) ];
				}

				touch.lastPos = movedPx;
			} else {
				touch.lastPos = null;
			}

			conf.customEvent.flick && (eventRes = this._triggerEvent(EVENTS.flick, {
				pos: e.pos,
				holding: e.holding,
				direction: direction || touch.direction,
				distance: pos - (holdPos || (touch.holdPos[posIndex] = pos))
			}));

			(eventRes || eventRes === null) && this._setTranslate([ -pos, 0 ]);
		},

		/**
		 * 'release' event handler
		 */
		_releaseHandler: function (e) {
			var touch = this._conf.touch;
			var pos = e.destPos;
			var posIndex = +!this.options.horizontal;
			var holdPos = touch.holdPos[posIndex];
			var panelSize = this._conf.panel.size;

			touch.distance = e.depaPos[posIndex] - touch.holdPos[posIndex];

			touch.direction = this._conf.dirData[
				+!Boolean(touch.holdPos[posIndex] < e.depaPos[posIndex])
			];

			pos[posIndex] = Math.max(
				holdPos - panelSize, Math.min(holdPos, pos[posIndex])
			);

			touch.destPos[posIndex] =
				pos[posIndex] = Math.round(pos[posIndex] / panelSize) * panelSize;

			touch.distance === 0 && this._adjustContainerCss("end");
			touch.holding = false;

			this._setPointerEvents();  // for "click" bug
		},

		/**
		 * 'animationStart' event handler
		 */
		_animationStartHandler: function (e) {
			var conf = this._conf;
			var panel = conf.panel;
			var customEvent = conf.customEvent;

			panel.animating = true;

			if (!customEvent.restoreCall && e.hammerEvent &&
				this._setPhaseValue("start", {
					depaPos: e.depaPos,
					destPos: e.destPos
				}) === false) {
				e.stop();
			}

			if (e.hammerEvent) {
				e.duration = this.options.duration;

				e.destPos[+!this.options.horizontal] =
					panel.size * (
						panel.index + conf.indexToMove
					);
			}

			if (this._isMovable()) {
				!customEvent.restoreCall && (customEvent.restore = false);
			} else {
				this._triggerBeforeRestore(e);
			}
		},

		/**
		 * 'animationEnd' event handler
		 */
		_animationEndHandler: function () {
			this._setPhaseValue("end");

			this._conf.panel.animating = false;
			this._triggerRestore();
		},

		/**
		 * Set container's height value according to children's height
		 * @param {Number} direction
		 */
		_setAdaptiveHeight: function(direction) {
			var $panel;
			var $first;
			var $children;
			var height;
			var conf = this._conf;
			var indexToMove = conf.indexToMove;

			$panel = indexToMove === 0 ?

				// panel moved by 1
				this[ "get" + (
					direction === MC.DIRECTION_LEFT && "Next" ||
					direction === MC.DIRECTION_RIGHT && "Prev" || ""
				) + "Element" ]() :

				// panel moved by .moveTo()
				conf.panel.$list.eq(
					conf.panel.currIndex + indexToMove
				);

			$first = $panel.find(":first");
			height = $first.attr(DATA_HEIGHT);

			if (!height) {
				$children = $panel.children();
				height = ($children.length > 1 ? $panel.css("height", "auto") : $first)
					.outerHeight(true);

				$first.attr(DATA_HEIGHT, height);
			}

			this.$wrapper.height(height);
		},

		/**
		 * Trigger beforeRestore event
		 * @param {Object} e event object
		 */
		_triggerBeforeRestore: function(e) {
			var conf = this._conf;
			var touch = conf.touch;

			// reverse direction value when restore
			touch.direction = ~~conf.dirData.join("").replace(touch.direction, "");

			/**
			 * This event is fired before an element is restored to its original position when user action is done while the element is not dragged until a certain distance threshold is reached
			 * @ko 다음 패널로 바뀌는 기준 이동 거리만큼 이동하기 전에 사용자의 동작이 끝났을 때 원래 패널로 복원되기 전에 발생하는 이벤트
			 * @name eg.Flicking#beforeRestore
			 * @event
			 * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
			 * @param {String} param.eventType The name of the event <ko>이름명</ko>
			 * @param {Number} param.index Physical index number of the current panel element, which is relative to DOM. (@deprecated since 1.3.0)<ko>현재 패널 엘리먼트의 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다. (@deprecated since 1.3.0)</ko>
			 * @param {Number} param.no Logical index number of the current panel element, which is relative to the panel content.<ko>현재 패널 엘리먼트의 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다</ko>
			 * @param {Number} param.direction Direction of the movement (see eg.MovableCoord.DIRECTION_* constant) <ko>이동 방향(eg.MovableCoord.DIRECTION_* constant 참고)</ko>
			 * @param {Array} param.depaPos Start coordinate <ko>출발점 좌표</ko>
			 * @param {Number} param.depaPos.0 x-coordinate <ko>x 좌표</ko>
			 * @param {Number} param.depaPos.1 y-coordinate <ko>y 좌표</ko>
			 * @param {Array} param.destPos End coordinate <ko>도착점 좌표</ko>
			 * @param {Number} param.destPos.0 x-coordinate <ko>x 좌표</ko>
			 * @param {Number} param.destPos.1 y-coordinate <ko>y 좌표</ko>
			 */
			conf.customEvent.restore = this._triggerEvent(EVENTS.beforeRestore, {
				depaPos: e.depaPos,
				destPos: e.destPos
			});

			if (!conf.customEvent.restore) {
				"stop" in e && e.stop();
				conf.panel.animating = false;
			}
		},

		/**
		 * Trigger restore event
		 */
		_triggerRestore: function() {
			var customEvent = this._conf.customEvent;

			/**
			 * This event is fired after an element is restored to its original position when user action is done while the element is not dragged until a certain distance threshold is reached.
			 * @ko 다음 패널로 바뀌는 기준 이동 거리만큼 이동하기 전에 사용자의 동작이 끝났을 때 원래 패널로 복원된 다음 발생하는 이벤트
			 * @name eg.Flicking#restore
			 * @event
			 * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
			 * @param {String} param.eventType The name of the event <ko>이름명</ko>
			 * @param {Number} param.index Physical index number of the current panel element, which is relative to DOM(@deprecated since 1.3.0)<ko>현재 패널 엘리먼트의 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다 (@deprecated since 1.3.0)</ko>
			 * @param {Number} param.no Logical index number of the current panel element, which is relative to the panel content. <ko>현재 패널 엘리먼트의 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다</ko>
			 * @param {Number} param.direction Direction of the panel move (see eg.MovableCoord.DIRECTION_* constant) <ko>이동 방향(eg.MovableCoord.DIRECTION_* constant 참고)</ko>
			 */
			customEvent.restore && this._triggerEvent(EVENTS.restore);
			customEvent.restoreCall = false;
		},

		/**
		 * Set value when panel changes
		 * @param {String} phase - [start|end]
		 * @param {Object} pos
		 */
		_setPhaseValue: function (phase, pos) {
			var conf = this._conf;
			var options = this.options;
			var panel = conf.panel;

			if (phase === "start" && (panel.changed = this._isMovable())) {
				/**
				 * This event is fired before flicking starts
				 * @ko 플리킹이 시작하기 전에 발생하는 이벤트
				 * @name eg.Flicking#beforeFlickStart
				 * @event
				 * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
				 * @param {String} param.eventType The name of the event <ko>이름명</ko>
				 * @param {Number} param.index Physical index number of the current panel element, which is relative to DOM. (@deprecated since 1.3.0)<ko>현재 패널 엘리먼트의 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다 (@deprecated since 1.3.0)</ko>
				 * @param {Number} param.no Logical index number of the current panel element, which is relative to the panel content.<ko>현재 패널 엘리먼트의 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다</ko>
				 * @param {Number} param.direction Direction of the movement (see eg.MovableCoord.DIRECTION_* constant) <ko>−	이동 방향(eg.MovableCoord.DIRECTION_* constant 참고)</ko>
				 * @param {Array} param.depaPos Start coordinate <ko>출발점 좌표</ko>
				 * @param {Number} param.depaPos.0 x-coordinate <ko>x 좌표</ko>
				 * @param {Number} param.depaPos.1 y-coordinate <ko>y 좌표</ko>
				 * @param {Array} param.destPos End coordinate <ko>도착점 좌표</ko>
				 * @param {Number} param.destPos.0 x-coordinate <ko>x 좌표</ko>
				 * @param {Number} param.destPos.1 y-coordinate <ko>y 좌표</ko>
				 */
				if (!this._triggerEvent(EVENTS.beforeFlickStart, pos)) {
					return panel.changed = panel.animating = false;
				} else {
					options.adaptiveHeight && this._setAdaptiveHeight(conf.touch.direction);
				}

				conf.indexToMove === 0 && this._setPanelNo();
			} else if (phase === "end") {
				if (options.circular && panel.changed) {
					this._arrangePanels(true, conf.indexToMove);
				}

				!IS_ANDROID2 && this._setTranslate([-panel.size * panel.index, 0]);
				conf.touch.distance = conf.indexToMove = 0;

				/**
				 * This event is fired after panel moves.
				 * @ko 패널이 이동한 다음 발생하는 이벤트
				 * @name eg.Flicking#flickEnd
				 * @event
				 * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
				 * @param {String} param.eventType The name of the event <ko>이름명</ko>
				 * @param {Number} param.index Physical index number of the current panel element, which is relative to DOM (@deprecated since 1.3.0)<ko>현재 패널 엘리먼트의 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다 (@deprecated since 1.3.0)</ko>
				 * @param {Number} param.no Logical index number of the current panel element, which is relative to the panel content. <ko>현재 패널 엘리먼트의 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다.</ko>
				 * @param {Number} param.direction Direction of the movemen (see eg.MovableCoord.DIRECTION_* constant) <ko>−	이동 방향(eg.MovableCoord.DIRECTION_* constant 참고</ko>
				 */
				panel.changed && this._triggerEvent(EVENTS.flickEnd);
			}

			this._adjustContainerCss(phase);
		},

		/**
		 * Get positive or negative according direction
		 */
		_getNumByDirection: function() {
			var conf = this._conf;
			return conf.touch.direction === conf.dirData[0] ? 1 : -1;
		},

		/**
		 * Revert panel number
		 */
		_revertPanelNo: function() {
			var panel = this._conf.panel;
			var num = this._getNumByDirection();

			var index = panel.currIndex >= 0 ? panel.currIndex : panel.index - num;
			var no = panel.currNo >= 0 ? panel.currNo : panel.no - num;

			this._setPanelNo({
				index: index,
				no: no
			});
		},

		/**
		 * Set the panel number
		 * @param {Object} obj number object
		 */
		_setPanelNo: function (obj) {
			var panel = this._conf.panel;
			var count = panel.origCount - 1;
			var num = this._getNumByDirection();

			if ($.isPlainObject(obj)) {
				$.each(obj, function(i, v) {
					panel[i] = v;
				});

			} else {
				// remember current value
				panel.currIndex = panel.index;
				panel.currNo = panel.no;

				panel.index += num;
				panel.no += num;
			}

			if (panel.no > count) {
				panel.no = 0;
			} else if (panel.no < 0) {
				panel.no = count;
			}
		},

		/**
		 * Set pointerEvents css property on container element due to the iOS click bug
		 * @param {Event} e
		 */
		_setPointerEvents: function (e) {
			var pointer = this.$container.css("pointerEvents");
			var val;

			if (e && e.holding &&
				e.hammerEvent && e.hammerEvent.preventSystemEvent &&
				pointer !== "none"
			) {
				val = "none";
			} else if (!e && pointer !== "auto") {
				val = "auto";
			}

			val && this.$container.css("pointerEvents", val);
		},

		/**
		 * Get coordinate value with unit
		 * @param coords {Array} x,y numeric value
		 * @return {Object} x,y coordinate value with unit
		 */
		_getCoordsValue: function (coords) {
			// the param comes as [ val, 0 ], whatever the direction. So reorder the value depend the direction.
			coords = this._getDataByDirection(coords);

			return {
				x: this._getUnitValue(coords[0]),
				y: this._getUnitValue(coords[1])
			};
		},

		/**
		 * Set translate property value
		 * @param {Array} coords coordinate x,y value
		 */
		_setTranslate: function (coords) {
			coords = this._getCoordsValue(coords);
			this._setMoveStyle(this.$container, [ coords.x, coords.y ]);
		},

		/**
		 * Return unit formatted value
		 * @param {Number|String} val
		 * @return {String} val Value formatted with unit
		 */
		_getUnitValue: function (val) {
			var rx = /(?:[a-z]{2,}|%)$/;
			return (parseInt(val, 10) || 0) + (String(val).match(rx) || "px");
		},

		/**
		 * Check if panel passed through threshold pixel
		 */
		_isMovable: function () {
			var options = this.options;
			var conf = this._conf;
			var mcInst = this._mcInst;
			var panel = conf.panel;
			var isMovable = Math.abs(this._conf.touch.distance) >= options.threshold;
			var max;
			var currPos;
			var touchDirection;

			if (!options.circular && isMovable) {
				touchDirection = conf.touch.direction;
				max = this._getDataByDirection(mcInst.options.max)[0];
				currPos = this._getDataByDirection(mcInst.get())[0];

				// if current position out of range
				if (( panel.currNo === 0 && touchDirection === conf.dirData[1] ||  // first panel
					  panel.count - 1 === panel.currNo && touchDirection === conf.dirData[0]  // last panel
					) && (currPos < 0 || currPos > max)) {
					return false;
				}
			}

			return isMovable;
		},

		/**
		 * Trigger custom events
		 * @param {String} name - event name
		 * @param {Object} param - additional event value
		 * @return {Boolean}
		 */
		_triggerEvent: function (name, param) {
			var conf = this._conf;
			var panel = conf.panel;

			// pass changed panel no only on 'flickEnd' event
			if (name === EVENTS.flickEnd) {
				panel.currNo = panel.no;
				panel.currIndex = panel.index;
			}

			return this.trigger(conf.eventPrefix + name, $.extend({
				eventType: name,
				index: panel.currIndex,
				no: panel.currNo,
				direction: conf.touch.direction
			}, param));
		},

		/**
		 * Get next/prev panel element/index.
		 * @param {Boolean} direction
		 * @param {Boolean} element - true:to get element, false:to get index
		 * @param {Number} physical - true : physical, false : logical
		 * @return {jQuery|Number}
		 */
		_getElement: function (direction, element, physical) {
			var panel = this._conf.panel;
			var circular = this.options.circular;
			var pos = panel.currIndex;
			var next = direction === this._conf.dirData[0];
			var result = null;
			var total;
			var index;
			var currentIndex;

			if (physical) {
				total = panel.count;
				index = pos;
			} else {
				total = panel.origCount;
				index = panel.currNo;
			}

			currentIndex = index;

			if (next) {
				if (index < total - 1) {
					index++;
				} else if (circular) {
					index = 0;
				}
			} else {
				if (index > 0) {
					index--;
				} else if (circular) {
					index = total - 1;
				}
			}

			if (currentIndex !== index) {
				result = element ? $(panel.$list[next ? pos + 1 : pos - 1]) : index;
			}

			return result;
		},

		/**
		 * Set value to force move panels when duration is 0
		 * @param {Boolean} next
		 */
		_setValueToMove: function (next) {
			var conf = this._conf;

			conf.touch.distance = this.options.threshold + 1;
			conf.touch.direction = conf.dirData[ +!next ];
		},

		/**
		 * Check and parse value to number
		 * @param {Number|String} val
		 * @param {Number} defVal
		 * @return {Number}
		 */
		_getNumValue: function (val, defVal) {
			return isNaN(val = parseInt(val, 10)) ? defVal : val;
		},

		/**
		 * Returns the index number of the current panel element.
		 * @ko 현재 패널 엘리먼트의 인덱스 번호를 반환한다
		 * @method eg.Flicking#getIndex
		 * @param {Boolean} [physical=false] Types of index numbers<br>- true: Indicates physical index numbers relative to DOM.<br>- false: Indicates logical index numbers relative to the panel content. <ko>−	인덱스 번호의 종류<br>- true: 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다.<br>- false: 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다.</ko>
		 * @return {Number} Index number of the current panel element <ko>현재 패널의 인덱스 번호</ko>
		 */
		getIndex: function (physical) {
			return this._conf.panel[ physical ? "currIndex" : "currNo" ];
		},

		/**
		 * Returns the reference of the current panel element.
		 * @ko 현재 패널 엘리먼트의 레퍼런스를 반환한다
		 * @method eg.Flicking#getElement
		 * @return {jQuery} Current element <ko>현재 엘리먼트</ko>
		 */
		getElement: function () {
			var panel = this._conf.panel;
			return $(panel.$list[ panel.currIndex ]);
		},

		/**
		 * Returns the reference of the next panel element.
		 * @ko 다음 패널 엘리먼트의 레퍼런스를 반환한다.
		 * @method eg.Flicking#getNextElement
		 * @return {jQuery|null} Next panel element or null if it does not exist.<ko>다음 패널 엘리먼트. 패널이 없으면 'null'을 반환한다.</ko>
		 */
		getNextElement: function () {
			return this._getElement(this._conf.dirData[0], true);
		},

		/**
		 * Returns the index number of the next panel element.
		 * @ko 다음 패널 엘리먼트의 인덱스 번호를 반환한다
		 * @method eg.Flicking#getNextIndex
		 * @param {Boolean} [physical=false] Types of index numbers<br>- true: Indicates physical index numbers relative to DOM.<br>- false: Indicates logical index numbers relative to the panel content. <ko>−	인덱스 번호의 종류<br>- true: 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다.<br>- false: 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다.</ko>
		 * @return {Number|null} Index number of the next panel element or null if it does not exist. <ko>다음 패널 엘리먼트의 인덱스 번호. 패널이 없으면 'null'을 반환한다</ko>
		 */
		getNextIndex: function (physical) {
			return this._getElement(this._conf.dirData[0], false, physical);
		},

		/**
		 * Returns the references of whole panel elements.
		 * @ko 패널을 구성하는 모든 엘리먼트의 레퍼런스를 반환한다
		 * @method eg.Flicking#getAllElements
		 * @return {jQuery} Whole panel elements <ko>모든 패널 엘리먼트</ko>
		 */
		getAllElements: function () {
			return this._conf.panel.$list;
		},

		/**
		 * Returns the reference of the previous panel element.
		 * @ko 이전 패널 엘리먼트의 레퍼런스를 반환한다.
		 * @method eg.Flicking#getPrevElement
		 * @return {jQuery|null} Previous panel element or null if it does not exist. <ko>이전 패널 엘리먼트. 패널이 없으면 'null'을 반환한다</ko>
		 */
		getPrevElement: function () {
			return this._getElement(this._conf.dirData[1], true);
		},

		/**
		 * Returns the index number of the previous panel element.
		 * @ko 이전 패널 엘리먼트의 인덱스 번호를 반환한다
		 * @method eg.Flicking#getPrevIndex
		 * @param {Boolean} [physical=false] Types of index numbers<br>- true: Indicates physical index numbers relative to DOM.<br>- false: Indicates logical index numbers relative to the panel content. <ko>−	인덱스 번호의 종류<br>- true: 물리적 인덱스 번호. DOM 엘리먼트를 기준으로 하는 인덱스 번호다.<br>- false: 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다.</ko>
		 * @return {Number|null} Previous element index value or null if no more element exist<ko>이전 패널 인덱스 번호. 패널이 없는 경우에는 null</ko>
		 */
		getPrevIndex: function (physical) {
			return this._getElement(this._conf.dirData[1], false, physical);
		},

		/**
		 * Returns the total number of whole panel elements.
		 * @ko 전체 패널 엘리먼트의 개수를 반환한다
		 * @method eg.Flicking#getTotalCount
		 * @deprecated since 1.3.0
		 * @param {Boolean} [physical=false] Number of elements relative to (true: DOM, false: panel content)<ko>엘리먼트 개수의 기준(true: DOM 엘리먼트 기준, false: 패널 콘텐츠 기준)</ko>
		 * @return {Number} Total number of whole panel elements <ko>모든 패널 엘리먼트의 개수</ko>
		 */
		getTotalCount: function (physical) {
			return this._conf.panel[ physical ? "count" : "origCount" ];
		},

		/**
		 * Checks whether the animated panel is playing.
		 * @ko 패널 이동 애니메이션이 진행 중인지 확인한다.
		 * @method eg.Flicking#isPlaying
		 * @return {Boolean} Indicates whether the animated panel is playing <ko>패널 이동 애니메이션 진행 중 여부</ko>
		 */
		isPlaying: function () {
			return this._conf.panel.animating;
		},

		/**
		 * Move panel to the given direction
		 * @param {Boolean} next
		 * @param {Number} duration
		 */
		_movePanel: function (next, duration) {
			var conf = this._conf;
			var panel = conf.panel;
			var options = this.options;

			if (panel.animating || conf.touch.holding) {
				return;
			}

			this._setValueToMove(next);

			if (options.circular ||
				this[next ? "getNextIndex" : "getPrevIndex"]() != null
			) {
				this._movePanelByPhase("setBy", [
					panel.size * (next ? 1 : -1), 0
				], duration);
			}

			return this;
		},

		/**
		 * Move panel applying start/end phase value
		 * @param {String} method movableCoord method name
		 * @param {Object} coords coordinate array value
		 * @param {Number} duration duration value
		 */
		_movePanelByPhase: function(method, coords, duration) {
			duration = this._getNumValue(duration, this.options.duration);

			if (this._setPhaseValue("start") !== false) {
				this._setMovableCoord(method, coords, true, duration);
				!duration && this._setPhaseValue("end");
			}
		},

		/**
		 * Moves an element to the next panel.
		 * @ko 다음 패널로 이동한다.
		 * @method eg.Flicking#next
		 * @param {Number} [duration=options.duration] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
		 * @return {eg.Flicking} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
		 */
		next: function (duration) {
			return this._movePanel(true, duration);
		},

		/**
		 * Moves an element to the previous panel.
		 * @ko 이전 패널로 이동한다.
		 * @method eg.Flicking#prev
		 * @param {Number} [duration=options.duration] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
		 * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 */
		prev: function (duration) {
			return this._movePanel(false, duration);
		},

		/**
		 * Moves an element to the indicated panel.
		 * @ko 지정한 패널로 이동한다.
		 * @method eg.Flicking#moveTo
		 * @param {Number} no Logical index number of the target panel element, which is relative to the panel content. <ko>이동할 패널 엘리먼트의 논리적 인덱스 번호. 패널 콘텐츠를 기준으로 하는 인덱스 번호다</ko>
		 * @param {Number} [duration=options.duration] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
		 * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 */
		moveTo: function (no, duration) {
			var conf = this._conf;
			var panel = conf.panel;
			var circular = this.options.circular;
			var currentIndex = panel.index;
			var indexToMove;
			var isPositive;

			no = this._getNumValue(no, -1);

			if (no < 0 || no >= panel.origCount || no === panel.no ||
				panel.animating || conf.touch.holding) {
				return this;
			}

			indexToMove = no - (circular ? panel.no : currentIndex);
			isPositive = indexToMove > 0;

			// check for real panel count which can be moved on each sides in circular mode
			if (circular &&
				Math.abs(indexToMove) >
					(isPositive ? panel.count - (currentIndex + 1) : currentIndex)) {
				indexToMove = indexToMove + (isPositive ? -1 : 1) * panel.count;
				isPositive = indexToMove > 0;
			}

			this._setPanelNo(circular ? { no: no } : { no: no, index: no });
			this._conf.indexToMove = indexToMove;
			this._setValueToMove(isPositive);

			this._movePanelByPhase(
				circular ? "setBy" : "setTo",
				[ panel.size * (circular ? indexToMove : no), 0 ],
				duration
			);

			return this;
		},

		/**
		 * Update panel's previewPadding size according options.previewPadding
		 */
		_checkPadding: function () {
			var options = this.options;
			var previewPadding = options.previewPadding.concat();
			var padding = this.$wrapper.css("padding").split(" ");

			options.horizontal && padding.reverse();

			// get current padding value
			padding = padding.length === 2 ?
				[ padding[0], padding[0] ] : [ padding[0], padding[2] ];

			padding = $.map(padding, function(num) {
				return parseInt(num, 10);
			});

			// update padding when current and given are different
			if (previewPadding.length === 2 &&
				previewPadding[0] !== padding[0] || previewPadding[1] !== padding[1]) {

				this._setPadding(previewPadding);
			}
		},

		/**
		 * Updates the size of the panel.
		 * @ko 패널의 크기를 갱신한다
		 * @method eg.Flicking#resize
		 * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 * @example
			var some = new eg.Flicking("#mflick", {
					previewPadding: [10,10]
				});

			// when device orientaion changes
			some.resize();

			// or when changes previewPadding option from its original value
			some.options.previewPadding = [20, 30];
			some.resize();
		 */
		resize: function () {
			var conf = this._conf;
			var options = this.options;
			var panel = conf.panel;
			var horizontal = options.horizontal;
			var panelSize;
			var maxCoords;

			if (~~options.previewPadding.join("")) {
				this._checkPadding();
				panelSize = panel.size;
			} else if (horizontal) {
				panelSize = panel.size = this.$wrapper.width();
			}

			maxCoords = this._getDataByDirection([panelSize * (panel.count - 1), 0]);

			// resize elements
			horizontal && this.$container.width(maxCoords[0] + panelSize);
			panel.$list.css(horizontal ? "width" : "height", panelSize);

			// remove data-height attribute and re-evaluate panel's height
			if (options.adaptiveHeight) {
				var $panel = this.$container.find("[" + DATA_HEIGHT + "]");

				$panel.size() && $panel.attr(DATA_HEIGHT, null) &&
					this._setAdaptiveHeight();
			}

			this._mcInst.options.max = maxCoords;
			this._setMovableCoord("setTo", [panelSize * panel.index, 0], true, 0);

			if (IS_ANDROID2) {
				this._applyPanelsPos();
				this._adjustContainerCss("end");
			}

			return this;
		},

		/**
		 * Restores an element to its original position when it movement stops while the element is not dragged until a certain distance threshold is reached.
		 * @ko 다음 패널로 바뀌기 전에 패널 이동이 멈췄을 때 원래 패널로 복원한다
		 * @method eg.Flicking#restore
		 * @param {Number} [duration=options.duration] Duration of the panel movement (unit: ms) <ko>패널 이동 애니메이션 진행 시간(단위: ms)</ko>
		 * @return {eg.Flicking} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 * @example
			var some = new eg.Flicking("#mflick").on({
					beforeFlickStart : function(e) {
						if(e.no === 2) {
							e.stop();  // stop flicking
							this.restore(100);  // restoring to previous position
						}
					}
				);
		 */
		restore: function (duration) {
			var conf = this._conf;
			var panel = conf.panel;
			var currPos = this._getDataByDirection(this._mcInst.get());
			var destPos;

			// check if the panel isn't in right position
			if (currPos[0] !== panel.currIndex * panel.size) {
				conf.customEvent.restoreCall = true;
				duration = this._getNumValue(duration, this.options.duration);

				this._revertPanelNo();
				destPos = this._getDataByDirection([panel.size * panel.index, 0]);

				this._triggerBeforeRestore({ depaPos: currPos, destPos: destPos });
				this._setMovableCoord("setTo", destPos, true, duration);

				if (!duration) {
					this._adjustContainerCss("end");
					this._triggerRestore();
				}

				// to handle on api call
			} else if (panel.changed) {
				this._revertPanelNo();
				conf.touch.distance = conf.indexToMove = 0;
			}

			return this;
		},

		/**
		 * Enables input devices.
		 * @ko 입력 장치를 사용할 수 있게 한다
		 * @method eg.Flicking#enableInput
		 * @return {eg.Flicking} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
		 */
		enableInput: function() {
			this._mcInst.enableInput();
			return this;
		},

		/**
		 * Disables input devices.
		 * @ko 입력 장치를 사용할 수 없게 한다.
		 * @method eg.Flicking#disableInput
		 * @return {eg.Flicking} An instance of a module itself <ko>모듈 자신의 인스턴스</ko>
		 */
		disableInput: function() {
			this._mcInst.disableInput();
			return this;
		},

		/**
		 * Destroys elements, properties, and events used in a panel.
		 * @ko 패널에 사용한 엘리먼트와 속성, 이벤트를 해제한다
		 * @method eg.Flicking#destroy
		 */
		destroy: function() {
			var conf = this._conf;
			var origPanelStyle = conf.origPanelStyle;
			var wrapper = origPanelStyle.wrapper;
			var list = origPanelStyle.list;

			// unwrap container element and restore original inline style
			this.$wrapper.attr("class", wrapper.className)
				.attr("style", wrapper.style);

			this.$container.children().unwrap().each(function(i, v) {
				var $el = $(v);

				if (i > list.length - 1) {
					return !!$el.remove();
				}

				$el.attr("class", list[i].className)
					.attr("style", list[i].style);
			});

			// unbind events
			this._bindEvents(false);
			this.off();

			// release resources
			for (var x in this) {
				this[x] = null;
			}
		}
	});
});
/**
 * A jQuery plugin available in the eg.Flicking module.
 *
 * @ko eg.Flicking 모듈의 jQuery 플러그인
 * @method jQuery.flicking
 * @example
	<div id="content">
	    <div>
	        <p>Layer 0</p>
	    </div>
	    <div>
	        <p>Layer 1</p>
	    </div>
	    <div>
	        <p>Layer 2</p>
	    </div>
	</div>
    <script>
	// create
	$("#content").flicking({
        circular : true,
     	threshold : 50
    });
 	// method
	$("#content").flicking("option","circular",true); //Set option
	$("#content").flicking("instance"); // Return flicking instance
	$("#content").flicking("getNextIndex",1); // Get next panel index
 	</script>
 * @see eg.Flicking
 */
/**
 * A jQuery custom event of the eg.Flicking module. This event is fired before an element is restored to its original position when user action is done while the element is not dragged until a certain distance threshold is reached.
 *
 * @ko eg.Flicking 모듈의 jQuery 커스텀 이벤트. 다음 패널로 바뀌는 기준 이동 거리만큼 이동하기 전에 사용자의 동작이 끝났을 때 원래 패널로 복원되기 전에 발생한다
 * @name jQuery#flicking:beforeRestore
 * @event
 * @example
 $("#mflick").on("flicking:beforeRestore",callback);
 $("#mflick").off("flicking:beforeRestore",callback);
 $("#mflick").trigger("flicking:beforeRestore",callback);
 * @see eg.Flicking#event:beforeRestore
 */
/**
 * A jQuery custom event of the eg.Flicking module, which occurs before the flicking starts.
 *
 * @ko eg.Flicking 모듈의 jQuery 커스텀 이벤트. 플리킹을 시작하기 전에 발생한다
 * @name jQuery#flicking:beforeFlickStart
 * @event
 * @example
 $("#mflick").on("flicking:beforeFlickStart",callback);
 $("#mflick").off("flicking:beforeFlickStart",callback);
 $("#mflick").trigger("flicking:beforeFlickStart",callback);
 * @see eg.Flicking#event:beforeFlickStart
 */
/**
 * A jQuery custom event of the eg.Flicking module. This event is fired when panel moves.
 *
 * @ko eg.Flicking 모듈의 jQuery 커스텀 이벤트. 패널이 이동될 때 발생한다
 * @name jQuery#flicking:flick
 * @event
 * @example
 $("#mflick").on("flicking:flick",callback);
 $("#mflick").off("flicking:flick",callback);
 $("#mflick").trigger("flicking:flick",callback);
 * @see eg.Flicking#event:flick
 */
/**
 * A jQuery custom event of the eg.Flicking module. This event is fired after the panel moves.
 *
 * @ko eg.Flicking 모듈의 jQuery 커스텀 이벤트. 패널이 이동된 뒤 발생한다
 * @name jQuery#flicking:flickEnd
 * @event
 * @example
 $("#mflick").on("flicking:flickEnd",callback);
 $("#mflick").off("flicking:flickEnd",callback);
 $("#mflick").trigger("flicking:flickEnd",callback);
 * @see eg.Flicking#event:flickEnd
 */
/**
 * A jQuery custom event of the eg.Flicking module. This event is fired after an element is restored to its original position when user action is done while the element has not bene dragged until a certain distance threshold is reached.
 *
 * @ko eg.Flicking 모듈의 jQuery 커스텀 이벤트. 다음 패널로 바뀌는 기준 이동 거리만큼 이동하기 전에 사용자의 동작이 끝났을 때 원래 패널로 복원된 다음 발생한다
 * @name jQuery#flicking:restore
 * @event
 * @example
 $("#mflick").on("flicking:restore",callback);
 $("#mflick").off("flicking:restore",callback);
 $("#mflick").trigger("flicking:restore",callback);
 * @see eg.Flicking#event:restore
 */

/**
* Copyright (c) 2015 NAVER Corp.
* egjs projects are licensed under the MIT license
*/

// jscs:disable validateLineBreaks, maximumLineLength
eg.module("infiniteGrid", ["jQuery", eg, window, document], function($, ns, global, doc) {
/**
	 * A module used to arrange card elements including content infinitely on a grid layout. With this module, you can implement a grid-pattern user interface composed of different card elements whose sizes vary. It guarantees performance by maintaining the number of DOMs the module is handling under any circumstance
	 * @group egjs
	 * @ko 콘텐츠가 있는 카드 엘리먼트를 그리드 레이아웃에 무한으로 배치하는 모듈. 다양한 크기의 카드 엘리먼트를 격자 모양으로 배치하는 UI를 만들 수 있다. 카드 엘리먼트의 개수가 계속 늘어나도 모듈이 처리하는 DOM의 개수를 일정하게 유지해 최적의 성능을 보장한다
	 * @class
	 * @name eg.InfiniteGrid
	 * @extends eg.Component
	 *
	 * @param {HTMLElement|String|jQuery} element A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
	 * @param {Object} [options] The option object of the eg.InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 옵션 객체</ko>
	 * @param {String} [options.itemSelector] A selector to select card elements that make up the layout (@deprecated since 1.3.0)<ko>레이아웃을 구성하는 카드 엘리먼트를 선택할 선택자(selector) (@deprecated since 1.3.0)</ko>
	 * @param {Number} [options.count=30] The number of DOMs handled by module. If the count value is greater than zero, the number of DOMs is maintained. If the count value is zero or less than zero, the number of DOMs will increase as card elements are added. <ko>모듈이 유지할 실제 DOM의 개수. count 값이 0보다 크면 DOM 개수를 일정하게 유지한다. count 값이 0 이하면 카드 엘리먼트가 추가될수록 DOM 개수가 계속 증가한다.</ko>
	 * @param {String} [options.defaultGroupKey=null] The default group key configured in a card element contained in the markup upon initialization of a module object <ko>모듈 객체를 초기화할 때 마크업에 있는 카드 엘리먼트에 설정할 그룹 키 </ko>
	 * @param {Boolean} [options.isEqualSize=false] Indicates whether sizes of all card elements are equal to one another. If sizes of card elements to be arranged are all equal and this option is set to "true", the performance of layout arrangement can be improved. <ko>카드 엘리먼트의 크기가 동일한지 여부. 배치될 카드 엘리먼트의 크기가 모두 동일할 때 이 옵션을 'true'로 설정하면 레이아웃 배치 성능을 높일 수 있다</ko>
	 * @param {Number} [options.threshold=300] The threshold size of an event area where card elements are added to a layout.<br>- append event: If the current vertical position of the scroll bar is greater than "the bottom property value of the card element at the top of the layout" plus "the value of the threshold option", the append event will occur.<br>- prepend event: If the current vertical position of the scroll bar is less than "the bottom property value of the card element at the top of the layout" minus "the value of the threshold option", the prepend event will occur. <ko>−	레이아웃에 카드 엘리먼트를 추가하는 이벤트가 발생하는 기준 영역의 크기.<br>- append 이벤트: 현재 스크롤의 y 좌표 값이 '레이아웃의 맨 아래에 있는 카드 엘리먼트의 top 속성의 값 + threshold 옵션의 값'보다 크면 append 이벤트가 발생한다.<br>- prepend 이벤트: 현재 스크롤의 y 좌표 값이 '레이아웃의 맨 위에 있는 카드 엘리먼트의 bottom 속성의 값 - threshold 옵션의 값'보다 작으면 prepend 이벤트가 발생한다</ko>
	 *
	 * @codepen {"id":"zvrbap", "ko":"InfiniteGrid 데모", "en":"InfiniteGrid example", "collectionId":"DPYEww", "height": 403}
	 *  @support {"ie": "8+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
	 *
	 * @example
		<!-- HTML -->
		<ul id="grid">
			<li class="card">
				<div>test1</div>
			</li>
			<li class="card">
				<div>test2</div>
			</li>
			<li class="card">
				<div>test3</div>
			</li>
			<li class="card">
				<div>test4</div>
			</li>
			<li class="card">
				<div>test5</div>
			</li>
			<li class="card">
				<div>test6</div>
			</li>
		</ul>
		<script>
		var some = new eg.InfiniteGrid("#grid").on("layoutComplete", function(e) {
			// ...
		});
		</script>
	 */
	var EVENTS = {
		"layoutComplete": "layoutComplete",
		"append": "append",
		"prepend": "prepend"
	};
	var RETRY = 3;
	ns.InfiniteGrid = ns.Class.extend(ns.Component, {
		_events: function() {
			return EVENTS;
		},
		construct: function(el, options, _prefix) {
			var ua = global.navigator.userAgent;
			this.options = $.extend({
				isEqualSize: false,
				defaultGroupKey: null,
				count: 30,
				threshold: 300
			}, options);

			// if el is jQuery instance, el should change to HTMLElement.
			this.$el = el instanceof $ ? el : $(el);
			this.el = this.$el.get(0);
			this.el.style.position = "relative";
			this._prefix = _prefix || "";
			this._isIos = /iPhone|iPad/.test(ua);
			this._isIE = /MSIE|Trident|Windows Phone|Edge/.test(ua);
			this._appendCols = this._prependCols = [];
			this.$view = $(global);
			this._reset();
			this._refreshViewport();
			if (this.el.children.length > 0) {
				this.layout(true, this._itemize($.makeArray(this.el.children), this.options.defaultGroupKey));
			}

			this._onScroll = $.proxy(this._onScroll, this);
			this._onResize = $.proxy(this._onResize, this);
			this.$view.on("scroll", this._onScroll)
				.on("resize", this._onResize);
		},
		_getScrollTop: function() {
			return doc.body.scrollTop || doc.documentElement.scrollTop;
		},
		_onScroll: function() {
			if (this.isProcessing()) {
				return;
			}
			var scrollTop = this._getScrollTop();
			var prevScrollTop = this._prevScrollTop;

			if (this._isIos && scrollTop === 0 || prevScrollTop === scrollTop) {
				return;
			}
			var ele;
			var rect;
			if (prevScrollTop < scrollTop) {
				if ($.isEmptyObject(this._bottomElement)) {
					this._bottomElement = this.getBottomElement();
					if (this._bottomElement == null) {
						return;
					}
				}
				ele = this._bottomElement;
				rect = ele.getBoundingClientRect();
				if (rect.top <= this._clientHeight + this.options.threshold) {
					/**
					 * This event is fired when a card element must be added at the bottom of a grid layout because there is no card to be displayed on screen when a user scrolls near bottom.
					 * @ko 카드 엘리먼트가 그리드 레이아웃의 아래에 추가돼야 할 때 발생하는 이벤트. 사용자가 아래로 스크롤해서 화면에 표시될 카드가 없을 때 발생한다
					 * @name eg.InfiniteGrid#append
					 * @event
					 *
					 * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
					 * @param {Number} param.scrollTop Current vertical position of the scroll bar<ko>현재 스크롤의 y 좌표 값</ko>
					 */
					this.trigger(this._prefix + EVENTS.append, {
						scrollTop: scrollTop
					});
				}
			} else {
				if ($.isEmptyObject(this._topElement)) {
					this._topElement = this.getTopElement();
					if (this._topElement == null) {
						return;
					}
				}
				ele = this._topElement;
				rect = ele.getBoundingClientRect();
				if (rect.bottom >= -this.options.threshold) {
					/**
					 * This event is fired when a card element must be added at the top of a grid layout because there is no card to be displayed on screen when a user scrolls near top. This event is available only if the isRecycling() method returns true.
					 * @ko 카드가 그리드 레이아웃의 위에 추가돼야 할 때 발생하는 이벤트. 사용자가 위로 스크롤해서 화면에 표시될 카드가 없을 때 발생한다. 이 이벤트는 isRecycling() 메서드의 반환값이 'true'일 때만 발생한다
					 * @name eg.InfiniteGrid#prepend
					 * @event
					 *
					 * @param {Object} param The object of data to be sent to an event<ko>이벤트에 전달되는 데이터 객체</ko>
					 * @param {Number} param.scrollTop Current vertical position of the scroll bar<ko>현재 스크롤의 y 좌표 값</ko>
					 */
					var croppedDistance = this.fit();
					if (croppedDistance > 0) {
						scrollTop -= croppedDistance;
						this.$view.scrollTop(scrollTop);
					}
					this.trigger(this._prefix + EVENTS.prepend, {
						scrollTop: scrollTop
					});
				}
			}
			this._prevScrollTop = scrollTop;
		},
		_onResize: function() {
			if (this._resizeTimeout) {
				clearTimeout(this._resizeTimeout);
			}
			var self = this;
			this._resizeTimeout = setTimeout(function() {
				self._refreshViewport();
				(self.$el.innerWidth() !== self._containerWidth) && self.layout(true);
				self._resizeTimeout = null;
				self._prevScrollTop = -1;
			}, 100);
		},
		_refreshViewport: function() {
			var el = this.$view.get(0);
			if (el) {
				this._clientHeight = $.isWindow(el) ? el.innerHeight || document.documentElement.clientHeight : el.clientHeight;
			}
		},
		/**
		 * Returns the current state of a module such as location information. You can use the setStatus() method to restore the information returned through a call to this method.
		 * @ko 카드의 위치 정보 등 모듈의 현재 상태 정보를 반환한다. 이 메서드가 반환한 정보를 저장해 두었다가 setStatus() 메서드로 복원할 수 있다
		 * @method eg.InfiniteGrid#getStatus
		 * @return {Object} State object of the eg.InfiniteGrid module<ko>eg.InfiniteGrid 모듈의 상태 객체</ko>
		 */
		getStatus: function() {
			var data = {};
			var p;
			for (p in this) {
				if (this.hasOwnProperty(p) && /^_/.test(p) &&
					typeof this[p] !== "function" && !(this[p] instanceof Element)) {
					data[p] = this[p];
				}
			}
			return {
				prop: data,
				options: $.extend({}, this.options),
				items: $.map(this.items, function(v) {
					var clone = $.extend({}, v);
					delete clone.el;
					return clone;
				}),
				html: this.el.innerHTML,
				cssText: this.el.style.cssText
			};
		},
		/**
		 * Sets the state of the eg.InfiniteGrid module with the information returned through a call to the getStatue() method.
		 * @ko getStatue() 메서드가 저장한 정보로 eg.InfiniteGrid 모듈의 상태를 설정한다.
		 * @method eg.InfiniteGrid#setStatus
		 * @param {Object} status State object of the eg.InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 상태 객체</ko>
		 * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 */
		setStatus: function(status) {
			if (!status || !status.cssText || !status.html ||
				!status.prop || !status.items) {
				return this;
			}
			this.el.style.cssText = status.cssText;
			this.el.innerHTML = status.html;
			$.extend(this, status.prop);
			this._topElement = this._bottomElement = null;
			this.items = $.map(this.el.children, function(v, i) {
				status.items[i].el = v;
				return status.items[i];
			});
			return this;
		},
		/**
		 * Checks whether a card element is being added.
		 * @ko 카드 엘리먼트 추가가 진행 중인지 확인한다
		 * @method eg.InfiniteGrid#isProcessing
		 * @return {Boolean} Indicates whether a card element is being added <ko>카드 엘리먼트 추가 진행 중 여부</ko>
		 */
		isProcessing: function() {
			return this._isProcessing;
		},
		/**
		 * Checks whether the total number of added card elements is greater than the value of the count option. Note that the value of the count option is always greater than zero. If it returns true, the number of DOMs won't increase even though card elements are added; instead of adding a new DOM, existing DOMs are recycled to maintain the number of DOMs.
		 * @ko 추가된 카드 엘리먼트의 전체 개수가 count 옵션의 값보다 큰지 확인한다. 단, count 옵션의 값은 0보다 크다. 'true'가 반환되면 카드 엘리먼트가 더 추가돼도 DOM의 개수를 증가하지 않고 기존 DOM을 재활용(recycle)해 DOM의 개수를 일정하게 유지한다
		 * @method eg.InfiniteGrid#isRecycling
		 * @return {Boolean} Indicates whether the total number of added card elements is greater than the value of the count option. <ko>추가된 카드 엘리먼트의 전체 개수가 count 옵션의 값보다 큰지 여부</ko>
		 */
		isRecycling: function() {
			return (this.options.count > 0) && this._isRecycling;
		},
		/**
		 * Returns the list of group keys which belongs to card elements currently being maintained. You can use the append() or prepend() method to configure group keys so that multiple card elements can be managed at once. If you do not use these methods to configure group keys, it returns undefined as a group key.
		 * @ko 현재 유지하고 있는 카드 엘리먼트의 그룹 키 목록을 반환한다. 여러 개의 카드 엘리먼트를 묶어서 관리할 수 있도록 append() 메서드나 prepend() 메서드에서 그룹 키를 지정할 수 있다. append() 메서드나 prepend() 메서드에서 그룹 키를 지정하지 않았다면 'undefined'가 그룹 키로 반환된다
		 * @method eg.InfiniteGrid#getGroupKeys
		 * @return {Array} List of group keys <ko>그룹 키의 목록</ko>
		 */
		getGroupKeys: function() {
			return $.map(this.items, function(v) {
				return v.groupKey;
			});
		},
		/**
		 * Rearranges a layout.
		 * @ko 레이아웃을 다시 배치한다.
		 * @method eg.InfiniteGrid#layout
		 * @param {Boolean} [isRelayout=true] Indicates whether a card element is being relayouted <ko>카드 엘리먼트 재배치 여부</ko>
		 * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 *
		 *  [private parameter]
		 * _addItems: added items
		 * _options: {
		 *	 isAppend: Checks whether the append() method is used to add a card element.
		 *	 removedCount: The number of deleted card elements to maintain the number of DOMs.
		 *}
		 */
		layout: function(isRelayout, _addItems, _options) {
			var options = $.extend({
				isAppend: true,
				removedCount: 0
			}, _options);
			isRelayout = typeof isRelayout === "undefined" || isRelayout;

			// for except case.
			if (!_addItems && !options.isAppend) {
				options.isAppend = true;
			}
			this._waitResource(isRelayout, options.isAppend ? _addItems : _addItems.reverse(), options);
			return this;
		},
		_layoutComplete: function(isRelayout, addItems, options) {
			var isInit = !this.items.length;

			// insert items (when appending)
			if (addItems && options.isAppend) {
				this.items = this.items.concat(addItems);
			}

			if (isInit) {
				$.each(addItems, function(i, v) {
					v.el.style.position = "absolute";
				});
			}

			if (isInit || isRelayout) {
				this._resetCols(this._measureColumns());
			} else {
				if (!addItems) {
					this._appendCols = this._prependCols.concat();
				}
			}
			this._layoutItems(isRelayout, addItems, options);
			this._postLayout(isRelayout, addItems, options);
		},
		_layoutItems: function(isRelayout, addItems, options) {
			var self = this;
			var items = addItems || this.items;

			$.each(items, function(i, v) {
				v.position = self._getItemLayoutPosition(isRelayout, v, options.isAppend);
			});
			if (addItems && !options.isAppend) {
				// insert items (when prepending)
				this.items = addItems.sort(function(p, c) {
					return p.position.y - c.position.y;
				}).concat(this.items);

				var y = this._getTopPositonY();
				if (y !== 0) {
					items = this.items;
					$.each(items, function(i, v) {
						v.position.y -= y;
					});
					this._syncCols(false);	// for prepending
					this._syncCols(true);	// for appending
				}
			}

			// for performance
			$.each(items, function(i, v) {
				if (v.el) {
					var style = v.el.style;
					style.left = v.position.x + "px";
					style.top = v.position.y + "px";
				}
			});
		},
		/**
		 * Adds a card element at the bottom of a grid layout. This method is available only if the isProcessing() method returns false.
		 * @ko 카드 엘리먼트를 그리드 레이아웃의 아래에 추가한다. isProcessing() 메서드의 반환값이 'false'일 때만 이 메서드를 사용할 수 있다
		 * 이 메소드는 isProcessing()의 반환값이 false일 경우에만 사용 가능하다.
		 * @method eg.InfiniteGrid#append
		 * @param {Array|String|jQuery} elements Array of the card elements to be added <ko>추가할 카드 엘리먼트의 배열</ko>
		 * @param {Number|String} [groupKey] The group key to be configured in a card element. It is set to "undefined" by default.<ko>추가할 카드 엘리먼트에 설정할 그룹 키. 생략하면 값이 'undefined'로 설정된다</ko>
		 * @return {Number} The number of added card elements <ko>추가된 카드 엘리먼트의 개수</ko>
		 */
		append: function($elements, groupKey) {
			if (this._isProcessing || $elements.length === 0) {
				return;
			}

			// convert jQuery instance
			$elements = $($elements);
			this._insert($elements, groupKey, true);
			return $elements.length;
		},
		/**
		 * Adds a card element at the top of a grid layout. This method is available only if the isProcessing() method returns false and the isRecycling() method returns true.
		 * @ko 카드 엘리먼트를 그리드 레이아웃의 위에 추가한다. isProcessing() 메서드의 반환값이 'false'이고, isRecycling() 메서드의 반환값이 'true'일 때만 이 메서드를 사용할 수 있다
		 * @method eg.InfiniteGrid#prepend
		 * @param {Array|String|jQuery} elements Array of the card elements to be added <ko>추가할 카드 엘리먼트 배열</ko>
		 * @param {Number|String} [groupKey] The group key to be configured in a card element. It is set to "undefined" by default.<ko>추가할 카드 엘리먼트에 설정할 그룹 키. 생략하면 값이 'undefined'로 설정된다</ko>
		 * @return {Number} The number of added card elements <ko>추가된 카드 엘리먼트의 개수</ko>
		 */
		prepend: function($elements, groupKey) {
			if (this._isProcessing || $elements.length === 0) {
				return;
			}

			// convert jQuery instance
			$elements = $($elements);
			this._insert($elements, groupKey, false);
			return $elements.length;
		},
		/**
		 * Clears added card elements and data.
		 * @ko 추가된 카드 엘리먼트와 데이터를 모두 지운다.
		 * @method eg.InfiniteGrid#clear
		 * @return {eg.InfiniteGrid} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
		 */
		clear: function() {
			this.el.innerHTML = "";
			this.el.style.height = "";
			this._reset();
			return this;
		},

		/**
		 * Returns a card element at the top of a layout.
		 * @ko 레이아웃의 맨 위에 있는 카드 엘리먼트를 반환한다.
		 * @method eg.InfiniteGrid#getTopElement
		 *
		 * @return {HTMLElement} Card element at the top of a layout. (if the position of card elements are same, it returns the first left element) <ko>레이아웃의 맨 위에 있는 카드 엘리먼트 (카드의 위치가 같은 경우, 왼쪽 엘리먼트가 반환된다)</ko>
		 */
		getTopElement: function() {
			var item = this._getTopItem();
			return item && item.el;
		},

		_getTopItem: function() {
			var item = null;
			var min = Infinity;
			$.each(this._getColItems(false), function(i, v) {
				if (v && v.position.y < min) {
					min = v.position.y;
					item = v;
				}
			});

			return item;
		},

		_getTopPositonY: function() {
			var item = this._getTopItem();
			return item ? item.position.y : 0;
		},

		/**
		 * Returns a card element at the bottom of a layout.
		 * @ko 레이아웃의 맨 아래에 있는 카드 엘리먼트를 반환한다.
		 * @method eg.InfiniteGrid#getBottomElement
		 *
		 * @return {HTMLElement} Card element at the bottom of a layout (if the position of card elements are same, it returns the first right element)<ko>레이아웃의 맨 아래에 있는 카드 엘리먼트 (카드의 위치가 같은 경우, 오른쪽 엘리먼트가 반환된다)</ko>
		 */
		getBottomElement: function() {
			var item = null;
			var max = -Infinity;
			var pos;
			$.each(this._getColItems(true), function(i, v) {
				pos = v ? v.position.y + v.size.height : 0;
				if (pos >= max) {
					max = pos;
					item = v;
				}
			});
			return item && item.el;
		},

		_postLayout: function(isRelayout, addItems, options) {
			if (!this._isProcessing) {
				return;
			}
			addItems = addItems || [];

			this.el.style.height = this._getContainerSize().height + "px";
			this._doubleCheckCount = RETRY;

			// refresh element
			this._topElement = this.getTopElement();
			this._bottomElement = this.getBottomElement();

			var distance = 0;
			if (!options.isAppend) {
				distance = addItems.length >= this.items.length ?
					0 : this.items[addItems.length].position.y;
				if (distance > 0) {
					this._prevScrollTop = this._getScrollTop() + distance;
					this.$view.scrollTop(this._prevScrollTop);
				}
			}

			// reset flags
			this._isProcessing = false;

			/**
			 * This event is fired when layout is successfully arranged through a call to the append(), prepend(), or layout() method.
			 * @ko 레이아웃 배치가 완료됐을 때 발생하는 이벤트. append() 메서드나 prepend() 메서드, layout() 메서드 호출 후 카드의 배치가 완료됐을 때 발생한다
			 * @name eg.InfiniteGrid#layoutComplete
			 * @event
			 *
			 * @param {Object} param The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
			 * @param {Array} param.target Rearranged card elements<ko>재배치된 카드 엘리먼트들</ko>
			 * @param {Boolean} param.isAppend Checks whether the append() method is used to add a card element. It returns true even though the layoutComplete event is fired after the layout() method is called. <ko>카드 엘리먼트가 append() 메서드로 추가됐는지 확인한다. layout() 메서드가 호출된 후 layoutComplete 이벤트가 발생해도 'true'를 반환한다.</ko>
			 * @param {Number} param.distance Distance the card element at the top of a grid layout has moved after the layoutComplete event is fired. In other words, it is the same as an increased height with a new card element added using the prepend() method <ko>그리드 레이아웃의 맨 위에 있던 카드 엘리먼트가 layoutComplete 이벤트 발생 후 이동한 거리. 즉, prepend() 메서드로 카드 엘리먼트가 추가돼 늘어난 높이다.</ko>
			 * @param {Number} param.croppedCount The number of deleted card elements to maintain the number of DOMs<ko>일정한 DOM 개수를 유지하기 위해, 삭제한 카드 엘리먼트들의 개수</ko>
			 */
			this.trigger(this._prefix + EVENTS.layoutComplete, {
				target: addItems.concat(),
				isAppend: options.isAppend,
				distance: distance,
				croppedCount: options.removedCount
			});

			// doublecheck!!! (workaround)
			if (!options.isAppend) {
				if (this._getScrollTop() === 0) {
					var self = this;
					clearInterval(this._doubleCheckTimer);
					this._doubleCheckTimer = setInterval(function() {
						if (self._getScrollTop() === 0) {
							self.trigger(self._prefix + EVENTS.prepend, {
								scrollTop: 0
							});
							(--self._doubleCheckCount <= 0) && clearInterval(self._doubleCheckTimer);
						}
					}, 500);
				}
			}
		},

		// $elements => $([HTMLElement, HTMLElement, ...])
		_insert: function($elements, groupKey, isAppend) {
			this._isProcessing = true;
			if (!this.isRecycling()) {
				this._isRecycling = (this.items.length + $elements.length) >= this.options.count;
			}
			if ($elements.length === 0) {
				return;
			}
			var elements = $elements.toArray();
			var $cloneElements = $(elements);
			var dummy = -this._clientHeight + "px";
			$.each(elements, function(i, v) {
				v.style.position = "absolute";
				v.style.top = dummy;
			});
			var removedCount = this._adjustRange(isAppend, $cloneElements);

			// prepare HTML
			this.$el[isAppend ? "append" : "prepend"]($cloneElements);
			this.layout(false, this._itemize($cloneElements, groupKey), {
				isAppend: isAppend,
				removedCount: removedCount
			});
		},
		_waitResource: function(isRelayout, addItems, options) {
			this._isProcessing = true;
			var needCheck = this._checkImageLoaded();
			var self = this;
			var callback = function() {
				self._layoutComplete(isRelayout, addItems, options);
			};
			if (needCheck.length > 0) {
				this._waitImageLoaded(needCheck, callback);
			} else {
				// convert to async
				setTimeout(function() {
					callback && callback();
				}, 0);
			}
		},

		_adjustRange: function (isTop, $elements) {
			var removedCount = 0;
			if (!this.isRecycling()) {
				return removedCount;
			}

			// trim $elements
			if (this.options.count <= $elements.length) {
				removedCount += isTop ? $elements.splice(0, $elements.length - this.options.count).length
					: $elements.splice(this.options.count).length;
			}
			var diff = this.items.length + $elements.length - this.options.count;
			var targets;
			var idx;
			if (diff <= 0 || (idx = this._getDelimiterIndex(isTop, diff)) < 0) {
				return removedCount;
			}
			if (isTop) {
				targets = this.items.splice(0, idx);
				this._syncCols(false);	// for prepending
			} else {
				targets = idx === this.items.length ? this.items.splice(0) : this.items.splice(idx, this.items.length - idx);
				this._syncCols(true);	// for appending;
			}

			// @todo improve performance
			$.each(targets, function(i, v) {
				idx = $elements.index(v.el);
				if (idx !== -1) {
					$elements.splice(idx, 1);
				} else {
					v.el.parentNode.removeChild(v.el);
				}
			});
			removedCount += targets.length;
			return removedCount;
		},
		_getDelimiterIndex: function(isTop, removeCount) {
			var len = this.items.length;
			if (len === removeCount) {
				return len;
			}
			var i;
			var idx = 0;
			var baseIdx = isTop ? removeCount - 1 : len - removeCount;
			var targetIdx = baseIdx + (isTop ? 1 : -1);
			var groupKey = this.items[baseIdx].groupKey;
			if (groupKey != null && groupKey === this.items[targetIdx].groupKey) {
				if (isTop) {
					for (i = baseIdx; i > 0; i--) {
						if (groupKey !== this.items[i].groupKey) {
							break;
						}
					}
					idx =  i === 0 ? -1 : i + 1;
				} else {
					for (i = baseIdx; i < len; i++) {
						if (groupKey !== this.items[i].groupKey) {
							break;
						}
					}
					idx = i === len ? -1 : i;
				}
			} else {
				idx = isTop ? targetIdx : baseIdx;
			}
			return idx;
		},

		// fit size
		_fit: function(applyDom) {
			// for caching
			if (this.options.count <= 0) {
				this._fit = function() {
					return 0;
				};
				return 0;
			}
			var y = this._getTopPositonY();
			if (y !== 0) {
				// need to fit
				$.each(this.items, function(i, v) {
					v.position.y -= y;
					applyDom && (v.el.style.top = v.position.y + "px");
				});
				this._syncCols(false);	// for prepending
				this._syncCols(true);	// for appending
				applyDom && (this.el.style.height = this._getContainerSize().height + "px");
			}
			return y;
		},

		/**
		* Removes extra space caused by adding card elements.
		* @ko 카드 엘리먼트를 추가한 다음 생긴 빈 공간을 제거한다
		* @method eg.InfiniteGrid#fit
		* @deprecated since version 1.3.0
		* @return {Number} Actual length of space removed (unit: px) <ko>빈 공간이 제거된 실제 길이(단위: px)</ko>
		*/
		fit: function() {
			return this._fit(true);
		},

		_reset: function() {
			this._isProcessing = false;
			this._topElement = null;
			this._bottomElement = null;
			this._isRecycling = false;
			this._prevScrollTop = 0;
			this._equalItemSize = 0;
			this._resizeTimeout = null;
			this._doubleCheckTimer = null;
			this._doubleCheckCount = RETRY;
			this._resetCols(this._appendCols.length || 0);
			this.items = [];
		},
		_checkImageLoaded: function() {
			return this.$el.find("img").filter(function(k, v) {
				if (v.nodeType && ($.inArray(v.nodeType, [1,9,11]) !== -1)) {
					return !v.complete;
				}
			}).toArray();
		},
		_waitImageLoaded: function(needCheck, callback) {
			var checkCount = needCheck.length;
			var onCheck = function(e) {
				checkCount--;
				$(e.target).off("load error");
				checkCount <= 0 && callback && callback();
			};
			var $el;
			var self = this;
			$.each(needCheck, function(i, v) {
				$el = $(v);

				// workaround for IE
				if (self._isIE) {
					var url = v.getAttribute("src");
					v.setAttribute("src", "");
					v.setAttribute("src", url);
				}
				$el.on("load error", onCheck);
			});
		},
		_measureColumns: function() {
			this.el.style.width = null;
			this._containerWidth = this.$el.innerWidth();
			this._columnWidth = this._getColumnWidth() || this._containerWidth;
			var cols = this._containerWidth / this._columnWidth;
			var excess = this._columnWidth - this._containerWidth % this._columnWidth;

			// if overshoot is less than a pixel, round up, otherwise floor it
			cols = Math.max(Math[ excess && excess <= 1 ? "round" : "floor" ](cols), 1);
			return cols || 0;
		},
		_resetCols: function(count) {
			count = typeof count === "undefined" ? 0 : count;
			var arr = [];
			while (count--) {
				arr.push(0);
			}
			this._appendCols = arr.concat();
			this._prependCols = arr.concat();
		},
		_getContainerSize: function() {
			return {
				height: Math.max.apply(Math, this._appendCols),
				width: this._containerWidth
			};
		},
		_getColumnWidth: function() {
			var el =  this.items[0] && this.items[0].el;
			var width = 0;
			if (el) {
				var $el = $(el);
				width = $el.innerWidth();
				if (this.options.isEqualSize) {
					this._equalItemSize = {
						width: width,
						height: $el.innerHeight()
					};
				}
			}
			return width;
		},
		_syncCols: function(isBottom) {
			if (!this.items.length) {
				return;
			}
			var items = this._getColItems(isBottom);
			var col = isBottom ? this._appendCols : this._prependCols;
			var len = col.length;
			var i;
			for (i = 0; i < len; i++) {
				col[i] = items[i].position.y + (isBottom ? items[i].size.height : 0);
			}
		},
		_getColIdx: function(item) {
			return parseInt(item.position.x / parseInt(this._columnWidth, 10), 10);
		},
		_getColItems: function(isBottom) {
			var len = this._appendCols.length;
			var colItems = new Array(len);
			var item;
			var idx;
			var count = 0;
			var i = isBottom ? this.items.length - 1 : 0;
			while (item = this.items[i]) {
				idx = this._getColIdx(item);
				if (!colItems[idx]) {
					colItems[idx] = item;
					if (++count === len) {
						return colItems;
					}
				}
				i += isBottom ? -1 : 1;
			}
			return colItems;
		},
		_itemize: function(elements, groupKey) {
			return $.map(elements, function(v) {
				return {
					el: v,
					position: {
						x: 0,
						y: 0
					},
					groupKey: typeof groupKey === "undefined" ? null : groupKey
				};
			});
		},
		_getItemLayoutPosition: function(isRelayout, item, isAppend) {
			if (!item || !item.el) {
				return;
			}
			var $el = $(item.el);
			if (isRelayout || !item.size) {
				item.size = this._getItemSize($el);
			}
			var cols = isAppend ? this._appendCols : this._prependCols;
			var y = Math[isAppend ? "min" : "max"].apply(Math, cols);
			var shortColIndex;
			if (isAppend) {
				shortColIndex = $.inArray(y, cols);
			} else {
				var i = cols.length;
				while (i-- >= 0) {
					if (cols[i] === y) {
						shortColIndex = i;
						break;
					}
				}
			}
			cols[shortColIndex] = y + (isAppend ? item.size.height : -item.size.height);

			return {
				x: this._columnWidth * shortColIndex,
				y: isAppend ? y : y - item.size.height
			};
		},
		_getItemSize: function($el) {
			return this._equalItemSize || {
				width: $el.innerWidth(),
				height: $el.innerHeight()
			};
		},
		/**
		 * Removes a card element on a grid layout.
		 * @ko 그리드 레이아웃의 카드 엘리먼트를 삭제한다.
		 * @method eg.InfiniteGrid#remove
		 * @param {HTMLElement} Card element to be removed <ko>삭제될 카드 엘리먼트</ko>
		 * @return {Object}  Removed card element <ko>삭제된 카드 엘리먼트 정보</ko>
		 */
		remove: function(element) {
			var item = null;
			var idx = -1;
			for (var i = 0, len = this.items.length; i < len; i++) {
				if (this.items[i].el === element) {
					idx = i;
					break;
				}
			}
			if (~idx) {
				// remove item information
				item = $.extend({}, this.items[idx]);
				this.items.splice(idx, 1);

				// remove item element
				item.el.parentNode.removeChild(item.el);
			}
			return item;
		},
		/**
		 * Destroys elements, properties, and events used on a grid layout.
		 * @ko 그리드 레이아웃에 사용한 엘리먼트와 속성, 이벤트를 해제한다
		 * @method eg.InfiniteGrid#destroy
		 */
		destroy: function() {
			this.off();
			this.$view.off("resize", this._onResize)
				.off("scroll", this._onScroll);
			this._reset();
		}
	});
});
/**
 * A jQuery plugin available in the eg.InfiniteGrid module.
 * @ko eg.InfiniteGrid 모듈의 jQuery 플러그인
 * @method jQuery.infiniteGrid
 * @example
		 <ul id="grid">
				<li class="item">
					<div>test1</div>
				</li>
				<li class="item">
					<div>test3</div>
				</li>
			</ul>
		<script>
	// create
	$("#grid").infiniteGrid();
	// method
	$("#grid").infiniteGrid("option","count","60"); //Set option
	$("#grid").infiniteGrid("instance"); // Return infiniteGrid instance
	$("#grid").infiniteGrid("getBottomElement"); // Get bottom element
	</script>
 * @see eg.InfiniteGrid
 */
/**
 * A jQuery custom event of the eg.InfiniteGrid module. This event is fired when a layout is successfully arranged.
 *
 * @ko eg.InfiniteGrid 모듈의 jQuery 커스텀 이벤트. 레이아웃 배치가 완료됐을 때 발생한다
 * @name jQuery#infiniteGrid:layoutComplete
 * @event
 * @example
		 <ul id="grid">
				<li class="item">
					<div>test1</div>
				</li>
				<li class="item">
					<div>test3</div>
				</li>
			</ul>
		<script>
	// create
	$("#grid").infiniteGrid();
	// event
	$("#grid").on("infiniteGrid:layoutComplete",callback);
	$("#grid").off("infiniteGrid:layoutComplete",callback);
	$("#grid").trigger("infiniteGrid:layoutComplete",callback);
	</script>
 * @see eg.InfiniteGrid#event:layoutComplete
 */
/**
 * A jQuery custom event of the eg.InfiniteGrid module. This event is fired when a card element must be added at the bottom of a grid layout
 *
 * @ko eg.InfiniteGrid 모듈의 jQuery 커스텀 이벤트. 그리드 레이아웃 아래에 카드 엘리먼트가 추가돼야 할 때 발생한다.
 * @name jQuery#infiniteGrid:append
 * @event
 * @example
		 <ul id="grid">
				<li class="item">
					<div>test1</div>
				</li>
				<li class="item">
					<div>test3</div>
				</li>
			</ul>
		<script>
	// create
	$("#grid").infiniteGrid();
	// event
	$("#grid").on("infiniteGrid:append",callback);
	$("#grid").off("infiniteGrid:append",callback);
	$("#grid").trigger("infiniteGrid:append",callback);
	</script>
 * @see eg.InfiniteGrid#event:append
 */
/**
 * A jQuery custom event of the eg.InfiniteGrid module. This event is fired when a card element must be added at the top of a grid layout
 *
 * @ko eg.InfiniteGrid 모듈의 jQuery 커스텀 이벤트. 그리드 레이아웃 위에 카드 엘리먼트가 추가돼야 할 때 발생한다
 * @name jQuery#infiniteGrid:prepend
 * @event
 * @example
		 <ul id="grid">
				<li class="item">
					<div>test1</div>
				</li>
				<li class="item">
					<div>test3</div>
				</li>
			</ul>
		<script>
	// create
	$("#grid").infiniteGrid();
	// event
	$("#grid").on("infiniteGrid:prepend",callback);
	$("#grid").off("infiniteGrid:prepend",callback);
	$("#grid").trigger("infiniteGrid:prepend",callback);
	</script>
 * @see eg.InfiniteGrid#event:prepend
 */


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function extend(superClass, def) {
    var extendClass = function extendClass() {
        // Call a parent constructor
        superClass.apply(this, arguments);

        // Call a child constructor
        if (typeof def.init === "function") {
            def.init.apply(this, arguments);
        }
    };

    var ExtProto = function() {};
    ExtProto.prototype = superClass.prototype;

    var extProto = new ExtProto();
    for (var i in def) {
        extProto[i] = def[i];
    }
    extProto.constructor = extendClass;
    extendClass.prototype = extProto;

    return extendClass;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function CategoryList() {
    console.log($);
    console.log(eg);
    console.log('ㅋㅋㅋ');
}


/***/ })
/******/ ]);