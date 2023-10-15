import React from 'react'
import Navigationbar from './NavigationBar'
import { Col, Row ,Container} from 'react-bootstrap'
import logo from "../Assets/binimage.png"
const Home = () => {
  return (
    <div>
        <Navigationbar/>
        <Container className="google-font d-inline-block ">
            <Row className="mt-md-5">
                <Col sm={12} lg={6}><img src={logo} style={{height:"80%",width:"70%"}} className="nav-links"></img></Col>
                <Col sm={12} lg={6}>
                    <Row style={{fontSize:"20px",color:"green"}} className="mt-md-5 nav-link">
                    "Just because you're trash doesn't mean you can't do great things. It's called garbage can, not garbage cannot."
                    </Row><br/>
                    <Row style={{fontSize:"20px"}} className=" ">
                     In the State of Tamil Nadu, there are 15 Corporations, 121 Municipalities and 528 Town Panchayats. The local body shall be responsible for the development and setting up of infrastructure for segregation, collection, storage, transportation, processing and disposal of the plastic waste.
                    </Row>
                </Col>
            </Row>
        </Container>    
    </div>
  )
}

export default Home