

let num1=10;
let num2=0;
try{
    let result=num1/num2;
    console.log(result);
}catch(err){
    
//    console.log(err);
}

finally{
    console.log("This will run.");
}

let name="zakir";
if(name==="zakir"){
    throw new Error("This is just for practice throw new error");
    
}