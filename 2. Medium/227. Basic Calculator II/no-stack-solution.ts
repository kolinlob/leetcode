function calculate(s: string): number {
  let last = 0, num = 0, res = 0, op = "+";

  for (let i = 0; i < s.length; ++i) {
    if (Number.parseInt(s[i]) >= 0 && Number.parseInt(s[i]) <= 9)
      num = 10 * num + Number(s[i]);

    if (Number.isNaN(+s[i]) || i == s.length - 1) {
      if (op == "-" || op == "+") {
        res += last;
        last = op == "-" ? -num : num;
      }
      else if (op == "*") last *= num;
      else if (op == "/") last = (last / num) >> 0;

      op = s[i];
      num = 0;
    }
  }

  res += last;
  return res;
}
