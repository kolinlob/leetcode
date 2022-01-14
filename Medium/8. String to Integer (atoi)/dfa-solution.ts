function myAtoi(s: string): number {
  let state = "Q0";
  let result = 0;
  let sign = 1;

  const INT_MIN = Math.pow(2, 31);
  const INT_MAX = INT_MIN - 1;

  for (let c of s) {
    const num = Number.parseInt(c);

    switch (state) {
      case "Q0": {
        if (c == " ") break;
        else if (c == "+") state = "Q1";
        else if (c == "-") {
          sign = -1;
          state = "Q1";
        } else state = Number.isNaN(num) ? "QD" : processDigit(num);
        break;
      }
      case "Q1": {
        state = Number.isNaN(num) ? "QD" : processDigit(num);
        break;
      }
      case "Q2": {
        state = Number.isNaN(num) ? "QD" : processDigit(num);
        break;
      }
      default: return sign * result;
    }
  }

  return sign * result;

  function processDigit(d: number): "QD" | "Q2" {
    const lim = sign > 0 ? INT_MAX : INT_MIN;
    const tenth = (lim / 10) >> 0;

    if (result < tenth) result = 10 * result + d;
    else if (result == tenth) result = d > 7 ? lim : 10 * result + d;
    else {
      result = lim;
      return "QD";
    }

    return "Q2";
  }
}
