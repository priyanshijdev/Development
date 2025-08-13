The const keyword behaves quite differently when applied to arrays versus objects, and this is a common source of confusion in JavaScript.

With Arrays:
  const myArray = [1, 2, 3];

// This works - you can modify the contents
myArray.push(4);        // [1, 2, 3, 4]
// myArray[0] = 10;        // [10, 2, 3, 4]
// myArray.pop();          // [10, 2, 3]

// myArray = [5, 6, 7];    


with Objects:

const myObject = { name: "John", age: 30 };

// This works - you can modify properties
myObject.name = "Jane";           // { name: "Jane", age: 30 }
myObject.city = "New York";       // { name: "Jane", age: 30, city: "New York" }
delete myObject.age;              // { name: "Jane", city: "New York" }

// This fails - you cannot reassign the object
myObject = { name: "Bob" };     


The Core Concept:
const prevents reassignment of the variable, but it doesn't make the contents immutable.
  Both arrays and objects are reference types, so const protects the reference but not the contents.



💡 Key takeaway:
const just locks the variable’s reference. It doesn’t make the value immutable. To actually freeze the contents, you’d use:

Object.freeze(obj);
or

Object.freeze(arr);
but even freeze has limitations for deep objects.
