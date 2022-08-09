import Chart from 'react-apexcharts';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const PolarAreaChart = (props: { entityGroups: object; setSelectedEntities: (number) => void }) => {
  const theme = useTheme();
  const state = {
    series: Object.values(props.entityGroups).map((i) => i.length),
    options: {
      chart: {
        events: {
          dataPointSelection: (event, chartContext, config) => {
            props.setSelectedEntities(config.dataPointIndex);
          },
        },
      },
      labels: Object.keys(props.entityGroups),
      colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.secondary.main, theme.palette.error.main, theme.palette.warning.main],
      legend: {
        show: false,
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      yaxis: {
        labels: {
          formatter: (value) => {
            return value.toFixed(1);
          },
        },
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
