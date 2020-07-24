//normal function
function myFunction(){
    console.log("This is a Function");
}
myFunction();

//Function with argument
function add( a,  b){
    return a+b;
}
console.log(add(45,5));

//Default argument
function friends(friend1, friend2="Shovon"){
    console.log(friend1,friend2);
}
friends("Limon","Tushar");
friends("Rasel");

//Function Expression
let square=function(num){
    return num*num;
}
console.log(square(4));

//Arrow Function =>
let myArray=["Zakir",89,"Banana","Umbrella","Fish",89.97];

myArray.forEach((element, index, Array) =>{
     console.log(element, index, Array);
})

//Function in Object
let simpleObject={
    name: "Zakir",
    age: 25,
    height: 6.7,
    cube: function(num){
            return num*num*num;
  }
}
console.log(simpleObject.cube(2));
