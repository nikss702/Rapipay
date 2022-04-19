import { useContext } from 'react'
import { Row, Col, CardBody, CardText } from 'reactstrap'
import Card from '@components/card-snippet'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'
import BarChart from '../../charts/chart-js/ChartjsBarChart'
import TableHover from '../../tables/reactstrap/TableHover'

import {tableHover} from '../../tables/reactstrap/TableSourceCode'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import { useSelector } from 'react-redux'

const EcommerceDashboard = () => {

  const response = useSelector(state => state.merchantsStore)
  const { colors } = useContext(ThemeColors),
  trackBgColor = '#e9ecef'
  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
          <CardMedal  merchantNameData={response}/>
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} monthData={response && response.monthData} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <OrdersBarChart warning={colors.warning.main} />
            </Col>
            <Col lg='6' md='3' xs='6'>
              <ProfitLineChart info={colors.info.main} holdTxn={response.onHoldTxn} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <Earnings success={colors.success.main} txnLimit={response.txnLimit}/>
            </Col>
          </Row>
        </Col>
        <Col lg='4' md='12'>
        <BarChart
            successColorShade={'#28dac6'}
            labelColor={'#6e6b7b'}
            tooltipShadow={'rgba(0, 0, 0, 0.25)'}
            gridLineColor={'rgba(200, 200, 200, 0.2)'}
            monthlyData={response && response.monthlyData}

          />
          </Col>  
          <Col lg='4' md='12'>
            <CardBrowserStates colors={colors} trackBgColor={trackBgColor} mdrData={response.mdrData} />
          {/* <RevenueReport primary={colors.primary.main} warning={colors.warning.main} /> */}
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' xs='12'>
        <Card title='Support Ticket' noBody>
            <CardBody> 
              <TableHover />
            </CardBody>
          </Card>
        </Col>
        <Col lg='4' md='6' xs='12'>
          <Row className='match-height'>
            <Col lg='12' md='6' xs='12'>
              <GoalOverview success={colors.success.main} />
            {/* <CardMeetup /> */}
            </Col>
            <Col lg='12' md='6' xs='12'>
              <CardTransactions />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default EcommerceDashboard
