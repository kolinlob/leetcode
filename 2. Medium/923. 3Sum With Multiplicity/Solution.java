class Solution {
    public int threeSumMulti(int[] arr, int target) {
        Arrays.sort(arr);

        Map<Integer, Integer> counts = new HashMap();
        List<List<Integer>> triplets = new ArrayList();

        for (int i = 0; i < arr.length; i++)
            counts.put(arr[i], counts.getOrDefault(arr[i], 0) + 1);

        for (int i = 0; i < arr.length - 2; i++) {
            if (i == 0 || arr[i] != arr[i - 1]) {
                int lo = i + 1, hi = arr.length - 1, third = target - arr[i];

                while (lo < hi) {
                    if (arr[lo] + arr[hi] == third) {
                        triplets.add(Arrays.asList(arr[i], arr[lo], arr[hi]));
                        while (lo < hi && arr[lo] == arr[lo + 1]) lo++;
                        lo++;
                        while (lo < hi && arr[hi] == arr[hi - 1]) hi--;
                        hi--;
                    } else if (arr[lo] + arr[hi] < third) {
                        while (lo < hi && arr[lo] == arr[lo + 1]) lo++;
                        lo++;
                    } else {
                        while (lo < hi && arr[hi] == arr[hi - 1]) hi--;
                        hi--;
                    }
                }
            }
        }

        long res = 0;
        for (List<Integer> t : triplets) {
            int a = t.get(0), b = t.get(1), c = t.get(2);
            long ca = counts.get(a), cb = counts.get(b), cc = counts.get(c);

            if (a == b && b == c)
                res += ca * (ca - 1) * (ca - 2) / 6;
            else if (a == b)
                res += ca * (cb - 1) / 2 * cc;
            else if (b == c)
                res += ca * cb * (cc - 1) / 2;
            else
                res += ca * cb * cc;
        }

        return (int) (res % 1_000_000_007);
    }
}