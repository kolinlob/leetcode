/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let units = 0;
  let sortedBoxes = boxTypes.sort((a, b) => a[1] - b[1]);

  while (truckSize > 0 && sortedBoxes.length > 0) {
    let boxType = sortedBoxes.pop();
    let boxes = Math.min(boxType[0], truckSize);
    units += boxes * boxType[1];
    truckSize -= boxes;
  }

  return units;
};
