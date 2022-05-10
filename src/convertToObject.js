'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const styles = sourceString.split(';')
    .map(a => a.trim()).filter(i => i.length !== 0);

  styles.forEach(i => {
    result[i.split(':')[0].trim()] = i.split(':')[1].trim();
  }
  );

  return result;
}

module.exports = convertToObject;
