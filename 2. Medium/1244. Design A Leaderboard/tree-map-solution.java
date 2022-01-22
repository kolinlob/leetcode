class Leaderboard {
    Map<Integer, Integer> players;
    TreeMap<Integer, Integer> scores;

    public Leaderboard() {
        players = new HashMap<Integer, Integer>();
        scores = new TreeMap<Integer, Integer>(Collections.reverseOrder());
    }

    public void addScore(int playerId, int score) {
        if (players.containsKey(playerId)) {
            int oldScore = players.get(playerId);
            int newScore = oldScore + score;
            players.put(playerId, newScore);
            scores.put(oldScore, Math.max(0, scores.get(oldScore) - 1));
            scores.put(newScore, 1 + scores.getOrDefault(newScore, 0));
        } else {
            players.put(playerId, score);
            scores.put(score, 1 + scores.getOrDefault(score, 0));
        }
    }

    public int top(int K) {
        int sum = 0;
        int limit = Math.min(K, players.size());
        for (Map.Entry<Integer, Integer> entry : scores.entrySet()) {
            int count = entry.getValue();
            while (count > 0) {
                sum += entry.getKey();
                count--;
                if (--limit <= 0)
                    return sum;
            }
        }

        return sum;
    }

    public void reset(int playerId) {
        addScore(playerId, -1 * players.getOrDefault(playerId, 0));
    }
}