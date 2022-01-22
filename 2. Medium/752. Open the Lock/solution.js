/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let seen = new Set(deadends);
  let steps = -1;
  let start = "0000";
  if (seen.has(start)) return steps;

  let queue = [start];

  while (queue.length > 0) {
    steps++;

    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      if (current == target) return steps;

      for (let next of adj(current)) {
        if (seen.has(next)) continue;

        seen.add(next);
        queue.push(next);
      }
    }
  }

  return -1;

  function adj(state) {
    ff = (s, i) => s.substring(0, i) + ((Number(s[i]) + 1) % 10) + s.substring(i + 1);
    rw = (s, i) => s.substring(0, i) + ((Number(s[i]) + 9) % 10) + s.substring(i + 1);
    let arr = Array.from(state);
    return [...arr.map((_,i) => ff(state, i)), ...arr.map((_,i) => rw(state, i))];
  }
};
