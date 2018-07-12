import React, { Component } from 'react'
import { Jumbotron, } from 'reactstrap'
import '../Home/Home.css'

class Home extends Component {
    render() {

        return (
            <React.Fragment>
                <Jumbotron id="background-img">
                    <div className="container">
                        <h1>ERIN AGOBERT</h1>
                        <h2>SOFTWARE DEVELOPER</h2>
                        <h4>
                            {/* <Button id="resume-btn" bsSize="large" bsStyle="custom">Learn More</Button> */}
                        </h4>
                    </div>
                </Jumbotron>


            </React.Fragment>
        );
    }
}

export default Home