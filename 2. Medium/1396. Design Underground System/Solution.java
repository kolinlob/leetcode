class UndergroundSystem {
    Map<String, Integer> stations;
    Map<Integer, Checkin> checkins;
    Map<Integer, Map<Integer, TripsStats>> trips;
    int stationId;

    public UndergroundSystem() {
        stations = new HashMap();
        checkins = new HashMap();
        trips = new HashMap();
        stationId = 0;
    }

    public void checkIn(int id, String stationName, int t) {
        addStationIfAbsent(stationName);
        checkins.put(id, new Checkin(stations.get(stationName), t));
    }

    public void checkOut(int id, String stationName, int t) {
        addStationIfAbsent(stationName);
        Checkin checkin = checkins.remove(id);
        int endId = stations.get(stationName);
        int tripTime = t - checkin.getTime();

        if (trips.containsKey(checkin.getStation())) {
            Map<Integer, TripsStats> destinations = trips.get(checkin.getStation());

            if (destinations.containsKey(endId))
                destinations.get(endId).addTrip(tripTime);
            else
                destinations.put(endId, new TripsStats(tripTime));
        } else
            trips.computeIfAbsent(checkin.getStation(), x -> new HashMap()).put(endId, new TripsStats(tripTime));
    }

    public double getAverageTime(String startStation, String endStation) {
        int start = stations.get(startStation);
        int end = stations.get(endStation);
        if (trips.containsKey(start)) {
            Map<Integer, TripsStats> destinations = trips.get(start);
            if (destinations.containsKey(end))
                return destinations.get(end).getAvgTime();
        }

        return 0.0;
    }

    private void addStationIfAbsent(String stationName) {
        if (!stations.containsKey(stationName))
            stations.put(stationName, stationId++);
    }

    private class Checkin {
        int time;
        int stationdId;

        public Checkin(int s, int t) {
            stationdId = s;
            time = t;
        }

        public int getStation() {
            return stationdId;
        }

        public int getTime() {
            return time;
        }
    }

    private class TripsStats {
        int totalTrips;
        int totalTime;
        double avgTime;

        public TripsStats(int time) {
            totalTime = time;
            totalTrips = 1;
            avgTime = (double) time;
        }

        public void addTrip(int time) {
            totalTime += time;
            totalTrips++;
            avgTime = totalTime / (double) totalTrips;
        }

        public double getAvgTime() {
            return avgTime;
        }
    }
}