import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
const PieChart = ({citydata}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ['Rajahmundry', 'Kakinada', 'Pithapuram'],
        datasets: [
          {
            data: citydata,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)"
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: false,
          outlabels: {
            text: "%l %p",
            color: "white",
            stretch: 35,
            font: {
              resizable: false,
              minSize: 12,
              maxSize: 18,
            },
          },
        },
      },
    });
  }, [citydata]);
  return (
    <div className="flex justify-center md:w-2/3 w-1/2">
      <canvas className="p-3 md:w-[200px] w-1/2" ref={chartRef} />
    </div>
  );
};

export default PieChart;
