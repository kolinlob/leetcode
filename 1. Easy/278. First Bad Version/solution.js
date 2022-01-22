/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  return function (n) {
    let left = 1,
      right = n;
    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      if (isBadVersion(mid)) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  };
};
