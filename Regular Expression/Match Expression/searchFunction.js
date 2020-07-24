//search()

// if(regex in string)
//     return first index number of mathing word;
// else
//     -1 ;

// g  is a flag and stands for global(whole string)
// i  is a flag and stands for case insensitive (CoMpUTEr)

let regex=/Zakir/gi;
console.log(regex.source);

let informationOfZakir=`kir is a Good boy, zakir is a programmer, zAkir love Javascript.zakIR  
                        also love Python,C++,C#,Java. ZAkir want to be a super programmer`;

let result=informationOfZakir.search(regex);
console.log(result);

let reg=/jewel/gi;
let result2=informationOfZakir.search(reg);
console.log(result2);
