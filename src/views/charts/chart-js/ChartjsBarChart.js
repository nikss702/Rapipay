import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, ButtonGroup, Button } from 'reactstrap'
import { useState } from 'react'
import { useEffect } from 'react'

const calcData = (monthlyData, successColorShade, tabName) => {
  let xAxesData = [];
  let yAxesData = [];

  for (var i = 0; i < monthlyData.length; i++) {
    let xdata=""
    xdata=xdata.concat(monthlyData[i]['month'],"/21")
    xAxesData.push(xdata);
    yAxesData.push(parseFloat(monthlyData[i][tabName === "txnAmount" ? 'txnAmount' : 'totalTxnCount']));
  }
  console.log(xAxesData);
  yAxesData = yAxesData.filter(el=>!isNaN(el))
  const max = Math.max.apply(Math, yAxesData)
  const data = {
    labels: xAxesData,
    datasets: [
      {
        data: yAxesData,
        backgroundColor: successColorShade,
        borderColor: 'transparent',
        barThickness: 15
      }
    ]
  }

  const stepSize = (tabName === "txnAmount" ? 500 : 50)
  return {data, max : max + stepSize - (max % stepSize), stepSize}
}
const ChartjsBarChart = ({ tooltipShadow, gridLineColor, labelColor, successColorShade, monthlyData }) => {

  const [graphData, setData] = useState(null);
  const [max, setMax] = useState(4000);
  const [stepSize, setStepSize] = useState(500);
  const [activeTab, setActive] = useState('txnAmount');

  useEffect(() => {
    const {data, max, stepSize} = calcData(monthlyData, successColorShade, activeTab)
    setMax(max);
    setStepSize(stepSize);
    setData(data);
  }, [monthlyData])

  const changeTab = (tabName) => {
    setActive(tabName);
    const {data, max, stepSize} = calcData(monthlyData, successColorShade, tabName);
    setMax(max);
    setStepSize(stepSize);
    setData(data);
  }

  const options = {
    elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'bottom'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      display: false
    },
    tooltips: {
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 8,
      shadowColor: tooltipShadow,
      backgroundColor: '#fff',
      titleFontColor: '#000',
      bodyFontColor: '#000'
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: true,
            color: gridLineColor,
            zeroLineColor: gridLineColor
          },
          scaleLabel: {
            display: false
          },
          ticks: {
            fontColor: labelColor
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            color: gridLineColor,
            zeroLineColor: gridLineColor
          },
          ticks: {
            stepSize: stepSize,
            min: 0,
            max: max,
            fontColor: labelColor
          }
        }
      ]
    }
  };

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>Latest Statistics</CardTitle>
        <ButtonGroup className='mt-md-0 mt-1'>
          <Button  active={activeTab === "txnAmount"} color='primary' outline onClick={() => changeTab('txnAmount')}>
            Amount
          </Button>
          <Button active={activeTab === 'totalTxnCount'} color='primary' outline onClick={() => changeTab('totalTxnCount')}>
            Count
          </Button>
        </ButtonGroup>
      </CardHeader>
      <CardBody>
        {!!graphData && <div style={{ height: '300px' }}>
          <Bar data={graphData} options={options} height={200} />
        </div>}
      </CardBody>
    </Card>
  )
}

export default ChartjsBarChart
