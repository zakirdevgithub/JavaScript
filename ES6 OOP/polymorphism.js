//Method Overloading, Method Overriding
//But Method Overloading is not possible now in JavaScript

class Person{
    constructor(firstName, lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    add(num1,num2){
        return num1+num2;
    }

    add(num1,num2,num3){
        return num1+num2+num3;
    }
}

class Shuvo extends Person{
    constructor(firstName,lastName,age,proffession){
        super(firstName, lastName,age);

        this.proffession=proffession;
    }

    add(num1,num2){
        return (`From Shuvo Class ${num1+num2}`);
    }

    multi(num1,num2,num3){
        return (`From Shuvo Class ${num1+num2,num3}`);
    }

}

let per= new Person("Zakir","Hossain",25);
//Method overloading is not Possible now in JavaScript
console.log(per.add(5,7)); //We expect call first add() method because 2 argument pass
console.log(per.add(10,20,30)); //We expect call Second add() method because 3 argument pass


let shu=new Shuvo("Ashraful","Shuvo",23,"Gamer");
//Method Overriding
console.log(shu.add(10,20));


