const imgs = [
    "assets/u1.png",
    "assets/u2.png",
    "assets/sif1.png",
    "assets/sif2.png",
    "assets/sif3.png",
    "assets/nms1.jpg",
    "assets/nms2.jpg",
    "assets/nms3.jpg",
    "assets/nms4.jpg",
    "assets/nms5.jpg",
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
        imgsDOM += `<img alt=""  src="${imgs[i]}">`
    };
    container.innerHTML = imgsDOM;
}

renderImages();

