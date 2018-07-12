import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav, NavItem } from 'reactstrap' 
import '../Footer/Footer.css'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>

                {/* <Navbar id="footer">
                        <Nav className="">
                            <NavItem id="social-link" className="rounded-circle" href="https://www.linkedin.com/in/eagobert/">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin-in']}/>
                            </NavItem>
                            <NavItem id="social-link" className="rounded-circle" href="https://twitter.com/ErinAgobert">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'twitter']}/>
                            </NavItem>
                            <NavItem id="social-link" className="rounded-circle" href="https://github.com/eagobert">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'github-alt']}/>
                            </NavItem>
                        </Nav>
                        <Navbar.Text className="">Copyright &copy; Erin Agobert 2018</Navbar.Text>
                </Navbar> */}

            </React.Fragment>
            )
    }
}
export default Footer