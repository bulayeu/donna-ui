(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global['donna-ui'] = factory(global.React,global.ReactDOM));
}(this, (function (React,ReactDOM) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Icon {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none; }\n  .Icon.Icon--size-sm > img {\n    width: 15px;\n    height: 15px; }\n  .Icon.Icon--size-md > img {\n    width: 20px;\n    height: 20px; }\n  .Icon.Icon--size-lg > img {\n    width: 30px;\n    height: 30px; }\n  .Icon > img {\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n    float: left; }\n";
styleInject(css);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var facebook = "data:image/png;base64,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";

var twitter = "data:image/png;base64,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";

var instagram = "data:image/png;base64,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";

var youtube = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAAAXNSR0IArs4c6QAAB11JREFUaAXlW2tsVEUUPjN790Fpaym720caQoBYoGqfRBC0YKIxaE3UgESJCfj4g4omYCIGRQnRHwj+MPGX/EARoQYCGo2gaCUkGqEPsIUaQiXEbbe7bQktfezuveM5F7dst7vtznT7WHqSm7kzd87juzN35syZuQzGia4VFMzo7Ot7QABU4FUoQCxkAHl4n8EYSxdCcMx3Y76bAfMKBs0MLwG81g5wusjn6xkn0wD1Jo9qc3NdXA+uEwKeQalLERjar0Qh5PqTMX50BsCBhX6/R0lKHKakgK5zu5eDoW9FkI+jHi2OLqViNNAAYD8xi/i4pL3zhJKQKKYxgT7vcj2kC+MDBFsZJXd8soydBcbfLfP5fhiLAiXQF9zunJCh70aw68eiXJUXx4Rjdqtt8+LW1qsqMqRB17uzHxU6fI0D0CwVhUnjYayXM76hxOc7LCuTyzDUObPfMHT4ftIBk9FCpBmGfqje6aTPS6rxEqrcWFRkG2hr+ww1bZR5SRNXlx2xaNoLxV7vzUR0jgq6OT/f2RvoP4rT0IpEBE5WHZzjGzSbo+pej+faaDaMCJpaOOBt/XmqAw6DRDB/2bhl2WiOzYjfNHXpVAFMwHGsuWdAGAfEjh0j4orb0vXO7DcNAXvCbzGVUs7ZRyW+jrfj2RwTdIPL9Zhu6N8hkyUe41QvRxd2fanffyCWncNAN7pcuQFDv4hdJSsWQ8qUMdbPgRWX+P1/R9s8rO8HhLE75QETSiEcOH9/Gg2Y8kNautbprARh/BqrYqqWMQ5rS32d1ZH2R7W0sTPy4Z1wLwz2fvRoPtjStGLCRUTNnQB0GAYOa8p8nd+EywdbOiSMLeHCOy1lBhuCzWzphpwctx4K/otgpQMAlqwsyF77LKQVF4Nl1iywZGQAT08HC17MbgNmswOn1IqXBWdAvBi/9a6FgfEBXQcRCuEVBGMgACIwAAJTvacHDLz07m7Qu7qgt6EBOg8fAv36daU20YAtuq+j4xIxm6DrXNmbhQGfyEpLKy2FeV8dBKvLJcuqVD/Y3g5Xnn8OeuvqpPkxDvdhaUfHNmI0X/n/MS0pQcxmg7mf75swwGSc1e02dZJuaWLwdJiHe/Lz05iA+8MFiaaZjzwK9jlzEq2etHqkk3TLEs7ZhZecznzi495Q/3J0RqRfXUZlpazepNVX1d0HsMoEDYJVqFjjmD9fhS0pPGPQbWLlGGAtVLFEw+9LhoKtHnMUluGJV1dW9205homVY9dWA41TlQz1nb8AjeVl4N27B4zeXhnWYXU1Sd0RAm6BZiByIwoTvuWZmQnXDVfUb9wAz65d0LSkAvz79gHg/KxCHH0BFRLATKzU0koSuN2uotfkCXq9cO2trdC0bCl0HTkiLYc7HNI8JgNGUMWaNRbaRFMCzTRp522YoQMtLfDPKy9D86qV0H3q1LDn8QrGovvKuXPpg753PAVJK0cPKB71NTXB9W+Pg4Eu50SQhqaQptnjrgxjtNGE2zOQVfUk5G3bBvYFC6Ifj0t+Xnl5j4am0B6xNGgRDOIiwqpsWObKVZC/fTvMwIWKLJFuJcKtIFZdrWNLszaMrcyVFWIMDIBFAfTM8goTbPoK9b0D0q1COFMhVlxKYkvj7j8slRVC3x8tHxMla24uzNv/Bdy1enWiLHHrjeHbbyahGq6zmmnbW5ZCuK615uUlzEbdWKUrx1JAutWIm6AxSirOqggI4dp2smgMuk2sPEdznMEuHpAF0H/5sixL0uqr6sbzK7+QETzf4+nF3d3fZS3qrqmRZUlafRXdOD02hw/smM4JTpfSvuCNkydg4OrVpAFJVBDpJN3SJG5jNEFzbj2IQqS8f5orWzZugAAuGSeKyGdveXEjqMzTGJLcH7YTP+dbVOucfRy3QqrC+URTPnMmZD1RBRQktBUUAEVHqYwWBQwXJRzjWZSSv0zOjOk3U0QUu9dgNBRfIEVEjf5+jIYGzNS4edOMhFJENNTVCb31DdBVfRhopSZLGBT8A4OCg9PyIGjcqXwQdyp/kxWYEvXjBfuLfb7TGBA+nRIgpIxkF0s3vT5kzBpsaZIzLTfwyvz+GvzWYm5kS73cKVIZv+WT0TuWZJo5ekfaaGN8Cza/qp8XKWpy73FTHhvw1VhGDAONJ3PamEVbh5X1WAypUoat/FKsUwhk/zDQVFjS3v4jxpG20n0qEh20iXfehPDEBE0PSvyde3F/D0OWKUaMHS/e9No7I1k9ZPSOrjgtD88VNTYG0myOp9B5OhP9QqZaHm1s0OyO1aOdFiS743bvMKhCj8dvy8l7eCp3dRy0jnKLdXki50IJ14jdOww8nNLRZ4zk7sY8+u9Tg/DM9070Jt/D6QmjXomRFGgSOe0OuRNo+nlEs2iL8M1+SfnJINR9zGG1LVY51U/2Srd0JEhamRnC2Im7/JWR5eN2P5k/rkSDivhFieK76jsA0YIxj62Csdop9ItStI3T6me0aPCUD/92iA78Emwt3AwXd2NxPg6xGZjPwBSn1sn57fA/J9KpwUd5kIEAAAAASUVORK5CYII=";

var linkedin = "data:image/png;base64,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";

var close = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3A%23252e3b%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%28-7%20-7%29%22%3E%3Cpath%20class%3D%22a%22%20d%3D%22M10.9%2C10l8.914-8.914a.641.641%2C0%2C0%2C0%2C0-.9.633.633%2C0%2C0%2C0-.9%2C0L10%2C9.1%2C1.086.185a.641.641%2C0%2C0%2C0-.9%2C0%2C.633.633%2C0%2C0%2C0%2C0%2C.9L9.1%2C10%2C.185%2C18.914a.641.641%2C0%2C0%2C0%2C0%2C.9.633.633%2C0%2C0%2C0%2C.9%2C0L10%2C10.9l8.914%2C8.914a.641.641%2C0%2C0%2C0%2C.9%2C0%2C.633.633%2C0%2C0%2C0%2C0-.9L10.9%2C10Z%22%20transform%3D%22translate%287%207%29%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var pen = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2011.319%2017.507%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3B%7D.b%7Bclip-path%3Aurl%28%23a%29%3B%7D.c%7Bfill%3A%23252e3b%3B%7D%3C%2Fstyle%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20class%3D%22a%22%20d%3D%22M0%2C0H11.319V17.507H0Z%22%20transform%3D%22translate%280.001%200%29%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%28-12.834%20-9.334%29%22%3E%3Cg%20transform%3D%22translate%2812.833%209.333%29%22%3E%3Cpath%20class%3D%22a%22%20d%3D%22M0%2C0H11.319V17.507H0Z%22%20transform%3D%22translate%280.001%200%29%22%2F%3E%3Cg%20class%3D%22b%22%3E%3Cpath%20class%3D%22c%22%20d%3D%22M.177%2C17.508v0L0%2C12.866%2C5.612%2C3.132%2C6.706%2C1.237A2.471%2C2.471%2C0%2C0%2C1%2C10.083.331a2.474%2C2.474%2C0%2C0%2C1%2C.906%2C3.377L4.283%2C15.338l-4.1%2C2.169ZM6.548%2C4.546l-4.971%2C8.62.018.006.007%2C0a.1.1%2C0%2C0%2C1%2C.03.01l1.557.9a.088.088%2C0%2C0%2C1%2C.023.021.188.188%2C0%2C0%2C0%2C.02.018L8.205%2C5.5Zm2.3-3.029a.959.959%2C0%2C0%2C0-.829.478L7.305%2C3.232l1.656.954L9.675%2C2.95a.956.956%2C0%2C0%2C0-.826-1.434Z%22%20transform%3D%22translate%280.001%200%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var avatar = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016.383%2023.383%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3Bstroke%3A%23252e3b%3Bstroke-linecap%3Around%3Bstroke-miterlimit%3A10%3Bstroke-width%3A1.3px%3B%7D.b%7Bfill%3A%23252e3b%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%28-9%20-6%29%22%3E%3Cg%20transform%3D%22translate%289%206%29%22%3E%3Cpath%20class%3D%22a%22%20d%3D%22M5.6%2C0A3.961%2C3.961%2C0%2C0%2C1%2C0%2C.129%22%20transform%3D%22translate%285.506%2016.629%29%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M1.92.96A.96.96%2C0%2C1%2C1%2C.96%2C0a.96.96%2C0%2C0%2C1%2C.96.96%22%20transform%3D%22translate%284.706%2010.652%29%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M1.92.96A.96.96%2C0%2C1%2C1%2C.96%2C0a.961.961%2C0%2C0%2C1%2C.96.96%22%20transform%3D%22translate%2810.087%2010.652%29%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M15.083%2C9.25v5.292A7.542%2C7.542%2C0%2C0%2C1%2C0%2C14.542V6.247a2.58%2C2.58%2C0%2C0%2C1%2C2.58-2.58H8.917A3.667%2C3.667%2C0%2C0%2C0%2C12.583%2C0%22%20transform%3D%22translate%280.65%200.65%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var add = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2021.133%2021.133%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3Bstroke%3A%23252e3b%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A10%3Bstroke-width%3A1.3px%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%28-7.109%20-7.108%29%22%3E%3Cg%20transform%3D%22translate%287%207%29%22%3E%3Cpath%20class%3D%22a%22%20d%3D%22M19.833%2C9.917A9.917%2C9.917%2C0%2C1%2C1%2C9.917%2C0%2C9.917%2C9.917%2C0%2C0%2C1%2C19.833%2C9.917Z%22%20transform%3D%22translate%280.759%200.758%29%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M0%2C0V7.568%22%20transform%3D%22translate%2810.675%206.702%29%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M0%2C0H7.568%22%20transform%3D%22translate%286.891%2010.486%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var alert = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2019.399%2017.468%22%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill%3Anone%3Bstroke%3A%23252e3b%3Bstroke-linecap%3Around%3Bstroke-miterlimit%3A10%3Bstroke-width%3A1.3px%3B%7D.b%7Bfill%3A%23252e3b%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate%28-7.943%20-8.968%29%22%3E%3Cg%20transform%3D%22translate%288%209%29%22%3E%3Cpath%20class%3D%22a%22%20d%3D%22M7.274%2C1.01a2.021%2C2.021%2C0%2C0%2C1%2C3.5%2C0l3.5%2C6.063%2C3.5%2C6.063a2.021%2C2.021%2C0%2C0%2C1-1.75%2C3.031h-14a2.021%2C2.021%2C0%2C0%2C1-1.75-3.031l3.5-6.063Z%22%20transform%3D%22translate%280.618%200.618%29%22%2F%3E%3Cpath%20class%3D%22a%22%20d%3D%22M0%2C0V3.729%22%20transform%3D%22translate%289.642%206.077%29%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22M2.111%2C1.055A1.055%2C1.055%2C0%2C1%2C1%2C1.055%2C0%2C1.055%2C1.055%2C0%2C0%2C1%2C2.111%2C1.055%22%20transform%3D%22translate%288.587%2012.089%29%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var selected = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2212px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2012%2012%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3E5BF3CFC8-3A1E-41C6-838B-72E9AAD3EC5C%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20sketchtool.%3C%2Fdesc%3E%20%20%20%20%3Cdefs%3E%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22photo-editor%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22ICONS%22%20transform%3D%22translate%28-798.000000%2C%20-240.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22selected%22%20transform%3D%22translate%28798.000000%2C%20240.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval-6%22%20fill%3D%22%2332BAFA%22%20cx%3D%226%22%20cy%3D%226%22%20r%3D%226%22%3E%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolyline%20id%3D%22Shape%22%20stroke%3D%22%23FFFFFF%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20points%3D%229%204%204.875%208.5%203%206.45454545%22%3E%3C%2Fpolyline%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

// SOCIAL ICONS

var icons = {
    facebook: facebook,
    twitter: twitter,
    instagram: instagram,
    youtube: youtube,
    linkedin: linkedin,
    close: close,
    pen: pen,
    avatar: avatar,
    add: add,
    alert: alert,
    selected: selected
};

var Icon = function Icon(props) {
  return React__default.createElement(
    "span",
    { className: "Icon Icon--" + props.icon + " Icon--size-" + props.size },
    React__default.createElement("img", { draggable: false, src: icons[props.icon] })
  );
};

Icon.propTypes = {
  icon: propTypes.oneOf(Object.keys(icons))
};

Icon.defaultProps = {
  icon: "avatar",
  size: "sm"
};

var css$1 = ".IconButton {\n  display: inline-block;\n  text-decoration: none;\n  appearance: none;\n  cursor: pointer;\n  width: auto;\n  height: auto;\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: scale(1);\n  transition: all 0.2s; }\n  .IconButton:hover {\n    transform: scale(1.1); }\n  .IconButton.IconButton--round {\n    width: 50px;\n    height: 50px;\n    background-color: #ed486f;\n    border-radius: 50px;\n    position: relative; }\n    .IconButton.IconButton--round > .Icon {\n      width: auto;\n      height: auto; }\n  .IconButton.IconButton--plain {\n    float: left; }\n";
styleInject(css$1);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var IconButton = function (_Component) {
  inherits(IconButton, _Component);

  function IconButton() {
    classCallCheck(this, IconButton);
    return possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
  }

  createClass(IconButton, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "div",
        {
          onClick: this.props.onClick,
          disabled: this.props.disabled,
          className: "IconButton IconButton--" + this.props.type
        },
        React__default.createElement(Icon, { icon: this.props.icon, size: this.props.size })
      );
    }
  }]);
  return IconButton;
}(React.Component);


IconButton.defaultProps = {
  type: "plain",
  size: "md"
};

var css$2 = ".Avatar {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  position: relative; }\n  .Avatar > .Avatar__image {\n    border-radius: 50px;\n    overflow: hidden;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: #ffda3b; }\n";
styleInject(css$2);

var Avatar = function Avatar(props) {
  var style = { backgroundImage: "url(" + props.url + ")" };
  return React__default.createElement(
    "div",
    { className: "Avatar " },
    React__default.createElement("div", { style: style, className: "Avatar__image" })
  );
};

var css$3 = ".Header {\n  margin: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #232e3b;\n  width: 100%; }\n  .Header.Header--center {\n    text-align: center; }\n  .Header.Header--left {\n    text-align: left; }\n  .Header.Header--right {\n    text-align: left; }\n  .Header.Header--no-margin {\n    margin-top: 0;\n    margin-bottom: 0; }\n\nh1.Header {\n  font-size: 46px;\n  font-weight: 300;\n  line-height: 55px; }\n\nh2.Header {\n  font-size: 32px;\n  font-weight: 300;\n  line-height: 40px;\n  letter-spacing: 0.1px; }\n\nh3.Header {\n  font-size: 28px;\n  font-weight: 300;\n  line-height: 35px;\n  letter-spacing: 0.1px; }\n\nh4.Header {\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 25px;\n  letter-spacing: 0.2px; }\n\nh5.Header {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0.2px; }\n";
styleInject(css$3);

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var Header = function Header(props) {
  var header = null;
  var clazz = classnames("Header", "Header--level-" + props.level, {
    "Header--center": props.center,
    "Header--no-margin": props["no-margin"]
  });
  switch (props.level) {
    case 1:
      header = React__default.createElement(
        "h1",
        { className: clazz },
        props.children
      );
      break;
    case 2:
      header = React__default.createElement(
        "h2",
        { className: clazz },
        props.children
      );
      break;
    case 3:
      header = React__default.createElement(
        "h3",
        { className: clazz },
        props.children
      );
      break;
    case 4:
      header = React__default.createElement(
        "h4",
        { className: clazz },
        props.children
      );
      break;
    case 5:
      header = React__default.createElement(
        "h5",
        { className: clazz },
        props.children
      );
      break;
  }
  return header;
};

Header.defaultProps = {
  level: 3
};

var css$4 = ".Text {\n  margin: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .Text.Text--center {\n    text-align: center; }\n  .Text.Text--left {\n    text-align: left; }\n  .Text.Text--right {\n    text-align: left; }\n  .Text.Text--no-margin {\n    margin-top: 0;\n    margin-bottom: 0; }\n  .Text.Text--level-1 {\n    color: #232e3b;\n    font-size: 16px;\n    line-height: 25px;\n    font-weight: 400; }\n  .Text.Text--level-2 {\n    letter-spacing: 0.1px;\n    color: #232e3b;\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 400; }\n  .Text.Text--level-3 {\n    letter-spacing: 0.3px;\n    color: #232e3b;\n    font-family: \"Proxima Nova\";\n    font-size: 12px;\n    line-height: 20px;\n    font-weight: 400; }\n  .Text.Text--level-4 {\n    letter-spacing: 0.3px;\n    color: #232e3b;\n    font-family: \"Proxima Nova\";\n    font-size: 11px;\n    line-height: 15px;\n    font-weight: 400; }\n  .Text.Text--bold {\n    font-weight: 700; }\n  .Text.Text--semibold {\n    font-weight: 600; }\n\n.Text > .Icon {\n  margin-right: 10px;\n  margin-left: 10px; }\n";
styleInject(css$4);

var Text = function Text(props) {
  var clazz = classnames("Text", "Text--level-" + props.level, {
    "Text--center": props.center,
    "Text--bold": props.bold,
    "Text--semibold": props.semibold,
    "Text--no-margin": props["no-margin"]
  });
  return React__default.createElement(
    "p",
    { className: clazz },
    props.children
  );
};

Text.defaultProps = { level: 3 };

var css$5 = ".Label {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  font-size: inherit;\n  font-weight: inherit;\n  width: auto; }\n";
styleInject(css$5);

var Label = function (_Component) {
  inherits(Label, _Component);

  function Label() {
    classCallCheck(this, Label);
    return possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  createClass(Label, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "span",
        { className: "Label" },
        this.props.children
      );
    }
  }]);
  return Label;
}(React.Component);

var css$6 = ".Button {\n  box-sizing: border-box;\n  display: inline-block;\n  text-decoration: none;\n  appearance: none;\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  cursor: pointer;\n  width: auto;\n  transition: all 0.2s;\n  border-radius: 4px; }\n  .Button + .Button {\n    margin-left: 10px; }\n  .Button:focus {\n    outline: 0px; }\n  .Button.Button--sm {\n    height: 32px;\n    padding-left: 12px;\n    padding-right: 12px; }\n    .Button.Button--sm > .Button__content > .Label {\n      line-height: 30px;\n      font-size: 12px;\n      font-weight: 400;\n      text-transform: uppercase;\n      letter-spacing: 0.3px; }\n  .Button.Button--md {\n    height: 40px;\n    padding-left: 15px;\n    padding-right: 15px; }\n    .Button.Button--md > .Button__content > .Label {\n      line-height: 38px;\n      font-size: 16px;\n      font-weight: 400; }\n  .Button.Button--lg {\n    height: 58px;\n    padding-left: 22px;\n    padding-right: 22px; }\n    .Button.Button--lg > .Button__content > .Label {\n      line-height: 56px;\n      font-size: 18px;\n      font-weight: 400;\n      text-transform: uppercase;\n      letter-spacing: 1px; }\n  .Button .Button__content {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .Button .Button__content > .Icon {\n      position: relative;\n      top: -2px;\n      margin-right: 10px; }\n  .Button.Button--link {\n    padding: 0px;\n    min-height: auto; }\n  .Button.Button--blue {\n    color: #fff;\n    border-color: #32bafa;\n    background-color: #32bafa; }\n    .Button.Button--blue:hover, .Button.Button--blue:focus {\n      background-color: rgba(50, 186, 250, 0.75);\n      border-color: rgba(50, 186, 250, 0.75); }\n  .Button.Button--outline-gray {\n    color: #93989f;\n    border-color: #93989f;\n    background-color: transparent; }\n    .Button.Button--outline-gray:hover, .Button.Button--outline-gray:focus {\n      background-color: #f6f6f6; }\n  .Button.Button--gray {\n    color: #93989f;\n    border-color: #e0e1e3;\n    background-color: #e0e1e3; }\n    .Button.Button--gray:hover, .Button.Button--gray:focus {\n      border-color: #5a646e;\n      color: #5a646e; }\n  .Button.Button--transparent-blue {\n    color: #32bafa;\n    border-color: transparent;\n    background-color: transparent; }\n    .Button.Button--transparent-blue:hover, .Button.Button--transparent-blue:focus {\n      background-color: #f9f9f9; }\n  .Button.Button--transparent-gray {\n    color: #93989f;\n    border-color: transparent;\n    background-color: transparent; }\n  .Button.Button--transparent-dark-gray {\n    color: #5a646e;\n    border-color: transparent;\n    background-color: transparent; }\n  .Button.Button--pink {\n    color: #fff;\n    border-color: #ed486f;\n    background-color: #ed486f; }\n    .Button.Button--pink:hover, .Button.Button--pink:focus {\n      background-color: #ea2855; }\n  .Button.Button--block {\n    width: 100%; }\n  .Button[disabled] {\n    cursor: not-allowed; }\n  .Button[href]:visited, .Button[href]:focus, .Button[href]:active {\n    text-decoration: none; }\n";
styleInject(css$6);

var Button = function (_Component) {
  inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.asReference = function () {
      return React__default.createElement(
        "a",
        {
          href: _this.props.href,
          disabled: _this.props.disabled,
          className: _this.calculcateClasses()
        },
        React__default.createElement(
          "span",
          { className: "Button__content" },
          _this.renderIcon(),
          _this.renderLabel()
        )
      );
    }, _this.asButton = function () {
      return React__default.createElement(
        "button",
        {
          onClick: _this.props.onClick,
          disabled: _this.props.disabled,
          className: _this.calculcateClasses()
        },
        React__default.createElement(
          "span",
          { className: "Button__content" },
          _this.renderIcon(),
          _this.renderLabel()
        )
      );
    }, _this.renderIcon = function () {
      return _this.props.icon ? React__default.createElement(Icon, { size: "sm", icon: _this.props.icon }) : null;
    }, _this.renderLabel = function () {
      return React__default.createElement(
        Label,
        null,
        _this.props.children
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Button, [{
    key: "calculcateClasses",
    value: function calculcateClasses() {
      return classnames("Button", "Button--" + this.props.type, "Button--" + this.props.size, {
        "Button--block": this.props.block,
        "Button--link": this.props.link
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.href ? this.asReference() : this.asButton();
    }
  }]);
  return Button;
}(React.Component);


var BUTTON_BLUE = "blue";
var BUTTON_GRAY = "gray";
var BUTTON_PINK = "pink";
var BUTTON_OUTLINE_GRAY = "outline-gray";
var BUTTON_TRANSPARENT_BLUE = "transparent-blue";
var BUTTON_TRANSPARENT_GRAY = "transparent-gray";
var BUTTON_TRANSPARENT_DARK_GRAY = "transparent-dark-gray";

var BUTTON_SIZE_SMALL = "sm";
var BUTTON_TYPE_MEDIUM = "md";
var BUTTON_TYPE_LARGE = "lg";

var BUTTON_TYPES = [BUTTON_BLUE, BUTTON_GRAY, BUTTON_PINK, BUTTON_OUTLINE_GRAY, BUTTON_TRANSPARENT_BLUE, BUTTON_TRANSPARENT_GRAY, BUTTON_TRANSPARENT_DARK_GRAY];

var BUTTON_SIZES = [BUTTON_SIZE_SMALL, BUTTON_TYPE_MEDIUM, BUTTON_TYPE_LARGE];

Button.propTypes = {
  type: propTypes.oneOf(BUTTON_TYPES),
  size: propTypes.oneOf(BUTTON_SIZES),
  href: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool
};

Button.defaultProps = {
  type: BUTTON_BLUE,
  size: BUTTON_TYPE_MEDIUM,
  disabled: false
};

var css$7 = ".Input {\n  display: inline-block;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px dashed #232e3b; }\n  .Input.Input--block {\n    width: 100%; }\n  .Input .Input__field {\n    background-color: transparent;\n    border-radius: 0;\n    border: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    font-family: inherit;\n    font-size: 1em;\n    padding: 0px;\n    font-weight: 600; }\n  .Input .Input__field:focus {\n    outline: none; }\n  .Input .Input__field {\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    padding-top: 4px;\n    padding-bottom: 4px; }\n  .Input .Input__label {\n    color: #93989f;\n    pointer-events: none;\n    transition: 0.2s all;\n    transform: translateY(22px); }\n  .Input.Input--focus .Input__label, .Input.Input--has-value .Input__label {\n    color: #232e3b;\n    transform: translateY(0px); }\n";
styleInject(css$7);

var Input = function (_Component) {
  inherits(Input, _Component);

  function Input(props) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.handleChange = function (ev) {
      var value = ev.target.value;
      var hasValue = value && value !== "";
      _this.setState({ hasValue: hasValue });
      _this.props.onChange(value);
    };

    _this.onFocus = function () {
      _this.setState({ focus: true });
    };

    _this.onBlur = function () {
      _this.setState({ focus: false });
    };

    _this.state = {
      value: _this.props.initValue,
      hasValue: !!_this.props.initValue
    };
    return _this;
  }

  createClass(Input, [{
    key: "render",
    value: function render() {
      var clazz = classnames("Input", {
        "Input--block": this.props.block,
        "Input--focus": this.state.focus,
        "Input--has-value": this.state.hasValue
      });
      return React__default.createElement(
        "div",
        { style: this.props.style, className: clazz },
        React__default.createElement(
          "div",
          { className: "Input__label" },
          React__default.createElement(
            Label,
            null,
            this.props.placeholder
          )
        ),
        React__default.createElement("input", {
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          className: "Input__field",
          type: "text",
          value: this.state.value,
          onChange: this.handleChange
        })
      );
    }
  }]);
  return Input;
}(React.Component);


Input.defaultProps = {
  onChange: function onChange() {}
};

var css$8 = ".Textarea {\n  display: inline-block;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .Textarea.Textarea--block {\n    width: 100%; }\n  .Textarea .Textarea__field {\n    width: 100%;\n    padding: 0px;\n    resize: none;\n    background-color: transparent;\n    border-radius: 0;\n    border: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    font-family: inherit;\n    font-size: 1em;\n    border-bottom: 1px dashed #232e3b;\n    max-height: 100px;\n    padding-top: 4px;\n    padding-bottom: 4px; }\n  .Textarea .Textarea__field:focus {\n    outline: none; }\n  .Textarea .Textarea__label {\n    color: #93989f;\n    pointer-events: none;\n    transition: 0.2s all;\n    transform: translateY(22px); }\n  .Textarea.Textarea--focus .Textarea__label, .Textarea.Textarea--has-value .Textarea__label {\n    color: #232e3b;\n    transform: translateY(0px); }\n";
styleInject(css$8);

var autosize = createCommonjsModule(function (module, exports) {
/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (typeof undefined === "function" && undefined.amd) {
		undefined(['module', 'exports'], factory);
	} else {
		factory(module, exports);
	}
})(commonjsGlobal, function (module, exports) {

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});
});

var Textarea = function (_Component) {
  inherits(Textarea, _Component);

  function Textarea(props) {
    classCallCheck(this, Textarea);

    var _this = possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.handleChange = function (ev) {
      var value = ev.target.value;
      var hasValue = value && value !== "";
      _this.setState({ value: value, hasValue: hasValue });
      _this.props.onChange(value);
    };

    _this.onFocus = function () {
      _this.setState({ focus: true });
    };

    _this.onBlur = function () {
      _this.setState({ focus: false });
    };

    _this.state = {
      value: _this.props.initValue,
      hasValue: !!_this.props.initValue
    };
    return _this;
  }

  createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      autosize(this.textarea);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      autosize.destroy(this.textarea);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var clazz = classnames("Textarea", {
        "Textarea--block": this.props.block,
        "Textarea--focus": this.state.focus,
        "Textarea--has-value": this.state.hasValue
      });
      return React__default.createElement(
        "div",
        { style: this.props.style, className: clazz },
        React__default.createElement(
          "div",
          { className: "Textarea__label" },
          React__default.createElement(
            Label,
            null,
            this.props.placeholder
          )
        ),
        React__default.createElement("textarea", {
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          ref: function ref(c) {
            return _this2.textarea = c;
          },
          className: "Textarea__field",
          value: this.state.value,
          type: "text",
          onChange: this.handleChange,
          rows: "1"
        })
      );
    }
  }]);
  return Textarea;
}(React.Component);


Textarea.defaultProps = {
  onChange: function onChange() {}
};

var css$9 = ".SocialCheckbox {\n  display: inline-block;\n  overflow: hidden;\n  cursor: pointer;\n  width: auto; }\n  .SocialCheckbox .SocialCheckbox--block {\n    width: 100%; }\n  .SocialCheckbox .SocialCheckbox__content {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between; }\n    .SocialCheckbox .SocialCheckbox__content > .Icon {\n      transition: all 0.2s;\n      visibility: hidden;\n      opacity: 0;\n      transform: scale(0.5); }\n    .SocialCheckbox .SocialCheckbox__content > .Label {\n      white-space: nowrap; }\n    .SocialCheckbox .SocialCheckbox__content > * {\n      margin-right: 10px;\n      user-select: none; }\n  .SocialCheckbox.SocialCheckbox--selected .SocialCheckbox__content > .Icon {\n    visibility: visible;\n    opacity: 1;\n    transform: scale(1); }\n";
styleInject(css$9);

var SocialCheckbox = function (_Component) {
  inherits(SocialCheckbox, _Component);

  function SocialCheckbox(props) {
    classCallCheck(this, SocialCheckbox);

    var _this = possibleConstructorReturn(this, (SocialCheckbox.__proto__ || Object.getPrototypeOf(SocialCheckbox)).call(this, props));

    _this.select = function () {
      var selected = !_this.state.selected;
      _this.setState({ selected: selected });
      _this.props.onClick(selected);
    };

    _this.state = {
      selected: _this.props.selected
    };
    return _this;
  }

  createClass(SocialCheckbox, [{
    key: "render",
    value: function render() {
      var clazz = classnames("SocialCheckbox", {
        "SocialCheckbox--selected": this.state.selected,
        "SocialCheckbox--block": this.props.block
      });
      return React__default.createElement(
        "div",
        { className: clazz, onClick: this.select },
        React__default.createElement(
          "div",
          { className: "SocialCheckbox__content" },
          React__default.createElement(Avatar, { url: this.props.avatar }),
          React__default.createElement(
            Label,
            null,
            this.props.label
          ),
          React__default.createElement(Icon, { icon: "selected" })
        )
      );
    }
  }]);
  return SocialCheckbox;
}(React.Component);

var css$10 = ".Modal {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  visibility: hidden;\n  opacity: 0; }\n  .Modal.Modal--open {\n    opacity: 1;\n    visibility: visible; }\n  .Modal.Modal--transparent > .Modal__window > .Modal__content {\n    background-color: transparent; }\n  .Modal > .Modal__window {\n    width: auto;\n    min-width: 20vw;\n    max-width: 95vw;\n    position: relative; }\n    .Modal > .Modal__window > .IconButton {\n      position: absolute;\n      right: 20px;\n      top: 20px; }\n    .Modal > .Modal__window > .Modal__content {\n      background-color: #fff;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      border-radius: 5px; }\n";
styleInject(css$10);

var Modal = function (_Component) {
  inherits(Modal, _Component);

  function Modal(props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      open: false
    };

    _this.close = function () {
      _this.setState({
        open: false
      });
    };

    return _this;
  }

  createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ open: true });
    }
  }, {
    key: "render",
    value: function render() {
      var clazz = classnames("Modal", {
        "Modal--transparent": this.props.transparent,
        "Modal--open": this.state.open
      });
      return React__default.createElement(
        "div",
        { className: clazz },
        React__default.createElement(
          "div",
          { className: "Modal__window" },
          this.props.showCloseButton && React__default.createElement(IconButton, { onClick: this.close, size: "md", icon: "close" }),
          React__default.createElement(
            "div",
            { className: "Modal__content" },
            this.props.children
          )
        )
      );
    }
  }]);
  return Modal;
}(React.Component);


Modal.defaultProps = {
  showCloseButton: true
};

var css$11 = ".Tabs .Tab__bar {\n  display: flex;\n  flex-direction: row;\n  height: auto;\n  width: 100%; }\n  .Tabs .Tab__bar .Tab__nav {\n    transition: all 0.2s;\n    border-bottom: 2px solid transparent;\n    margin-right: 40px;\n    width: auto;\n    cursor: pointer; }\n    .Tabs .Tab__bar .Tab__nav:hover {\n      border-bottom: 2px solid #32bafa; }\n    .Tabs .Tab__bar .Tab__nav > .Header {\n      transition: all 0.2s;\n      color: #93989f;\n      width: auto; }\n    .Tabs .Tab__bar .Tab__nav.Tab__nav--active {\n      border-bottom: 2px solid #32bafa; }\n      .Tabs .Tab__bar .Tab__nav.Tab__nav--active > .Header {\n        color: #232e3b; }\n\n.Tabs .Tab__content {\n  padding-top: 10px; }\n";
styleInject(css$11);

var Tabs = function (_Component) {
  inherits(Tabs, _Component);

  function Tabs(props) {
    classCallCheck(this, Tabs);

    var _this = possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      selectedIndex: 0
    };

    _this.openTab = function (selectedIndex) {
      return function () {
        _this.setState({ selectedIndex: selectedIndex });
      };
    };

    _this.renderTabContent = function () {
      return React__default.createElement(
        "div",
        { className: "Tab__content" },
        React__default.createElement(
          "div",
          { className: "Tab__content-item" },
          _this.props.tabs[_this.state.selectedIndex].content
        )
      );
    };

    _this.renderTabBar = function () {
      return React__default.createElement(
        "div",
        { className: "Tab__bar" },
        _this.props.tabs.map(_this.renderTabBarItem)
      );
    };

    _this.renderTabBarItem = function (tab, index) {
      var clazz = classnames("Tab__nav", {
        "Tab__nav--active": index === _this.state.selectedIndex
      });
      return React__default.createElement(
        "div",
        { key: index, onClick: _this.openTab(index), className: clazz },
        React__default.createElement(
          Header,
          { level: 5 },
          tab.title || "Unknown"
        )
      );
    };

    return _this;
  }

  createClass(Tabs, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "div",
        { className: "Tabs" },
        this.renderTabBar(),
        this.renderTabContent()
      );
    }
  }]);
  return Tabs;
}(React.Component);

var css$12 = ".Block {\n  display: flex; }\n  .Block.Block--center {\n    justify-content: center;\n    align-items: center; }\n\n.Row {\n  display: flex;\n  flex-direction: row;\n  height: auto;\n  width: 100%; }\n\n.Grid {\n  gap: 10px;\n  display: grid;\n  column-gap: 40px; }\n  .Grid.Grid--size-2 {\n    grid-template-columns: 1fr 1fr; }\n  .Grid.Grid--size-3 {\n    grid-template-columns: 1fr 1fr 1fr; }\n  .Grid.Grid--size-4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n\n.Column {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center; }\n  .Column > div {\n    width: 100%; }\n";
styleInject(css$12);

var Block = function Block(props) {
  var style = {};
  if (props.w) {
    style.width = props.w + "px";
    style.miWidth = props.w + "px";
  }
  if (props.h) style.height = props.h + "px";
  if (props.pad) style.padding = props.pad + "px";
  return React__default.createElement(
    "div",
    {
      style: style,
      className: "Block " + (props.center ? "Block--center" : "")
    },
    props.children
  );
};

var Row = function Row(props) {
  return React__default.createElement(
    "div",
    { className: "Row" },
    props.children
  );
};
var Column = function Column(props) {
  return React__default.createElement(
    "div",
    { className: "Column" },
    props.children
  );
};

var Grid = function Grid(props) {
  return React__default.createElement(
    "div",
    { className: "Grid Grid--size-" + props.size },
    props.children
  );
};

Grid.defaultProps = {
  size: 2
};

var Layout = { Block: Block, Row: Row, Column: Column, Grid: Grid };

var API = { modal: {} };

var DEFAULT_MODAL_ROOT = "promo_modal_root";

API.modal.mount = function (content) {
  API.modal.unmount();
  var root = document.getElementById(DEFAULT_MODAL_ROOT);
  if (!root) {
    var div = document.createElement("div");
    div.id = DEFAULT_MODAL_ROOT;
    document.body.appendChild(div);
    root = div;
  }
  ReactDOM.render(content, root);
};

API.modal.unmount = function () {
  var root = document.getElementById(DEFAULT_MODAL_ROOT);
  if (root) ReactDOM.unmountComponentAtNode(root);
};

var css$13 = "@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(./fonts/ProximaNova-Light.otf) format(\"opentype\");\n  font-weight: 300;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(./fonts/ProximaNova-Regular.otf) format(\"opentype\");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(./fonts/ProximaNova-Semibold.otf) format(\"opentype\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(./fonts/ProximaNova-Bold.otf) format(\"opentype\");\n  font-weight: 700;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(./fonts/ProximaNova-Extrabold.otf) format(\"opentype\");\n  font-weight: 800;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(./fonts/ProximaNova-Black.otf) format(\"opentype\");\n  font-weight: 900;\n  font-style: normal; }\n\nhtml {\n  font-size: 14px;\n  font-family: \"Proxima Nova\", \"Trebuchet MS\", \"Lucida Sans\", Arial, sans-serif; }\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\nbody,\nhtml {\n  margin: 0px;\n  padding: 0px; }\n";
styleInject(css$13);

var index = {
  Button: Button,
  Icon: Icon,
  IconButton: IconButton,
  Header: Header,
  Modal: Modal,
  Avatar: Avatar,
  Layout: Layout,
  Text: Text,
  Input: Input,
  Label: Label,
  Textarea: Textarea,
  SocialCheckbox: SocialCheckbox,
  Tabs: Tabs,
  API: API
};

return index;

})));
