/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let start = 1, sum = start;

  for (let num of nums) {
    sum += num;
    if (sum < 1) {
      start += 1 - sum;
      sum = 1;
    }
  }

  return start;
};
