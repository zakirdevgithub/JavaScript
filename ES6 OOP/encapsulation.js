class Employee{
    
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getAge(){
        return this.age;
    }


}

let obj= new Employee("Zakir","Hossain",25);
console.log(obj.getFirstName());
console.log(obj.getLastName());
console.log(obj.getAge());