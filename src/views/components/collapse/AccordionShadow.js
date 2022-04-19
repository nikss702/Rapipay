import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col
} from 'reactstrap'
import AppCollapse from '@components/app-collapse'

// const data = [
//   {
//     title: 'Accordion Item 1',
//     content: (
//       <CardText className='mb-0'>
//         Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups
//         lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop
//         cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream
//         pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie
//         cheesecake liquorice apple pie.
//       </CardText>
//     )
//   },
//   {
//     title: 'Accordion Item 2',
//     content: (
//       <CardText className='mb-0'>
//         Pie pudding candy. Oat cake jelly beans bear claw lollipop. Ice cream candy canes tootsie roll muffin powder
//         donut powder. Topping candy canes chocolate bar lemon drops candy canes. Halvah muffin marzipan powder sugar
//         plum donut donut cotton candy biscuit. Wafer jujubes apple pie sweet lemon drops jelly cupcake. Caramels dessert
//         halvah marshmallow. Candy topping cotton candy oat cake croissant halvah gummi bears toffee powder.
//       </CardText>
//     )
//   },
//   {
//     title: 'Accordion Item 3',
//     content: (
//       <CardText className='mb-0'>
//         Gingerbread liquorice liquorice cake muffin lollipop powder chocolate cake. Gummi bears lemon drops toffee
//         liquorice pastry cake caramels chocolate bar brownie. Sweet biscuit chupa chups sweet. Halvah fruitcake
//         gingerbread croissant dessert cupcake. Chupa chups chocolate bar donut tart. Donut cake dessert cookie. Ice
//         cream tootsie roll powder chupa chups pastry cupcake soufflé.
//       </CardText>
//     )
//   },
//   {
//     title: 'Accordion Item 4',
//     content: (
//       <CardText className='mb-0'>
//         Icing sweet roll cotton candy brownie candy canes candy canes. Pie jelly dragée pie. Ice cream jujubes wafer.
//         Wafer croissant carrot cake wafer gummies gummies chupa chups halvah bonbon. Gummi bears cotton candy jelly-o
//         halvah. Macaroon apple pie dragée bonbon marzipan cheesecake. Jelly jelly beans marshmallow.
//       </CardText>
//     )
//   }
// ]


const AccordionShadow = ({soaData,setDateFormat}) =>{ 
  
const keys=Object.keys(soaData);
const values=Object.values(soaData);
let soaList=[]
const data=(keys ||[]).map((v,i) =>
  soaList.push({title:<h4>{setDateFormat(v,0)}</h4>,
    content:(
      <Card className='bg-transparent'>
      <CardHeader className='pb-0'>
      <CardTitle tag='h5'>Statement Of Account For {setDateFormat(v,0)} (Total Transcation:&#8377; {values[i].txnAmount})</CardTitle>
      <p><b>MID</b>:{107063000078083}</p>
      </CardHeader>
      <CardBody>
        
      <Row>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
            <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'> 0</h5>
            <CardText>Transcation Count</CardText>
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>&#8377; {values[i].txnAmount}</h5>
            <CardText>Transcation Amount</CardText> 
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>{setDateFormat(values[i].txnDate,0)}</h5>
            <CardText>Transcation Date</CardText> 
          </Col>
        </Row>
        <Row>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
            <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>&#8377;  {values[i].mdr}</h5>
            <CardText>MDR</CardText>
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>&#8377;  {values[i].cgst}</h5>
            <CardText>CGST</CardText> 
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>&#8377;  {values[i].sgst}</h5>
            <CardText>SGST</CardText> 
          </Col>
        </Row>
        <Row>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
            <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>&#8377;  {values[i].rent}</h5>
            <CardText>Rent</CardText>
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>&#8377; {values[i].addition}</h5>
            <CardText>Addition</CardText> 
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-0 font-weight-bolder mt-2 mb-0'>&#8377;  {values[i].amountToBeCredited}</h5>
            <CardText>Total Paid Amount</CardText> 
          </Col>
        </Row>
        
      </CardBody>
    </Card>
    )
    // content:(<CardText className='mb-0'>
    //   <h5><b>Statement Of Account For {setDateFormat(v)} (Total Transcation:&#8377; {values[i].txnAmount})</b></h5>
    //   <h6><b>MID</b>: 107063000078083</h6>
    //   <h6><b>Transcation Count</b>: </h6>
    //   <h6><b>Transcation Amount</b>:&#8377; {values[i].txnAmount}</h6>
    //   <h6><b>Transcation Date</b>: {setDate(values[i].txnDate)}</h6>
    //   <h6><b>MDR</b>:  &#8377; {values[i].mdr}</h6>
    //   <h6><b>CGST</b>: &#8377; {values[i].cgst}</h6>
    //   <h6><b>SGST</b>:&#8377;  {values[i].sgst}</h6>
    //   <h6><b>Rent</b>:&#8377;  {values[i].rent}</h6>
    //   <h6><b>Addition</b>:&#8377; {values[i].addition}</h6>
    //   <h6><b>Total Paid Amount</b>:&#8377;  {values[i].amountToBeCredited}</h6>
     
    // </CardText>)
  })
);
return(
<AppCollapse data={soaList} type='shadow' accordion />
)}

export default AccordionShadow
