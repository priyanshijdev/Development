
/// custom map function / polyfill of Map :

Array.prototype.myMap = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4];

const multiply = nums.myMap((nums, i, arr) => {
  return nums * 3;
});

console.log("multiply-", multiply);
