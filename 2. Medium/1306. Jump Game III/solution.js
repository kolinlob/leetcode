/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let queue = [start];
  let visited = new Array(arr.length).fill(false);

  while (queue.length > 0) {
    let cur = queue.shift();

    if (arr[cur] == 0) return true;
    visited[cur] = true;

    let fw = cur + arr[cur];
    if (fw < arr.length && visited[fw] == false) queue.push(fw);

    let rw = cur - arr[cur];
    if (rw >= 0 && visited[rw] == false) queue.push(rw);
  }

  return false;
};
