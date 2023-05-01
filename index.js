const imageArray = [
    "egon1.jpg",
    "egon2.jpg",
    "egon3.jpg",
    "egon4.jpg",
    "egon5.jpg",
    "egon6.jpg",
    "egon7.jpg",
    "egon8.jpg",
    "egon9.jpg",
    "egon10.jpg",
    "egon11.jpg",
    "egon12.jpg",
    "egon13.jpg",
    "egon14.jpg",
    "egon15.jpg"
];

//var numberIndex = Math.floor(Math.random() * imageArray.length);
const imagens = document.querySelector('.imagens');

function getRandomNr(){
    return Math.floor(Math.random() * imageArray.length);
}

function loadImages(numImages = 15)
{
    let i = 0;
    while (i < numImages){
        const img = document.createElement('img');
        img.src = `./imagens/${imageArray[getRandomNr()]}`;
        imagens.appendChild(img);
        i++
    }   
      
};

loadImages();

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
       loadImages();
    }
});