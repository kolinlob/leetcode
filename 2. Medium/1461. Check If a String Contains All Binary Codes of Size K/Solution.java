class Solution {
    public boolean hasAllCodes(String s, int k) {
        int num = 1 << k;
        Set<String> codes = new HashSet<>();

        for (int i = k; i <= s.length(); i++) {
            String sub = s.substring(i - k, i);
            if (!codes.contains(sub)) {
                codes.add(sub);
                num--;
                if (num == 0)
                    return true;
            }
        }

        return false;
    }
}