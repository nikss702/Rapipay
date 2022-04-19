import React from 'react';
import { Row, Col } from 'reactstrap';
import TidDetails from '@src/views/ui-elements/cards/merchantplan/TidDetails';
import TidListing from '@src/views/ui-elements/cards/merchantplan/TidListing';


function MyPlan(props) {
      

    return(
        <>
            <div id='my-plan'>
                <Row className='match-height'>
                    <Col xl='4' md='6' xs='12'>
                    <TidDetails />
                    </Col>
                    <Col xl='8' md='6' xs='12'>
                    <TidListing />
                    </Col>
                </Row>
            </div>
        </>
    )
    }
export default MyPlan;