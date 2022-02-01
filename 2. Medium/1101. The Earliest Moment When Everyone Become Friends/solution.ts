function earliestAcq(logs: number[][], n: number): number {
  let dsu = new DSU(n);
  logs.sort((a, b) => a[0] - b[0]);

  for (let [time, a, b] of logs) {
    dsu.union(a, b);
    if (dsu.count() == 1) return time;
  }

  return -1;
}

class DSU {
  private root: number[];
  private size: number[];
  private len: number;

  constructor(n: number) {
    this.len = n;
    this.root = new Array(n);
    this.size = new Array(n).fill(1);

    for (let i = 0; i < n; ++i) this.root[i] = i;
  }

  connected(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  find(p: number): number {
    while (p != this.root[p]) p = this.root[p];
    return p;
  }

  union(p: number, q: number): void {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP == rootQ) return;

    if (this.size[rootP] > this.size[rootQ]) {
      this.size[rootP] += this.size[rootQ];
      this.root[rootQ] = rootP;
    } else {
      this.size[rootQ] += this.size[rootP];
      this.root[rootP] = rootQ;
    }

    this.len--;
  }

  count() {
    return this.len;
  }
}
