function countShips(
  sea: Sea,
  topRight: number[],
  bottomLeft: number[]
): number {
  const [topX, topY] = topRight;
  const [lowX, lowY] = bottomLeft;

  if (topX < lowX || topY < lowY) return 0;
  if (sea.hasShips(topRight, bottomLeft) == false) return 0;
  if (topX == lowX && topY == lowY) return 1;

  const midX = (topX + lowX) >> 1;
  const midY = (topY + lowY) >> 1;

  return (
    countShips(sea, [midX, midY], bottomLeft) +
    countShips(sea, topRight, [midX + 1, midY + 1]) +
    countShips(sea, [midX, topY + 1], [lowX, midY + 1]) +
    countShips(sea, [topX, midY], [midX + 1, lowY])
  );
}
