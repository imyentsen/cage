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
        color: '#2A303F'
      },
      title: {
        display: true,
        text: 'Square meter(m²)'
      }
    }
  }
}

const labels = ['2025', '2030', '2035', '2040', '2045']

export const data = {
  labels,
  datasets: [
    {
      label: '花蓮縣',
      data: ['1.04', '-0.04', '-1.45', '-2.99', '-4.51'],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#2A303F',
      yAxisID: 'y'
    },
    {
      label: '臺東縣',
      data: ['0.03', '-1.21', '-2.62', '-4.15', '-5.62'],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#CB554D',
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
