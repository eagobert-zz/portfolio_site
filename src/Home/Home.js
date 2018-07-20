import React, { Component } from 'react'
// import { Button, Col } from 'reactstrap'
import '../Home/Home.css'

class Home extends Component {
    render() {

        return (
            <React.Fragment>
                <header>
                    {/* <!-- Home Header --> */}
                    <div class="row pl-4">
                        <div class="col-8">
                            <div class="col-12 display-4 mb-0 pt-4 pb-0">ERIN AGOBERT</div>
                            <div class="col-12 h3 text-muted pb-4">Web Developer | Designer | Data Nerd </div>
                        </div>

                        <!-- Social Media Links -->
    <div class="col-4">
                            <ul class="pt-4 pr-4 text-right list-inline mb-5">
                                <li class="list-inline-item">
                                    <a class="text-center social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/eagobert/">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-center social-link rounded-circle text-white mr-3" href="https://twitter.com/ErinAgobert">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-center social-link rounded-circle text-white" href="https://github.com/eagobert">
                                        <i class="fab fa-github-alt"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">

                        {/* <!-- Side Navigation --> */}
                        <ul class="pl-5 pr-0 pt-2 nav flex-column col-3">
                            <li class="nav-item">
                                <a class="pt-5 h5 nav-link active" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="h5 nav-link" href="#technologies">Technologies</a>
                            </li>
                            <li class="nav-item">
                                <a class="h5 nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="h5 nav-link disabled" href="#contact">Contact</a>
                            </li>
                        </ul>
                        {/* <!-- Homepage Image --> */}
                        <div class="col-9 container-fluid">
                            <img src="../Assets/images/chris-barbalis-348804-unsplash.jpg" class="img-fluid" />
                        </div>
                    </div>

                </header>
            </React.Fragment>
        );
    }
}

export default Home