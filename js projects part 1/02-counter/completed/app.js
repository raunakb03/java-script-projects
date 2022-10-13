// method 1

let span= document.getElementById("value");
let button1=document.querySelector(".decrease");

button1.addEventListener("click", ()=>{
    span.innerText=Number(span.innerText)-1;
    if(span.innerText<0)
    {
        span.style.color= "red";
    }
})


let button2= document.querySelector(".reset");
button2.addEventListener("click", ()=>{
    span.innerText=0;
    span.style.color= "black";
})

let button3= document.querySelector(".increase");
button3.addEventListener("click", ()=>{
    span.innerText=Number(span.innerText)+1;
    if(span.innerText>0)
    {
        span.style.color= "green";
    }
})


// method 2

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    const styles= e.currentTarget.classList;
    if(styles.contains('decrease'))
    {
        count--;
    } 
    else if (styles.contains('increase'))
    {
        count++;
    }
    else{
        count=0;
    }
    value.textContent= count;
    if(count>0)
    {
        value.style.color= "green";
    }
    else if(count<0)
    {
        value.style.color= "red";
    }

  });
});
