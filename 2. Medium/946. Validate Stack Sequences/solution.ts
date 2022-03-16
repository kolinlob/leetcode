function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = [];

  for (let i = 0, j = 0; i < pushed.length; ++i) {
    stack.push(pushed[i]);

    while (stack.length && stack[stack.length - 1] == popped[j]) {
      stack.pop();
      j++;
    }
  }

  return stack.length == 0;
}
