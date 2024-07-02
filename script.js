let database = [
  {
    username: "user1",
    password: "secret",
  },
  {
    username: "user2",
    password: "123",
  },
  {
    username: "user3",
    password: "12345",
  },
];

let newsfeed = [
  {
    name: "user1",
    timeline: "What a wonderful day!",
  },
  {
    name: "user2",
    timeline: "Let's go on vacation!",
  },
  {
    name: "user3",
    timeline: "Next stop - Croatia!",
  },
];

let usernamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Wrong username or password!");
  }
}

signIn(usernamePrompt, passwordPrompt);
