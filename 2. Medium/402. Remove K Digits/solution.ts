function removeKdigits(num: string, k: number): string {
  const stack = [];

  for (let char of num) {
    const digit = Number.parseInt(char);
    while (stack.length && k && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }

    stack.push(digit);
  }

  for (let i = 0; i < k; ++i)
    stack.pop();

  while (stack.length > 1 && stack[0] == "0")
    stack.shift();

  return stack.length ? stack.join("") : "0";
}
