class SparseVector {
  map: { [k: string]: number };

  constructor(nums: number[]) {
    this.map = nums.reduce((m, c, i) => {
      if (c != 0) m[i] = c;
      return m;
    }, {});
  }

  dotProduct(vec: SparseVector): number {
    return Object.entries(this.map).reduce((acc, [k, v]) => acc + (vec.map[k] || 0) * v, 0);
  }
}
