import Chart from 'react-apexcharts';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const PolarAreaChart = (props: { entityGroups: object; setSelectedEntities: (number) => void }) => {
  const theme = useTheme();
  const colors = [theme.charts.blueMono.one, theme.charts.blueMono.two, theme.charts.blueMono.three, theme.charts.blueMono.four, theme.charts.blueMono.five]
  const groups = {
    'PER': 0,
    'LOC': 0,
    'ORG': 0,
    'MISC': 0,
    // 'Non-speaker PERS': 0,
  }
  for (const key of Object.keys(props.entityGroups)) {
    if(key in groups) groups[key] = props.entityGroups[key].reduce((acc, obj) => acc + 1, 0)
  }
  const series = Object.keys(groups).map((key,index)=> {
    return {
      x: key,
      y: groups[key],
      name: key,
      fillColor: colors[index]
    }
  })
  const state = {
    series: [{
      data: series
    }],
    options: {
      chart: {
        type: 'bar',
        events: {
          dataPointSelection: (event, chartContext, config) => {
            props.setSelectedEntities(config.dataPointIndex);
          },
        },
        toolbar: {
          show: false,
          tools: {
            download: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      labels: Object.keys(groups),
      // colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.secondary.main, theme.palette.error.main, theme.palette.primary.main],
      colors: [theme.charts.blueMono.one, theme.charts.blueMono.two, theme.charts.blueMono.three, theme.charts.blueMono.four, theme.charts.blueMono.five],
      legend: {
        show: false,
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.95,
      },
      xaxis: {
        categories: Object.keys(groups)
      },
      yaxis: {
        labels: {
          formatter: (value) => {
            return value.toFixed(0);
          },
        },
      },
    },
  };
  return (
    <div>
      <Chart options={state.options} series={state.series} type="bar" width={200} height={200} />
    </div>
  );
};

export default PolarAreaChart;
