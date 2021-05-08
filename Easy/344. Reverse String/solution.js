/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let reverse = function (lo, hi) {
        if (hi - lo <= 0)
            return;

        let [s_lo, s_hi] = [s[lo], s[hi]];
        s[lo] = s_hi;
        s[hi] = s_lo;

        return reverse(lo + 1, hi - 1);
    }

    reverse(0, s.length - 1);
};