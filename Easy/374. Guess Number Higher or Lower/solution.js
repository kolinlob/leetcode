/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let l = 1, h = n;
    while(l <= h) {
        let m = (l + h) >>> 1;
        switch(guess(m)) {
            case -1: { h = m - 1; break; }
            case  0: return m;
            case  1: { l = m + 1; break; }
        };
    }
};