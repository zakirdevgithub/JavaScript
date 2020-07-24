let text=document.querySelector("#text");
let form=document.querySelector(".form");

form.addEventListener("keyup",e =>{
    console.log(e.target.value);
})

form.addEventListener("submit",e =>{
        e.preventDefault();
})