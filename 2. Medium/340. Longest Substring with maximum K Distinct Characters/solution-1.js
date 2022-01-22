const longest_substring_with_k_distinct = function (str, k) {
  let len = 0, maxLen = 0, i = 0, j = 0, d = 0, map = {};

  while (i < str.length && j < str.length) {
    if (d < k || map[str[j]]) {
      if (map[str[j]]) map[str[j]] += 1;
      else {
        map[str[j]] = 1;
        d++;
      }
      j++;
      len++;
    } else {
      map[str[i]] -= 1;
      if (map[str[i]] == 0) {
        delete map[str[i]];
        d--;
      }
      len--;
      i++;
    }

    maxLen = Math.max(len, maxLen);
  }
  return maxLen;
};
