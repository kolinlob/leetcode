class Solution {
    public int reverse(int x) {
        int max = Integer.MAX_VALUE / 10;
        int min = Integer.MIN_VALUE / 10;

        int reversed = 0;
        while (x != 0) {
            if (reversed > max || reversed < min)
                return 0;

            reversed *= 10;
            reversed += x % 10;
            x /= 10;
        }

        return reversed;
    }
}