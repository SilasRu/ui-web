import Chart from 'react-apexcharts';
import './Barchart.css';

const state = {
  series: [
    {
        name: 'Dialogue',
        data: [-0.8, -1.05, -1.06, -0.1, -1.4, -2.2, -5, -3.7, -3.96, -4.22, -4.3, -4.4],
      },
    {
      name: 'Monologue',
      data: [0.4, 0.65, 0.76, 3.88, 1.5, 2.1, 2.9, 4.8, 5, 4.2, 4, 4.3],
    },
  ],
  options: {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ['#1976d2', '#FF0018'],
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

const BarChart = () => {
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
