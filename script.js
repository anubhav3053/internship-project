const slides = document.querySelectorAll(".slider");
const headCircul = document.querySelectorAll(".box-3-img-3")
const headerCircul = document.querySelectorAll(".box-3-img-3-1")
const headerColor = document.getElementById("header-color1")
// headerColor.style.width = 'widh+'vw';
const style =  (100 * 544 / window.innerWidth)
const widh = style + 28;
const widh2 = widh+'vw' ;
console.log(style);
console.log(widh);
console.log(widh2);
// const container2 = document.getElementsByClassName(".container-2").style.width = '200px';
var counter = 0;

slides.forEach((slider, index) => {
    slider.style.left = `${index * 100}%`
})
const border = () => {
    headCircul.forEach((head) => {
    })
}
const circule = () => {
    headerCircul.forEach((header) => {
    })
}

const goPrev = () => {
    headCircul[counter].classList.toggle('headerborder');
    headerCircul[counter].classList.toggle('headerCircule');
    counter--;
    if (counter === -1) counter = 3;
    slideImages();
    headCircul[counter].classList.toggle('headerborder');
    headerCircul[counter].classList.toggle('headerCircule');
    if (counter == 1) {
        headText() 
    } else {
        headText2() 
    }
}

const goNext = () => {
    headCircul[counter].classList.toggle('headerborder');
    headerCircul[counter].classList.toggle('headerCircule');
    counter++;
    if (counter === 4) counter = 0;
    slideImages();
    headCircul[counter].classList.toggle('headerborder');
    headerCircul[counter].classList.toggle('headerCircule');
    if (counter == 1) {
        headText() 
    } else {
        headText2() 
    }
}
const slideImages = () => {
    slides.forEach((slider) => {
        slider.style.transform = `translateX(-${counter * 100}%)`
    })
}

const containerf2 = () => {
    const add= document.getElementById('container-2');
    add.style.width = '200px';
    add.style.backgroundColor = 'rgba(255, 255, 255, 1)' 
    add.style.border= '1.5px solid black'
    const added = document.getElementById('para-7');
    added.innerHTML = "Added to Cart";
    added.style.color = 'black'
}

function headText() {
    const headText = document.getElementById('head');
    headText.innerHTML ="Elevate Your Living Spaces with Timeless Elegance";

}
function headText2() {
    const headText = document.getElementById('head');
    headText.innerHTML ="High-Quality Furniture Just For You";
}
