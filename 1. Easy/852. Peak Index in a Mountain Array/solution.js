/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) lo = mid + 1;
    else hi = mid;
  }

  return lo;
};
