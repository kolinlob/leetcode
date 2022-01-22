function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalFuel = 0, currentFuel = 0, start = 0;

  for (let i = 0; i < gas.length; ++i) {
    totalFuel = totalFuel + gas[i] - cost[i];
    currentFuel = currentFuel + gas[i] - cost[i];

    if (currentFuel < 0) {
      currentFuel = 0;
      start = i + 1;
    }
  }

  return totalFuel < 0 ? -1 : start;
}
