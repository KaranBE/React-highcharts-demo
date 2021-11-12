import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const App = () => {
  const [barOptionsState, setBarOptionsState] = useState({ barOptions: [] });
  const highChartsRender = () => {
    setBarOptionsState({
      barOptions: {
        chart: {
          type: "bar"
        },
        title: {
          text: "Stacked Bar Chart"
        },
        xAxis: {
          categories: ["Sugar (g/100g)", "Vitamic C (mg/100g)"]
        },
        yAxis: {
          min: 0,
          title: {
            text: ""
          }
        },
        credits: {
          enabled: false
        },
        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: "normal"
          }
        },
        series: [
          {
            name: "Grapes",
            data: [18.1, 33.7],
            color: "#6f2da8",
            index: 2
          },
          {
            name: "Banana",
            data: [15.6, 9],
            color: "#ffe135",
            index: 1
          },
          {
            name: "Mango",
            data: [14.8, 14.7],
            color: "#ff8040",
            index: 0
          }
        ]
      }
    });
  };

  useEffect(() => {
    highChartsRender();
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={barOptionsState.barOptions}
        isPureConfig={true}
      />
    </div>
  );
};

export default App;
