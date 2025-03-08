// Script para el carrusel
let currentIndex = 0;
const items = document.querySelectorAll('.carrusel-item');
const totalItems = items.length;

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
}

function showPrevItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
}

// Eventos para los botones de control
document.querySelector('.carrusel-control.next').addEventListener('click', showNextItem);
document.querySelector('.carrusel-control.prev').addEventListener('click', showPrevItem);

// Cambiar automáticamente cada 5 segundos
setInterval(showNextItem, 5000);