import React, { Component } from 'react'
import { Button, Col } from 'reactstrap'
import '../Home/Home.css'

class Home extends Component {
    render() {

        return (
            <React.Fragment>
                <Col id="container_home">
                    <div className="container">
                        <h1>ERIN AGOBERT</h1>
                        <h2>SOFTWARE DEVELOPER</h2>
                        <h4>
                            <Button id="aboutme-btn" size="lg" >ABOUT ME</Button>
                        </h4>
                    </div>
                </Col>


            </React.Fragment>
        );
    }
}

export default Home