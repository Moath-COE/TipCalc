// variables declaring
const billAmount = document.getElementById("bill-in-box");
const btns = document.querySelector(".tip-btns");
const peopleNum = document.getElementById("pnum-in-box");
const customFactor = document.getElementById("tip-custom");
const valueTotal = document.getElementById("value-total");
const valueAmount = document.getElementById("value-amount");
const resetBtn = document.getElementById("reset");
let amount = 0;
let pNum = 0;
let factor = 0;

// event listeners

// amount input box handler
billAmount.addEventListener("change", (e) => {
  e.preventDefault();
  amount = e.target.value;
  valid();
});

// custom tip amount handler
customFactor.addEventListener("change", (e) => {
  e.preventDefault();
  for (y of btns.children) {
    y.firstElementChild.attributes.active.nodeValue = "false";
  }
  customFactor.firstElementChild.attributes.active.nodeValue = "true";
  factor = e.target.value / 100;
  valid();
});

// tip amount buttons handler
btns.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    customFactor.firstElementChild.value = "";
    for (y of btns.children) {
      y.firstElementChild.attributes.active.nodeValue = "false";
    }
    e.target.attributes.active.nodeValue = "true";
    factor = e.target.dataset.value;
    valid();
  }
});

// number of people input box handler
peopleNum.addEventListener("change", (e) => {
  e.preventDefault();
  pNum = e.target.value;
  valid();
});

// updating results function
function valid() {
  if (amount != 0 && factor != 0 && pNum != 0) {
    let x = (Number.parseInt(amount) + amount * factor).toFixed(2);
    valueAmount.innerHTML = x;
    valueTotal.innerHTML = (x / pNum).toFixed(2);
    resetBtn.attributes.active.nodeValue = "true";
  }
}

// reset button handler
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  valueAmount.innerHTML = "0.00";
  valueTotal.innerHTML = "0.00";
  for (y of btns.children) {
    y.firstElementChild.attributes.active.nodeValue = "false";
  }
  customFactor.firstElementChild.value = "";
  billAmount.value = "";
  peopleNum.value = "";
  amount = 0;
  pNum = 0;
  factor = 0;
  resetBtn.attributes.active.nodeValue = "false";
});
