/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0, maxL = 0, r = height.length - 1, maxR = 0, w = 0;
  while (l < r) {
    if (height[l] < height[r])
      if (height[l] >= maxL) maxL = height[l++];
      else w += maxL - height[l++];
    else if (height[r] >= maxR) maxR = height[r--];
    else w += maxR - height[r--];
  }

  return w;
};
