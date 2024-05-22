import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous renders

    const width = 800;
    const height = 500;
    const margin = { top: 20, right: 30, bottom: 40, left: 90 };

    svg.attr('width', width).attr('height', height);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.intensity)])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleBand()
      .domain(data.map(d => d.country))
      .range([margin.top, height - margin.bottom])
      .padding(0.1);

    svg.append('g')
      .attr('fill', 'steelblue')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', margin.left)
      .attr('y', d => y(d.country))
      .attr('width', d => x(d.intensity) - margin.left)
      .attr('height', y.bandwidth());

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(width / 80))
      .call(g => g.select('.domain').remove());

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select('.domain').remove());
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
