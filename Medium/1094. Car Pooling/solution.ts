function carPooling(trips: number[][], capacity: number): boolean {
  let starts = new MinPriorityQueue({ priority: (a) => a[1] }),
      stops = new MinPriorityQueue({ priority: (a) => a[2] });

  for (let trip of trips) starts.enqueue(trip);

  let currentCapacity = capacity;

  while (!starts.isEmpty()) {
    let trip = starts.dequeue().element;

    while (!stops.isEmpty() && trip[1] >= stops.front().element[2])
      if (trip[1] >= stops.front().element[2])
        currentCapacity += stops.dequeue().element[0];

    currentCapacity -= trip[0];

    stops.enqueue(trip);

    if (currentCapacity < 0) return false;
  }

  return true;
}
