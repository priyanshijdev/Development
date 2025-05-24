
                          With in built function: 
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum is 15


By polyfill 

// POLYFILL OF REDUCE:

Array.prototype.myReduce = function (cb, initialValue) {
  var accum = initialValue;
  for (let i = 0; i < this.length; i++) {
    accum = accum ? cb(accum, this[i], i, this) : this[i];
  }
  return accum;
};

const number = [1, 2, 3, 4];

const sum = number.myReduce((accum, curr, i, number) => {
  return accum + curr;
});

console.log("sum=", sum);
