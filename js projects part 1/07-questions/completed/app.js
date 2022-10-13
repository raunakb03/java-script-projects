//using selectors inside the element
// traversing the dom


/*              method 1(traversing the dom)
const btns= document.querySelectorAll(".question-btn");
btns.forEach(function(btn){
    btn.addEventListener("click", (e)=>{
        const question= e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })

})
*/


//    method 2

const questions= document.querySelectorAll(".question");

questions.forEach((question)=>{
    const btn= question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener("click", ()=>{
        question.classList.toggle("show-text");
    })
})