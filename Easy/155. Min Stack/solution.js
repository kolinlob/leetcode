var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    var min = this.stack.length == 0 ? val : this.stack[this.stack.length - 1].min;
    this.stack.push({ val, min: Math.min(min, val) });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.stack.length > 0) {
        let e = this.stack.pop();
        return e.val;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1].val;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1].min;
    }
};