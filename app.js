// ui vars
const noToCalc = document.getElementById("val-inpt"),
  calcVatBtn = document.getElementById("val-btn"),
  addVatBtn = document.getElementById("val2-btn"),
  removeVatBtn = document.getElementById("val3-btn"),
  returnMessage = document.getElementById("message"),
  salesValueButton = document.getElementById("calculate");

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

//set message function
function setMessage(msg) {
  returnMessage.textContent = msg;
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

// function for the input  divs take a for class name, b for inner text
function makeTheInnerDivs(a, b) {
  let newDiv = document.createElement("div");
  newDiv.className = `one-third column ${a}`;
  newDiv.innerText = `${b}`;

  return newDiv;
}

//loop through the ir divs and create the input divs

for (let i = 0; i < 31; i++) {
  ir[i].appendChild(makeTheInnerDivs("in", "000ayay"));
  // add vat divs
  ir[i].appendChild(makeTheInnerDivs("vat", "vatdivs"));
  // add aev divs
  ir[i].appendChild(makeTheInnerDivs("aev", "aevdivs"));
}
// get the new input divs we made
const inputDivs = document.querySelectorAll(".in");
// get the vat display divs
const vatDivs = document.querySelectorAll(".vat");
// get the amount excluding vat divs
const aevDivs = document.querySelectorAll(".aev");
// make input field a=classname b is weather input is disabled
function makeInputField(a, b) {
  let newIf = document.createElement("input");
  newIf.className = `input-size ${a}`;
  newIf.setAttribute("type", "number");

  // sets the diabled field
  if (b === true) {
    newIf.setAttribute("disabled", "true");
  }
  return newIf;
}

// loop to insert input fields in the input divs
for (let i = 0; i < 31; i++) {
  inputDivs[i].appendChild(makeInputField("sn1", false));
  vatDivs[i].appendChild(makeInputField("vat1", true));
  aevDivs[i].appendChild(makeInputField("aev1", true));
}
const ayay = document.querySelectorAll(".sn1");

// get the input fields we created
const aevInput = document.querySelectorAll(".aev1"),
  salesValue1 = document.querySelectorAll(".sn1"),
  salesVatInput = document.querySelector(".vat1");

salesValueButton.addEventListener("click", function () {
  let info = salesValue1[1].value;

  aevInput[2].value = "234";
  console.log(info);
});
