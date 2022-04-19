import { Fragment,useState} from 'react'
import { Row, Col, Card, CardBody,CardText, CardHeader, CardTitle, FormGroup,Button,Label} from 'reactstrap'
import PickerRange from '../forms/form-elements/datepicker/PickerRange'
import AccordionShadow from '../components/collapse/AccordionShadow'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import { useDispatch, useSelector } from 'react-redux'
import getSOA from '@API/soas';


const SoaForm = () => {
  const response = useSelector(state => state.merchantsStore)
  const mdrData=Object.values(response.mdrData);
  const mid=107063000078083;
    const [data, setData] = useState("");
    const [start_date,setStartDate]=useState(new Date());
    const [end_date,setEndDate]=useState(new Date());
    const setDateFormat=(datevalue,x)=>{
      console.log("Value of X: ",x);
      let date= new Date(datevalue)
      let  yy=date.getFullYear()
      let mm=date.getMonth()
      let dd=date.getDate()
      let shortDate=(x==0)?`${(dd<10)?0:''}${dd}-${(mm<9)?0:''}${mm+1}-${yy}`:`${(mm<9)?0:''}${mm+1}/${(dd<10)?0:''}${dd}/${yy}`;
      return shortDate
    }
    const setDate=(data)=>{
        setStartDate(setDateFormat(data[0]),1);
        setEndDate(setDateFormat(data[1]),1);
        console.log("start_date: ",start_date);
        console.log("End_date : ",end_date);
    }
    const submitForm = (e)=>{
        e.preventDefault();
     
        const payload = {
          fromDate: start_date,
          toDate: end_date,
          midOrTid:mid,
          "serviceType": "SOA_MID_WISE",
        }
        getSOA(payload).then((res)=>{
          try
          {
            setData(res.responseData) 
          }
          catch(error)
          {
            setData(null);
          }
             
        });
      }
  return (
    <Fragment>
     
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Statement Of Account</CardTitle>
        </CardHeader>
        <CardBody>
        <Row className='justify-content-between align-items-center'>
          <Col tag={FormGroup} md='2' sm='12'>
              {/* <PickerRange selected={ start_date } onChange={e=>setDate(e.target.value)} /> */}
           </Col>
            <Col tag={FormGroup} md='6' sm='12'>
              <PickerRange setStateOfParent = {setDate} />
           </Col>
           <Col tag={FormGroup} md='2' sm='12'>
              {/* <PickerRange selected={ start_date } onChange={e=>setDate(e.target.value)} /> */}
           </Col>
           {/* <Col tag={FormGroup} md='4' sm='12'>
              <PickerDefault title={"End Date"} />
           </Col> */}
           </Row>
           <Row className='justify-content-between align-items-center'>
           <Col tag={FormGroup} md='5' sm='12'>
              {/* <PickerRange selected={ start_date } onChange={e=>setDate(e.target.value)} /> */}
           </Col>
           <Col  md='7' sm='12'>
                <Button.Ripple className='btn-icon' color='primary'  type='submit' 
                      onClick={submitForm}>
                   
                    <span className='align-middle ml-25'>Get SOA</span>
                </Button.Ripple>
           </Col>
          
        </Row>
        </CardBody>

      </Card>
     
          <Card title='Accordion Shadow'>
            {/* <CardText>
              Use prop <code>type='shadow'</code> to create collapse/accordion with shadow.
            </CardText> */}
             {data &&
            <AccordionShadow soaData={data}  setDateFormat={setDateFormat}/>}
          </Card>
       
    </Fragment>
  )
}
export default SoaForm
