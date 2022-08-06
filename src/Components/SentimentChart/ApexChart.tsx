import Chart from 'react-apexcharts';
import React from 'react';
import * as dateFns from 'date-fns';

interface ApexChartInterface {
  series: object[];
  options: object;
}

interface ISentimentSeries {
    positive: number[]
    negative: number[]
    interval: string[]
}

class ApexChart extends React.Component<{}, ApexChartInterface> {
  public state: ApexChartInterface;
  public sentimentSeries: ISentimentSeries
  constructor(props: any) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Positive',
          data: props.sentimentSeries.positive
        },
        {
          name: 'Negative',
          data: props.sentimentSeries.negative
        },
      ],
      options: {
        colors:['#3ECC1B', '#FF0018'],
        grid: {
          show: true,
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
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.8,
            opacityTo: 1.0,
          },
        },
        xaxis: {
          type: 'datetime',
          categories: props.sentimentSeries.interval,
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
  }

  render() {
    return <Chart options={this.state.options} series={this.state.series} type="area" width='100%' height='180%'/>;
  }
}

const SentimentChart = (props) => {
  let sentimentSeries;
  if (Object.keys(props.transcriptData).length > 0) {

    const startTimestamp = new Date(props.transcriptData.transcript.date);
    const durationInSec = parseInt(props.transcriptData.transcript.transcript.content[0].content.slice(-1)[0].attrs.endTime);
    const endTimestamp = dateFns.addSeconds(startTimestamp, durationInSec);
    const xInterval = dateFns.eachMinuteOfInterval({ start: startTimestamp, end: endTimestamp });

    const allSentiments = props.transcriptData.sentiments.sentiments;
    const chunkSize = Math.ceil(allSentiments.length / xInterval.length);

    sentimentSeries = {
      positive: [],
      negative: [],
      interval: xInterval.map(i=>i.toISOString()),
    };
    for (let i = 0; i < allSentiments.length; i += chunkSize) {
      const chunk = allSentiments.slice(i, i + chunkSize);
      const positive = chunk.filter((j) => j.label === 'POSITIVE');
      const negative = chunk.filter((j) => j.label === 'NEGATIVE');
      sentimentSeries.positive.push(positive.length);
      sentimentSeries.negative.push(negative.length);
    }
  }
  return (
    <div>
      {sentimentSeries ? <ApexChart sentimentSeries={sentimentSeries} /> : <></> }
    </div>
  );
};

export default SentimentChart;
