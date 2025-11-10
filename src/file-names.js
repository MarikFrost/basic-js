const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const objRepeat = {};
  names.forEach((el) => {
    if (objRepeat[el]) {
      let currentSuffix = objRepeat[el];
      let newName = `${el}(${currentSuffix})`;
      while (objRepeat[newName]) {
        currentSuffix++;
        newName = `${el}(${currentSuffix})`;
      }
      result.push(newName);
      objRepeat[el] = currentSuffix + 1; 
      objRepeat[newName] = 1; 
    } else {
      objRepeat[el] = 1;
      result.push(el);
    }
  });
  return result;
}

module.exports = {
  renameFiles,
};
