let sentence=`Some of my previous password is: ABBBBC@234555RT , Z*&Kir.% , KLqhhh7k8k6k, hgt%6597654ABBBBBBBBBBBAS, RKBshuv^ut`;

//[a-z] represent a single character
let regex=/pass[a-z]ord/;

// searching with full word or some characters.These characters can be from first or last 
regex=/[word]/;

//Finding A-Z or a-z with numeric number
regex=/[A-Za-z][0-9]/;

// which word including 4 B
regex=/B{4}/;

//Which word including B. and Number of B is from 0 to 13
regex=/B{0,13}/

regex=/h{3}(([0-9]k){3})/;

let result=regex.exec(sentence);
console.log(result);

if(regex.test(sentence)){
    console.log("Match found");
}
else{
    console.log("Match not found");
}

