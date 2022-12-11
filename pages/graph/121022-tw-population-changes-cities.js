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
      },
      grid: {
        color: function(context) {
          if (context.tick.value = 0) {
            return Utils.CHART_COLORS.red;
          }
        }
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
      data: ['711', '659', '667', '588', '432'],
      borderColor: '#E5923075',
      backgroundColor: '#E59230',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '金門縣',
      data: ['3909', '3290', '2761', '3036', '3763'],
      borderColor: '#30DBE575',
      backgroundColor: '#30DBE5',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '宜蘭縣',
      data: ['6606', '4414', '2018', '185', '-3347'],
      borderColor: '#41000075',
      backgroundColor: '#410000',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '新竹縣',
      data: ['21744', '20109', '18101', '14925', '9181'],
      borderColor: '#BA290975',
      backgroundColor: '#BA2909',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '苗栗縣',
      data: ['10140', '8306', '6593', '4679', '1554'],
      borderColor: '#67676775',
      backgroundColor: '#676767',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '彰化縣',
      data: ['11226', '6889', '4292', '236', '-6019'],
      borderColor: '#11860775',
      backgroundColor: '#118607',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '南投縣',
      data: ['2935', '1489', '-321', '-2392', '-4855'],
      borderColor: '#7F00AB75',
      backgroundColor: '#7F00AB',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '雲林縣',
      data: ['2952', '351', '-1388', '-3037', '-5954'],
      borderColor: '#B5917375',
      backgroundColor: '#14451E',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '嘉義縣',
      data: ['1874', '635', '-756', '-1721', '-3992'],
      borderColor: '#FF636375',
      backgroundColor: '#FF6363',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '屏東縣',
      data: ['2380', '-1172', '-3982', '-7198', '-11119'],
      borderColor: '#040A4875',
      backgroundColor: '#040A48',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '臺東縣',
      data: ['28', '-1017', '-2165', '-3339', '-4335'],
      borderColor: '#A7D62175',
      backgroundColor: '#A7D621',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '花蓮縣',
      data: ['1330', '-55', '-1870', '-3789', '-5555'],
      borderColor: '#5260E275',
      backgroundColor: '#5260E2',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '澎湖縣',
      data: ['4009', '3430', '2963', '1634', '712'],
      borderColor: '#45232275',
      backgroundColor: '#452322',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '基隆市',
      data: ['2256', '722', '-1271', '-3456', '-5875'],
      borderColor: '#29DD9C75',
      backgroundColor: '#29DD9C',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '新竹市',
      data: ['13625', '12147', '10228', '7567', '3990'],
      borderColor: '#C99C0675',
      backgroundColor: '#C99C06',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '嘉義市',
      data: ['2806', '2247', '1106', '-105', '-1594'],
      borderColor: '#D7376F75',
      backgroundColor: '#D7376F',
      hidden: true,
      yAxisID: 'y'
    },
    {
      label: '臺北市',
      data: ['31487', '17047', '2696', '-20402', '-47656'],
      borderColor: '#1F8AA075',
      backgroundColor: '#1F8AA0',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '高雄市',
      data: ['35264', '23797', '8872', '-8129', '-27669'],
      borderColor: '#500E6D75',
      backgroundColor: '#500E6D',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '新北市',
      data: ['101742', '97544', '85771', '67046', '40577'],
      borderColor: '#11860775',
      backgroundColor: '#118607',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '臺中市',
      data: ['63992', '54372', '41193', '26134', '8133'],
      borderColor: '#BA290975',
      backgroundColor: '#BA2909',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '臺南市',
      data: ['23629', '17415', '9510', '336', '-11328'],
      borderColor: '#1A418D75',
      backgroundColor: '#1A418D',
      hidden: false,
      pointStyle: 'rect',
      usePointStyle: true,
      yAxisID: 'y'
    },
    {
      label: '桃園市',
      data: ['73900', '61398', '45942', '31126', '10333'],
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
