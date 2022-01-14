function myAtoi(s: string): number {
  if (!s) return 0;

  let split = s.trim().split(/(\d+)/);
  if (split.length <= 1 || split[0].length > 1) return 0;

  let sign = null;
  switch (split[0]) {
      case "":
      case "+": { sign = 1; break; }
      case "-": { sign = -1; break; }
      default: return 0;
  }

  let integer = sign * Number.parseInt(split[1]);

  if (integer < Math.pow(-2,31)) return Math.pow(-2,31);
  if (integer >= Math.pow(2,31)) return Math.pow(2,31) - 1;

  return integer;
}
