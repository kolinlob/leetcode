/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let first = -1, last = -1;

    let lo = 0, hi = nums.length - 1;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (target == nums[mid]) {
            first = mid;
            hi = mid - 1;
        } else if (target < nums[mid]) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    if (first != -1) {
        lo = first;
        hi = nums.length - 1;
        while (lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            if (target == nums[mid]) {
                last = mid;
                lo = mid + 1;
            } else if (target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
    }

    return [first, last];
};