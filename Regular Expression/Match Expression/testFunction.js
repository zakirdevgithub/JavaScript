//test()

// if (regex in string)
//     return true
// else 
//     return false

// g  is a flag and stands for global(whole string)
// i  is a flag and stands for case insensitive (CoMpUTEr)

let regex=/Zakir/gi;
console.log(regex.source);

let informationOfZakir=` is a Good boy, zakir is a programmer, zAkir love Javascript.zakIR  
                        also love Python,C++,C#,Java. ZAkir want to be a super programmer`;



let result=regex.test(informationOfZakir);

console.log(result);
