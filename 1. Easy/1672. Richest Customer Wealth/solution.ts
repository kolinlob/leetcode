function maximumWealth(accounts: number[][]): number {
  return accounts
    .map((customer) => customer.reduce((s, c) => s + c, 0))
    .reduce((max, cur) => Math.max(max, cur));
}
