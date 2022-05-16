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
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'USA:RENT',
      data: [0.27, 0.25, 0.24, 0.22, 0.21, 0.19, 0.17, 0.15, 0.13, 0.11, 0.08, 0.05, 0.02, -0.01, -0.05, -0.08, -0.13, -0.17, -0.22, -0.27, -0.33, -0.39, -0.46, -0.53, -0.61],
      borderColor: '#945D0B75',
      backgroundColor: '#945D0B',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'NORWAY:BUY',
      data: [1.00, 1.05, 1.11, 1.17, 1.24, 1.30, 1.37, 1.45, 1.53, 1.61, 1.70, 1.79, 1.89, 1.99, 2.10, 2.21, 2.33, 2.46, 2.59, 2.73, 2.88, 3.04, 3.20, 3.37, 3.56],
      borderColor: '#3E88C475',
      backgroundColor: '#3E88C4',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'NORWAY:RENT',
      data: [0.32, 0.36, 0.41, 0.47, 0.52, 0.59, 0.65, 0.73, 0.81, 0.89, 0.99, 1.09, 1.20, 1.32, 1.45, 1.59, 1.74, 1.90, 2.08, 2.27, 2.48, 2.71, 2.95, 3.22, 3.51],
      borderColor: '#1A418D75',
      backgroundColor: '#1A418D',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'JAPAN:BUY',
      data: [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
      borderColor: '#CB554D75',
      backgroundColor: '#CB554D',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'JAPAN:RENT',
      data: [0.33, 0.39, 0.46, 0.53, 0.60, 0.69, 0.77, 0.87, 0.98, 1.09, 1.21, 1.35, 1.49, 1.65, 1.82, 2.00, 2.20, 2.42, 2.66, 2.91, 3.19, 3.48, 3.81, 4.16, 4.54],
      borderColor: '#BA290975',
      backgroundColor: '#BA2909',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'TAIWAN:BUY',
      data: [1.00, 1.06, 1.13, 1.20, 1.28, 1.36, 1.45, 1.54, 1.63, 1.74, 1.85, 1.97, 2.09, 2.22, 2.36, 2.51, 2.67, 2.84, 3.02, 3.21, 3.42, 3.63, 3.86, 4.11, 4.37],
      borderColor: '#4D896D75',
      backgroundColor: '#4D896D',
      yAxisID: 'y'
    },
    {
      label: 'TAIWAN:RENT',
      data: [0.34, 0.41, 0.49, 0.57, 0.66, 0.75, 0.86, 0.97, 1.09, 1.22, 1.37, 1.52, 1.69, 1.88, 2.07, 2.29, 2.52, 2.77, 3.05, 3.34, 3.66, 4.01, 4.39, 4.80, 5.24],
      borderColor: '#07864675',
      backgroundColor: '#078646',
      yAxisID: 'y'
    },
    {
      label: 'KOREA:BUY',
      data: [1.00, 1.04, 1.08, 1.12, 1.16, 1.21, 1.25, 1.30, 1.35, 1.40, 1.45, 1.51, 1.57, 1.63, 1.69, 1.75, 1.82, 1.89, 1.96, 2.04, 2.12, 2.20, 2.28, 2.37, 2.46],
      borderColor: '#9270A075',
      backgroundColor: '#9270A0',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'KOREA:RENT',
      data: [0.35, 0.43, 0.51, 0.60, 0.70, 0.81, 0.92, 1.05, 1.18, 1.33, 1.49, 1.66, 1.85, 2.05, 2.27, 2.51, 2.77, 3.05, 3.36, 3.68, 4.04, 4.43, 4.85, 5.30, 5.79],
      borderColor: '#500E6D75',
      backgroundColor: '#500E6D',
      hidden: true,
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
