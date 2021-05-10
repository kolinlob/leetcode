/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let jumps = 0, jumpEnd = 0, jumpMax = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        jumpMax = Math.max(jumpMax, i + nums[i]);
        if (i == jumpEnd) {
            jumpEnd = jumpMax;
            jumps++;
        }
    }

    return jumps;
};