const form = document.getElementById('formFinanzas');
const resultado = document.getElementById('resultado');
const ctx = document.getElementById('grafica').getContext('2d');
let grafica;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const ingresos = parseFloat(document.getElementById('ingresos').value);
  const egresos = parseFloat(document.getElementById('egresos').value);
  const gastos = parseFloat(document.getElementById('gastos').value);

  const saldo = ingresos - (egresos + gastos);
  resultado.innerHTML = `Saldo restante: $${saldo.toFixed(2)}`;

  if (grafica) grafica.destroy();

  grafica = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Ingresos', 'Egresos', 'Gastos'],
      datasets: [{
        data: [ingresos, egresos, gastos],
        backgroundColor: ['#2a9d8f', '#e76f51', '#f4a261'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});
