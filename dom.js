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


//let from = document.querySelector("form");
//let username = document.getElementById("uName");
//let mail =document.getElementById("uMail");
//let psw =document.getElementById("uPass");
//from.addEventListener("submit", (event)=>{
 // event.preventDefault();



  //let uname = username.value;
//  let uemail = mail.value;
//  let upass = psw.value;
//  let userdetails ={
 //   uname, uemail, upass
 // }
  //console.log(userdetails);
  //localStorage.setItem("userData", JSON.stringify(userdetails))
//})

// // !burger
// let Image = document.createElement("img");
// Image.src ="./burger.jpeg";
// Image.style.width="full screen"

// document.body.appendChild(Image);


// //! Image

// let mainEle = document.createElement("div");
// mainEle.setAttribute("id","mainBlock");
// mainEle.style.border="2px wine red";
// mainEle.style.width="full screen";
// mainEle.style.height="full screen";

// console.log(mainEle);


// let topEle = document.createElement("div");
// topEle.setAttribute("class","topblock");

// let image = document.createElement("img");
// image.src ="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg";
// image.style.width="full screen"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");


// let h1= document.createElement("h1");
// h1.innerText = "Nature Water Lakes";
// h1.style.border=" 10px wine red";
// h1.style.textAlign="center";

// //console.log(h1);

// let btn = document.createElement("button");
// btn.innerText="View more";
// btn.style.border="none";
// btn.style.padding="25px"

// //nsole.log(button);
// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);

//!
 let form = document.querySelector("form");

 let username = document.getElementById("uName");
 let password = document.getElementById("uPass");
 let check = document.getElementById("check");
 let show = document.getElementById("show");
let gender = document.getElementsByClassName("gender");
//  console.log(gender);
//! 
check.addEventListener("click",event=>{
  //console.log(event.target.checked);
  if(event.target.checked == true){
    password.setAttribute("type" , "text");
    show.innerText = "Hide password";

  }else{
    password.setAttribute("type" , "password");
    show.innerText = "show password";

  }
})

 form.addEventListener("submit", event=>{
  event.preventDefault();
  let un = username.value;
  let up = password.value;
  let gen = "";

  for (let i=0; i<=gender.length-1;i++){
    //console.log(gender[i].value);
    //console.log(gender[i].checked);
      if(genger[i].checked == true){
      gen = gender[i].value
      }
    
  }
  let userDetails={
    username:un,
    password:up,
    gender:gen

  }
  console.log(userDetails);
  sessionStorage.setItem("userData" , 
    JSON.stringify(userDetails))

  

    }  )
    
    