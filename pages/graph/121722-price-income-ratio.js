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
        text: '每平方公里人口數'
      }
    },
    y2: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'right',
      ticks: {
        color: '#002d9c'
      },
      title: {
        display: true,
        text: '房價/年所得'
      },
      grid: {
        drawOnChartArea: false // only want the grid lines for one axis to show up
      }
    }
  }
}

const labels = ['台灣', '新加坡', '荷蘭', '日本', '德國', '美國']

export const data = {
  labels,
  datasets: [
    {
      label: '每平方公里人口數',
      data: [6227.81, 10899.00, 2680.88, 2359.66, 1669.14, 737.79],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#009d9a',
      yAxisID: 'y'
    },
    {
      label: '房價所得比',
      data: [21.81, 17.49, 7.15, 11.02, 8.93, 3.96],
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: '#002d9c',
      yAxisID: 'y2'
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
