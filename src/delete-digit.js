const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = [];
  let string = String(n);
  for (let i = 0; i < string.length; i++) {
    array.push(string.slice(0, i) + string.slice(i + 1));
  }
  return Math.max.apply(null, array);
}

module.exports = {
  deleteDigit
};
