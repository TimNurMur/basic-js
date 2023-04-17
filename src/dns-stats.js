const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = {};
  domains.forEach(elem => {
    let arr = elem.split('.').reverse();
    let key = '';
    arr.forEach(item => {
      key = key + '.' + item;
      if (key in res) {
        res[key] = res[key] + 1;
      } else {res[key] = 1}
    });
  });
  return res;
}

module.exports = {
  getDNSStats
};
