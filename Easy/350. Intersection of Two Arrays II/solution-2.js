/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map1 = toMap(nums1), map2 = toMap(nums2);
  const x = [];

  for (let [k, v] of map1.entries())
    if (map2.has(k)) {
      const times = Math.min(v, map2.get(k));
      x.push(...new Array(times).fill(k));
    }

  return x;

  function toMap(nums) {
    return nums.reduce((map, cur) => {
      if (map.has(cur)) map.set(cur, map.get(cur) + 1);
      else map.set(cur, 1);
      return map;
    }, new Map());
  }
};
