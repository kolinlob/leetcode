/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0, h);
  horizontalCuts.sort((a, b) => a - b);

  let mh = 0;
  for (let h = 1; h < horizontalCuts.length; h++) {
    mh = Math.max(mh, horizontalCuts[h] - horizontalCuts[h - 1]);
  }

  verticalCuts.push(0, w);
  verticalCuts.sort((a, b) => a - b);

  let mw = 0;
  for (let w = 1; w < verticalCuts.length; w++) {
    mw = Math.max(mw, verticalCuts[w] - verticalCuts[w - 1]);
  }

  return (mh * mw) % (1e9 + 7);
};
