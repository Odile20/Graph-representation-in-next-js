import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Curve() {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 800; // Largeur totale du graphe
    const height = 400; // Hauteur totale du graphe

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Définir les échelles x et y en fonction de la largeur et de la hauteur
    const xScale = d3.scaleLinear()
      .domain([0, 1]) // Exemple : plage de données x de 0 à 1
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, 1]) // Exemple : plage de données y de 0 à 1
      .range([height, 0]);

    // Définir le générateur de lignes avec des courbes Catmull-Rom
    const line = d3.line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]))
      .curve(d3.curveCatmullRom); // Utiliser des courbes Catmull-Rom

    // Données des trois courbes (à remplacer par vos données SVG)
    const data1 = [
      [0, 0.2], [0.2, 0.4], [0.4, 0.1], [0.6, 0.5], [0.8, 0.2], [1, 0.3]
    ];
    const data2 = [
      [0, 0.7], [0.2, 0.5], [0.4, 0.8], [0.6, 0.4], [0.8, 0.6], [1, 0.9]
    ];
    const data3 = [
      [0, 0.3], [0.2, 0.6], [0.4, 0.9], [0.6, 0.7], [0.8, 0.4], [1, 0.8]
    ];

    // Ajouter les courbes au graphe
    svg.append('path')
      .datum(data1)
      .attr('fill', 'none')
      .attr('stroke', '#C70021') // Couleur de la première courbe
      .attr('stroke-width', 2)
      .attr('d', line);

    svg.append('path')
      .datum(data2)
      .attr('fill', 'none')
      .attr('stroke', '#0076FF') // Couleur de la deuxième courbe
      .attr('stroke-width', 2)
      .attr('d', line);

    svg.append('path')
      .datum(data3)
      .attr('fill', 'none')
      .attr('stroke', '#DFB300') // Couleur de la troisième courbe
      .attr('stroke-width', 2)
      .attr('d', line);
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
}
