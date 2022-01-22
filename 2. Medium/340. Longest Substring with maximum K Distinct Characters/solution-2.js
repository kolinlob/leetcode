const longest_substring_with_k_distinct = function (str, k) {
  let maxLen = 0, i = 0, j = 0, map = {};

  while (j < str.length) {
    map[str[j]] = map[str[j]] + 1 || 1;
    j++;

    while (Object.keys(map).length > k) {
      map[str[i]] -= 1;
      if (map[str[i]] == 0) delete map[str[i]];
      i++;
    }

    maxLen = Math.max(j - i, maxLen);
  }
  return maxLen;
};
