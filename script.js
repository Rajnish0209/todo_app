let inp = document.querySelector("input");

let btn = document.querySelector("button");

let unorderdList = document.querySelector("ul");

btn.addEventListener("click", function () {
  let listItem = document.createElement("li");
  listItem.innerText = inp.value.toUpperCase();

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");
  listItem.appendChild(delBtn);

  unorderdList.appendChild(listItem);
  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let parent = this.parentElement;
//     parent.remove();
//   });
// }

unorderdList.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
