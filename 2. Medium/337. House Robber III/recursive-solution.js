/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  return Math.max(...tryRob(root));

  function tryRob(house) {
    if (house == null) return [0, 0];

    let [leftRob, leftNoRob] = tryRob(house.left);
    let [rightRob, rightNoRob] = tryRob(house.right);

    let rob = house.val + leftNoRob + rightNoRob;
    let noRob = Math.max(leftRob, leftNoRob) + Math.max(rightRob, rightNoRob);

    return [rob, noRob];
  }
};
