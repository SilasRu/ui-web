import Chart from 'react-apexcharts';
import React from 'react';
import * as dateFns from 'date-fns';
import { useTheme } from '@mui/material/styles';


const computeState = (props) => {
  const theme = useTheme()
  const startTimestamp = new Date(props.transcriptData.transcript.date);
  const durationInSec = parseInt(props.transcriptData.transcript.meeting_length);
  const endTimestamp = dateFns.addSeconds(startTimestamp, durationInSec);
  const xInterval = dateFns.eachMinuteOfInterval({ start: startTimestamp, end: endTimestamp });

  const allSentiments = props.transcriptData.sentiments.sentiments;
  const series = {
    sentiment: [],
    heatness: [],
    interval: xInterval.map((i) => i.toISOString()),
  };

  const speakerChangeTimes = props.transcriptData.transcript.transcript.content[0].content.map(i=>i.content.slice(-1)[0].attrs.endTime)

  for (let i = 0; i < xInterval.length; i ++) {
    const sentimentChunk = allSentiments.filter(f=>f.timestamp > i*60 && f.timestamp < (i+1)*60);
    const positive = sentimentChunk.filter((j) => j.label === 'POSITIVE');
    const negative = sentimentChunk.filter((j) => j.label === 'NEGATIVE');
    series.sentiment.push(positive.length - negative.length);

    const heatnessChunk = speakerChangeTimes.filter(f=>f > i*60 && f < (i+1)*60);
    series.heatness.push(heatnessChunk.length);
  }

  const state = {
    series: [
      {
        name: 'Sentiment',
        data: series.sentiment
      },
      {
        name: 'Heatness',
        data: series.heatness
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
        categories: series.interval,
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
