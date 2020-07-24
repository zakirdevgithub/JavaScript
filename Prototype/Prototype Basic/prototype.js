function Person(name, age){
    this.name=name;
    this.age=age;

}

let p1= new Person("Zakir",25);
// p1.height="6.7";

let p2= new Person("Jewel",26);
// p2.height="6.7";

Person.prototype.height="6.7";

console.log(p1);
console.log(p2);
