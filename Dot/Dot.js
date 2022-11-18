
  window.addEventListener("click", event => {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  });

clear.addEventListener("click", function(CLEAR){
  let refreshPage=()=>{
    location.reload();
  }
  CLEAR.stopPropagation();
 clear.addEventListener("click", refreshPage)
})
