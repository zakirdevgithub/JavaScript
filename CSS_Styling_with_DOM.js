let cont=document.querySelector(".container");

// console.log(container.style);

let CSS=cont.style;
cont.style.margin="50px";
cont.style.border="1px solid black";
cont.style.display="flex";
CSS.backgroundColor="grey";
CSS.width="200px";
CSS.height="100px";
CSS.flexWrap="wrap";
CSS.flexDirection="row";
CSS.justifyContent="left";


let box=document.querySelectorAll(".box");

box.forEach(e =>{
    let boxCSS= e.style;
    boxCSS.fontSize="5px";
    boxCSS.height="10px";
    boxCSS.width="10px";
    boxCSS.backgroundColor="tomato";
    boxCSS.padding="10px";
    boxCSS.margin="10px";
});


