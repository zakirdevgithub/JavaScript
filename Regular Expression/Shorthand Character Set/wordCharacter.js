let name=`Zakir 9999 `;

//Check alphabet or numeric
let regex=/\w/; //checking single alphabet or numeric
 

if(regex.test(name)){
    console.log("Match found");
}
else{
    console.log("Match not found");
}

