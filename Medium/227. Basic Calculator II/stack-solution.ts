function calculate(s: string): number {
  let stack = [], op = "+", num = 0;

  for (let i = 0; i < s.length; ++i) {
    if (Number.parseInt(s[i]) >= 0 && Number.parseInt(s[i]) <= 9)
      num = 10 * num + Number(s[i]);

    if (Number.isNaN(+s[i]) || i == s.length - 1) {
      if (op == "-") stack.push(-num);
      else if (op == "+") stack.push(num);
      else if (op == "*") stack.push(stack.pop() * num);
      else if (op == "/") stack.push((stack.pop() / num) >> 0);
      op = s[i];
      num = 0;
    }
  }

  return stack.reduce((sum, cur) => sum + cur, 0);
}
