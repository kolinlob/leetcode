/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let w = 0;

  for (let i = 1; i < height.length - 1; i++) {
    let left = height[0], right = height[i + 1];

    for (let l = 0; l < i; l++)
        left = Math.max(left, height[l]);

    for (let r = i + 1; r < height.length; r++)
        right = Math.max(right, height[r]);

    const level = Math.min(left, right);
    w += level > height[i] ? level - height[i] : 0;
  }

  return w;
};
