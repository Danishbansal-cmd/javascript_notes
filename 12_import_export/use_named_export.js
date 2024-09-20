//for named exports only

//to import the items we need, we can use this
// import { message } from "./named_export.js";
// let someMessage = message("asdfas");

//to import everthing from the named export we can use asterisk (*)
import * as Everything from './named_export.js';
let someMessage = Everything.message(Everything.messageValue);


console.log(`The value of someMessage is "${someMessage}"`)