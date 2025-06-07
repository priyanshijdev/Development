# Complex User Data Manipulation and Analysis Task

## Objective

Write a JavaScript function `processUserData(users)` that performs multiple complex operations on an input array of user objects. 
This task evaluates the candidate's understanding of JavaScript's deep vs. shallow copying, array and object manipulation, 
closures, and functional programming techniques.

### Instructions

1. Make the necessary changes in the `processUserData` function located in the `index.js` file.
2. Once you've implemented the function, run the following command to execute the test cases and validate your solution:

   ```bash
   npm test
   ```

This will check if your `processUserData` function works correctly.

## Function Specification

### Input

- An array of user objects, where each object has the following structure:

  ```javascript
  {
    id: Number,
    name: String,
    age: Number,
    roles: Array<String>,
    profile: {
      location: String,
      active: Boolean,
      preferences: {
        notifications: Boolean,
        darkMode: Boolean
      }
    },
    friends: Array<Number> // Array of user IDs representing friends
  }
  ```

### Output

- An object containing the following properties:
  - `updatedUsers`: A deeply cloned and transformed version of the input array with modifications as specified.
  - `inactiveUserFriends`: An array of objects representing the `friends` of users whose `profile.active` is `false`.
  - `roleAnalysis`: An object summarizing the count of each role across all users.
  - `locationGroups`: An object grouping users by their `profile.location`.

### Requirements

The function must perform the following operations in sequence:

1. **Deep Clone** the input array `users` into a new array `updatedUsers` such that modifying `updatedUsers` will not affect the original `users`.

2. **Increment the `age`** of each user in `updatedUsers` by 2 if the user has the role `"admin"` and by 1 for all other users.

3. **Remove** users from `updatedUsers` who meet any of the following conditions:

   - `profile.active` is `false`.
   - The user has only one role, and that role is `"guest"`.

4. **Toggle Notification Preferences:**

   - users from `updatedUsers` whose `profile.active` is `true`, toggle the value of `profile.preferences.notifications` (i.e., `true` becomes `false` and vice versa).

5. **Generate `inactiveUserFriends`:**

   - For every user whose `profile.active` is `false` in the original `users` array, find all their friends by `id` and include their details in an array called `inactiveUserFriends`.

6. **Generate `roleAnalysis`:**

   - Create an object that counts the total occurrences of each role across all users in `updatedUsers`.
   - Example: `{ admin: 3, user: 5, moderator: 2 }`

7. **Generate `locationGroups`:**

   - Group all users from `updatedUsers` by their `profile.location`.
   - Example:
     ```javascript
     {
       NY: [ /* array of users from New York */ ],
       LA: [ /* array of users from Los Angeles */ ],
       // and so on
     }
     ```

8. **Return** the final object containing:
   ```javascript
   {
     updatedUsers: [ /* the deeply cloned and transformed users */ ],
     inactiveUserFriends: [ /* array of friends for inactive users */ ],
     roleAnalysis: { /* count of each role */ },
     locationGroups: { /* users grouped by location */ }
   }
   ```

## Example Input

```javascript
const users =[
   {
      "id":1,
      "name":"alice smith",
      "age":25,
      "roles":[
         "admin",
         "user"
      ],
      "profile":{
         "location":"NY",
         "active":true,
         "preferences":{
            "notifications":true,
            "darkMode":false
         }
      },
      "friends":[
         2,
         3
      ]
   },
   {
      "id":2,
      "name":"bob johnson",
      "age":30,
      "roles":[
         "user"
      ],
      "profile":{
         "location":"LA",
         "active":false,
         "preferences":{
            "notifications":false,
            "darkMode":true
         }
      },
      "friends":[
         1
      ]
   },
   {
      "id":3,
      "name":"charlie brown",
      "age":35,
      "roles":[
         "user",
         "moderator"
      ],
      "profile":{
         "location":"SF",
         "active":true,
         "preferences":{
            "notifications":false,
            "darkMode":true
         }
      },
      "friends":[
         1,
         4
      ]
   },
   {
      "id":4,
      "name":"david white",
      "age":40,
      "roles":[
         "guest"
      ],
      "profile":{
         "location":"TX",
         "active":false,
         "preferences":{
            "notifications":true,
            "darkMode":false
         }
      },
      "friends":[
         3
      ]
   }
];
```

# Expected output

```
{
   "updatedUsers":[
      {
         "id":1,
         "name":"Alice Smith",
         "age":27,
         "roles":[
            "admin",
            "user"
         ],
         "profile":{
            "location":"NY",
            "active":true,
            "preferences":{
               "notifications":false,
               "darkMode":false
            }
         },
         "friends":[
            2,
            3
         ]
      },
      {
         "id":3,
         "name":"Charlie Brown",
         "age":36,
         "roles":[
            "user",
            "moderator"
         ],
         "profile":{
            "location":"SF",
            "active":true,
            "preferences":{
               "notifications":true,
               "darkMode":true
            }
         },
         "friends":[
            1,
            4
         ]
      }
   ],
   "inactiveUserFriends":[
      {
         "id":1,
         "name":"Alice Smith",
         "age":25,
         "roles":[
            "admin",
            "user"
         ],
         "profile":{
            "location":"NY",
            "active":true,
            "preferences":{
               "notifications":true,
               "darkMode":false
            }
         },
         "friends":[
            2,
            3
         ]
      },
      {
         "id":3,
         "name":"Charlie Brown",
         "age":35,
         "roles":[
            "user",
            "moderator"
         ],
         "profile":{
            "location":"SF",
            "active":true,
            "preferences":{
               "notifications":false,
               "darkMode":true
            }
         },
         "friends":[
            1,
            4
         ]
      }
   ],
   "roleAnalysis":{
      "admin":1,
      "user":2,
      "moderator":1
   },
   "locationGroups":{
      "NY":[
         {
            "id":1,
            "name":"Alice Smith",
            "age":27,
            "roles":[
               "admin",
               "user"
            ],
            "profile":{
               "location":"NY",
               "active":true,
               "preferences":{
                  "notifications":false,
                  "darkMode":false
               }
            },
            "friends":[
               2,
               3
            ]
         }
      ],
      "SF":[
         {
            "id":3,
            "name":"Charlie Brown",
            "age":36,
            "roles":[
               "user",
               "moderator"
            ],
            "profile":{
               "location":"SF",
               "active":true,
               "preferences":{
                  "notifications":true,
                  "darkMode":true
               }
            },
            "friends":[
               1,
               4
            ]
         }
      ]
   }
}
```
