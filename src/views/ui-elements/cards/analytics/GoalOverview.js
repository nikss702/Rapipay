import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { HelpCircle } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const GoalOverview = props => {
  const [data, setData] = useState(null)
  const transactionsArr = [
    {
      title: <Link to="/dashboard/soa">Statements Of Account</Link>,
      color: 'light-primary',
      subtitle: 'Starbucks',
      amount: '- $74',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: <Link to="/dashboard/plans">My Plans</Link>, 
      color: 'light-success',
      subtitle: 'Add Money',
      amount: '+ $480',
      Icon: Icon['Check']
    },
    {
      title: 'Invoices',
      color: 'light-danger',
      subtitle: 'Add Money',
      amount: '+ $590',
      Icon: Icon['DollarSign']
    },
    {
      title: 'Summary',
      color: 'light-warning',
      subtitle: 'Ordered Food',
      amount: '- $12',
      Icon: Icon['CreditCard'],
      down: true
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <Media className='align-items-center'>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <Media body>
              <h6 className='transaction-title'>{item.title}</h6>
              {/* <small>{item.subtitle}</small> */}
            </Media>
          </Media>
          {/* <div className={`font-weight-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div> */}
        </div>
      )
    })
  }
  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Finances</CardTitle>
        {/* <Icon.MoreVertical size={18} className='cursor-pointer' /> */}
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}
export default GoalOverview
