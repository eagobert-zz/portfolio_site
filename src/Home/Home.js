import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Home/Home.css'
import img from '../Assets/images/chris-barbalis-348804-unsplash.jpg'

class Home extends Component {
    render() {

        return (
            <React.Fragment>
                    {/* <!-- Home Header --> */}
                    <div className="row pl-4">
                        <div className="col-8">
                            <div className="col-12 display-4 mb-0 pt-4 pb-0">ERIN AGOBERT</div>
                            <div className="col-12 h3 text-muted pb-4">Web Developer | Designer | Data Nerd </div>
                        </div>

                    {/* <!-- Social Media Buttons --> */}
                    <div className="col-4">

                        <ul className="pt-4 pr-4 text-right list-inline mb-5">
                            <li className="list-inline-item">
                                <a className="text-center social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/eagobert/">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin-in']} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-center social-link rounded-circle text-white mr-3" href="https://twitter.com/ErinAgobert">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'twitter']} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="text-center social-link rounded-circle text-white" href="https://github.com/eagobert">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'github-alt']} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                    <div className="row">

                        {/* <!-- Side Navigation --> */}
                        <ul className="pl-5 pr-0 pt-2 nav flex-column col-3">
                            <li className="nav-item">
                                <a className="pt-5 h5 nav-link active" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="h5 nav-link" href="#technologies">Technologies</a>
                            </li>
                            <li className="nav-item">
                                <a className="h5 nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="h5 nav-link disabled" href="#contact">Contact</a>
                            </li>
                        </ul>
                        {/* <!-- Homepage Image --> */}
                        <div className="col-9 container-fluid">
                            <img src={img} className="img-fluid" alt=""/>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default Home