var MyCalendar = function () {
  this.bookings = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  let lo = 0,
    hi = this.bookings.length - 1;
  while (lo <= hi) {
    let mid = (lo + hi) >> 1;
    const [s, e] = this.bookings[mid];
    if (s < end && start < e) return false;
    if (start >= e) lo = mid + 1;
    else hi = mid - 1;
  }

  this.bookings.splice(lo, 0, [start, end]);
  return true;
};
