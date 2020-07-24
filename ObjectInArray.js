let myObjectCollection=[
    {title:"Shovon", job:"Expecting Job"},
    {title:"Limon", job:"Working at Grameenphone"},
    {title:"Shuvo", job:"Gamer"}
];

console.log(myObjectCollection);
console.log(myObjectCollection[0].title);

let myObject={
    name: "Zakir",
    age: 25,
    friends:[
    {title:"Shovon", job:"Expecting Job"},
    {title:"Limon", job:"Working at Grameenphone"},
    {title:"Shuvo", job:"Gamer"}],
    myFunc: function(){
        console.log(this.friends[0].title, this.friends[0].job);
    }
}

myObject.myFunc();

