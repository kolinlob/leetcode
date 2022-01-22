var MyQueue = function () {
    this.instack = [];
    this.outstack = [];
};

MyQueue.prototype.push = function (x) {
    while (this.outstack.length > 0)
        this.instack.push(this.outstack.pop());
    this.instack.push(x);
};

MyQueue.prototype.pop = function () {
    while (this.instack.length > 0)
        this.outstack.push(this.instack.pop());
    return this.outstack.pop();
};

MyQueue.prototype.peek = function () {
    while (this.instack.length > 0)
        this.outstack.push(this.instack.pop());
    return this.outstack[this.outstack.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.instack.length === 0 && this.outstack.length === 0;
};