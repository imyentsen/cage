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
      ticks: {
        color: '#121212'
      },
      title: {
        display: true,
        text: '平方公尺（m²）'
      }
    }
  }
}

const labels = ['台灣', '新加坡', '日本', '荷蘭', '德國', '美國']

export const data = {
  labels,
  datasets: [
    {
      label: '2000年代',
      data: [155.64, 109.49, 357.16, 382.10, 539.78, 1225.92],
      backgroundColor: '#6929c4',
      yAxisID: 'y'
    },
    {
      label: '~2020, 最近統計',
      data: [160.57, 91.75, 423.79, 373.01, 599.11, 1355.40],
      backgroundColor: '#1192e8',
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
