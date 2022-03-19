class FreqStack {
  private frequencies: Map<number, number>;
  private values: Map<number, number[]>;
  private maxFrequency: number;

  constructor() {
    this.frequencies = new Map<number, number>();
    this.values = new Map<number, number[]>();
    this.maxFrequency = 0;
  }

  push(val: number): void {
    const frequency = 1 + (this.frequencies.get(val) || 0);
    this.frequencies.set(val, frequency);
    this.maxFrequency = Math.max(this.maxFrequency, frequency);

    if (!this.values.has(frequency)) this.values.set(frequency, []);

    this.values.get(frequency).push(val);
  }

  pop(): number {
    const popped = this.values.get(this.maxFrequency).pop();
    this.frequencies.set(popped, this.frequencies.get(popped) - 1);

    if (this.values.get(this.maxFrequency).length == 0) this.maxFrequency -= 1;

    return popped;
  }
}
