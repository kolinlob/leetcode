/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.dp = nums.map((sum => value => sum += value)(0));
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.dp[right] - (this.dp[left - 1] ?? 0);
};