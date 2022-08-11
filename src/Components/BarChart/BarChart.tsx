import Chart from 'react-apexcharts';
import './Barchart.css';
import { useTheme } from '@mui/material/styles';
import * as dateFns from 'date-fns';

const BarChart = (props) => {
  const theme = useTheme()
  const startTimestamp = new Date(props.transcriptData.transcript.date);
  const durationInSec = parseInt(props.transcriptData.transcript.meeting_length);
  const endTimestamp = dateFns.addSeconds(startTimestamp, durationInSec);
  const xInterval = dateFns.eachMinuteOfInterval({ start: startTimestamp, end: endTimestamp });

  
  const {transcript} = props.transcriptData
  const averageLengthPerTurn = transcript.meeting_length / transcript.speaker_turns
  const turnDurations = transcript.transcript.content[0].content.map(i=>(i.content.slice(-1)[0].attrs.endTime + i.content[0].attrs.startTime) / 2)
  const chunkSize = Math.ceil(turnDurations.length / xInterval.length);


  const series = {
    monologue: [],
    dialogue: []
  }
  for (let i = 0; i < turnDurations.length; i += chunkSize) {
    const chunk = turnDurations.slice(i, i + chunkSize);
    const score = (chunk.slice(-1)[0] - chunk[0]) / averageLengthPerTurn
    const threshold = 1
    if (score > threshold){
      series.monologue.push(score)
      series.dialogue.push(0)
    } else {
      series.dialogue.push(score - threshold)
      series.monologue.push(0)
    }
  }

  const state = {
    series: [
      {
          name: 'Dialogue',
          data: series.dialogue,
        },
      {
        name: 'Monologue',
        data: series.monologue,
      },
    ],
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: [theme.palette.primary.main, theme.palette.error.main],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
  
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
    },
  };


  return (
    <div className="bar-chart">
      <div className="bar-chart-title">Heatness</div>
      <div className="bar-chart-desc">Switches per time interval between monologue and dialogue</div>
      <div className="bar-chart-chart">
        <Chart options={state.options} series={state.series} type="bar" width={300} height={250} />
      </div>
    </div>
  );
};

export default BarChart;
