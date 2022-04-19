import { useEffect, useState } from 'react'
import axios from 'axios'
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
import Chart from 'react-apexcharts'

const Soatable = () => {
  

  

 
  return  (
    <Card>
      <CardHeader className='pb-0'>
      <CardTitle tag='h4'>Statement Of Account</CardTitle>
      </CardHeader>
      <CardBody>
        
      <Row>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
            <h5 className='font-large-1 font-weight-bolder mt-2 mb-0'>12</h5>
            <CardText>Tickets</CardText>
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-1 font-weight-bolder mt-2 mb-0'>12</h5>
            <CardText>Tickets</CardText> 
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-1 font-weight-bolder mt-2 mb-0'>12</h5>
            <CardText>Tickets</CardText> 
          </Col>
        </Row>
        <Row>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
            <h5 className='font-large-1 font-weight-bolder mt-2 mb-0'>12</h5>
            <CardText>Tickets</CardText>
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-1 font-weight-bolder mt-2 mb-0'>12</h5>
            <CardText>Tickets</CardText> 
          </Col>
          <Col sm='4' className='d-flex flex-column flex-wrap text-center'>
          <h5 className='font-large-1 font-weight-bolder mt-2 mb-0'>12</h5>
            <CardText>Tickets</CardText> 
          </Col>
        </Row>
        
      </CardBody>
    </Card>
  )
}
export default Soatable
