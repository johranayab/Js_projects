const nameElement=document.querySelector(".name-tag")
const nameinput=document.querySelector(".name")

const Button=document.querySelector(".button")



// nameElement.innerText=localStorage.myName

nameElement.innerText=localStorage.getItem('myName')



// nameinput.addEventListener('input',(e)=>{
//    localStorage.myName=e.target.value;
//     nameElement.innerText=localStorage.myName
// })


nameinput.addEventListener('input',(e)=>{
    // localStorage.myName=e.target.value;
    //  nameElement.innerText=localStorage.myName

    nameElement.innerText=e.target.value
 })
 