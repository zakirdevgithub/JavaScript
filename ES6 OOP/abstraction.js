class Employee{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    salary(){ //This method abstract the data
        let basicSalary=30000;
        let bonus=10000;
        let totalSalary=basicSalary+bonus;
        console.log("Salary is "+totalSalary);
    }

    displayInfo(){
        console.log(`Name: ${this.firstName}  ${this.lastName} 
        Age: ${this.age}`);
        this.salary();
    }
  
}

let emp= new Employee("Zakir","Hossain",25);
emp.displayInfo();