//Type Conversion

//to String
 let num=76;
 console.log(num, (typeof num));
 num=String(num);
 console.log(num, (typeof num));

 let numbers=[12,45,7,8,9];
 console.log(numbers.length, (typeof numbers));
 numbers= String(numbers);
 console.log(numbers.length, (typeof numbers));

 let date= new Date();
 console.log(date, (typeof date));
 date=String(date);
 console.log(date, (typeof date));

 let myBool= true;
 console.log(myBool, (typeof myBool));
 myBool= String(myBool);
 console.log(myBool, (typeof myBool));
 
// to Number
 let mark="8787";
 console.log(mark, (typeof mark));
 mark =Number(mark);
 console.log(mark, (typeof mark));

 let isBool= true;
 console.log(isBool,(typeof isBool));
 isBool=Number(isBool);
 console.log(isBool,(typeof isBool));

 let isNotBool= false;
 console.log(isNotBool,(typeof isNotBool));
 isNotBool=Number(isNotBool);
 console.log(isNotBool,(typeof isNotBool));

//Parse
let stringNumber="3.141592653589793238";
console.log(stringNumber,(typeof stringNumber));
let intNumber= parseInt(stringNumber);
console.log(intNumber,(typeof(intNumber)));
let floatNumber= parseFloat(stringNumber);
console.log(floatNumber,typeof(floatNumber) );

//toFixed
console.log(floatNumber.toFixed(3));
console.log(floatNumber.toFixed(4));
console.log(floatNumber.toFixed(9));
console.log(floatNumber.toFixed(20));
console.log(floatNumber.toFixed(100)); // 100 is highest

//Type Coercion
let number1= 67;
let number2="3";
console.log(number1+ Number(number2));





