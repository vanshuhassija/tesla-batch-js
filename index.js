const node1 = document.getElementById("div1");
const node2 = document.getElementById("div2");
const node3 = document.getElementById("div3");

node1.addEventListener("click", (event) => {
  alert("Div 1 Clicked");
});

node2.addEventListener(
  "click",
  (event) => {
    event.stopPropagation();
    alert("Div 2 Clicked");
  },
  true
);

node3.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Div 3 Clicked");
});

// node1.addEventListener("Type Of Listener","Callback to be fired","shouldCapture")
