import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const CardTransactions = () => {
  const transactionsArr = [
    {
      title: 'Transcation Via Debit Card',
      color: 'light-primary',
      subtitle: 'Starbucks',
      amount: '- $74',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Transcation Via Credit Card', 
      color: 'light-success',
      subtitle: 'Add Money',
      amount: '+ $480',
      Icon: Icon['Check']
    },
    {
      title: 'Transcation Via Debit Wallet',
      color: 'light-danger',
      subtitle: 'Add Money',
      amount: '+ $590',
      Icon: Icon['DollarSign']
    },
    {
      title: 'Transcation Via Debit UPI',
      color: 'light-warning',
      subtitle: 'Ordered Food',
      amount: '- $12',
      Icon: Icon['CreditCard'],
      down: true
    },
    {
      title: 'Transcation Via Debit QR',
      color: 'light-info',
      subtitle: 'Refund',
      amount: '+ $98',
      Icon: Icon['TrendingUp']
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
        <CardTitle tag='h4'>Transactions</CardTitle>
        {/* <Icon.MoreVertical size={18} className='cursor-pointer' /> */}
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default CardTransactions
