/**
 * Checks form's field required validation
 *
 * @param {string} value
 * @param {boolean} isRequired
 *
 * @return {boolean} isValid
 */
export const checkRequired = (value, isRequired) => !value && isRequired;

/**
 * Checks form's field minimum length validation
 *
 * @param {string} value
 * @param {string} minLength
 * @param {string} [regex]
 *
 * @return {boolean} isValid
 */
export const checkMinLength = (value, minLength, regex) => {
  if (regex) {
    const fieldRegex = new RegExp(regex);
    return value && fieldRegex.test(value) && value.length < minLength;
  }
  return value && value.length < minLength;
};

export const checkField = (value) => {
  if (value.trim() !== "") {
    return value;
  }

  return "wrong";
};
