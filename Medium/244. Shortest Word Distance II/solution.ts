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
      let min = Infinity;
      for (let i of this.map.get(word1))
        for (let j of this.map.get(word2))
            min = Math.min(min, Math.abs(i - j));

      this.mins.set(key, min);
    }

    return this.mins.get(key);
  }
}
