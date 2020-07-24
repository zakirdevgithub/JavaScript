//reduce function 
// array[0]+array[1]+array[2]+array[3]+...............+array[n]
// array[0]-array[1]-array[2]-array[3]-...............-array[n]
// array[0]*array[1]*array[2]*array[3]*...............*array[n]
// array[0]/array[1]/array[2]/array[3]/.............../array[n]


let myArray=[20,10,2];

let add=myArray.reduce((a,b)=>{
        return a+b; //
})
console.log("Sum is: ",add);

let sub=myArray.reduce((a,b)=>{
    return a-b;
})
console.log("Sub is: ",sub);

let mul=myArray.reduce((a,b)=>{
    return a*b;
})
console.log("mul is: ",mul);

let div=myArray.reduce((a,b)=>{
    return a/b;
})
console.log("div is: ",div);