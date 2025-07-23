// Índice de la diapositiva actual
let currentSlide = 0;

// Selecciona todas las imágenes del carrusel con la clase '.carousel-image'
const images = document.querySelectorAll('.carousel-image');

// Total de imágenes en el carrusel
const totalSlides = images.length;

// Función para mostrar la diapositiva en la posición 'index'
function showSlide(index) {
  // Para cada imagen, activa la que coincida con 'index' y desactiva las demás
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Función para pasar a la siguiente diapositiva
function nextSlide() {
  // Incrementa el índice y usa módulo para reiniciar al llegar al final
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Función para volver a la diapositiva anterior
function prevSlide() {
  // Decrementa el índice y usa módulo para reiniciar al llegar al inicio
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Agrega evento click al botón 'next' para avanzar y reiniciar el intervalo automático
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

// Agrega evento click al botón 'prev' para retroceder y reiniciar el intervalo automático
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Configura el cambio automático de diapositivas cada 3 segundos
let autoSlide = setInterval(nextSlide, 3000);

// Función para reiniciar el intervalo automático (cada vez que se hace clic en next o prev)
function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}

// Muestra la primera imagen al cargar la página
showSlide(currentSlide);
