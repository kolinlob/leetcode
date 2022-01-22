class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int res = 0;
        int pre = 0;

        for (char r : s.toCharArray()) {
            int cur = map.get(r);
            res += cur;

            if (cur > pre)
                res -= 2 * pre;

            pre = cur;
        }

        return res;
    }
}