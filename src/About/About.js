import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Technologies from '../About/Technologies'
import '../About/About.css'

class About extends Component{
    render(){
        return(
            <React.Fragment>
            <Jumbotron id="background-about">
                <Grid className="grid">
                    <Row className="row">
                        <Col sm={12} id="about">
                            <h2>Hello!  I am Erin Agobert.A software developer based in Nashville, Tennessee.I design and develop experiences that make peoples' lives (simple, easy, great).Take a look at what I know <FontAwesomeIcon className="about-icon" icon="arrow-circle-down"/>: </h2>   
                        </Col>
                        <Col sm={12} id="technologies">
                            {/* <Technologies /> */}
                        </Col> 
                    </Row>
                </Grid>
            </Jumbotron>
        </React.Fragment>
        )
    }
}
export default About