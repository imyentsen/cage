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
        color: '#009d9a'
      },
      title: {
        display: true,
        text: '百分比'
      }
    }
  }
}

const labels = ['台灣', '釋放1000km²', '釋放2000km²', '釋放3000km²', '日本', '新加坡', '荷蘭']

export const data = {
  labels,
  datasets: [
    {
      label: '現況',
      data: [40.36, 50.90, 61.44, 82.51, 48.90, 75.25, 18.85],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#009d9a',
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
