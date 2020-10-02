// ui vars
const noToCalc = document.getElementById("val-inpt"),
  calcVatBtn = document.getElementById("val-btn"),
  addVatBtn = document.getElementById("val2-btn"),
  removeVatBtn = document.getElementById("val3-btn"),
  returnMessage = document.getElementById("message"),
  salesValue1 = document.getElementById("sn1"),
  salesValueButton = document.getElementById("calculate"),
  aevInput = document.querySelector(".aev1"),
  salesVatInput = document.querySelector(".vat1");
// Input for calculate vat
calcVatBtn.addEventListener("click", function () {
  // numbers
  let no = parseInt(noToCalc.value),
    vat = (no / 120) * 20;

  setMessage(`The calculated vat amount at 20% is ${vat}`);
});

// Input for add vat
addVatBtn.addEventListener("click", function () {
  // numbers
  let no = parseInt(noToCalc.value),
    addVat = (no / 100) * 120;

  setMessage(`This number including VAT at 20% is ${addVat}`);
});

// Input for remove vat
removeVatBtn.addEventListener("click", function () {
  // numbers
  let no = parseInt(noToCalc.value),
    removeVat = (no / 120) * 100;

  setMessage(`This number without VAT at 20% is ${removeVat}`);
});

//Input for sales Value 1
salesValueButton.addEventListener("click", function () {
  // numbers
  let no = parseInt(salesValue1.value),
    awv = (no / 120) * 100,
    vat = (no / 120) * 20;
  // update fields
  updateVat(vat, awv);
});

// set message function
function setMessage(msg) {
  returnMessage.textContent = msg;
}

// vat on sales fields update
function updateVat(vat, awv) {
  let no1 = vat.toFixed(2),
    no2 = awv.toFixed(2);

  salesVatInput.value = no1;
  aevInput.value = no2;
}
// create a row div
function createRow(x) {
  //create row div
  let newRowDiv = document.createElement("div");
  newRowDiv.className = "row ir";
  newRowDiv.innerText = `${x + 1}`;
  return newRowDiv;
}
// container div for rows
const containerDiv = document.querySelector(".js-html-container");
// add the row divs
let i = 0;
while (i <= 30) {
  containerDiv.appendChild(createRow(i));
  i++;
}

// get rows i made
const ir = document.querySelectorAll(".ir");

// function for the divs
function makeTheInnerDivs() {
  let newDiv = document.createElement("div");
  newDiv.className = `one-third column in`;
  newDiv.innerText = "ay";

  return newDiv;
}

//loop through the ir divs and create the input divs

for (let i = 0; i < 31; i++) {
  ir[i].appendChild(makeTheInnerDivs());
}
// get the new divs we made
let inputDivs = document.querySelectorAll(".in");
// make input field
function makeInputField() {
  let newIf = document.createElement("input");
  newIf.className = "input-size sn1";
  newIf.setAttribute("type", "number");
  newIf.innerText = "33";
}

for (let i = 0; i < 31; i++) {
  inputDivs[i].appendChild(makeInputField());
}
console.log();
