let button1 = document.querySelector(".h1");
let button2 = document.querySelector(".h2");
let button3 = document.querySelector(".h3");
let button4 = document.querySelector(".h4");
let button5 = document.querySelector(".h5");
let button6 = document.querySelector(".h6");
let button7 = document.querySelector(".h7");

button1.addEventListener("click", () => {
  let temColor = window.getComputedStyle(button7).backgroundColor;

  button7.style.backgroundColor = window.getComputedStyle(button6).backgroundColor;



  button6.style.backgroundColor =

    window.getComputedStyle(button5).backgroundColor;


  button5.style.backgroundColor =
    window.getComputedStyle(button4).backgroundColor;


  button4.style.backgroundColor =
    window.getComputedStyle(button3).backgroundColor;


   button3.style.backgroundColor=window.getComputedStyle(button2).backgroundColor


  button2.style.backgroundColor = window.getComputedStyle(button1).backgroundColor;
   
  button1.style.backgroundColor = temColor;
});
