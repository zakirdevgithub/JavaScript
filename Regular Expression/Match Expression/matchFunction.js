//match()

// if(regex in string)
//     return a array of All Matching Word;
// else 
//     return null

// g  is a flag and stands for global(whole string)
// i  is a flag and stands for case insensitive (CoMpUTEr)


let regex=/Zakir/gi;
console.log(regex.source);

let informationOfZakir=`Zakir is a Good boy, zakir is a programmer, zAkir love Javascript.zakIR  
                        also love Python,C++,C#,Java. ZAkir want to be a super programmer`;

let result=informationOfZakir.match(regex);
console.log(result);
result.forEach( (e,index) =>{
    console.log(index, e);
})

let anotherRegex=/jewel/gi;
let anotherResult=informationOfZakir.match(anotherRegex);
console.log(anotherResult);