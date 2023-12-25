let og = "";
let butts = document.querySelectorAll(".buttons");
Array.from(butts).forEach((button) => {
    button.addEventListener("click", (e) => {
        calc(e.target.innerHTML);
    });
});

function calc(pressedbutton) {
    if(pressedbutton == "="){
        og = eval(og);
        document.querySelector("#screen").innerHTML = og;
    }
    else if(pressedbutton == "AC"){
        og = "";
        document.querySelector("#screen").innerHTML = og;
    }
    else if(pressedbutton == "DEL"){
        og = og.slice(0, -1);
        document.querySelector("#screen").innerHTML = og;
    }
    else{
        og += pressedbutton;
        document.querySelector("#screen").innerHTML = og;
    }
}