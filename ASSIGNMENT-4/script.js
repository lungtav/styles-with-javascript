let box = document.querySelectorAll(".box");

box.forEach(function (elt) {
  console.log(elt.innerText.toLowerCase().includes("here"));
  elt.style.backgroundColor = "black";
  elt.style.color = "white";

  if (elt.innerText.toLowerCase().includes("here")) {
    elt.style.backgroundColor = "blue";
  }
});
