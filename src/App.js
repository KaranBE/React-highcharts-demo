import React from 'react';
import Highcharts from 'highcharts';
import BarChart from './BarChart';

const App = () => {
  const [series, setSeries] = React.useState([
    {
      name: 'Gases',
      data: [
        {
          name: 'Argon',
          y: 0.9,
          color: '#3498db',
        },
        {
          name: 'Nitrogen',
          y: 78.1,
          color: '#9b59b6',
        },
        {
          name: 'Oxygen',
          y: 20.9,
          color: '#2ecc71',
        },
        {
          name: 'Trace Gases',
          y: 0.1,
          color: '#f1c40f',
        },
      ],
    },
  ]);

  const highChartsRender = () => {
    Highcharts.chart({
      chart: {
        type: 'pie',
        renderTo: 'atmospheric-composition',
      },
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: "Earth's Atmospheric Composition",
        style: {
          fontSize: '10px',
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            format: '{point.name}: {point.percentage:.1f} %',
          },
          innerSize: '70%',
        },
      },
      series: series,
    });
  };

  React.useEffect(() => {
    highChartsRender();
  }, []);

  return (
    <>
      <div id="atmospheric-composition"></div>
      <div>
        {' '}
        <BarChart />
      </div>
    </>
  );
};

export default App;
