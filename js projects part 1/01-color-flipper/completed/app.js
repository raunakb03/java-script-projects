const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn= document.getElementById('btn');
const color= document.querySelector(".color");

btn.addEventListener("click", ()=>{
    

    /* My method */
    // let index= Math.floor(0+ (4)*Math.random()); 
    // console.log(index);


    //get random number between 0 and 3
    const randomNumber= getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent= colors[randomNumber];
})

function getRandomNumber(){

    return Math.floor(colors.length*(Math.random()));
}