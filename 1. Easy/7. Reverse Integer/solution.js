/**
 * @param {number} x
 * @return {number}
 */
const max = 2147483647;
const min = -2147483648;

var reverse = function (x) {
    const reversed = Math.abs(x).toString().split("").reverse().join("") * Math.sign(x);
    return reversed > max ? 0 : reversed < min ? 0 : reversed;
};