import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const ProfitLineChart = ({ info,holdTxn}) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/profit-line-chart').then(res => setData(res.data))
  }, [])

  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    grid: {
      borderColor: '#EBEBEB',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: -30,
        bottom: -10
      }
    },
    stroke: {
      width: 3
    },
    colors: [info],
    series: [
      {
        data: [0, 20, 5, 30, 15, 45]
      }
    ],
    markers: {
      size: 2,
      colors: info,
      strokeColors: info,
      strokeWidth: 2,
      strokeOpacity: 1,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: '#ffffff',
          strokeColor: info,
          size: 5
        }
      ],
      shape: 'circle',
      radius: 2,
      hover: {
        size: 3
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontSize: '0px'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    tooltip: {
      x: {
        show: false
      }
    }
  }

  return data !== null ? (
    <Card className='card-transaction'>
      <CardHeader>
      <CardTitle tag='h4'>Hold Txn</CardTitle>
        {/* <Icon.MoreVertical size={18} className='cursor-pointer' /> */}
      </CardHeader>
      <CardBody> 
      
        
        <h4 className='mb-75 mt-2 pt-50'>
            <a href='/' onClick={e => e.preventDefault()}>
            &#8377; {holdTxn.txnValue}
            </a>
        </h4>
      </CardBody>
  </Card>
  ) : null
}

export default ProfitLineChart
