import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    }
  },
  scales: {
    x: {
      display: true,
      title: {
        display: false,
        text: 'Year'
      }
    },
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      min: 0,
      ticks: {
        color: '#121212'
      },
      title: {
        display: false,
        text: 'Population'
      },
    }
  }
}

const labels = ['2002', '2012', '2022', '2032', '2042']

export const data = {
  labels,
  datasets: [
    {
      label: '首購族人口數',
      data: [7392380, 7156745, 6372863, 5073447, 3987642],
      borderColor: '#6929c475',
      backgroundColor: '#6929c4',
      hidden: false,
      fill: true;
      yAxisID: 'y'
    }
  ]
}

function GRAPH () {
  return (
  <div className="my-auto chart-wrapper bg-white">
    <Line options={options} data={data} height={500}/>
  </div>
  )
}

export default GRAPH
