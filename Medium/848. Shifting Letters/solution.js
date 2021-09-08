/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const a = "a".charCodeAt(0);
  const totalShifts = new Array(shifts.length).fill(0);

  for (let i = shifts.length - 1; i >= 0; i--)
    totalShifts[i] = shifts[i] + (totalShifts[i + 1] ?? 0);

  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    const code = arr[i].charCodeAt(0);
    const shift = totalShifts[i] % 26;
    arr[i] = String.fromCharCode(((code + shift - a) % 26) + a);
  }

  return arr.join("");
};
