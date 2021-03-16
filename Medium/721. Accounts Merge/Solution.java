class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, String> emailName = new HashMap();
        Map<String, Integer> emailID = new HashMap();

        int emailsCount = 0;
        for (List<String> account : accounts)
            emailsCount += account.size() - 1;

        WUF wuf = new WUF(emailsCount + 1);
        int id = 0;

        for (List<String> account : accounts) {
            String name = account.get(0);

            for (String email : account.subList(1, account.size())) {
                emailName.put(email, name);

                if (!emailID.containsKey(email))
                    emailID.put(email, id++);

                wuf.union(emailID.get(account.get(1)), emailID.get(email));
            }
        }

        Map<Integer, List<String>> merged = new HashMap();
        for (String email : emailName.keySet()) {
            int ix = wuf.find(emailID.get(email));
            merged.computeIfAbsent(ix, x -> new ArrayList()).add(email);
        }

        for (List<String> emails : merged.values()) {
            Collections.sort(emails);
            emails.add(0, emailName.get(emails.get(0)));
        }

        return new ArrayList(merged.values());
    }

    private class WUF {
        private int[] parent;
        private int[] size;

        public WUF(int n) {
            parent = new int[n];
            size = new int[n];

            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        public int find(int p) {
            while (p != parent[p])
                p = parent[p];
            return p;
        }

        public void union(int p, int q) {
            int rootP = find(p);
            int rootQ = find(q);

            if (rootP == rootQ)
                return;

            if (size[rootP] > size[rootQ]) {
                parent[rootQ] = rootP;
                size[rootP] += size[rootQ];
            } else {
                parent[rootP] = rootQ;
                size[rootQ] += size[rootP];
            }
        }
    }
}