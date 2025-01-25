let p = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve("sucess");
    },5000)

})
async function demo(){
    console.log("Start");
    let x = await p;
    console.log(x);
    console.log("End");
};
demo();



async function fetchUser(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data =await response.json();
    console.log(data);

}
fetchUser();
