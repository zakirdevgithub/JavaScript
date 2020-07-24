//if, else if, else

// while(true){
//     let age=parseInt(window.prompt("Enter Your Age:"));
//     if(age <=10 && age >0){
//         console.log("your are 10 or under 10 years old");
//     }
//     else if(age <=20 && age >10 ){
//         console.log("your are 20 or under 20  years old");
//     }
//     else{
//         if(age >100 || age<0){
//             console.log("You unable to do this");
//         }
//         else{
//             console.log("Please input write age");
//         }
//     }

// }

//switch 

let num=10;
switch(num){
    case 1:
        console.log("Number is 1");
        break;
    case 2:
        console.log("Number is 2");
        break;
    case 3: case 4: case 5: case 6: case 7: case 8: case 9:
        console.log("Number between 3 to 9");
        break;
    case 10:
        console.log("Number is 10");
        break;
    default:
        console.log("Not a Number");
        break;
}

//Ternary Operator
let number1=34;
let number2=67;
let result=(number1 >number2)? number1:number2;
console.log(result);


    