class HashMapSolution {
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> counts = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (counts.containsKey(nums[i]))
                counts.put(nums[i], counts.get(nums[i]) + 1);
            else
                counts.put(nums[i], 1);
        }

        for (Map.Entry<Integer, Integer> entry : counts.entrySet())
            if (entry.getValue() > nums.length / 2)
                return entry.getKey();

        return Integer.MIN_VALUE;
    }
}