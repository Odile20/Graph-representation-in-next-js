import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

export default function MyChart() {
  // État local pour stocker l'instance du graphique
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Fonction pour initialiser le graphique lorsque le composant est monté
    const initChart = () => {
      const dom = document.getElementById('chart-container');
      const myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
      });

      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            smooth: true,
          }
        ]
      };

      if (option && typeof option === 'object') {
        myChart.setOption(option);
      }

      window.addEventListener('resize', () => {
        myChart.resize();
      });

      // Mettre à jour l'instance du graphique dans l'état local
      setChartInstance(myChart);
    };

    // Appeler la fonction d'initialisation du graphique lorsque le composant est monté
    initChart();

    // Nettoyer le graphique lors du démontage du composant
    return () => {
      if (chartInstance) {
        chartInstance.dispose();
      }
    };
  }, []); // Le tableau de dépendances est vide pour exécuter le code une seule fois lors du montage

  return (
    <div id='chart-container' style={{ width: '100%', height: '400px' }}></div>
  );
}
