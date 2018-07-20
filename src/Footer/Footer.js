import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Footer/Footer.css'

class Footer extends Component {
        render() {
                return (
                        <React.Fragment>
                                {/* <!-- Footer --> */}
                                <footer class="footer text-center">
                                        <div class="container pt-4">
                                                <ul class="list-inline mb-5">
                                                        <li class="list-inline-item">
                                                                <a class="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/eagobert/">
                                                                        <i class="fab fa-linkedin-in"></i>
                                                                </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                                <a class="social-link rounded-circle text-white mr-3" href="https://twitter.com/ErinAgobert">
                                                                        <i class="fab fa-twitter"></i>
                                                                </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                                <a class="social-link rounded-circle text-white" href="https://github.com/eagobert">
                                                                        <i class="fab fa-github-alt"></i>
                                                                </a>
                                                        </li>
                                                </ul>
                                                <p class="text-muted small mb-0">Copyright &copy; Erin Agobert 2018</p>
                                        </div>
                                </footer>

                                {/* <!-- Scroll to Top Button--> */}
                                <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
                                        <i class="fa fa-angle-up"></i>
                                </a>
                        </React.Fragment>
                )
        }
}
export default Footer