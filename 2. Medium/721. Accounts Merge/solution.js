/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const roots = new Set(), owner = {}, parent = {}, children = {};

  for (let account of accounts) {
    let [name, root, ...emails] = account;
    let r1 = find(root);
    owner[root] = name;
    children[r1] = children[r1] || [root];
    roots.add(r1);

    for (let email of emails) {
      let r2 = find(email);
      if (r1 != r2) {
        parent[r2] = r1;
        children[r1].push(...(children[r2] ? children[r2] : [email]));
        roots.delete(r2);
        delete children[r2];
      }
    }
  }

  return [...roots].map((r) => [owner[r], ...children[r].sort()]);

  function find(p) {
    parent[p] = parent[p] || p;
    while (p != parent[p]) p = parent[p];
    return p;
  }
};
