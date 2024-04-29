const images = document.querySelectorAll(".slidebar img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
let n = 0;
function changeImg() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[n].style.display = "block";
}
changeImg();
prev_btn.addEventListener("click", () => {
    if (n <= 0) {
        n = images.length - 1;
    } else {
        n--;
    }
    changeImg();
});
next_btn.addEventListener("click", () => {
    if (images.length - 1 > n) {
        n++;
    } else {
        n = 0;
    }
    changeImg();
});