let css = document.querySelector("h3");
let colour1 = document.querySelector(".colour1");
let colour2 = document.querySelector(".colour2");
let body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    css.textContent = body.style.background + ";";
}

colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);



//check css h3

