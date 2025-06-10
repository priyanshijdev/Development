// Transform object array into names list using map
const users = [{ name: 'A', age: 21 }, { name: 'B', age: 28 }];

const updated= users.map((ele)=>{
 return ele.name 
})

// console.log('users-----', updated)
---------------------------------------------------------------------------------------------------------------------------------------------------------

// Filter users by age greater than 25

const users = [
  { name: "A", age: 21 },
  { name: "B", age: 28 },
];
const updated = users.filter((ele) => ele.age > 25);
// Output: [{ name: 'B', age: 28 }]

console.log("updated= ", updated);

----------------------------------------------------------------------------------------------------------------------------------------------------

const user = [
  { name: 'A', city: 'Delhi' },
  { name: 'B', city: 'Mumbai' },
  { name: 'C', city: 'Delhi' }
];
// Output: ['Delhi', 'Mumbai']

const uniqueCities = [...new Set(user.map(user => user.city))];
console.log('users----->>>', uniqueCities)
--------------------------------------------------------------------------------------------------------------------------------------------------------------



// Count how many users live in each city (using reduce)

const users = [
  { name: 'A', city: 'Delhi' },
  { name: 'B', city: 'Mumbai' },
  { name: 'C', city: 'Delhi' }
];
// Output: { Delhi: 2, Mumbai: 1 }

// Answer---

const cityCount = users.reduce((acc, user) => {
  acc[user.city] = (acc[user.city] || 0) + 1;
  return acc;
}, {});

console.log('cityCount----', cityCount)

-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Group objects by a key (e.g., department)

const employees = [
  { name: 'Alice', dept: 'HR' },
  { name: 'Bob', dept: 'Engineering' },
  { name: 'Eve', dept: 'HR' }
];


// Output: {
//   HR: [{ name: 'Alice', dept: 'HR' }, { name: 'Eve', dept: 'HR' }]
//   Engineering: [{ name: 'Bob', dept: 'Engineering' }]
// }

const updatedEmp= employees.reduce((acc,emp)=> {
  if(!acc[emp.dept]){
    acc[emp.dept] = [] 
  }
  acc[emp.dept].push(emp);
  return acc;
})

console.log('updatedEmp =', updatedEmp)

----------------------------------------------------------------------------------------------------------------------------------------------------------------







 
