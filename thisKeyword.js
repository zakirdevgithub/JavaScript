let myObject={
    name: "Zakir",
    age: 25,
    myArray:[3,5,6,7,9],
    friend: "Shovon",
    myFunc: function(){
        let findNumber=this.myArray[3];
        console.log(findNumber);
    }
}

myObject.myFunc();
