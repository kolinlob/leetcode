/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return Array.from(s)
    .map((c, i) => c >= "A" && c <= "Z" ? String.fromCharCode(s.charCodeAt(i) + 32) : c)
    .join("");
};
