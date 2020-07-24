
let container=document.querySelector(".container");
let box=document.querySelector(".box");
let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");



box1.addEventListener( "click", e=>{
    // console.log(e.target);
   
    e.target.style.backgroundColor="white";
    e.target.style.textDecoration="line-through";
    e.target.innerHTML=`<p>Click Event Work Successfully</p>`;   

});

box2.addEventListener("copy", e =>{
    console.log("Copyright. All right reserved by Zakir Hossain");
});

box3.addEventListener("mousemove", e =>{
    box3.textContent=`X-Axis:${e.offsetX} Y-Axis:${e.offsetY}`;
});

box4.addEventListener("wheel",e =>{
    box4.textContent=`X-Axis:${e.pageX} Y-Axis:${e.pageY}`;
});

