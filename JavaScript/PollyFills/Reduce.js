// Pollyfill for reduce---


Array.prototype.myFilter = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const nums = [1, 2, 3, 4];

const multiply = nums.myFilter((nums, i, arr) => {
  return nums > 2;
});

console.log("multiply- ans", multiply);
