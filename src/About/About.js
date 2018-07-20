import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Technologies from '../About/Technologies'
import '../About/About.css'

class About extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- About --> */}
                <section className="" id="about">

                    {/* <!-- empty divider --> */}
                    <nav className="navbar navbar-light bg-light">
                        <span className="p-4"></span>
                    </nav>
                    {/* <!-- About Me Header --> */}
                    <div className="row pl-5">
                        <h1 className="col text-muted pl-4">About Me</h1>
                    </div>

                    <div className="container">
                        <div className="row">

                            {/* <!-- Left Side --> */}
                            <div className="col-5">
                                <div className="col-6 mx-auto text-center">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Profile_Photo%2FProfessional_Cropped.jpg?alt=media&token=ba6bd063-ab1f-46ed-a6ed-dd27964e7d6f" className="img-thumbnail rounded-circle" />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}
export default About