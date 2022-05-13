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
      text: '人均擁有建築用地的面積（平方公尺）'
    }
  },
  scales: {
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#CC564E'
      }
    },
    y2: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'right',
      ticks: {
        color: '#357955'
      },
      grid: {
        drawOnChartArea: false // only want the grid lines for one axis to show up
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
      backgroundColor: '#CC564E',
      yAxisID: 'y'
    },
    {
      label: '最近統計',
      data: [160.57, 91.75, 423.79, 373.01, 599.11, 1355.40],
      backgroundColor: '#272B3A',
      yAxisID: 'y'
    },
    {
      type: 'scatter',
      label: '房價所得比',
      data: [21.81, 17.49, 11.02, 7.15, 8.93, 3.96],
      backgroundColor: '#357955',
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
