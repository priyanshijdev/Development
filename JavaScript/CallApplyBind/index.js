const person = { name: "Priyanshi" };

function sayHello(age) {
  return `Hii ${this.name} age= ${age}`;
}

console.log("call", sayHello.call(person, 23));
console.log("bind", sayHello.bind(person, 23));

Output:
call Hii Priyanshi age= 23
as call worked instantly but not bind
-----------------------------------------------------------------------------------------------------------------------------------------------------------------

2. 
const age = 10;

var person = {
  name: "Priya",
  age: "22",
  getAge: function () {
    return this.age;
  },
};
var p2 = { age: 100 };
person.getAge.call(p2);

Output: 100 
-> person.getAge() then output is 22
-----------------------------------------------------------------------------------------------------------------------------------------------------------------


