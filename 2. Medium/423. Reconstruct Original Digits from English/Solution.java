class Solution {
    public String originalDigits(String s) {
        int[] uniq = new int[10];
        for (char c : s.toCharArray()) {
            switch (c) {
                case 'z': { uniq[0]++; break; }
                case 'w': { uniq[2]++; break; }
                case 'u': { uniq[4]++; break; }
                case 'x': { uniq[6]++; break; }
                case 'g': { uniq[8]++; break; }
                case 'o': { uniq[1]++; break; }
                case 'h': { uniq[3]++; break; }
                case 'f': { uniq[5]++; break; }
                case 's': { uniq[7]++; break; }
                case 'i': { uniq[9]++; break; }
            }
        }

        uniq[1] -= (uniq[0] + uniq[2] + uniq[4]);
        uniq[3] -= (uniq[8]);
        uniq[5] -= (uniq[4]);
        uniq[7] -= (uniq[6]);
        uniq[9] -= (uniq[6] + uniq[8] + uniq[5]);

        StringBuilder sb = new StringBuilder();
        for (int x = 0; x < uniq.length; x++)
            sb.append(Integer.toString(x).repeat(uniq[x]));
        
        return sb.toString();
    }
}