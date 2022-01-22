var countBinarySubstrings = function (s) {
    var groups = [];
    var target = 0;
    var cur = 0;

    for (let c of s) {
        if (c != target) {
            groups.push(cur);
            target = c & 1;
            cur = 1;
        } else
            cur++;
    }
    groups.push(cur);

    return groups.reduce((a, c, i) => i > 0 && a + Math.min(groups[i - 1], c), 0);
};