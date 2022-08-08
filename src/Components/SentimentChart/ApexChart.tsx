import Chart from 'react-apexcharts';
import React from 'react';
import * as dateFns from 'date-fns';
import { useTheme } from '@mui/material/styles';


const computeState = (props) => {
  const theme = useTheme()
  const startTimestamp = new Date(props.transcriptData.transcript.date);
  const durationInSec = parseInt(props.transcriptData.transcript.transcript.content[0].content.slice(-1)[0].attrs.endTime);
  const endTimestamp = dateFns.addSeconds(startTimestamp, durationInSec);
  const xInterval = dateFns.eachMinuteOfInterval({ start: startTimestamp, end: endTimestamp });

  const allSentiments = props.transcriptData.sentiments.sentiments;
  const chunkSize = Math.ceil(allSentiments.length / xInterval.length);

  const sentimentSeries = {
    positive: [],
    negative: [],
    interval: xInterval.map((i) => i.toISOString()),
  };
  for (let i = 0; i < allSentiments.length; i += chunkSize) {
    const chunk = allSentiments.slice(i, i + chunkSize);
    const positive = chunk.filter((j) => j.label === 'POSITIVE');
    const negative = chunk.filter((j) => j.label === 'NEGATIVE');
    sentimentSeries.positive.push(positive.length);
    sentimentSeries.negative.push(negative.length);
  }

  const state = {
    series: [
      {
        name: 'Positive',
        data: sentimentSeries.positive,
      },
      {
        name: 'Negative',
        data: sentimentSeries.negative,
      },
    ],
    options: {
      colors: [theme.palette.success.main, theme.palette.error.main],
      grid: {
        show: false,
      },
      chart: {
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
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.2,
          opacityTo: 0.4,
        },
      },
      xaxis: {
        type: 'datetime',
        categories: sentimentSeries.interval,
        tooltip: {
          enabled: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
          format: 'HH:mm:ss',
        },
      },
    },
  };
  return state;
};

const SentimentChart = (props) => {
  let state;
  if (props.transcriptData.sentiments) {
    state = computeState(props);
  }
  return <div>{state ? <Chart options={state.options} series={state.series} type="area" width="100%" height="120%" /> : <></>}</div>;
};

export default SentimentChart;
