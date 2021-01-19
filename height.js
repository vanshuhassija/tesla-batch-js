// window.addEventListener("scroll", () => {
//   const node = document.getElementById("div2");
//   node.style.color = "white";
//   node.innerHTML =
//     "innerHeightY:" +
//     window.innerHeight +
//     "PageOffsetY" +
//     window.pageYOffset +
//     "Offset Height" +
//     document.body.offsetHeight;
// });

window.addEventListener("scroll", () => {
  const node = document.getElementById("div2");
  node.innerHTML = `innerHeight ${window.innerHeight} PageYOffset ${
    window.pageYOffset
  } 
  BodyHeight ${document.body.offsetHeight} Addition=${
    window.innerHeight + window.pageYOffset
  }`;
  const totalHeight = window.innerHeight + window.pageYOffset;
  if (Math.ceil(totalHeight) >= document.body.offsetHeight) {
    console.log("We have Reached Bottom");
  }
});
