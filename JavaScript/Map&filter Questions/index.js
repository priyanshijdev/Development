// Transform object array into names list using map
const users = [{ name: 'A', age: 21 }, { name: 'B', age: 28 }];

const updated= users.map((ele)=>{
 return ele.name 
})

// console.log('users-----', updated)

// Filter users by age greater than 25
   
const updated2= users.map((ele)=>{
 if( ele.age>25)
  {return ele }
 else 
 {
  return ""
 }
 })

//  console.log('users-----', updated2)
// Get all unique cities from an array of user objects

const user = [
  { name: 'A', city: 'Delhi' },
  { name: 'B', city: 'Mumbai' },
  { name: 'C', city: 'Delhi' }
];
// Output: ['Delhi', 'Mumbai']

const uniqueCities = [...new Set(user.map(user => user.city))];
console.log('users----->>>', uniqueCities)

 // Output:
//  [
//   "Delhi",
//   "Mumbai"
// ]
