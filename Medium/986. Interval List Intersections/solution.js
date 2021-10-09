/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const intersections = [];
  let i = 0, j = 0;

  while (i < firstList.length && j < secondList.length) {
    let xstart = Math.max(firstList[i][0], secondList[j][0]);
    let xend = Math.min(firstList[i][1], secondList[j][1]);

    if (xstart <= xend) intersections.push([xstart, xend]);

    if (firstList[i][1] > secondList[j][1]) j++;
    else i++;
  }

  return intersections;
};
