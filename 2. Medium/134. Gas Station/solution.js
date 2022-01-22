/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let residualFuel = 0, total = 0, res = 0;

  for (let i = 0; i < gas.length; i++) {
    const leftover = gas[i] - cost[i];

    residualFuel += leftover;

    if (residualFuel < 0) {
      residualFuel = 0;
      res = i + 1;
    }

    total += leftover;
  }

  return total < 0 ? -1 : res;
};
