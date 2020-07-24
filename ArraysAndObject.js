let myArray=[10,'Zakir',6.7,[12,78,[56,98,45],"Shovon",100],30];
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[3]);
console.log(myArray[3][2]);
console.log(myArray[3][2][1]);

//Adding something at First
myArray.unshift("Bil gates");
console.log(myArray);

//Adding something at Last
myArray.push("Steab jobs");
console.log(myArray);

//Removing from First
myArray.shift();
console.log(myArray);

//Removing from Last
myArray.pop();
console.log(myArray);

console.log(Array.isArray(myArray));
console.log(Array.isArray("MyName"));

console.log(myArray.slice(0,4));
let myAnotherArray=[34,67,8,9,56];
myArray =myArray.concat(myAnotherArray);
console.log(myArray);

console.log(myAnotherArray.reverse());

let friends=["Shovon","Mohi","Rasel","Limon"];
console.log(friends.sort());

let myObject={
    name : "Zakir",
    age : 25,
    country: "Bangladesh",
    friends : ["Shovon","Mohi","Rasel","Limon"]
}

console.log(myObject.name);
console.log(myObject["name"]);
console.log(myObject.friends[2]);