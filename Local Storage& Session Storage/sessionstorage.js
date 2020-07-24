sessionStorage.setItem("name","Zakir");
sessionStorage.setItem("email","zakirhossain88999@gmail.com");
sessionStorage.setItem("age","25");
sessionStorage.setItem("hobby","coding");
sessionStorage.setItem("favorit","JavaScript");

console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("email"));
console.log(sessionStorage.getItem("age"));

console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
console.log(sessionStorage.key(2));

// sessionStorage.removeItem("hobby");
// sessionStorage.clear();