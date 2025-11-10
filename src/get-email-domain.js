const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let count = email.lastIndexOf("@");
  let res = "";
  for (let i = email.length - 1; i > count; i--) {
    res = email[i] + res;
  }
  return res;
}

module.exports = {
  getEmailDomain,
};
