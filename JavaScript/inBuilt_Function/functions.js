slice()
Purpose:     Extracts a portion of an array and returns a new array containing the extracted elements. 
Original Array:   Does not modify the original array; it is non-destructive.
Arguments: Accepts two optional arguments: start (inclusive) and end (exclusive) indices. 
            If end is omitted, it extracts to the end of the array. If no arguments are provided, it creates a shallow copy of the entire arra



const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice(1, 4); // Extracts elements from index 1 up to (but not including) index 4

console.log(newArray);       // Output: [2, 3, 4]


splice():

The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or 
adding new elements in place, modifying the original array.


modify original array.

  example:
let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
cars.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log("cars :", cars);
