/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let complement = target - numbers[i];

    let lo = i;
    let hi = numbers.length - 1;

    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (mid != i && complement == numbers[mid]) return [i + 1, mid + 1];

      if (complement < numbers[mid]) hi = mid - 1;
      else lo = mid + 1;
    }
  }

  return lo;
};
