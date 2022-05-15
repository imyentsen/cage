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
import { Bar } from 'react-chartjs-2'

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
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#121212'
      }
    }
  }
}

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']

export const data = {
  labels,
  datasets: [
    {
      label: 'USA:BUY',
      data: [1.00, 1.04, 1.08, 1.12, 1.17, 1.21, 1.26, 1.31, 1.36, 1.42, 1.47, 1.53, 1.59, 1.65, 1.72, 1.79, 1.86, 1.93, 2.01, 2.09, 2.17, 2.26, 2.34, 2.44, 2.53],
      borderColor: '#CB554D',
      backgroundColor: '#CB554D',
      yAxisID: 'y'
    },
    {
      label: 'USA:RENT',
      data: [0.27, 0.27, 0.27, 0.28, 0.29, 0.29, 0.30, 0.31, 0.32, 0.33, 0.35, 0.36, 0.38, 0.40, 0.42, 0.45, 0.48, 0.52, 0.56, 0.60, 0.66, 0.72, 0.79, 0.87, 0.96],
      borderColor: '#601E21',
      backgroundColor: '#601E21',
      yAxisID: 'y'
    },
    {
      label: 'NORWAY:BUY',
      data: [1.00, 1.05, 1.11, 1.17, 1.24, 1.30, 1.37, 1.45, 1.53, 1.61, 1.70, 1.79, 1.89, 1.99, 2.10, 2.21, 2.33, 2.46, 2.59, 2.73, 2.88, 3.04, 3.20, 3.37, 3.56],
      borderColor: '#3E88C4',
      backgroundColor: '#3E88C4',
      yAxisID: 'y'
    },
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
