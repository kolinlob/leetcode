/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    const xb = x == 1 ? 1 : Math.floor(Math.log(bound) / Math.log(x));
    const yb = y == 1 ? 1 : Math.floor(Math.log(bound) / Math.log(y));

    const res = new Set();
    for (let px = 0; px <= xb; px++) {
        for (let py = 0; py <= yb; py++) {
            let sum = Math.pow(x, px) + Math.pow(y, py);
            if (sum <= bound)
                res.add(sum);
        }
    }

    return [...res];
};