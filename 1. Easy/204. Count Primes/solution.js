/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let primes = new Array(n);
    primes.fill(true, 2);

    for (let i = 2; i * i < n; i++) {
        if (primes[i])
            for (let j = i * i; j < n; j += i)
                primes[j] = false;
    }

    return primes.reduce((acc, val) => acc + val, 0);
};