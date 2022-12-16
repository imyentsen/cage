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
      display: false,
      text: '台灣的戶數淨變化與住宅存量、新建餘屋數變化比較',
      font: {
        size: 20
      }
    },
    subtitle: {
      display: true,
      text: '資料來源：國發會委託政大社會系《我國區域層級之家户推計模擬》'
    },
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
      display: true
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
      title: {
        display: false,
        text: 'Amount'
      }
    }
  }
}

const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041', '2042', '2043', '2044', '2045', '2046']

export const data = {
  labels,
  datasets: [
    {
      label: '過往戶數淨變化',
      data: [null, '120737', '128671', '99828', '96439', '86279', '92405', '87617', '85477', '98268', '82167', '88205', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      borderColor: '#6929c475',
      backgroundColor: '#6929c4',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '國發會預測戶數淨變化',
      data: [null, null, null, null, null, null, null, null, null, null, null, '88205', '83979', '86811', '80909', '78641', '76428', '68888', '64553', '64515', '59634', '52828', '52560', '44789', '39590', '41192', '33155', '25966', '20916', '16208', '7678', '4076', '-4686', '-18319', '-16639', '-25055', null],
      borderColor: '#a56eff75',
      backgroundColor: '#a56eff',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '全國住宅存量變化',
      data: [null, '68507', '91002', '84923', '90256', '84773', '108950', '93218', '138473', '90445', '97128', '101239', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      borderColor: '#1192e875',
      backgroundColor: '#1192e8',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '新建餘屋數',
      data: [null, '24397', '27287', '34223', '45144', '63340', '75915', '78715', '78687', '77374', '73679', '74927', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      borderColor: '#005d5d75',
      backgroundColor: '#005d5d',
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
