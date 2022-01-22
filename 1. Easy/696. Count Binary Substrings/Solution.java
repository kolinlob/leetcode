class Solution {
    public int countBinarySubstrings(String s) {
        List<Integer> counts = new ArrayList<>();

        int target = 0;
        int cur = 0;
        for (int c : s.toCharArray()) {
            if (c - 48 != target) {
                counts.add(cur);
                target = (c - 48) & 1;
                cur = 1;
            } else
                cur++;
        }
        counts.add(cur);

        int res = 0;
        for (int i = 1; i < counts.size(); i++)
            res += Math.min(counts.get(i - 1), counts.get(i));

        return res;
    }
}