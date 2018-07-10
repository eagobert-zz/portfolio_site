import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../About/About.css'

class About extends Component{
    render(){
        return(
            <React.Fragment>
            <Jumbotron id="background-about">
                <div className="container">
                    <Grid>
                        <Row>
                        <Col id="about">
                            <h2 >Hello!  I am Erin Agobert.<br/>A software developer based in Nashville, Tennessee.<br/>I design and develop experiences that make peoples' lives (simple, easy, great).<br/>Take a look at what I know <FontAwesomeIcon className="about-icon" icon="arrow-circle-down"/>: </h2>   
                        </Col>
                        <Col id="technologies">
                        </Col>
                        </Row>
                    </Grid>

                    
                </div>
            </Jumbotron>
        </React.Fragment>
        )
    }
}
export default About