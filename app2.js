// ui vars
const noToCalc = document.getElementById("val-inpt"),
  noToCalc2 = document.getElementById("val-inpt2"),
  noToCalc3 = document.getElementById("val-inpt3"),
  calcVatBtn = document.getElementById("val-btn"),
  addVatBtn = document.getElementById("val2-btn"),
  removeVatBtn = document.getElementById("val3-btn"),
  returnMessage = document.getElementById("message"),
  returnMessage2 = document.getElementById("message2"),
  returnMessage3 = document.getElementById("message3"),
  generateFields = document.getElementById("generate"),
  salesValueButton = document.getElementById("calculate"),
  returnSalesMessage = document.querySelector(".final-message"),
  returnSalesMessage2 = document.querySelector(".final-message2"),
  tableBody = document.getElementById("tablebody"),
  purchasesTableBody = document.getElementById("tablebody2"),
  purchasesValueButton = document.getElementById("calculatePurchases");

// Input for calculate vat
calcVatBtn.addEventListener("click", function () {
  // numbers
  let no = noToCalc.value,
    vat = parseFloat((no / 120) * 20).toFixed(2);

  setMessage(`The calculated vat amount at 20% is ${vat}`, returnMessage);
});

// Input for add vat
addVatBtn.addEventListener("click", function () {
  // numbers
  let no = noToCalc2.value,
    addVat = parseFloat((no / 100) * 120).toFixed(2);

  setMessage(`This number including VAT at 20% is ${addVat}`, returnMessage2);
});

// Input for remove vat
removeVatBtn.addEventListener("click", function () {
  // numbers
  let no = noToCalc3.value,
    removeVat = parseFloat((no / 120) * 100).toFixed(2);

  setMessage(`This number without VAT at 20% is ${removeVat}`, returnMessage3);
});
// event listener to show the quaterly tables
generateFields.addEventListener("click", function () {
  const generateFieldsDiv = document.querySelector(
    ".salesAndPurchasesCalculator"
  );

  generateFieldsDiv.style.display = "block";

  //generateFieldsDiv.setAttribute("display", "block");
});
//set message function takes a message followed by target input
function setMessage(msg, ti) {
  ti.textContent = msg;
}
// set final message this should be combined with the above function and updated accordingly
function setFinalMessage(msg) {
  returnSalesMessage.textContent = msg;
}

// create a tablerow  takes a calssname
function createTableRow(x) {
  let newRow = document.createElement("tr");
  newRow.className = `tr ${x}`;

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

  tableRows[i].appendChild(makeTheInnerTd("numb"));
  const dateFields = document.querySelectorAll(".numb");
  dateFields[i].textContent = `${i + 1}`;
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
});
// need to fix tab indexes and border of the table

// create a tablerow for purchases takes a calssname
function createTableRow2(x) {
  let newRow = document.createElement("tr");
  newRow.className = `tr2 ${x}`;
  newRow.setAttribute("background-color", "black");

  return newRow;
}

//create the table rows and the inner tds for purchases
for (let i = 0; i < 31; i++) {
  purchasesTableBody.appendChild(createTableRow2(i));
  // get the table rows
  const tableRows2 = document.querySelectorAll(".tr2");
  tableRows2[i].appendChild(makeTheInnerTd("numb2"));
  const dateFields2 = document.querySelectorAll(".numb2");
  dateFields2[i].textContent = `${i + 1}`;
  for (let j = 0; j < 3; j++) {
    tableRows2[i].appendChild(makeTheInnerTd(`inp ${j}`));
    tableRows2[i].appendChild(makeTheInnerTd(`vatp ${j}`));
    tableRows2[i].appendChild(makeTheInnerTd(`aevp ${j}`));
  }
}
// create the input fields for purcheses
const inputTdp = document.querySelectorAll(".inp"),
  vatTdsp = document.querySelectorAll(".vatp"),
  aevTdsp = document.querySelectorAll(".aevp");
for (let k = 0; k < 93; k++) {
  inputTdp[k].appendChild(makeInputField("inp10", false));
  vatTdsp[k].appendChild(makeInputField("vatp10", false));
  aevTdsp[k].appendChild(makeInputField("aevp10", true));
}
// inputfields for purch
const inpAmmountp = document.querySelectorAll(".inp10"),
  inpVatp = document.querySelectorAll(".vatp10"),
  inpAevp = document.querySelectorAll(".aevp10");

// total values for calc

let totalPurchasesExVat = 0;
let totalVatOnPurchases = 0;

function setFinalMessagep(msg) {
  returnSalesMessage2.textContent = msg;
}

// calculate values
const reducedPurchasesval = purchasesValueButton.addEventListener(
  "click",
  function () {
    for (let i = 0; i < 93; i++) {
      //     update the fields
      //inpVat[i].value = parseFloat((inpAmmount[i].value / 120) * 20).toFixed(2);
      inpAevp[i].value = parseFloat(
        inpAmmountp[i].value - inpVatp[i].value
      ).toFixed(2);

      // add the purchases up
      if (Number.isNaN(parseFloat(inpAmmountp[i].value))) {
        totalPurchasesExVat += 0;
      } else {
        totalPurchasesExVat += parseFloat(inpAmmountp[i].value);
      }
      // add the vat on purchases u=[?>]
      if (Number.isNaN(parseFloat(inpVatp[i].value))) {
        totalVatOnPurchases += 0;
      } else {
        totalVatOnPurchases += parseFloat(inpVatp[i].value);
      }
    }
    setFinalMessagep(
      `The total purchases are ${
        totalPurchasesExVat + totalVatOnPurchases
      }. The total VAT due on purchases is ${parseInt(
        totalVatOnPurchases
      )}. the Total sales without VAT are ${parseInt(totalPurchasesExVat)}. `
    );
  }
);
