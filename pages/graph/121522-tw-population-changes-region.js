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
    title: {
      display: true,
      text: '台灣不同區域的戶數增幅',
      font: {
        size: 20
      }
    },
    legend: {
      position: 'bottom'
    }
  },
  scales: {
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#2A303F'
      },
      title: {
        display: true,
        text: '戶數變化率（％）'
      }
    }
  }
}

const labels = ['2025', '2030', '2035', '2040', '2045']

export const data = {
  labels,
  datasets: [
    {
      label: '全國',
      data: ['4.69', '3.58', '2.39', '1.05', '-0.61'],
      borderColor: '#6929c475',
      backgroundColor: '#6929c4',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '臺北市',
      data: ['3.01', '1.58', '0.25', '-1.86', '-4.42'],
      borderColor: '#1192e875',
      backgroundColor: '#1192e8',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '新北市',
      data: ['6.35', '5.72', '4.76', '3.55', '2.08'],
      borderColor: '#005d5d75',
      backgroundColor: '#005d5d',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '桃園市',
      data: ['8.72', '6.66', '4.68', '3.03', '0.98'],
      borderColor: '#9f185375',
      backgroundColor: '#9f1853',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '臺中市',
      data: ['6.41', '5.12', '3.69', '2.26', '0.69'],
      borderColor: '#fa4d5675',
      backgroundColor: '#fa4d56',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '臺南市',
      data: ['3.38', '2.41', '1.28', '0.04', '-1.51'],
      borderColor: '#57040875',
      backgroundColor: '#570408',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '高雄市',
      data: ['3.15', '2.06', '0.75', '-0.68', '-2.34'],
      borderColor: '#19803875',
      backgroundColor: '#198038',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '非六都',
      data: ['3.41', '2.33', '1.35', '0.28', '-1.18'],
      borderColor: '#002d9c75',
      backgroundColor: '#002d9c',
      hidden: false,
      yAxisID: 'y'
    }
  ]
}

function GRAPH () {
  return (
  <div className="my-auto chart-wrapper bg-white">
    <Line options={options} data={data} height={500}/>
  </div>
  )
}

export default GRAPH
