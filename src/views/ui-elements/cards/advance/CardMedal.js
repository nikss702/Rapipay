import { Card, CardBody, CardText, Button } from 'reactstrap'
import medal from '@src/assets/images/illustration/badge.svg'
const CardMedal = (props) => {
  const {merchantNameData} = props
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Welcome 🎉 {merchantNameData && merchantNameData.profileData.merchantName}!</h5>
        {/* <CardText className='font-small-3'>You have won gold medal</CardText> */}
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
          &#8377;{merchantNameData && merchantNameData.monthData.t1SettledAmount}
          </a>
        </h3>
        <Button.Ripple color='primary'>View Profile</Button.Ripple>
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
