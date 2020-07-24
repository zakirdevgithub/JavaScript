// exec()
// if(regex exist in string)
//     return  array with showing first matching word
// else 
//     return null

// g  is a flag and stands for global(whole string)
// i  is a flag and stands for case insensitive (CoMpUTEr)

let regex=/Zakir/gi;
console.log(regex.source);

let informationOfZakir=`Zakir is a Good boy, zakir is a programmer, zAkir love Javascript.zakIR  
                        also love Python,C++,C#,Java. ZAkir want to be a super programmer`;


//we need to make different variable to store all zakir in this string
let result1=regex.exec(informationOfZakir);
let result2=regex.exec(informationOfZakir);
let result3=regex.exec(informationOfZakir);
let result4=regex.exec(informationOfZakir);
let result5=regex.exec(informationOfZakir);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
