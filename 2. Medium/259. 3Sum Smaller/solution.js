const triplet_with_smaller_sum = function (arr, target) {
  let count = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let lo = i + 1, hi = arr.length - 1;
    while (lo < hi) {
      if (arr[i] + arr[lo] + arr[hi] < target) {
        count += hi - lo;
        lo++;
      } else hi--;
    }
  }

  return count;
};
