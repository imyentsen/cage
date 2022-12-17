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
      stacked: true
    },
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#121212'
      },
      title: {
        display: true,
        text: '平方公里'
      },
      stacked: true
    }
  }
}

const labels = ['台灣', '荷蘭']

export const data = {
  labels,
  datasets: [
    {
      label: '國土面積',
      data: [32366.6, 35224.75],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#009d9a',
      yAxisID: 'y',
      stack: 'Stack 0'
    },
    {
      label: '建地面積',
      data: [3830.4, 6318.25],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#002d9c',
      yAxisID: 'y2',
      stack: 'Stack 0'
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
