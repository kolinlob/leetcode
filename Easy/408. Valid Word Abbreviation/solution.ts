function validWordAbbreviation(word: string, abbr: string): boolean {
  if (word == abbr) return true;

  let groups = abbr.split(/(\d+)/).filter((g) => g);

  for (let g of groups) {
    if (g == "0" || g[0] == "0") return false;

    let num = Number.parseInt(g);
    if (Number.isNaN(num)) {
      if (!word.startsWith(g)) return false;

      word = word.replace(g, "");
    } else {
      if (num > word.length) return false;

      word = word.slice(num);
    }
  }

  return word.length == 0;
}
