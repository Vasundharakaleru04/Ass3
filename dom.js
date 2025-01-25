//let element = document.getElementById("demo");
//element.innertext="G+"
//console.log(element);

//let ele = document.getElementById("test");
//ele.innerHTML="<h1>Header</h1>"
//console.log(ele);

//!
//let ele = document.getElementsByClassName("test");
//console.log(ele);
//console.log(Array.isArray(ele));
//ele[0].innerText="Hello"
//ele[0].style.backgroundColor="tomato"

//!spread operator :- it will takeout each and evry value from the original Array
//!and store it inside one more new array(pure array)


//? syntax :- [...variable];
//let x= [...ele];
//x.map(element=>{
  //  element.style.background="orange"
//})


//let ele = document.querySelectorAll(".test");
//console.log(ele);

//let btn = document.querySelector("#btn");
//btn.addEventListener("click",()=>?)

//let bgcolor = document.querySelectorAll(".bgcolor");
//console.log(bgcolor);
//let ele = document.createElement("h1");
//ele.innerText="Dyanamite";
//ele.id = "demo";
//ele.removeAttribute="id";
//console.log(ele);

//let image =document.createElement("img");
//image.src("img");
//console.log(image);
//document.body.appendChild(ele);
//document.body.appendChild(image);


let from = document.querySelector("form");
let username = document.getElementById("uName");
let mail =document.getElementById("uMail");
let psw =document.getElementById("uPass");
from.addEventListener("submit", (event)=>{
  event.preventDefault();



  let uname = username.value;
  let uemail = mail.value;
  let upass = psw.value;
  let userdetails ={
    uname, uemail, upass
  }
  console.log(userdetails);
  localStorage.setItem("userData", JSON.stringify(userdetails))
})


