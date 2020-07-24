let myArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,37,56,89];


//filter function return a Array with value
let oddNumbers=myArray.filter((e)=>{
    return e%2==1;
})

console.log(oddNumbers);