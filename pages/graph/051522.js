import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      },
      title: {
        display: true,
        text: 'Square meter(m²)'
      }
    }
  }
}

const labels = ['Taiwan', 'Singapore', 'Japan', 'Netherlands', 'Germany', 'USA']

export const data = {
  labels,
  datasets: [
    {
      label: '2000',
      data: [155.64, 109.49, 357.16, 382.10, 539.78, 1225.92],
      backgroundColor: '#B59173',
      yAxisID: 'y'
    },
    {
      label: '~2020 (Most recent year)',
      data: [160.57, 91.75, 423.79, 373.01, 599.11, 1355.40],
      backgroundColor: '#2A303F',
      yAxisID: 'y'
    }
  ]
}

function GRAPH () {
  return (
  <div className="my-auto chart-wrapper bg-white">
    <Bar options={options} data={data} height={500}/>
  </div>
  )
}

export default GRAPH
