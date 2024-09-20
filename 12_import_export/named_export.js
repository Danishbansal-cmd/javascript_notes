function message (value) {
    return "This is the new message " + value;
}
let messageValue = "Message is to everyone";
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getData(){
        return `Name is ${this.name} and age is ${this.age}`
    }
}
export {message, messageValue, Person}
// export default message;