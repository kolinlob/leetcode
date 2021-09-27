/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  return emails
    .map((e) => e.split("@"))
    .reduce(
      (set, [n, d]) =>
        set.add([n.replace(/\+.*/, "").replace(/\./g, ""), d].join("@")),
      new Set()
    ).size;
};
