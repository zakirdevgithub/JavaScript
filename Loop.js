//While Loop
let numbers=[34,78,98,56,78];

console.log("While Loop");
let count=0;
while(count != numbers.length){
    console.log(numbers[count]);
    count++;
}

//Do While Loop
console.log("Do While Loop");
let i=0
do{
    console.log(numbers[i]);
    i++;
}while(i != numbers.length);

//For Loop
console.log("For Loop")
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//forEach Loop
console.log("For Each Loop");
numbers.forEach( (e) =>{
    console.log(e);
})

//For in Loop
let myObject={
    name: "Zakir",
    age: 25,
    height: 6.7,
    job: "programmer"
}

for(x in myObject){
    console.log(x,myObject[x]);
}
