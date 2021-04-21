class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<>();

        if (numRows == 0)
            return triangle;

        triangle.add(Arrays.asList(new Integer[] { 1 }));

        for (int last = 1; last < numRows; last++) {
            List<Integer> prev = triangle.get(last - 1);
            List<Integer> row = new ArrayList<>(prev.size() + 1);

            row.add(1);
            for (int i = 1; i < prev.size(); i++)
                row.add(prev.get(i - 1) + prev.get(i));
            row.add(1);

            triangle.add(row);
        }

        return triangle;
    }
}