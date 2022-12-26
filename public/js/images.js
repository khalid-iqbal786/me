const imgs = [
    "assets/u1.png",
    "assets/u2.png",
    "assets/sif1.png",
    "assets/sif2.png",
    "assets/sif3.png",
    "assets/box1.png",
    "assets/box2.png",
    "assets/box3.png",
    "assets/s1.png",
    "assets/s2.png",
    "assets/s3.png",
    "assets/s4.png",
    "assets/s5.png",
    "assets/s6.png",
    "assets/s7.png",
    "assets/s8.png",
];

const container = document.getElementById("run");

function renderImages(){
    let imgsDOM = "";
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img class="portfolio-img" alt=""  src="${imgs[i]}">`
    };
    container.innerHTML = imgsDOM;
}

renderImages();

