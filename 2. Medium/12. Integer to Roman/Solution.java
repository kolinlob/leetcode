class Solution {
    public String intToRoman(int num) {
        Map<Integer, Character> map = new HashMap<>();
        map.put(1,   'I');
        map.put(5,   'V');
        map.put(10,  'X');
        map.put(50,  'L');
        map.put(100, 'C');
        map.put(500, 'D');
        map.put(1000,'M');

        int pow = 1;
        StringBuilder sb = new StringBuilder();

        while (num != 0) {
            int n = num % 10;

            if (n < 4) {
                sb.append(String.valueOf(map.get(pow)).repeat(n));
            } else if (n == 4) {
                sb.append(String.valueOf(map.get(5 * pow)));
                sb.append(String.valueOf(map.get(pow)));
            } else if (n < 9) {
                sb.append(String.valueOf(map.get(pow)).repeat(n - 5));
                sb.append(String.valueOf(map.get(5 * pow)));
            } else if (n == 9) {
                sb.append(String.valueOf(map.get(10 * pow)));
                sb.append(String.valueOf(map.get(pow)));
            }

            num /= 10;
            pow *= 10;
        }

        return sb.reverse().toString();
    }
}