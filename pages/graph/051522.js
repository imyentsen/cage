import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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


const labels = ['2000年代', '最近統計']

export const data = {
  labels,
  datasets: [
    {
      label: '新加坡',
      data: [109.49, 91.75],
      borderColor: '#B59173',
      backgroundColor: '#B59173',
      yAxisID: 'y'
    },
    {
      label: '台灣',
      data: [155.64, 160.57],
      borderColor: '#D85D88',
      backgroundColor: '#D85D88',
      yAxisID: 'y'
    },
    {
      label: '日本',
      data: [357.16, 423.79],
      borderColor: '#CB554D',
      backgroundColor: '#CB554D',
      yAxisID: 'y'
    },
    {
      label: '荷蘭',
      data: [382.10, 373.01],
      borderColor: '#72B3C5',
      backgroundColor: '#72B3C5',
      yAxisID: 'y'
    },
    {
      label: '德國',
      data: [539.78, 599.11],
      borderColor: '#357955',
      backgroundColor: '#357955',
      yAxisID: 'y'
    },
    {
      label: '美國',
      data: [1225.92, 1355.40],
      borderColor: '#384C73',
      backgroundColor: '#384C73',
      yAxisID: 'y'
    },
  ]
}

function V050122 () {
  return (
  <div className="my-auto chart-wrapper">
    <Line options={options} data={data} height={500}/>
  </div>
  )
}

export default V050122
