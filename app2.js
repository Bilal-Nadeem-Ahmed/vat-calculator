// ui vars
const noToCalc = document.getElementById("val-inpt"),
  calcVatBtn = document.getElementById("val-btn"),
  addVatBtn = document.getElementById("val2-btn"),
  removeVatBtn = document.getElementById("val3-btn"),
  returnMessage = document.getElementById("message"),
  salesValueButton = document.getElementById("calculate"),
  returnSalesMessage = document.querySelector(".final-message"),
  tableBody = document.getElementById("tablebody");

// Input for calculate vat
calcVatBtn.addEventListener("click", function () {
  // numbers
  let no = noToCalc.value,
    vat = parseFloat((no / 120) * 20).toFixed(2);

  setMessage(`The calculated vat amount at 20% is ${vat}`);
});

// Input for add vat
addVatBtn.addEventListener("click", function () {
  // numbers
  let no = noToCalc.value,
    addVat = parseFloat((no / 100) * 120).toFixed(2);

  setMessage(`This number including VAT at 20% is ${addVat}`);
});

// Input for remove vat
removeVatBtn.addEventListener("click", function () {
  // numbers
  let no = noToCalc.value,
    removeVat = parseFloat((no / 120) * 100).toFixed(2);

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

// create a tablerow  takes a calssname
function createTableRow(x) {
  let newRow = document.createElement("tr");
  newRow.className = `tr ${x}`;
  newRow.setAttribute("background-color", "black");

  return newRow;
}
// function for the tds take a class name,
function makeTheInnerTd(a) {
  let newtd = document.createElement("td");
  newtd.className = `${a}`;

  return newtd;
}
// make input field a=classname b is weather input is disabled
function makeInputField(a, b) {
  let newIf = document.createElement("input");
  newIf.className = `input-size ${a}`;
  newIf.setAttribute("type", "number");
  newIf.setAttribute("background-color", "black");

  // sets the diabled field
  if (b === true) {
    newIf.setAttribute("disabled", "true");
  }
  return newIf;
}

//create the table rows and the inner tds
for (let i = 0; i < 31; i++) {
  tableBody.appendChild(createTableRow(i));
  // get the table rows
  const tableRows = document.querySelectorAll(".tr");
  for (let j = 0; j < 3; j++) {
    tableRows[i].appendChild(makeTheInnerTd(`in ${j}`));
    tableRows[i].appendChild(makeTheInnerTd(`vat ${j}`));
    tableRows[i].appendChild(makeTheInnerTd(`aev ${j}`));
  }
}
// create the input fields
const inputTd = document.querySelectorAll(".in"),
  vatTds = document.querySelectorAll(".vat"),
  aevTds = document.querySelectorAll(".aev");
for (let k = 0; k < 93; k++) {
  inputTd[k].appendChild(makeInputField("in10", false));
  vatTds[k].appendChild(makeInputField("vat10", true));
  aevTds[k].appendChild(makeInputField("aev10", true));
}
// inputfields
const inpAmmount = document.querySelectorAll(".in10"),
  inpVat = document.querySelectorAll(".vat10"),
  inpAev = document.querySelectorAll(".aev10");

// total values for calc

let totalSales = 0;

// calculate values
const reducedval = salesValueButton.addEventListener("click", function () {
  for (let i = 0; i < 93; i++) {
    //     update the fields
    inpVat[i].value = parseFloat((inpAmmount[i].value / 120) * 20).toFixed(2);
    inpAev[i].value = parseFloat((inpAmmount[i].value / 120) * 100).toFixed(2);

    // add the numbers up
    if (Number.isNaN(parseFloat(inpAmmount[i].value))) {
      totalSales += 0;
    } else {
      totalSales += parseFloat(inpAmmount[i].value);
    }
  }
  setFinalMessage(
    `The total sales are ${totalSales}. The total VAT due on sales is ${parseInt(
      (totalSales / 120) * 20
    )}. the Total sales without VAT are ${parseInt((totalSales / 120) * 100)}. `
  );
  console.log(tableBody);
});
// need to fix tab indexes and border of the table
