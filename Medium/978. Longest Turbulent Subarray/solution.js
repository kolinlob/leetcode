/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  const dp = new Array(arr.length).fill(1);
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) continue;
    if (arr[i] > arr[i - 1]) {
      if (dp[i - 1] == 1) dp[i] += 1;
      else dp[i] = arr[i - 1] < arr[i - 2] ? dp[i] + dp[i - 1] : 2;
    } else {
      if (dp[i - 1] == 1) dp[i] += 1;
      else dp[i] = arr[i - 1] > arr[i - 2] ? dp[i] + dp[i - 1] : 2;
    }

    max = Math.max(max, dp[i]);
  }

  return max;
};
