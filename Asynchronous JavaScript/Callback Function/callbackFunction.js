// console.log("I am learning Callback Function");

// // //setTimeout

// setTimeout(()=>{

//     let i=0;
//     while(i <=10){
//         console.log(i);
//         i++;
//     }

// }, 1000);

// console.log("Amar sonar bangla ami tmk valobasi");

// //setInterval

// setInterval(() => {
    
//     let date= new Date();
//    document.writeln(date.getSeconds());
// }, 1000);

let PeopleAge=[70,45,80,120,34,60,57,56];

function bmiCalculator(ages,height,Callback){
    setTimeout(() => {
        let bmi=0;
        ages.forEach(age => {
            bmi=age/(height*height);
            Callback(bmi);
        });


    }, 1000);
}

function BMI(bmiResult){
    setTimeout(() => {
        console.log("Your BMI is ",bmiResult );

    }, 2000);
}

bmiCalculator(PeopleAge,1.72,BMI);