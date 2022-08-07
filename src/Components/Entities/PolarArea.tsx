import Chart from 'react-apexcharts';
import React from 'react';

const state = {
  series: [14, 23, 21, 17],
  options: {
    labels: ['ORG', 'PERS', 'MISC', 'Non-speaker PERS'],
    colors: ['#3ECC1B', '#9c27b0', '#ed6c02', '#FF0018'],
    legend: {
      show: false,
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
  },
};

const PolarAreaChart = () => {
  return (
    <div>
      <Chart options={state.options} series={state.series} type="polarArea" width={200} height={200} />
    </div>
  );
};

export default PolarAreaChart;
