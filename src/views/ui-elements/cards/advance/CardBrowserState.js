import Chart from 'react-apexcharts'
import TableHoverAnimation from '../../../tables/reactstrap/TableHoverAnimation'
import TableBasic from '../../../tables/reactstrap/TableBasic'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

const CardBrowserState = ({ colors, trackBgColor,mdrData}) => {
 
  const mdrstyle={
    display: "inline",
    position: "absolute",
    bottom: 5
  }
  const leftstyle={
    marginLeft:"20px"
  }
  const rightstyle={
    marginLeft:"200px"
  }
  const keys=Object.keys(mdrData)
  const tidData=Object.values(mdrData)
  return (
    <Card className='card-browser-states'>
      <CardHeader>
        <div>
          <h4>MDR DATA TID: {keys[0]}</h4>
          {/* <CardText className='font-small-2'>Counter August 2020</CardText> */}
        </div>
        
      </CardHeader>
      <CardBody>
      {keys.length===1 ? (
        //  <TableBasic   mdrData={mdrData} />
       <TableHoverAnimation mdrData={tidData[0]} />
      ) : (
        <TableBasic   mdrData={mdrData} />
      )}
            
          
          <h5 style={mdrstyle}>
            <a style={leftstyle} href='/' onClick={e => e.preventDefault()}>
          Config MDR
            </a>
           </h5>
           <h5 style={mdrstyle}>
            <a style={rightstyle}href='/' onClick={e => e.preventDefault()}>
          Edit MDR
            </a>
        </h5>
      
      </CardBody>
    </Card>
  )
}

export default CardBrowserState
