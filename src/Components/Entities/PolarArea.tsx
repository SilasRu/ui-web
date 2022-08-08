import Chart from 'react-apexcharts';
import React from 'react';
import { useTheme } from '@mui/material/styles';


const PolarAreaChart = () => {
  const theme = useTheme()
  const state = {
    series: [14, 23, 21, 17],
    options: {
      labels: ['ORG', 'PERS', 'MISC', 'Non-speaker PERS'],
      colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.secondary.main, theme.palette.error.main],
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
  return (
    <div>
      <Chart options={state.options} series={state.series} type="polarArea" width={200} height={200} />
    </div>
  );
};

export default PolarAreaChart;
