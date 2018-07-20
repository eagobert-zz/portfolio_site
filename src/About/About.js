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
                <section class="" id="about">

                    {/* <!-- empty divider --> */}
                    <nav class="navbar navbar-light bg-light">
                        <span class="p-4"></span>
                    </nav>
                    {/* <!-- About Me Header --> */}
                    <div class="row pl-5">
                        <h1 class="col text-muted pl-4">About Me</h1>
                    </div>

                    <div class="container">
                        <div class="row">

                            {/* <!-- Left Side --> */}
                            <div class="col-5">
                                <div class="col-6 mx-auto text-center">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/personal-site-82611.appspot.com/o/Profile_Photo%2FProfessional_Cropped.jpg?alt=media&token=ba6bd063-ab1f-46ed-a6ed-dd27964e7d6f" class="img-thumbnail rounded-circle" />
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