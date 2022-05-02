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
      text: 'Chart.js Bar Chart'
    }
  }
}

const labels = ['台灣 2001,2020', '荷蘭 2000,2015', '德國 2000,2020', '日本 2001,2020', '新加坡 2000,2021', '美國 2002,2012', '挪威 2011,2021', '英國 1996,2018']

export const data = {
  labels,
  datasets: [
    {
      label: '2000年代',
      data: [155.64, 357.16, 539.78, 382.10, 109.49, 1225.92, 106547.87, 621.75],
      backgroundColor: '#CC564E'
    },
    {
      label: '最近統計',
      data: [160.57, 373.01, 599.11, 423.79, 91.75, 1355.40, 102654.41, 164.66],
      backgroundColor: '#272B3A'
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
