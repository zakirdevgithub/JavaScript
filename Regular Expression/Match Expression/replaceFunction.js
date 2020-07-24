//replace()

// if(regex in string)
//     matching word will replace with new word;
// else
//     return original string

// g  is a flag and stands for global(whole string)
// i  is a flag and stands for case insensitive (CoMpUTEr)



let regex=/Zakir/gi;
console.log(regex.source);

let informationOfZakir=`Zakir is a Good boy, zakir is a programmer, zAkir love Javascript.zakIR  
                        also love Python,C++,C#,Java. ZAkir want to be a super programmer`;

let result=informationOfZakir.replace(regex,"Jewel");
console.log(result);

let reg=/Jewel/gi;
let result2=informationOfZakir.replace(reg,"Prog");
console.log(result2);