/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  const { odd, even } = position.reduce(
    (a, e) => {
      if (e % 2 == 0) a.even++;
      else a.odd++;
      return a;
    },
    { odd: 0, even: 0 }
  );

  return even == 0 || odd == 0 ? 0 : Math.min(odd, even);
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var minCostToMoveChips = function (position) {
  const odd = position.reduce((a, e) => a + (e % 2 == 1), 0);
  const even = position.reduce((a, e) => a + (e % 2 == 0), 0);

  return even == 0 || odd == 0 ? 0 : Math.min(odd, even);
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var minCostToMoveChips = function (position) {
  let even = 0, odd = 0;

  for (let p of position) {
    if (p % 2 == 0) even++;
    else odd++;
  }

  return even == 0 || odd == 0 ? 0 : Math.min(odd, even);
};
