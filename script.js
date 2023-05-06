const imgs = document.getElementById("img");
const img = document.querySelectorAll("#imgs, img");

let idx = 0;

function carrossel(){
    idx ++ ;
    if(idx > img.length - 1){
        idx = 0;
    }
imgs.style.transform = `translateX(${-idx * 50}px)`;
}
setInterval(carrossel, 800);
