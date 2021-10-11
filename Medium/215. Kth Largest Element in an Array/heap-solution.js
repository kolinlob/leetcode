/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let size = nums.length;
  heapify(nums);
  while (--k > 0) poll(nums);
  return peek(nums);

  function heapify(arr) {
    nums.unshift(undefined);
    let h = Math.floor(Math.log(arr.length) / Math.log(2));
    for (let i = 2 ** h - 1; i > 0; i--) sink(i, arr);
  }

  function poll(arr) {
    let i = 1,
      res = arr[i];
    [arr[i], arr[size]] = [arr[size], arr[i]];
    size--;

    sink(i, arr);
    return res;
  }

  function peek(arr) {
    return arr[1];
  }

  function sink(i, arr) {
    let ix = greaterChild(i, arr);
    while (ix && arr[i] < arr[ix]) {
      [arr[ix], arr[i]] = [arr[i], arr[ix]];
      i = ix;
      ix = greaterChild(i, arr);
    }

    function greaterChild(i, arr) {
      let l = 2 * i,
        r = l + 1;
      if (size >= r) return arr[l] >= arr[r] ? l : r;
      if (size >= l) return l;
      return undefined;
    }
  }
};
