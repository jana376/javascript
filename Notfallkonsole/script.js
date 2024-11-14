function hoverAn(e){
    e.target.parentElement.classList.add("hover");
}

function hoverAb(e){
    e.target.parentElement.classList.remove("hover");
}

var schalter = document.getElementsByTagName("a")
for (var i = 0; i < schalter.length; i++) {
schalter[i].addEventListener("mouseover", hoverAn)
schalter[i].addEventListener("mouseout", hoverAb)
} 


