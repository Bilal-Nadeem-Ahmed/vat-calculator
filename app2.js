const tableBody = document.getElementById("tablebody");
const tableRows = document.querySelectorAll(".tr");

// create a tablerow  takes a calssname
function createTableRow(x) {
  let newRow = document.createElement("tr");
  newRow.className = `tr ${x}`;

  return newRow;
}
//create the table rows
for (let i = 0; i < 31; i++) {
  createTableRow(i);
}
