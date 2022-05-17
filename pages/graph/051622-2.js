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
      data: [0.27, 0.26, 0.26, 0.26, 0.26, 0.26, 0.25, 0.25, 0.25, 0.24, 0.24, 0.23, 0.23, 0.22, 0.21, 0.20, 0.20, 0.19, 0.17, 0.16, 0.15, 0.13, 0.11, 0.09, 0.07],
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
      data: [0.32, 0.38, 0.44, 0.52, 0.60, 0.69, 0.80, 0.92, 1.05, 1.20, 1.37, 1.56, 1.77, 2.01, 2.28, 2.59, 2.93, 3.31, 3.75, 4.23, 4.78, 5.40, 6.09, 6.87, 7.75],
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
      data: [0.33, 0.41, 0.49, 0.58, 0.69, 0.80, 0.94, 1.08, 1.25, 1.44, 1.65, 1.89, 2.16, 2.46, 2.80, 3.18, 3.61, 4.10, 4.64, 5.25, 5.94, 6.72, 7.59, 8.57, 9.67],
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
      data: [0.34, 0.42, 0.52, 0.62, 0.74, 0.88, 1.03, 1.20, 1.39, 1.60, 1.85, 2.12, 2.42, 2.77, 3.15, 3.59, 4.08, 4.63, 5.25, 5.95, 6.73, 7.61, 8.61, 9.72, 10.98],
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
      data: [0.35, 0.44, 0.54, 0.66, 0.79, 0.94, 1.10, 1.29, 1.50, 1.73, 2.00, 2.30, 2.63, 3.01, 3.43, 3.91, 4.45, 5.05, 5.73, 6.49, 7.35, 8.32, 9.41, 10.64, 12.01],
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
