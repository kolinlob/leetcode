var RandomizedSet = function () {
  this.keys = {};
  this.values = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.keys[val] !== undefined) return false;

  this.keys[val] = this.values.length;
  this.values.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.keys[val] === undefined) return false;

  const i = this.keys[val];
  delete this.keys[val];

  const last = this.values.pop();
  if (i == this.values.length) return true;

  this.values[i] = last;
  this.keys[last] = i;
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const i = (Math.random() * this.values.length) >> 0;
  return this.values[i];
};
