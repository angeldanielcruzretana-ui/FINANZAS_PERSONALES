// Función para abrir/cerrar el menú al hacer clic en un elemento
function toggleMenu(el) {
  // Cierra todos los otros menús que estén abiertos (quita la clase 'active')
  document.querySelectorAll('.menu-item').forEach(item => {
    if (item !== el) item.classList.remove('active');
  });

  // Alterna el menú actual: si está abierto lo cierra, si está cerrado lo abre
  el.classList.toggle('active');
}

// Evento global para cerrar los submenús si se hace clic fuera de cualquier '.menu-item'
window.addEventListener('click', function(e) {
  // Si el clic NO fue dentro de un '.menu-item'
  if (!e.target.closest('.menu-item')) {
    // Cierra todos los menús abiertos quitando la clase 'active'
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
  }
});
