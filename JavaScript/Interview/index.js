const users = [
  {
    id: 1,
    name: "alice smith",
    age: 25,
    roles: ["admin", "user"],
    profile: {
      location: "NY",
      active: true,
      preferences: { notifications: true, darkMode: false },
    },
    friends: [2, 3],
  },
  {
    id: 2,
    name: "bob johnson",
    age: 30,
    roles: ["user"],
    profile: {
      location: "LA",
      active: false,
      preferences: { notifications: false, darkMode: true },
    },
    friends: [1],
  },
  {
    id: 3,
    name: "charlie brown",
    age: 35,
    roles: ["user", "moderator"],
    profile: {
      location: "SF",
      active: true,
      preferences: { notifications: false, darkMode: true },
    },
    friends: [1, 4],
  },
  {
    id: 4,
    name: "david white",
    age: 40,
    roles: ["guest"],
    profile: {
      location: "TX",
      active: false,
      preferences: { notifications: true, darkMode: false },
    },
    friends: [3],
  },
];

// Task1- deep copy :

const userUpdated = JSON.parse(JSON.stringify(users));

// Task2:
// Increment the age of each user in updatedUsers by 2 if
// the user has the role "admin" and by 1 for all other users.

userUpdated.map((ele) => {
  if (ele.roles.includes("admin")) {
    ele.age += 2;
  } else {
    ele.age += 1;
  }
});

// Remove users from updatedUsers who meet any
// profile.active is false.
// The user has only one role, and that role is "guest".

const filterUser = userUpdated.filter((ele) => {
  const isInActive = !ele.profile.active;
  const isRole = ele.roles.includes("guest");
  return !(isInActive || isRole);
});

// Toggle Notification Preferences:

// users from updatedUsers whose profile.active is true,
// toggle the value of profile.preferences.notifications (i.e., true becomes false and vice versa).

userUpdated.map((ele) => {
  if (ele.profile.active) {
    ele.profile.preferences.notifications =
      !ele.profile.preferences.notifications;
  }
});

console.log("user ---->>>>", userUpdated);

// Generate roleAnalysis: (Tricky One)

// Create an object that counts the total occurrences of each role across all users in updatedUsers.
// Example: { admin: 3, user: 5, moderator: 2 }

const roleAnalysis = userUpdated.reduce((acc, user) => {
  user.roles.forEach((role) => {
    acc[role] = (acc[role] || 0) + 1;
  });
  return acc;
}, {});

console.log("roleAnalysis:", roleAnalysis);

// Generate locationGroups:

// Group all users from updatedUsers by their profile.location.


const locationGroups = userUpdated.reduce((acc, user) => {
  const location = user.profile.location;

  if (!acc[location]) {
    acc[location] = [];
  }
  acc[location].push(user);

  return acc;
}, {});

console.log("-----", locationGroups);
