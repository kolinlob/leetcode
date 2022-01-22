/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  return operations.reduce((acc, cur) => acc + (cur[1] == "+" ? 1 : -1), 0);
};
