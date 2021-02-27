class Solution {
    public int divide(int dividend, int divisor) {
        if (dividend == Integer.MIN_VALUE && divisor == -1)
            return Integer.MAX_VALUE;

        if (divisor == 1)
            return dividend;

        if (divisor == dividend)
            return 1;

        boolean negative = (dividend < 0) ^ (divisor < 0);

        dividend = Math.abs(dividend);
        divisor = Math.abs(divisor);

        int quotient = 0;
        int remainder = dividend;

        while (remainder - divisor >= 0) {
            int temp = divisor;
            int count = 1;
            while (remainder - (temp << 1) >= 0) {
                temp <<= 1;
                count <<= 1;
            }
            remainder -= temp;
            quotient += count;
        }

        return negative ? -quotient : quotient;
    }
}