/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const maxLeft = new Array(height.length);
  maxLeft[0] = height[0];
  for (let i = 1; i < height.length; i++)
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);

  const maxRight = new Array(height.length);
  maxRight[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--)
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);

  return height.reduce((acc, cur, i) => acc + (Math.min(maxLeft[i], maxRight[i]) - cur), 0);
};
