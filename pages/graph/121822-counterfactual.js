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
      display: false
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
        text: '百分比（%）'
      },
      max: 100,
      min: 0
    }
  }
}

const labels = ['台灣，現況', '台灣，釋放1000km²', '台灣，釋放2000km²', '台灣，釋放3000km²', '日本，現況', '新加坡，現況', '荷蘭，現況']

export const data = {
  labels,
  datasets: [
    {
      label: '現況',
      data: [40.36, 50.90, 61.44, 71.98, 48.90, 75.25, 18.85],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#9f1853',
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
