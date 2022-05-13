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
    },
    title: {
      display: true,
      text: '人均擁有建築用地的面積與房價所得比的對照'
    }
  },
  scales: {
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#2A303F'
      }
    },
    y2: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'right',
      ticks: {
        color: '#CB554D'
      },
      grid: {
        drawOnChartArea: false // only want the grid lines for one axis to show up
      }
    }
  }
}

const labels = ['新加坡', '台灣', '荷蘭', '日本', '德國', '美國']

export const data = {
  labels,
  datasets: [
    {
      label: '人均建築用地面積（平方公尺）',
      data: [91.75, 160.57, 373.01, 423.79, 599.11, 1355.40],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#2A303F',
      yAxisID: 'y'
    },
    {
      label: '房價所得比',
      data: [17.49, 21.81, 7.15, 11.02, 8.93, 3.96],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#CB554D',
      yAxisID: 'y2'
    }
  ]
}

function V050122 () {
  return (
  <div className="my-auto chart-wrapper">
    <Bar options={options} data={data} height={500}/>
  </div>
  )
}

export default V050122
