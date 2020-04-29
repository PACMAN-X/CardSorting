const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");
const list_start = document.querySelector(".list_start");
const scale_left = document.querySelector(".scale_left");
const scale_right = document.querySelector(".scale_right");
const scale_result = document.querySelector(".scale_result");
const totalnumber = document.querySelector(".totalnumber");
const lists_end = document.querySelectorAll(".list_end");
const lists_accept = document.querySelectorAll(".list_accept");

var divs = list_start.children;
var frag = document.createDocumentFragment();
while (divs.length) {
  frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
}
list_start.appendChild(frag);

let draggedItem = null;
let count = 0;
let set;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text", e.target.id);
    draggedItem = item;
  });

  item.addEventListener("dragend", function () {
    draggedItem = item;
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    });

    list.addEventListener("dragleave", function (e) {
      this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });

    list.addEventListener("drop", function (e) {
      e.target.innerHTML = "";
      this.append(draggedItem);
      count += 1;
      totalnumber.innerHTML = count / 10;

      e.target.id = draggedItem.id;

      left = Number(scale_left.id);
      right = Number(scale_right.id);

      if (left && right) {
        if (left > right) {
          scale_result.innerHTML = ">";
        } else {
          scale_result.innerHTML = "<";
        }
      }

      this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
  }
}

function check() {
  for (i = 0; i < lists_end.length; i++) {
    const item = lists_end[i];
    item.innerHTML = item.id;
  }
}
