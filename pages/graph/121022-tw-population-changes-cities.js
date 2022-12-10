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
        display: false,
        text: 'Amount'
      }
    }
  }
}

const labels = ['2020', '2025', '2030', '2035', '2040', '2045']

export const data = {
  labels,
  datasets: [
    {
      label: '連江縣',
      data: ['3213', '3924', '4583', '5250', '5838', '6270'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '金門縣',
      data: ['41293', '45202', '48492', '51253', '54289', '58052'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '宜蘭縣',
      data: ['173188', '179794', '184208', '186226', '186411', '183064'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '新竹縣',
      data: ['205151', '226895', '247004', '265105', '280030', '289211'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '苗栗縣',
      data: ['189469', '199609', '207915', '214508', '219187', '220741'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '彰化縣',
      data: ['398028', '409254', '416143', '420435', '420671', '414652'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '南投縣',
      data: ['180788', '183723', '185212', '184891', '182499', '177644'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '雲林縣',
      data: ['244324', '247276', '247627', '246239', '243202', '237248'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '嘉義縣',
      data: ['186403', '188277', '188912', '188156', '186435', '182443'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '屏東縣',
      data: ['293255', '295635', '294463', '290481', '283283', '272164'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '臺東縣',
      data: ['83686', '83714', '82697', '80532', '77193', '72858'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '花蓮縣',
      data: ['127477', '128807', '128752', '126882', '123093', '117538'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '澎湖縣',
      data: ['42399', '46408', '49838', '52801', '54435', '55147'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '基隆市',
      data: ['156833', '159089', '159811', '158540', '155084', '149209'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '新竹市',
      data: ['170571', '184196', '196343', '206571', '214138', '218128'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '嘉義市',
      data: ['100781', '103587', '105834', '106940', '106835', '105241'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '臺北市',
      data: ['1047774', '1079261', '1096308', '1099004', '1078602', '1030946'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '高雄市',
      data: ['1121240', '1156504', '1180301', '1189173', '1181044', '1153375'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '新北市',
      data: ['1603229', '1704971', '1802515', '1888286', '1955332', '1995909'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '臺中市',
      data: ['998989', '1062981', '1117353', '1158546', '1184680', '1192813'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '臺南市',
      data: ['699424', '723053', '740468', '749978', '750314', '738986'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '桃園市',
      data: ['847396', '921296', '982694', '1028636', '1059762', '1070095'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
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
