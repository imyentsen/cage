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
        display: true,
        text: 'Year'
      }
    },
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#121212'
      },
      title: {
        display: true,
        text: 'Suppose 1 = money required for buying an average house'
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
      data: [0.27, 0.25, 0.24, 0.23, 0.21, 0.19, 0.17, 0.15, 0.13, 0.11, 0.08, 0.06, 0.03, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: '#945D0B75',
      backgroundColor: '#945D0B',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'NORWAY:BUY',
      data: [1.00, 1.05, 1.11, 1.17, 1.24, 1.30, 1.37, 1.45, 1.53, 1.61, 1.70, 1.79, 1.89, 1.99, 2.10, 2.21, 2.33, 2.46, 2.59, 2.73, 2.88, 3.04, 3.20, 3.37, 3.56],
      borderColor: '#3E74C475',
      backgroundColor: '#3E74C4',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'NORWAY:RENT',
      data: [0.32, 0.36, 0.41, 0.47, 0.53, 0.59, 0.66, 0.73, 0.81, 0.90, 1.00, 1.10, 1.21, 1.33, 1.47, 1.61, 1.76, 1.93, 2.12, 2.31, 2.53, 2.76, 3.02, 3.29, 3.59],
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
      data: [0.33, 0.39, 0.46, 0.53, 0.61, 0.69, 0.78, 0.88, 0.98, 1.10, 1.23, 1.36, 1.51, 1.67, 1.84, 2.03, 2.24, 2.46, 2.70, 2.96, 3.24, 3.55, 3.89, 4.25, 4.64],
      borderColor: '#BA290975',
      backgroundColor: '#BA2909',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: 'TAIWAN:BUY',
      data: [1.00, 1.06, 1.13, 1.20, 1.28, 1.36, 1.45, 1.54, 1.63, 1.74, 1.85, 1.97, 2.09, 2.22, 2.36, 2.51, 2.67, 2.84, 3.02, 3.21, 3.42, 3.63, 3.86, 4.11, 4.37],
      borderColor: '#5EAF8475',
      backgroundColor: '#5EAF84',
      yAxisID: 'y'
    },
    {
      label: 'TAIWAN:RENT',
      data: [0.34, 0.41, 0.49, 0.57, 0.66, 0.76, 0.86, 0.98, 1.10, 1.23, 1.38, 1.54, 1.71, 1.90, 2.10, 2.32, 2.56, 2.81, 3.10, 3.40, 3.73, 4.09, 4.48, 4.90, 5.35],
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
      data: [0.35, 0.43, 0.51, 0.60, 0.70, 0.81, 0.93, 1.05, 1.19, 1.34, 1.50, 1.68, 1.87, 2.08, 2.30, 2.55, 2.81, 3.10, 3.41, 3.75, 4.11, 4.51, 4.94, 5.41, 5.92],
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
