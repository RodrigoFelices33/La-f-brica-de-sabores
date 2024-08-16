let index = 1;
const slideImg = document.getElementsByClassName("imagen");

console.log("Estoy funcionando");

slide(index);

function push(n) {
    slide(index += n);
}

function slide(n) {
    if (n > slideImg.length) {
        index = 1;
    }

    if (n < 1) {
        index = slideImg.length;
    }

    for (let i = 0; i < slideImg.length; i++) {
        slideImg[i].style.display = "none";
    }
    slideImg[index - 1].style.display = "block";
}

const imagenes = document.querySelectorAll(".promos");

function moverImagen() {
    imagenes.forEach(imagen => {
        imagen.style.transition = 'left 3s';
        imagen.style.left = '100%';

        setTimeout(() => {
            imagen.style.transition = 'none'; 
            imagen.style.left = '0';

            imagen.offsetHeight; 

            imagen.style.transition = 'left 3s'; 
        }, 3000);
    });
}

setInterval(moverImagen, 6000);
