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
      position: 'bottom',
      labels: {
        font: {
          size: 16
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 16
        }
      }
    },
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      title: {
        display: true,
        text: '人/平方公里'
      }
    }
  }
}

const labels = ['台灣', '日本', '新加坡', '荷蘭']

export const data = {
  labels,
  datasets: [
    {
      label: '平原人口密度',
      data: [2513.73, 1153.86, 8201.23, 505.91],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#6929c4',
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
