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
      yAxisID: 'y'
    },
    {
      label: 'USA:RENT',
      data: [0.27, 0.27, 0.27, 0.28, 0.29, 0.29, 0.30, 0.31, 0.32, 0.33, 0.35, 0.36, 0.38, 0.40, 0.42, 0.45, 0.48, 0.52, 0.56, 0.60, 0.66, 0.72, 0.79, 0.87, 0.96],
      borderColor: '#945D0B75',
      backgroundColor: '#945D0B',
      yAxisID: 'y'
    },
    {
      label: 'NORWAY:BUY',
      data: [1.00, 1.05, 1.11, 1.17, 1.24, 1.30, 1.37, 1.45, 1.53, 1.61, 1.70, 1.79, 1.89, 1.99, 2.10, 2.21, 2.33, 2.46, 2.59, 2.73, 2.88, 3.04, 3.20, 3.37, 3.56],
      borderColor: '#3E88C475',
      backgroundColor: '#3E88C4',
      yAxisID: 'y'
    },
    {
      label: 'NORWAY:RENT',
      data: [0.32, 0.38, 0.46, 0.54, 0.64, 0.75, 0.88, 1.03, 1.20, 1.39, 1.62, 1.87, 2.16, 2.50, 2.88, 3.32, 3.82, 4.40, 5.06, 5.82, 6.68, 7.68, 8.82, 10.12, 11.62],
      borderColor: '#1A418D75',
      backgroundColor: '#1A418D',
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
      data: [0.33, 0.41, 0.50, 0.61, 0.73, 0.87, 1.03, 1.21, 1.42, 1.66, 1.93, 2.25, 2.61, 3.02, 3.49, 4.04, 4.66, 5.37, 6.19, 7.12, 8.19, 9.42, 10.83, 12.44, 14.29],
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
      data: [0.34, 0.43, 0.54, 0.66, 0.79, 0.95, 1.13, 1.33, 1.57, 1.84, 2.15, 2.50, 2.91, 3.38, 3.91, 4.52, 5.23, 6.03, 6.95, 8.01, 9.22, 10.60, 12.19, 14.01, 16.10],
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
      data: [0.35, 0.45, 0.56, 0.69, 0.84, 1.01, 1.21, 1.43, 1.69, 1.98, 2.32, 2.71, 3.15, 3.66, 4.24, 4.91, 5.67, 6.55, 7.56, 8.71, 10.03, 11.54, 13.27, 15.26, 17.53],
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
