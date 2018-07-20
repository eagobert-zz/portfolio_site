import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Footer/Footer.css'

class Footer extends Component {
        render() {
                return (
                <React.Fragment>
                {/* <!-- Footer --> */}
                <footer className="footer text-center">
                        <div className="container pt-4">
                                <ul className="list-inline mb-5">
                                        <li className="list-inline-item">
                                                <a className="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/eagobert/">
                                                <FontAwesomeIcon className="icon" icon={['fab', 'linkedin-in']}/>
                                                </a>
                                        </li>
                                        <li className="list-inline-item">
                                                <a className="social-link rounded-circle text-white mr-3" href="https://twitter.com/ErinAgobert">
                                                <FontAwesomeIcon className="icon" icon={['fab', 'twitter']}/>
                                                </a>
                                        </li>
                                        <li className="list-inline-item">
                                                <a className="social-link rounded-circle text-white" href="https://github.com/eagobert">
                                                <FontAwesomeIcon className="icon" icon={['fab', 'github-alt']}/>
                                                </a>
                                        </li>
                                </ul>
                                <p className="text-muted small mb-0">Copyright &copy; Erin Agobert 2018</p>
                        </div>
                </footer>

                                {/* <!-- Scroll to Top Button--> */}
                                <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top">
                                        <i className="fa fa-angle-up"></i>
                                </a>
                        </React.Fragment>
                )
        }
}
export default Footer