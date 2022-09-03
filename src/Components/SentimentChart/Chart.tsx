import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const Chart = (props) => {
  const theme = useTheme();

  let timeframeAnnontations;
  if (props.currentTimeFrame !== null) {
    timeframeAnnontations = {
      x: props.series.interval[props.currentTimeFrame],
      x2: props.series.interval[props.currentTimeFrame + 1],
      fillColor: theme.charts.cyan,
      label: {
        text: '',
        orientation: 'horizontal',
        textAnchor: 'start',
        borderWidth: 0,
        offsetY: -15,
        offsetX: -4,
        style: {
          fontFamily: 'Poppins',
        },
      },
    };
  }

  const chartData: ApexOptions = {
    series: [
      {
        name: props.series.name,
        data: props.series.data,
      },
    ],

    annotations: {
      xaxis: [timeframeAnnontations],
    },
    colors: [props.color],
    grid: {
      show: false,
    },
    chart: {
      id: props.series.chartId,
      group: 'social',
      type: 'area',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'numeric',
      categories: props.series.interval,
      tooltip: {
        enabled: false,
      },
      labels: {
        formatter: function (val) {
          return parseInt(val).toFixed(0);
        },
      },

    },
    yaxis: {
      labels: {
        minWidth: 20,
        formatter: function (val) {
          return val.toFixed(props.formatterLength);
        },
        show: true
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
        format: 'HH:mm:ss',
      },
    },
  };
  return (
    <div id={props.series.id}>
      <ReactApexChart options={chartData} series={chartData.series} type="area" width="100%" height="70%" />
    </div>
  );
};

export default Chart;
