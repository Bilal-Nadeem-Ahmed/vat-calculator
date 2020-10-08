// ui vars
const noToCalc = document.getElementById("val-inpt"),
  calcVatBtn = document.getElementById("val-btn"),
  addVatBtn = document.getElementById("val2-btn"),
  removeVatBtn = document.getElementById("val3-btn"),
  returnMessage = document.getElementById("message"),
  salesValueButton = document.getElementById("calculate"),
  returnSalesMessage = document.querySelector(".final-message");

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
// set final message this should be combined with the above function and updated accordingly
function setFinalMessage(msg) {
  returnSalesMessage.textContent = msg;
}

// create a row div takes a calssname
function createRow(x) {
  let newRowDiv = document.createElement("div");
  newRowDiv.className = `row ${x}`;

  return newRowDiv;
}

// container div for rows
const containerDiv = document.querySelector(".js-html-container");
//const containerDiv2 = document.querySelector(".js-html-container-2");
//const containerDiv3 = document.querySelector(".js-html-container-3");

// add the row divs
let i = 0;
while (i <= 30) {
  containerDiv.appendChild(createRow("ir"));
  //containerDiv2.appendChild(createRow("ir2"));
  //containerDiv3.appendChild(createRow("ir3"));
  i++;
}

// get rows i made
const ir = document.querySelectorAll(".ir");

// function for the input  divs take a for class name, b for inner text
function makeTheInnerDivs(a) {
  let newDiv = document.createElement("div");
  newDiv.className = `one-third column ${a}`;

  return newDiv;
}

//loop through the ir divs and create the input divs

for (let i = 0; i < 31; i++) {
  ir[i].appendChild(makeTheInnerDivs("in"));
  // add vat divs
  ir[i].appendChild(makeTheInnerDivs("vat"));
  // add aev divs
  ir[i].appendChild(makeTheInnerDivs("aev"));
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
  salesVatInput = document.querySelectorAll(".vat1");

// total sales value for calc
let totalSales = 0;

// calculate values
const reducedval = salesValueButton.addEventListener("click", function () {
  for (var j = 0; j < aevInput.length; j++) {
    // update the fields
    aevInput[j].value = (salesValue1[j].value / 120) * 100;
    salesVatInput[j].value = (salesValue1[j].value / 120) * 20;
    // calculate the totals

    // add the numbers up
    if (Number.isNaN(parseInt(salesValue1[j].value))) {
      totalSales += 0;
    } else {
      totalSales += parseInt(salesValue1[j].value);
    }
  }
  setFinalMessage(
    `The total sales are ${totalSales}. The total VAT due on sales is ${parseInt(
      (totalSales / 120) * 20
    )}. the Total sales without VAT are ${parseInt((totalSales / 120) * 100)}. `
  );
  console.log(totalSales);
});
