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
        text: 'Year'
      }
    },
    y: {
      type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
      position: 'left',
      ticks: {
        color: '#121212'
      },
      title: {
        display: true,
        text: 'Percentage'
      }
    }
  }
}

const labels = ['2020-25', '2025-30', '2030-35', '2035-40', '2040-45']

export const data = {
  labels,
  datasets: [
    {
      label: '連江縣',
      data: ['22.13', '16.79', '14.55', '11.20', '7.40'],
      borderColor: '#E5923075',
      backgroundColor: '#E59230',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '金門縣',
      data: ['9.47', '7.28', '5.69', '5.92', '6.93'],
      borderColor: '#30DBE575',
      backgroundColor: '#30DBE5',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '宜蘭縣',
      data: ['3.81', '2.46', '1.10', '0.10', '-1.80'],
      borderColor: '#41000075',
      backgroundColor: '#410000',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '新竹縣',
      data: ['10.60', '8.86', '7.33', '5.63', '3.28'],
      borderColor: '#BA290975',
      backgroundColor: '#BA2909',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '苗栗縣',
      data: ['5.35', '4.16', '3.17', '2.18', '0.71'],
      borderColor: '#67676775',
      backgroundColor: '#676767',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '彰化縣',
      data: ['2.82', '1.68', '1.03', '0.06', '-1.43'],
      borderColor: '#11860775',
      backgroundColor: '#118607',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '南投縣',
      data: ['1.62', '0.81', '-0.17', '-1.29', '-2.66'],
      borderColor: '#7F00AB75',
      backgroundColor: '#7F00AB',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '雲林縣',
      data: ['1.21', '0.14', '-0.56', '-1.23', '-2.45'],
      borderColor: '#B5917375',
      backgroundColor: '#14451E',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '嘉義縣',
      data: ['1.01', '0.34', '-0.40', '-0.91', '-2.14'],
      borderColor: '#FF636375',
      backgroundColor: '#FF6363',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '屏東縣',
      data: ['0.81', '-0.40', '-1.35', '-2.48', '-3.93'],
      borderColor: '#040A4875',
      backgroundColor: '#040A48',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '臺東縣',
      data: ['0.03', '-1.21', '-2.62', '-4.15', '-5.62'],
      borderColor: '#A7D62175',
      backgroundColor: '#A7D621',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '花蓮縣',
      data: ['1.04', '-0.04', '-1.45', '-2.99', '-4.51'],
      borderColor: '#5260E275',
      backgroundColor: '#5260E2',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '澎湖縣',
      data: ['9.46', '7.39', '5.95', '3.09', '1.31'],
      borderColor: '#45232275',
      backgroundColor: '#452322',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '基隆市',
      data: ['1.44', '0.45', '-0.80', '-2.18', '-3.79'],
      borderColor: '#29DD9C75',
      backgroundColor: '#29DD9C',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '新竹市',
      data: ['7.99', '6.59', '5.21', '3.66', '1.86'],
      borderColor: '#C99C0675',
      backgroundColor: '#C99C06',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '嘉義市',
      data: ['2.78', '2.17', '1.05', '-0.10', '-1.49'],
      borderColor: '#D7376F75',
      backgroundColor: '#D7376F',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '臺北市',
      data: ['3.01', '1.58', '0.25', '-1.86', '-4.42'],
      borderColor: '#1F8AA075',
      backgroundColor: '#1F8AA0',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '高雄市',
      data: ['3.15', '2.06', '0.75', '-0.68', '-2.34'],
      borderColor: '#500E6D75',
      backgroundColor: '#500E6D',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '新北市',
      data: ['6.35', '5.72', '4.76', '3.55', '2.08'],
      borderColor: '#11860775',
      backgroundColor: '#118607',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '臺中市',
      data: ['6.41', '5.12', '3.69', '2.26', '0.69'],
      borderColor: '#BA290975',
      backgroundColor: '#BA2909',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '臺南市',
      data: ['3.38', '2.41', '1.28', '0.04', '-1.51'],
      borderColor: '#1A418D75',
      backgroundColor: '#1A418D',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '桃園市',
      data: ['8.72', '6.66', '4.68', '3.03', '0.98'],
      borderColor: '#945D0B75',
      backgroundColor: '#945D0B',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
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
