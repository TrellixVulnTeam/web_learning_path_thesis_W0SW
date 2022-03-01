const draggableList = document.getElementById("draggable-list");
const check = document.getElementById("check");




var data =  [
  {
  "opt":["1","2","3","4"]
  ,"pic" :"https://i.redd.it/mwljue1r4sk11.jpg"
  },
  {
    "opt":["2","3","4","5","6","7"]
    ,"pic" :"https://i.pinimg.com/originals/c9/ab/e0/c9abe069c0455fadb2bc0378a78ee77d.jpg"
  }
]

const no = data[0];
const richestPeople = no.opt;
    var img = document.createElement("img");
    img.src = no.pic;
    img.style.width = "50%";
    img.style.height = "50%";
    var div = document.getElementById("x");
    div.appendChild(img);
    

const listItems = [];

let dragStartIndex;

function createList() {
  const newList = [...richestPeople];
  newList
    .map((person) => ({ value: person, sort: Math.random() })) // randomize list
    .sort((a, b) => a.sort - b.sort) // generate new order
    .map((person) => person.value) // retrieve original strings
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);
      draggableList.appendChild(listItem);
    });
  addListeners();
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault(); // dragDrop is not executed otherwise
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  // Get Items
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");
  // Swap Items
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();
    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    }
    else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
    //document.getElementById("demo").innerHTML = listItem.classList;


    //field

    document.getElementById('result').value = listItem.classList;  //send result.

  });

  
}

// Event Listeners
function addListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });
  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

check.addEventListener("click", checkOrder);


// Init
createList();

function refreshPage(){
  window.location.reload();
} 
