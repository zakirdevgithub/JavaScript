class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    display(){
        console.log(`First Name: ${this.firstName} Last Name: ${this.lastName} Age: ${this.age}`);
    }

    add(a,b){
        return a+b;
    }

    static multiply(num1,num2){
        return num1*num2;
    }
}

class Rakib extends Person{
    constructor(firstName,lastName,age,profession){
        super(firstName,lastName,age);
        this.profession=profession;
    }

    display(){
        console.log(`First Name: ${this.firstName} Last Name: ${this.lastName} Age: ${this.age} Profession: ${this.profession}`); 
    }
}


let rkb=new Rakib("Rakib Rahman ","Talukder",23,"Gamer");
rkb.display();
console.log(rkb.add(10,20));


let per=new Person("Zakir","Hossain",25);
per.display();

console.log(Person.multiply(56676554654655465465464645765768,786456546676576576554645647876));
