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
        text: '人口/建地面積（km²）'
      }
    }
  }
}

const labels = ['台灣，現況', '台灣，釋放1000km²', '台灣，釋放2000km²', '台灣，釋放3000km²', '日本，現況', '新加坡，現況', '荷蘭，現況']

export const data = {
  labels,
  datasets: [
    {
      label: '建地人口密度',
      data: [6227.81, 4938.52, 4091.49, 3046.46, 2359.64, 10899.00, 2680.88],
      borderColor: 'rgba(0, 0, 0, 0)',
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
