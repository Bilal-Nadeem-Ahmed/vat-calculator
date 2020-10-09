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
const containerDiv2 = document.querySelector(".js-html-container-2");
const containerDiv3 = document.querySelector(".js-html-container-3");

// add the row divs
let i = 0;
while (i <= 30) {
  containerDiv.appendChild(createRow("ir"));
  containerDiv2.appendChild(createRow("ir2"));
  containerDiv3.appendChild(createRow("ir3"));
  i++;
}

// get rows i made
const ir = document.querySelectorAll(".ir");
const ir2 = document.querySelectorAll(".ir2");
const ir3 = document.querySelectorAll(".ir3");

// function for the input  divs take a for class name, b for inner text
function makeTheInnerDivs(a) {
  let newDiv = document.createElement("div");
  newDiv.className = `one-third column ${a}`;

  return newDiv;
}

//loop through the ir divs and create the input divs

for (let i = 0; i < 31; i++) {
  // add input divs
  ir[i].appendChild(makeTheInnerDivs("in"));
  // add vat divs
  ir[i].appendChild(makeTheInnerDivs("vat"));
  // add aev divs
  ir[i].appendChild(makeTheInnerDivs("aev"));
  // add input div
  ir2[i].appendChild(makeTheInnerDivs("in2"));
  // add vat divs
  ir2[i].appendChild(makeTheInnerDivs("vat2"));
  // add aev divs
  ir2[i].appendChild(makeTheInnerDivs("aev2"));
  // add input div
  ir3[i].appendChild(makeTheInnerDivs("in3"));
  // add vat divs
  ir3[i].appendChild(makeTheInnerDivs("vat3"));
  // add aev divs
  ir3[i].appendChild(makeTheInnerDivs("aev3"));
}
// get the new input divs we made
const inputDivs = document.querySelectorAll(".in");
// get the vat display divs
const vatDivs = document.querySelectorAll(".vat");
// get the amount excluding vat divs
const aevDivs = document.querySelectorAll(".aev");
// get the new input divs we made for month2
const inputDivs2 = document.querySelectorAll(".in2");
// get the vat display divs we made for month 2
const vatDivs2 = document.querySelectorAll(".vat2");
// get the amount excluding vat divs for month 2
const aevDivs2 = document.querySelectorAll(".aev2");
// get the new input divs we made for month3
const inputDivs3 = document.querySelectorAll(".in3");
// get the vat display divs we made for month 3
const vatDivs3 = document.querySelectorAll(".vat3");
// get the amount excluding vat divs for month 3
const aevDivs3 = document.querySelectorAll(".aev3");
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
  inputDivs2[i].appendChild(makeInputField("sn20", false));
  vatDivs2[i].appendChild(makeInputField("vat20", true));
  aevDivs2[i].appendChild(makeInputField("aev20", true));
  inputDivs3[i].appendChild(makeInputField("sn30", false));
  vatDivs3[i].appendChild(makeInputField("vat30", true));
  aevDivs3[i].appendChild(makeInputField("aev30", true));
}

// get the input fields we created
const aevInput = document.querySelectorAll(".aev1"),
  salesValue1 = document.querySelectorAll(".sn1"),
  salesVatInput = document.querySelectorAll(".vat1"),
  aevInput2 = document.querySelectorAll(".aev20"),
  salesValue2 = document.querySelectorAll(".sn20"),
  salesVatInput2 = document.querySelectorAll(".vat20"),
  aevInput3 = document.querySelectorAll(".aev30"),
  salesValue3 = document.querySelectorAll(".sn30"),
  salesVatInput3 = document.querySelectorAll(".vat30");

// total sales value for calc
let totalSales = 0,
  totalSalesMonth1 = 0,
  totalSalesMonth2 = 0,
  totalSalesMonth3 = 0;

// calculate values
const reducedval = salesValueButton.addEventListener("click", function () {
  for (var j = 0; j < aevInput.length; j++) {
    // update the fields
    aevInput[j].value = (salesValue1[j].value / 120) * 100;
    salesVatInput[j].value = (salesValue1[j].value / 120) * 20;
    aevInput2[j].value = (salesValue2[j].value / 120) * 100;
    salesVatInput2[j].value = (salesValue2[j].value / 120) * 20;
    aevInput3[j].value = (salesValue3[j].value / 120) * 100;
    salesVatInput3[j].value = (salesValue3[j].value / 120) * 20;
    // calculate the totals

    // add the numbers up
    if (Number.isNaN(parseInt(salesValue1[j].value))) {
      totalSalesMonth1 += 0;
    } else {
      totalSalesMonth1 += parseInt(salesValue1[j].value);
    }
    if (Number.isNaN(parseInt(salesValue2[j].value))) {
      totalSalesMonth2 += 0;
    } else {
      totalSalesMonth2 += parseInt(salesValue2[j].value);
    }
    if (Number.isNaN(parseInt(salesValue3[j].value))) {
      totalSalesMonth3 += 0;
    } else {
      totalSalesMonth3 += parseInt(salesValue3[j].value);
    }
  }
  totalSales += totalSalesMonth1 + totalSalesMonth2 + totalSalesMonth3;
  setFinalMessage(
    `The total sales are ${totalSales}. The total VAT due on sales is ${parseInt(
      (totalSales / 120) * 20
    )}. the Total sales without VAT are ${parseInt((totalSales / 120) * 100)}. `
  );
  console.log(totalSales);
});
