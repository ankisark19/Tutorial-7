// Table displays numbers 1 – 12 (a number on each row)
// Numbers divisible by 4 have a blue background
// Text is center aligned

//Table Creation using documnet.createElement() method
const tableElement = document.createElement("TABLE");

//Create rows and cells
for (i = 1; i <=12; i++){
  const tableRow = document.createElement("tr")
  const tableCell = document.createElement("tc");
  tableCell.innerText = i;

// Blue background for numbers divisible by 4
if(i%4 === 0){
  tableCell.style.backgroundColor="blue";
}

//Adding data to row
tableRow.appendChild(tableCell);

//Adding row to table
tableElement.appendChild(tableRow);
}

//Add divisibility element
const divElement = document.getElementById("table");
divElement.appendChild(tableElement);

// Add style to table
const styleElement = document.getElementById("table");
styleElement.style.border = "2px solid black";
styleElement.style.textAlign = "center";