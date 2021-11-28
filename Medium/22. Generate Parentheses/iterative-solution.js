/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let queue = [{ s: "", o: 0, c: 0 }],
      result = [];

  while (queue.length > 0) {
    let cur = queue.shift();
    if (cur.o == n && cur.c == n) result.push(cur.s);
    else {
      if (cur.o < n)     queue.push({ s: cur.s + "(", o: cur.o + 1, c: cur.c });
      if (cur.c < cur.o) queue.push({ s: cur.s + ")", o: cur.o, c: cur.c + 1 });
    }
  }

  return result;
};
