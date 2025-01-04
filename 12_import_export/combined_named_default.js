function printme(){
    console.log("print me called")
}
export default printme;

const printFunction = () => console.log("printFunction is called")
const adding = (first, second) => first + second;
export const pi = 2.141;
export {printFunction, adding} 