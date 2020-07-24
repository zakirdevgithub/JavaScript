function Person(name,age,state){
    
    console.log(`Name: ${this.name} Age: ${this.age} State: ${state}`);

}

let obj1={
    name: "Zakir Hossain",
    age: 25,
    state:"Pabna"
}

let obj2={
   name: "Jewel Hossain",
   age: 50,
   state:"Rajshahi"
}
let obj3={
    name: "Zahid Hasan",
    age: 25,
    state:"Rajshahi"
 }

//Call Method
Person.call(obj1,"Rakib",23,"Sylhet"); //Will print Zakir Hossain,25,Sylhet

//Apply Method
Person.apply(obj2,["Shuvo",23,"Comilla"]); //Will print Jewel Hossain,23, Comilla

//Bind

let printFromFunction= Person.bind(obj3,"",null,"Rajshahi");
printFromFunction();




