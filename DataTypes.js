/*
There are Two Types of Data Types in JavaScript
1.Primitive data types , 2.Reference data types

Primitive Data Types
1.String
2.Number
3.Boolean
4.null
5.undefined
6.Symbol

Reference Data Types
1.Array
2.Object literals
3.Function
4.Dates
*/

//Primitive Data Types

//String
let name='Zakir';
const country=`Bangladesh`;
const sentence="I wanna work as a Software Developer in a Company";
console.log("Name: "+name+" Type is: "+typeof name);
console.log("Country: "+country+" Type is: "+typeof country);
console.log("My Aim: "+sentence+" Type is: "+typeof sentence);

//Number
let age=25;
const rollNumber=24;
const pi=3.1416;
console.log("Age: "+age+" and Type is: "+typeof age);
console.log("Roll Number: "+rollNumber+" and Type is: "+typeof rollNumber);
console.log("Value of π is: "+pi+" and Type is: "+typeof pi);

//Boolean
let isJavaScriptUseful= true;
const isGhostExist= false;
console.log("Is JavaScript Useful? "+isJavaScriptUseful+" Type is: "+
             typeof isJavaScriptUseful);
console.log("Is Ghost exist? "+isGhostExist+" Type is: "+typeof isGhostExist);

//Null
let myPocket=null;
console.log("How much money you have? "+myPocket+" Type is: "+typeof myPocket);

//Undefined
let volumeOfSolarSystem=undefined;
console.log(volumeOfSolarSystem+" Type is: "+typeof volumeOfSolarSystem);

// Symbol
//Symbol mainly used to make unique a variable
let num1=Symbol();
let num2=Symbol();
console.log(num1===num2); // Ans will be false 
const age1=Symbol(25);
const age2=Symbol(25);
console.log(age1===age2);// Ans will be false 

let friend1=Symbol(" Innocent");
let friend2=Symbol("Nice Person");
let titleOfShovon="Industrius";
let ageOfShovon=25;
let titleOfLimon="Very helpful";
let homeTown="Pabna";

const myObject={

    Shovon : titleOfShovon,
    age : ageOfShovon,
    Limon : titleOfLimon ,
    "Home Town": homeTown,
    Mohi : friend1,
    Rasel : friend2
}

for(key in myObject){
    console.log(key, myObject[key] );
}

myObject.Mohi="He is my Friend since 2014";
myObject.Rasel="He is my Friend since 2015";

for(key in myObject){
    console.log(key, myObject[key] );
}

//Reference Data Types
//Array
let numbers=[12,45,6.8, 98,0,65];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Object Literals
 let marksOfPhysics={
     anik : 90,
     asit : 78,
     puja : 95,
     alim : 80,
     ohi : 82
 }

 console.log(marksOfPhysics.anik);
 console.log(marksOfPhysics.asit);

 for (key in marksOfPhysics){
     console.log(key+" got "+marksOfPhysics[key]+" in Physics");
 }
 console.log("Type of object is: "+typeof marksOfPhysics);

 //Function
 function myFunc(){
     console.log("I am learning JavaScript");
 }

 myFunc();
console.log("Type of Function is: "+typeof myFunc);
 
//Date
 let date= new Date();
 console.log(date);
console.log("Type of Date is: "+typeof date);

