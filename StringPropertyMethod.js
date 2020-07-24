//Template Literal
let name="Zakir";
let age=25;
const country="Bangladesh";
let info=` I am from ${country} My name is ${name} and I am ${age} years old.`
console.log(info);

let sentence="My name is Zakir and I love coding";

console.log(sentence.length); //length is property as like C# property
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.concat(" Now I am learning JavaScript"));// can't change permanantly
console.log(sentence);
console.log(sentence.indexOf("n"));
console.log(sentence.lastIndexOf("n"));
console.log(sentence.substring(3,16));
console.log(sentence.substring(-4));
console.log(sentence.slice(0,16));
console.log(sentence.slice(-4));
console.log(sentence.endsWith("g"));
console.log(sentence.includes("coding"));
console.log(sentence.charAt(9));
console.log(sentence.split(" "));
console.log(sentence.startsWith("M"));
 let friend="     Shovon    ";
 console.log(friend);
 console.log(friend.trim());
 console.log(sentence.replace("coding","Programming"));