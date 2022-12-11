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
    }
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '年'
      }
    },
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#121212'
      },
      grid: {
        lineWidth: function (context) {
          if (context.tick.value === 0) {
            return '3'
          }
          return '1'
        }
      },
      color: {
        lineWidth: function (context) {
          if (context.tick.value === 0) {
            return '#111'
          }
          return 'rgba(0, 0, 0, 0.1)'
        }
      },
      title: {
        display: true,
        text: '戶數變化率（%）'
      }
    }
  }
}

const labels = ['2020', '2025', '2030', '2035', '2040', '2045', '2050']

export const data = {
  labels,
  datasets: [
    {
      label: '基隆市',
      data: [null, '1.44', '0.45', '-0.80', '-2.18', '-3.79', null],
      borderColor: '#29DD9C75',
      backgroundColor: '#29DD9C',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '臺北市',
      data: [null, '3.01', '1.58', '0.25', '-1.86', '-4.42', null],
      borderColor: '#1F8AA075',
      backgroundColor: '#1F8AA0',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '新北市',
      data: [null, '6.35', '5.72', '4.76', '3.55', '2.08', null],
      borderColor: '#11860775',
      backgroundColor: '#118607',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '桃園市',
      data: [null, '8.72', '6.66', '4.68', '3.03', '0.98', null],
      borderColor: '#945D0B75',
      backgroundColor: '#945D0B',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '新竹市',
      data: [null, '7.99', '6.59', '5.21', '3.66', '1.86', null],
      borderColor: '#C99C0675',
      backgroundColor: '#C99C06',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '新竹縣',
      data: [null, '10.60', '8.86', '7.33', '5.63', '3.28', null],
      borderColor: '#BA290975',
      backgroundColor: '#BA2909',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '宜蘭縣',
      data: [null, '3.81', '2.46', '1.10', '0.10', '-1.80', null],
      borderColor: '#41000075',
      backgroundColor: '#410000',
      hidden: true,
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
