var myPow = function(x, n) { 
    if(n == 0)
        return 1;

    let m = Math.abs(n);
    let res = m % 2 == 0 ? myPow(x*x, m/2) : x * myPow(x*x, (m-1)/2);
    return Math.sign(n) < 0 ? 1 / res : res;
};