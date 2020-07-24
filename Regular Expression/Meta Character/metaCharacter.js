let sentence=`Zakir is good boy.He want to be a programmer. J*ewel is his nick name`;

// Is this sentence start with Za ?
 let regex=/^Za/i;

 //Is this sentence ends with er ?
 regex=/er$/i;

 //here . represent any single character
 regex=/Zak.r/i;

 // here * represent zero or more character 
 //But remember that * only work with seceond  character
 regex=/Z*ir/; //it will match

 regex=/Za*r/; //It will not match

 // here ? represent optional. 'T' can be in Zakir or Not
 regex=/ZakiT?r/;

 //Here * act like a simple character
 regex=/J\*ew./;


if(regex.test(sentence)){
    console.log("Match found");
}
else{
    console.log("Match not found");
}