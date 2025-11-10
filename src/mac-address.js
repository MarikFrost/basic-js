const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  let isValid = true;
  if(arr.length !== 6) {
    isValid = false;
  }
  arr.forEach(el => {
    if(el.length !== 2) {
      isValid = false;
    }
    if(el[0].charCodeAt(0) !== 48 && (el[0].charCodeAt(0) < 65 || el[0].charCodeAt(0) > 70) && (el[0].charCodeAt(0) < 97 || el[0].charCodeAt(0) > 102) && (el[0].charCodeAt(0) < 48 || el[0].charCodeAt(0) > 57)) {
      isValid = false;
    } 
    if(el[1].charCodeAt(0) !== 48 && (el[1].charCodeAt(0) < 65 || el[1].charCodeAt(0) > 70) && (el[1].charCodeAt(0) < 97 || el[1].charCodeAt(0) > 102) && (el[1].charCodeAt(0) < 48 || el[1].charCodeAt(0) > 57)) {
      isValid = false;
    }
  });
  return isValid;
}

module.exports = {
  isMAC48Address
};
