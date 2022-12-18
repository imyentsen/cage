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
      },
      title: {
        display: true,
        text: '釋放農地面積',
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
        text: '每平方公里建地人口密度'
      }
    }
  }
}

const labels = ['台灣', '日本', '新加坡', '荷蘭']

export const data = {
  labels,
  datasets: [
    {
      label: '現況',
      data: [40.36, 48.90, 75.25, 18.85],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#6929c4',
      yAxisID: 'y'
    },
    {
      label: '釋放1000km²',
      data: [50.90],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#1192e8',
      yAxisID: 'y'
    },
    {
      label: '釋放2000km²',
      data: [61.44],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#005d5d',
      yAxisID: 'y'
    },
    {
      label: '釋放3000km²',
      data: [82.51],
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
