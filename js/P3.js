document.getElementById("form-interes").addEventListener("submit", function(e) {
  e.preventDefault();

  const monto = parseFloat(document.getElementById("monto").value);
  const tasa = parseFloat(document.getElementById("tasa").value) / 100;
  const anios = parseInt(document.getElementById("anios").value);
  const meses = parseInt(document.getElementById("meses").value);

  // Convertir meses a fracción de año
  const totalTiempo = anios + (meses / 12);

  // Fórmula del interés compuesto: A = P * (1 + r)^n
  const resultado = monto * Math.pow(1 + tasa, totalTiempo);
  const resultadoFinal = resultado.toFixed(2);

  document.getElementById("resultado-interes").innerHTML =
    `🔍 En ${anios} años y ${meses} meses, tendrás <br><strong>$${resultadoFinal}</strong>`;
});
