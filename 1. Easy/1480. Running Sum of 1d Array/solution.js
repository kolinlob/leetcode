/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    nums.reduce((acc, _, i, arr) => arr[i] += acc);
    return nums;
};