document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.educacion-financiera-video video');

  if (video) {
    video.addEventListener('ended', () => {
      alert('¡Gracias por ver el video! Recuerda aplicar estos consejos en tu vida financiera.');
    });
  }
});
