const charval = document.getElementById("textarea");

let totalCount = document.getElementById("total-conter");
let remainingCount = document.getElementById("remaining-counter");
let useChar = 0;
// to update th character on screen

const updateCounter = () => {
  useChar = charval.value.length;
  totalCount.innerText = useChar;
  remainingCount.innerText = 150 - useChar;
};
charval.addEventListener("keyup", updateCounter);
const copyText = () => {
  charval.select();
  charval.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(charval.value);
};
