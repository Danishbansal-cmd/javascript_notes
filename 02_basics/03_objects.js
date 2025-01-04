// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

const bindObject = {
    name : 'Danish Bansal'
}

// to check what it would print in this way
JsUser.greetingTwo();

// to immediately call use the call()
JsUser.greetingTwo.call(bindObject);

// to not immediately call use the bind()
const functionFromBind = JsUser.greetingTwo.bind(bindObject);
functionFromBind();

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());