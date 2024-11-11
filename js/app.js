let onBtn = document.querySelector(".onBtn");
let bulb = document.querySelector(".bulb");
function turnOnBulb() {
  bulb.src = "./image/bulbon.png";
}

onBtn.addEventListener("click", turnOnBulb);



let offBtn = document.querySelector('.offBtn')

function turnOffBulb (){
    bulb.src = "./image/bulboff.png";
}


offBtn.addEventListener("click", turnOffBulb);
