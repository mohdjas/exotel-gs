/**
 * Validates that all of the required values in the object are non-empty. If an empty value is found,
 * an error is thrown using the key as the name.
 * @param {Object.<string, string>} params The values to validate.
 * @private
 */
function validate_(params) {
  Object.keys(params).forEach(function(name) {
    var value = params[name];
    if (isEmpty_(value)) {
      throw Utilities.formatString('%s is required.', name);
    }
  });
}

/**
 * Returns true if the given value is empty, false otherwise. An empty value is one of
 * null, undefined, a zero-length string, a zero-length array or an object with no keys.
 * @param {?} value The value to test.
 * @returns {boolean} True if the value is empty, false otherwise.
 * @private
 */
function isEmpty_(value) {
  return value === null || value === undefined ||
      ((_.isObject(value) || _.isString(value)) && _.isEmpty(value));
}
