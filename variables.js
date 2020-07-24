//var,  let, const

// var used for gloabal variable
// let used for local variable
//const used for prevent changing value

var name="Zakir";
var age=25;
    age=35;

let numberOfLeg=2;
    numberOfLeg=10; // is it true????????? NO  JUST for fun

const numberOfEye=2;
// numberOfEye= 56; not possible because of constant 
console.log(numberOfEye);

//But we can Change value in Array
const myArray=[12,45,6,7,8,9,3];
myArray.push(555);
myArray.pop();
console.log(myArray);