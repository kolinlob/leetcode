/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  for (let i = 0; i < nums.length; i++)
    if (cycle(i)) return true;

  return false;

  function cycle(j) {
    let slow = j, fast = j, dir = nums[j] >= 0;

    do {
      slow = next(slow, dir);
      fast = next(next(fast, dir), dir);
    } while (fast != undefined && slow != undefined && fast != slow);

    return fast != undefined && slow == fast;

    function next(i, dir) {
      if (i < 0 || i === undefined) return undefined;
      if (nums[i] >= 0 != dir) return undefined;

      let nxt = (i + nums[i]) % nums.length;
      if (nxt < 0) nxt += nums.length;

      if (nxt === i) return undefined;
      return nxt;
    }
  }
};
