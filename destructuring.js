//Array Destructuring
let myArray=["Shovon","Limon","Mohi","Rasel","Rakib","Shuvo"];

let [a,b,c]=myArray;
console.log(a,b,c);

let [x,y,z,...k]=myArray;
console.log(x,y,z,...k);

//Object Destructuring

let person={
    name:"Zakir",
    age:25,
    height:5.7,
    hobby:["coding","desiging"]
}

let {name,age,height,hobby}=person;
console.log(name,age,height,hobby[1]);

