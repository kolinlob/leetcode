class WordDistance {
  map = new Map<string, number[]>();
  mins = new Map<string, number>();

  constructor(wordsDict: string[]) {
    for (let [i, word] of wordsDict.entries()) {
      if (this.map.has(word)) this.map.get(word).push(i);
      else this.map.set(word, [i]);
    }
  }

  shortest(word1: string, word2: string): number {
    let key = word1 + "&" + word2;

    if (!this.mins.has(key)) {
      let w1 = this.map.get(word1);
      let w2 = this.map.get(word2);

      let min = Infinity, i = 0, j = 0;
      while (i < w1.length && j < w2.length) {
        min = Math.min(min, Math.abs(w1[i] - w2[j]));
        if (w1[i] > w2[j]) j++;
        else i++;
      }

      this.mins.set(key, min);
    }

    return this.mins.get(key);
  }
}
