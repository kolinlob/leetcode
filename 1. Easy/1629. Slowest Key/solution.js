/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let max = 0, ans = "";

  for (let i = releaseTimes.length - 1; i >= 0; i--) {
    let cur = releaseTimes[i] - (releaseTimes[i - 1] ?? 0);
    if (cur > max) {
      max = cur;
      ans = keysPressed[i];
    } else if (cur == max)
        ans = ans > keysPressed[i] ? ans : keysPressed[i];
  }

  return ans;
};
