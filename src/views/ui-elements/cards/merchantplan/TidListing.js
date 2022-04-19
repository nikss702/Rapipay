import { Card, CardHeader, CardTitle, CardBody, Row, Col, Media, Button  } from 'reactstrap';
import FetchMyPlan from '@API/myplan';
import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FormGroup, Label, Input, Form } from 'reactstrap';
import { useSelector } from 'react-redux'
import UpdateMyPlan from '@API/UpdateMyPlan';



const TidListing = () => {

    const [rentmodal, setRentModal] = useState(false);
    const [chargesmodal, setChargesModal] = useState(false);
    const rent = () => setRentModal(!rentmodal);
    const charges = () => setChargesModal(!chargesmodal);



    const [myPlan, setMyPlan] = useState("");
    const tidData = useSelector(state => state.merchantsStore);

    const [planSimRent, setPlanSimRent] = useState("");
    const [planTerminalRent, setPlanTerminalRent] = useState("");
    const [planInstallationCharge, setPlanInstallationCharge] = useState("");

    const [simRent, setSimRent] = useState("");
    const [terminalRentCharges, setTerminalRent] = useState("");
    const [installationCharges, setInstallationCharge] = useState("");

    const [isPlanEdited, setIsPlanEdited] = useState(false);

    const [rentPlanId, setRentPlanId] = useState("");


    useEffect(() => {
        getMyPlan();
        setIsPlanEdited(false);
    },[isPlanEdited]);

    const getMyPlan = ()=>{
        try{
            FetchMyPlan().then((response)=>{
                setMyPlan(response);
                console.log("My Plans :",response);
            });
        }catch(error){}
      }

      const EditMyPlan = (e)=>{
        try{
            UpdateMyPlan({
                simRent: planSimRent,
                terminalRentCharges: planTerminalRent,
                // installationCharges: planInstallationCharge,
            }).then((response)=>{
                setIsPlanEdited(true);
                console.log(response);
            });
        }catch(error){}
        setRentModal(!rentmodal)
        setSimRent("");
        setTerminalRent("");
        // setPlanInstallationCharge("");
      }

      const handleEdit = (
        planSimRent,
        planTerminalRent,
        rentPlanId,
        e
    ) => {
        setRentModal(!rentmodal);
        setPlanSimRent(planSimRent);
        setPlanTerminalRent(planTerminalRent);
        setRentPlanId(rentPlanId);
    };


  let rentModalContent = rentmodal ? 

  (
    <>
    <Modal isOpen={rentmodal} toggle={rent}  className='modal-dialog-centered'>
        <ModalHeader  toggle={rent}>Update Rent</ModalHeader>
        <ModalBody>
            <Form>
            <Row>
                <Col sm='12'>
                <FormGroup>
                    <Label for='SimRent'>SIM Rent</Label>
                    <Input type='text' id='sim_rent' value={planSimRent} onChange={(event) => setPlanSimRent(event.target.value)}/>
                </FormGroup>
                </Col>
                <Col sm='12'>
                <FormGroup>
                    <Label for='TerminalRent'>Terminal Rent </Label>
                    <Input type='text' id='terminal_rent' value={planTerminalRent} onChange={(event) => setPlanTerminalRent(event.target.value)}/>
                </FormGroup>
                </Col>
                <Col sm='12'>
                <FormGroup className='d-flex mb-0'>
                    <Button.Ripple 
                    className='mr-1' 
                    color='primary' 
                    type='submit' 
                    onClick={EditMyPlan}
                    >
                    Update Rent
                    </Button.Ripple>
                </FormGroup>
                </Col>

            </Row>
            </Form>
        </ModalBody>
    </Modal>
    </>
  )
  :null;

    

    const renderData = () => {


    var tid_lis = [];
    var tid = "";
    var mid = "";
    Object.entries(tidData).map((item, index) => {
    //   console.log(item)
    // {console.log(tidData)}

        if(item[0] == "mdrData" && Object.keys(item[1]).length){
     
            const itm_ls=(Object.values(item[1]))[0];
            const itm_ks=(Object.keys(item[1]))[0];
            tid = itm_ks;
            
            // (itm_ls).map((item1, index1) => {
            //   tid_lis.push(<li className="text-primary mb-3"><strong>{item1.tid}</strong></li>)
            //   mid = item1.mid;
            // })
        }
    })

    

        return Object.entries(myPlan).map((item, index) => {
 
            if(item[1][0].rent == undefined){
                return(
                    <></>
                )
            }else{

          return (
            <Col
              key={index}
            >

                <h3 className="text-dark my-2">TID : {tid}</h3>
                <Media className='my-auto' body>
                    <Card className='mdr'>
                        <CardHeader>
                            <CardTitle tag='h4' className="text-primary">MDR</CardTitle>
                            <Button color='primary' className="btn btn-sm">Update</Button>
                        </CardHeader>
                        <CardBody className='statistics-body'>
                        <Row>
                        <Col lg='10' md='8' xs='10'>
                                <ul className="list-unstyled">
                                    <li className="text-dark" style={{textTransform : 'lowercase'}}><span className="font-weight-bold">{item[1][0].mdrData[0].nameToDisplay}</span> : <span className="float-right">{item[1][0].mdrData[0].mdrPercent}%</span></li>
                                    <li className="text-dark" style={{textTransform : 'lowercase'}}><span className="font-weight-bold">{item[1][0].mdrData[1].nameToDisplay}</span> : <span className="float-right">{item[1][0].mdrData[1].mdrPercent}%</span></li>
                                    <li className="text-dark" style={{textTransform : 'lowercase'}}><span className="font-weight-bold">{item[1][0].mdrData[2].nameToDisplay}</span> : <span className="float-right">{item[1][0].mdrData[2].mdrPercent}%</span></li>
                                    <li className="text-dark" style={{textTransform : 'lowercase'}}><span className="font-weight-bold">{item[1][0].mdrData[3].nameToDisplay}</span> : <span className="float-right">{item[1][0].mdrData[3].mdrPercent}%</span></li>
                                    <li className="text-dark" style={{textTransform : 'lowercase'}}><span className="font-weight-bold">{item[1][0].mdrData[4].nameToDisplay}</span> : <span className="float-right">{item[1][0].mdrData[4].mdrPercent}%</span></li>
                                    <li className="text-dark" style={{textTransform : 'lowercase'}}><span className="font-weight-bold">{item[1][0].mdrData[5].nameToDisplay}</span> : <span className="float-right">{item[1][0].mdrData[5].mdrPercent}%</span></li>
                                </ul>
                        </Col>
                        </Row>
                        </CardBody>
                    </Card>
                    <Card className='rent'>
                        <CardHeader>
                            <CardTitle tag='h4' className="text-primary">Rent</CardTitle>
                            <Button color='primary' className="btn btn-sm" onClick={(e) =>
                                handleEdit(
                                item[1][0].rent.simRent,
                                item[1][0].rent.terminalRentCharges,
                                item[1][0].tid,
                                e
                                )}>Update</Button>
                        </CardHeader>
                        <CardBody className='statistics-body'>
                        <Row>
                        <Col lg='10' md='8' xs='10'>
                                <ul className="list-unstyled">
                                    <li className="text-dark"><span className="font-weight-bold">SIM Rent</span> : <span className="float-right">{item[1][0].rent.simRent}</span></li>
                                    <li className="text-dark"><span className="font-weight-bold">Terminal Rent</span> : <span className="float-right">{item[1][0].rent.terminalRentCharges}</span></li>
                                </ul>
                        </Col>
                        </Row>
                        <div className='vertically-centered-modal'>
                            {rentModalContent}
                        </div>
                        </CardBody>
                    </Card>
                    <Card className='installation'>
                        <CardHeader>
                            <CardTitle tag='h4' className="text-primary">Installation Charges</CardTitle>
                            <Button color='primary' className="btn btn-sm" onClick={charges}>Update</Button>
                        </CardHeader>
                        <CardBody className='statistics-body'>
                        <Row>
                        <Col lg='10' md='8' xs='10'>
                                <ul className="list-unstyled">
                                    <li className="text-dark"><span className="font-weight-bold">Installation Charges</span> :  <span className="float-right">{item[1][0].installation.installationCharges}</span></li>
                                </ul>
                        </Col>
                        </Row>
                        <div className='vertically-centered-modal'>
                            <Modal isOpen={chargesmodal} toggle={charges}  className='modal-dialog-centered'>
                            <ModalHeader  toggle={charges}>Update Charges</ModalHeader>
                            <ModalBody>
                                <Form>
                                <Row>
                                    <Col sm='12'>
                                    <FormGroup>
                                        <Label for='InstallationCharge'>Installation Charges</Label>
                                        <Input type='text' id='installation_charge' value={item[1][0].installation.installationCharges}/>
                                    </FormGroup>
                                    </Col>
                                    <Col sm='12'>
                                    <FormGroup className='d-flex mb-0'>
                                        <Button.Ripple 
                                        className='mr-1' 
                                        color='primary' 
                                        type='submit' 
                                        
                                        // onClick={}
                                        >
                                        Submit
                                        </Button.Ripple>
                                    </FormGroup>
                                    </Col>

                                </Row>
                                </Form>
                            </ModalBody>
                            </Modal>
                        </div>
                        </CardBody>
                    </Card>
                    <Card className='per-card'>
                        <CardHeader>
                            <CardTitle tag='h4' className="text-primary">Per card Swipe Limit</CardTitle>
                            <Button color='primary' className="btn btn-sm">Update</Button>
                        </CardHeader>
                        <CardBody className='statistics-body'>
                        <Row>
                        <Col lg='10' md='8' xs='10'>
                                <ul className="list-unstyled">
                                    <li className="text-dark">Transaction Limit</li>
                                </ul>
                        </Col>
                        </Row>
                        </CardBody>
                    </Card>
                    <Card className='value-added'>
                        <CardHeader>
                            <CardTitle tag='h4' className="text-primary">Value Added</CardTitle>
                            <Button color='primary' className="btn btn-sm">Update</Button>
                        </CardHeader>
                        <CardBody className='statistics-body'>
                        <Row>
                        <Col lg='10' md='8' xs='10'>
                            <ul className="list-unstyled">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <li className="text-dark">International Card</li>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <li className="text-dark">Per Auth</li>
                                </div> 
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <li className="text-dark">Bank EMI</li>
                                </div> 
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <li className="text-dark">Brand EMI</li>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <li className="text-dark">AMEX</li>
                                </div>
                            </ul>
                        </Col>
                        </Row>
                        </CardBody>
                    </Card>
                </Media>
            </Col>
          )
        }
        })
      }

    return (
            <div className="tid-listing">
            {renderData()}
            </div> 
    )
  }

  
  export default TidListing