
// With using map:
    const numbers = [1, 2, 3];
    const doubledNumbers = numbers.map(number => number * 2);

    console.log(doubledNumbers); // Output: [2, 4, 6]
    console.log(numbers);       // Output: [1, 2, 3] (original array unchanged)

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
