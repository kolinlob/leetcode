/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const x = [];
  let i = 0, j = 0;

  while (i < firstList.length && j < secondList.length) {
    const xs = Math.max(firstList[i][0], secondList[j][0]);
    const xe = Math.min(firstList[i][1], secondList[j][1]);
    if (xs <= xe) x.push([xs, xe]);
    if (firstList[i][1] < secondList[j][1]) i++;
    else j++;
  }

  return x;
};
