import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function ChartComponent() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Référence pour stocker l'instance du graphique

  useEffect(() => {
    const chartData = {
      labels: ['0', '0.2', '0.4', '0.6', '0.8', '1'],
      datasets: [
        {
          label: 'Courbe 1',
          borderColor: '#C70021',
          data: [0.2, 0.4, 0.1, 0.5, 0.2, 0.3],
          fill: false,
          tension: 0.4, // Ajustez la tension pour rendre la courbe plus ou moins arrondie
        },
        {
          label: 'Courbe 2',
          borderColor: '#0076FF',
          data: [0.7, 0.5, 0.8, 0.4, 0.6, 0.9],
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Courbe 3',
          borderColor: '#DFB300',
          data: [0.3, 0.6, 0.9, 0.7, 0.4, 0.8],
          fill: false,
          tension: 0.4,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'Valeurs X',
          },
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Valeurs Y',
          },
        },
      },
    };

    const ctx = chartRef.current;

    // Vérifiez si une instance de graphique existe déjà
    if (chartInstanceRef.current) {
      // Si une instance existe, détruisez-la avant de créer une nouvelle instance
      chartInstanceRef.current.destroy();
    }

    // Créez une nouvelle instance de graphique
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: chartOptions,
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="100" height="50"></canvas>
    </div>
  );
}
