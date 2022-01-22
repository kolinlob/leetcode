/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const wuf = new DSU(nums);
  const set = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] - 1)) wuf.union(nums[i] - 1, nums[i]);
    if (set.has(nums[i] + 1)) wuf.union(nums[i] + 1, nums[i]);
  }

  return wuf.maxComponent();

  function DSU(nums) {
    this.count = nums.length;
    this.roots = new Map();
    this.size = new Map();

    for (let i = 0; i < nums.length; i++) {
      this.roots.set(nums[i], nums[i]);
      this.size.set(nums[i], 1);
    }

    this.find = function (p) {
      while (p != this.roots.get(p)) {
        this.roots.set(p, this.roots.get(this.roots.get(p)));
        p = this.roots.get(p);
      }

      return p;
    };

    this.union = function (p, q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);

      if (rootP == rootQ) return;

      if (this.size.get(rootP) > this.size.get(rootQ)) {
        this.size.set(rootP, this.size.get(rootP) + this.size.get(rootQ));
        this.roots.set(rootQ, rootP);
      } else {
        this.size.set(rootQ, this.size.get(rootQ) + this.size.get(rootP));
        this.roots.set(rootP, rootQ);
      }

      this.count--;
    };

    this.maxComponent = function () {
      let max = 0;
      for (let s of this.size.values()) {
        max = Math.max(max, s);
      }
      return max;
    };
  }
};
