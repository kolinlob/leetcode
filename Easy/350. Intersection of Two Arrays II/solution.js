/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let res = [];

  for (let n1 of nums1) {
    if (map.has(n1)) map.set(n1, map.get(n1) + 1);
    else map.set(n1, 1);
  }

  for (let n2 of nums2) {
    if (map.has(n2)) {
      let count = map.get(n2);
      res.push(n2);
      if (count > 1) map.set(n2, count - 1);
      else map.delete(n2);
    }
  }

  return res;
};
