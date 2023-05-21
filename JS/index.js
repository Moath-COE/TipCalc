// variables declaring
const billAmount = document.getElementById("bill-in-box");
const btns = document.querySelector(".tip-btns");
const peopleNum = document.getElementById("pnum-in-box");
const customFactor = document.getElementById("tip-custom");
const valueTotal = document.getElementById("value-total");
const valueAmount = document.getElementById("value-amount");
const resetBtn = document.getElementById("reset");
const error1 = document.querySelector(".e1");
const error2 = document.querySelector(".e2");
let amount = 0;
let pNum = 0;
let factor = 0;

// event listeners

// amount input box handler
billAmount.addEventListener("change", (e) => {
  e.preventDefault();
  if (e.target.value > 0) {
    error1.innerText = "";
    e.target.classList.remove("error-border");
    e.target.setCustomValidity("");
    amount = e.target.value;
    valid();
  } else {
    e.target.value = "";
    e.target.setCustomValidity("please enter a valid amount");
    e.target.classList.add("error-border");
    error1.innerText = "Invalid input";
  }
});

// custom tip amount handler
customFactor.addEventListener("change", (e) => {
  if (e.target.value > 0 && e.target.value < 100) {
    e.target.classList.remove("error-border");
    e.target.setCustomValidity("");
    for (y of btns.children) {
      y.firstElementChild.attributes.active.nodeValue = "false";
    }
    customFactor.firstElementChild.attributes.active.nodeValue = "true";
    factor = e.target.value / 100;
    valid();
  } else {
    e.target.value = "";
    e.target.setCustomValidity("please enter a number from 1 to 99");
    e.target.classList.add("error-border");
  }
});

// tip amount buttons handler
btns.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    customFactor.firstElementChild.classList.remove("error-border");
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
  if (!e.target.validity.stepMismatch) {
    e.target.classList.remove("error-border");
    e.target.setCustomValidity("");
    error2.innerHTML = "";
    pNum = e.target.value;
    valid();
  } else {
    e.target.setCustomValidity("please enter a whole number");
    e.target.classList.add("error-border");
    error2.innerText = "Invalid input";
  }
});

// updating results function
function valid() {
  if (amount != 0 && factor != 0 && pNum != 0) {
    let x = (Number.parseInt(amount) + amount * factor).toFixed(2);
    valueAmount.innerHTML = (x / pNum).toFixed(2);
    valueTotal.innerHTML = x;
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
