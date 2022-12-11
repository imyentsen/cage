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

const labels = ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041', '2042', '2043', '2044', '2045']

export const data = {
  labels,
  datasets: [
    {
      label: '戶數淨變化',
      data: [null, '122738', '122149', '132775', '112936', '101879', '117691', '143323', '150062', '131190', '120737', '128671', '99828', '96439', '86279', '92405', '87617', '85477', '98268', '82167', '88205', '83979', '86811', '80909', '78641', '76428', '68888', '64553', '64515', '59634', '52828', '52560', '44789', '39590', '41192', '33155', '25966', '20916', '16208', '7678', '4076', '-4686', '-18319', '-16639', '-25055'],
      borderColor: '#B5917375',
      backgroundColor: '#B59173',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '全國住宅存量變化',
      data: [null, null, null, null, null, null, null, null, null, '84374', '98851', '98954', '42371', '89549', '85157', '108414', '94754', '137719', '89410', '45272', '100500', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      borderColor: '#3E74C475',
      backgroundColor: '#3E74C4',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '新建待售住宅',
      data: [null, null, null, null, null, null, null, null, null, '25352', '22642', '21945', '25556', '33758', '52149', '68118', '75192', '80082', '78063', '76333', '70049', '77454', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      borderColor: '#CB554D75',
      backgroundColor: '#CB554D',
      hidden: false,
      yAxisID: 'y'
    },
    {
      label: '核發住宅建照數（棟）',
      data: [null, null, null, null, null, null, null, null, null, '25352', '22642', '21945', '25556', '33758', '52149', '68118', '75192', '80082', '78063', '76333', '70049', '77454', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      borderColor: '#CB554D75',
      backgroundColor: '#CB554D',
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
