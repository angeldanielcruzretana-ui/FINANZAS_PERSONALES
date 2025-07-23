document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-meta");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const total = parseFloat(document.getElementById("total").value);
    const ahorrado = parseFloat(document.getElementById("ahorrado").value);

    // Validación básica
    if (!nombre || isNaN(total) || isNaN(ahorrado) || total <= 0 || ahorrado < 0) {
      alert("Por favor ingresa valores válidos.");
      return;
    }

    const porcentaje = Math.min((ahorrado / total) * 100, 100).toFixed(2);

    // Mostrar texto
    document.getElementById("meta-nombre").innerText = `Meta: ${nombre}`;
    document.getElementById("porcentaje").innerText = `${porcentaje}% alcanzado`;

    // Animar barra de progreso
    const barra = document.getElementById("barra");
    barra.style.width = "0%";
    setTimeout(() => {
      barra.style.width = `${porcentaje}%`;
    }, 100);

    // Mostrar contenedor
    document.getElementById("resultado").style.display = "block";
  });
});
