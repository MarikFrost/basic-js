const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let res = "";
  if (typeof str !== "string") {
    str = String(str);
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;
    if (options.addition !== undefined) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        res += String(options.addition);
        if (j < options.additionRepeatTimes - 1) {
          res += String(options.additionSeparator);
        }
      }
    }
    if (i < options.repeatTimes - 1) {
      res += String(options.separator);
    }
  }
  return res;
}

module.exports = {
  repeater,
};
