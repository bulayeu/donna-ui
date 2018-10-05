(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global['donna-ui'] = factory(global.React,global.ReactDOM));
}(this, (function (React,ReactDOM) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

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

var css = ".Button {\n  box-sizing: border-box;\n  display: inline-block;\n  text-decoration: none;\n  appearance: none;\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  font-size: 14px;\n  cursor: pointer;\n  margin: 5px;\n  width: auto; }\n  .Button.Button--white {\n    color: #232f3a;\n    border-color: #ffffff;\n    background-color: #ffffff; }\n  .Button.Button--blue {\n    color: #ffffff;\n    border-color: #32bafa;\n    background-color: #32bafa; }\n  .Button.Button--transparent {\n    color: #ffffff;\n    border-color: #ffffff;\n    background-color: transparent; }\n  .Button.Button--link {\n    color: #ffffff;\n    border-color: transparent;\n    background-color: transparent; }\n  .Button.Button--pink {\n    color: #ffffff;\n    border-color: #ed486f;\n    background-color: #ed486f; }\n  .Button.Button--md {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 4.5px;\n    padding-bottom: 4.5px; }\n  .Button[disabled] {\n    opacity: 0.5;\n    cursor: not-allowed;\n    pointer-events: none; }\n  .Button[href]:visited, .Button[href]:focus, .Button[href]:active {\n    text-decoration: none; }\n";
styleInject(css);

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

var Button = function (_Component) {
  inherits(Button, _Component);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: "calculcateClasses",
    value: function calculcateClasses() {
      return "Button Button--" + this.props.type;
    }
  }, {
    key: "asReference",
    value: function asReference() {
      return React__default.createElement(
        "a",
        {
          href: this.props.href,
          disabled: this.props.disabled,
          className: this.calculcateClasses()
        },
        React__default.createElement(
          "span",
          { className: "Label" },
          this.props.children
        )
      );
    }
  }, {
    key: "asButton",
    value: function asButton() {
      return React__default.createElement(
        "button",
        {
          onClick: this.props.onClick,
          disabled: this.props.disabled,
          className: this.calculcateClasses()
        },
        this.props.children
      );
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.href ? this.asReference() : this.asButton();
    }
  }]);
  return Button;
}(React.Component);


var TYPE_WHITE = "white";
var TYPE_BLUE = "blue";
var TYPE_TRANSPARENT = "transparent";
var TYPE_LINK = "link";
var TYPE_RED = "pink";

Button.propTypes = {
  type: propTypes.oneOf([TYPE_WHITE, TYPE_BLUE, TYPE_TRANSPARENT, TYPE_LINK, TYPE_RED]),
  href: propTypes.string,
  onClick: propTypes.func,
  disabled: propTypes.bool
};

Button.defaultProps = {
  type: TYPE_BLUE,
  disabled: false
};

var css$1 = ".ButtonGroup {\n  margin: 8px; }\n  .ButtonGroup > .Button {\n    margin: 0px;\n    border-radius: 0px; }\n  .ButtonGroup > .Button:first-child {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px; }\n  .ButtonGroup > .Button:last-child {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px; }\n";
styleInject(css$1);

var ButtonGroup = function (_Component) {
  inherits(ButtonGroup, _Component);

  function ButtonGroup() {
    classCallCheck(this, ButtonGroup);
    return possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
  }

  createClass(ButtonGroup, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "div",
        { className: "ButtonGroup" },
        this.props.children
      );
    }
  }]);
  return ButtonGroup;
}(React.Component);

var css$2 = ".Icon {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none; }\n  .Icon > img {\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n    width: auto;\n    height: auto;\n    float: left; }\n";
styleInject(css$2);

var facebook = "data:image/png;base64,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";

var twitter = "data:image/png;base64,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";

var instagram = "data:image/png;base64,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";

var youtube = "data:image/png;base64,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";

var linkedin = "data:image/png;base64,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";

var close = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAT5JREFUOI2l0zFLw0AUB/D/e5c0DRW1FEUKDvYTCHYSNzdXNwcNgehXEgNJ/QZ+AVexUzo6OlVQpKWxtNqkdRJCm14u583vfty99390eeWMhGDDEOLY9/0eNI/jONtE/AxCiwWz1X8f2EmaPnmed/gfcBiPW9Pvn4SJcNPcqc904SxYtcykUjEfCABc13UWC9z1PwZmc7c+UW1FHngfhhf0V1AWXgcCAGULVWEZuIKqwEVgLiqDVcC1aB4smM/SdH5bBErRZXh/r4HPYTwrAgFAyNAoinrt9lFcs63Tl9c30djamNuW+dgJw3PZPelLsz0UgikeTw2VuLEKWLXMZLNmd1U3LxfNm3IQBCdEuFaBV75fFBuVBaEyoCpMZUEVmHTAIph0QRnMAHd1QQAIgqCznApO0uRAF8yDR18T+xd2+mrGH1AqUQAAAABJRU5ErkJggg==";

var icons = {
  facebook: facebook,
  twitter: twitter,
  instagram: instagram,
  youtube: youtube,
  linkedin: linkedin,
  close: close
};

var Icon = function (_Component) {
  inherits(Icon, _Component);

  function Icon() {
    classCallCheck(this, Icon);
    return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  createClass(Icon, [{
    key: "render",
    value: function render() {
      return React__default.createElement(
        "span",
        { className: "Icon icon-" + this.props.icon },
        React__default.createElement("img", { draggable: false, src: icons[this.props.icon] })
      );
    }
  }]);
  return Icon;
}(React.Component);


Icon.defaultProps = {
  icon: "default"
};

Icon.propTypes = {
  icon: propTypes.oneOf(["facebook", "twitter", "instagram", "youtube", "linkedin", "close", "default"])
};

var css$3 = ".IconButton {\n  display: inline-block;\n  text-decoration: none;\n  appearance: none;\n  cursor: pointer;\n  width: auto;\n  height: auto;\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .IconButton.IconButton--round {\n    width: 50px;\n    height: 50px;\n    background-color: #ed486f;\n    border-radius: 50px;\n    position: relative; }\n    .IconButton.IconButton--round > .Icon {\n      width: auto;\n      height: auto; }\n  .IconButton.IconButton--plain {\n    float: left; }\n";
styleInject(css$3);

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
        React__default.createElement(Icon, { icon: this.props.icon })
      );
    }
  }]);
  return IconButton;
}(React.Component);


IconButton.defaultProps = {
  type: "plain"
};

var css$4 = ".Modal {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(35, 47, 58, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .Modal > .Modal__window {\n    overflow: hidden;\n    width: auto;\n    min-width: 30vw;\n    max-width: 80vw;\n    position: relative;\n    border-radius: 5px;\n    background-color: #ffffff; }\n    .Modal > .Modal__window > .IconButton {\n      position: absolute;\n      right: 10px;\n      top: 10px; }\n";
styleInject(css$4);

var Modal = function (_Component) {
  inherits(Modal, _Component);

  function Modal(props) {
    classCallCheck(this, Modal);

    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.close = function () {
      ReactDOM.unmountComponentAtNode(_this.modal.parentNode);
    };

    return _this;
  }

  createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        "div",
        { ref: function ref(c) {
            return _this2.modal = c;
          }, className: "Modal Modal--level-" + 1 },
        React__default.createElement(
          "div",
          { className: "Modal__window" },
          React__default.createElement(IconButton, { onClick: this.close, icon: "close" }),
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

var css$5 = ".Avatar {\n  width: 50px;\n  height: 50px;\n  position: relative; }\n  .Avatar > .Avatar__image {\n    border-radius: 50px;\n    overflow: hidden;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-position: center center;\n    background-size: cover;\n    background-repeat: no-repeat; }\n";
styleInject(css$5);

var Avatar = function (_Component) {
  inherits(Avatar, _Component);

  function Avatar() {
    classCallCheck(this, Avatar);
    return possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  createClass(Avatar, [{
    key: "render",
    value: function render() {
      var url = this.props.url;
      return React__default.createElement(
        "div",
        { className: "Avatar" },
        React__default.createElement("div", { style: { backgroundImage: "url(" + url + ")" }, className: "Avatar__image" })
      );
    }
  }]);
  return Avatar;
}(React.Component);

var css$6 = ".Header {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\nh1.Header {\n  font-size: 28px;\n  font-weight: light; }\n\nh2.Header {\n  font-size: 24px; }\n\nh3.Header {\n  font-size: 18px; }\n";
styleInject(css$6);

var Header = function (_Component) {
  inherits(Header, _Component);

  function Header() {
    classCallCheck(this, Header);
    return possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  createClass(Header, [{
    key: "render",
    value: function render() {
      switch (this.props.level) {
        case 1:
          return React__default.createElement(
            "h1",
            { className: "Header" },
            this.props.children
          );
        case 2:
          return React__default.createElement(
            "h2",
            { className: "Header" },
            this.props.children
          );
        case 3:
          return React__default.createElement(
            "h3",
            { className: "Header" },
            this.props.children
          );
      }
    }
  }]);
  return Header;
}(React.Component);


Header.defaultProps = {
  level: 1
};

var css$7 = ".Block {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 20px; }\n  .Block.Block--center {\n    justify-content: center;\n    align-items: center; }\n\n.Row {\n  display: flex;\n  flex-direction: row; }\n\n.Column {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n";
styleInject(css$7);

var Block = function Block(props) {
  return React__default.createElement(
    "div",
    { className: "Block Block--center" },
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

var Layout = { Block: Block, Row: Row, Column: Column };

var css$8 = "@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(../assets/fonts/ProximaNova-Light.woff) format(\"woff\");\n  font-weight: 200;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(../assets/fonts/ProximaNova-Regular.woff) format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(../assets/fonts/ProximaNova-Semibold.woff) format(\"woff\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Proxima Nova\";\n  src: url(../assets/fonts/ProximaNova-Bold.woff) format(\"woff\");\n  font-weight: 800;\n  font-style: normal; }\n\nhtml {\n  font-size: 14px;\n  font-family: \"Proxima Nova\", \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r \"Lucida Sans\", Arial, sans-serif; }\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box; }\n\nbody,\nhtml {\n  margin: 0px;\n  padding: 0px; }\n";
styleInject(css$8);

var index = {
  Button: Button,
  ButtonGroup: ButtonGroup,
  Icon: Icon,
  IconButton: IconButton,
  Header: Header,
  Modal: Modal,
  Avatar: Avatar,
  Layout: Layout
};

return index;

})));
