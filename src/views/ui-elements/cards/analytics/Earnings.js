
import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'
const Earnings = ({ success ,txnLimit}) => {
  const donutColors = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  }
  const options = {
    legend: {
      show: false,
      position: 'bottom'
    },
    labels: ['Operational', 'Networking', 'Hiring', 'R&D'],

    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter(val, opt) {
        return `${parseInt(val)}%`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
              formatter(val) {
                return `${parseInt(val)}%`
              }
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'Operational',
              formatter(w) {
                return '31%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          }
          // legend: {
          //   position: 'bottom'
          // }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  const series = [85, 16, 50, 50];


  return (
    <Card className='earnings-card'>
      <CardBody>
        <Row>
          <Col xs='6'>
            <CardTitle className='mb-1'>Txn Limit</CardTitle>
            <div className='font-small-2'>Monthly Txn Limit for MID</div>
            {txnLimit.mechantTxnLimit && <span className='font-small-2'><strong> {txnLimit.mechantTxnLimit.consumedAnnualLimitMerchant }/{txnLimit.mechantTxnLimit.txnLimitAnnualMerchant }</strong></span>}
          </Col>
          <Col xs='6'>
            <Chart options={options} series={series} type='donut' height={180} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Earnings
