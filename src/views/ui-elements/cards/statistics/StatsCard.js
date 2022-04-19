import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const StatsCard = (props) => {
  const data = [
    {
      title: props.monthData && props.monthData.txnValue,
      subtitle: 'M Till Date',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: props.monthData && props.monthData.t1SettledAmount,
      subtitle: 'Settled',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: props.monthData && props.monthData.deduction,
      subtitle: 'Deduction',
      color: 'light-danger',
      icon: <Box size={24} />
    },
    {
      title: props.monthData && props.monthData.chargeback,
      subtitle: 'Chargeback',
      color: 'light-success',
      icon: <DollarSign size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(props.cols)
      return (
        <Col
          key={index}
          {...props.cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>&#8377;{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        {/* <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText> */}
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
