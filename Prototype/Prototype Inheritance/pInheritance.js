function Person(name,age){
    this.name=name;
    this.age=age;
}

function Teacher(name,age,height){
    Person.call(this,name,age);
    this.height=height;
}


Teacher.prototype=Object.create(Person.prototype);
let obj1=new Person("Zakir","age");
let obj2=new Teacher("Zahid",25,5.7);
console.log(obj2.name);