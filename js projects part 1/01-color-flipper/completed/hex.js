const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #


const btn = document.getElementById('btn');
const color= document.querySelector('.color');

btn.addEventListener("click", ()=>{

    // my method
    let a= hex[Math.floor(16*Math.random())];
    let b= hex[Math.floor(16*Math.random())];
    let c= hex[Math.floor(16*Math.random())];
    let d= hex[Math.floor(16*Math.random())];
    let e= hex[Math.floor(16*Math.random())];
    let f= hex[Math.floor(16*Math.random())];

    let hexCode= "#"+a+b+c+d+e+f;
    color.textContent= hexCode;
    document.body.style.backgroundColor= hexCode;
})
