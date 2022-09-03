import * as dateFns from 'date-fns';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const SentimentChart = (props) => {
  const theme = useTheme();
  const sentiments = props.transcriptData.sentiments.dimensions.time;

  console.log(props);

  const speakerChanges = Object.keys(props.transcriptData.keyphrases.dimensions.source_time_section).flatMap((key) => {
    const occuringSpeakers = props.transcriptData.keyphrases.dimensions.source_time_section[key].match(/.\w+:/g);
    return occuringSpeakers.map((i) => i.split(':')[0].trim()).length;
  });

  const series: { sentimentSeries: number[]; heatnessSeries: number[]; interval: number[] } = {
    sentimentSeries: Object.values(sentiments),
    heatnessSeries: speakerChanges,
    interval: Object.keys(sentiments).map((i) => parseInt(i)),
  };
  console.log(series);

  let timeframeAnnontations;
  if (props.currentTimeFrame !== null) {
    timeframeAnnontations = {
      x: series.interval[props.currentTimeFrame],
      x2: series.interval[props.currentTimeFrame + 1],
      fillColor: theme.charts.cyan,
      label: {
        text: 'Timeframe',
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
        name: 'Sentiment',
        data: series.sentimentSeries,
      },
      {
        name: 'Speaker changes',
        data: series.heatnessSeries,
      },
    ],

    annotations: {
      xaxis: [timeframeAnnontations],
    },
    colors: [theme.charts.sentiment.one, theme.charts.sentiment.four],
    grid: {
      show: false,
    },
    chart: {
      id: 'sentiment',
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
    yaxis: [
      {
        title: {
          text: '',
        },
        labels: {
          show: false,
        },
      },
      {
        opposite: true,
        title: {
          text: '',
        },
        labels: {
          show: false,
        },
      },
    ],
    xaxis: {
      type: 'numeric',
      categories: series.interval,
      tooltip: {
        enabled: false,
      },
      labels: {
        formatter: function (val) {
          return parseInt(val).toFixed(0);
        },
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
    <div>
      <ReactApexChart options={chartData} series={chartData.series} type="area" width="100%" height="120%" />
    </div>
  );
};

export default SentimentChart;
