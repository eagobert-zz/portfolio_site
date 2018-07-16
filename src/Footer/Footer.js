import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Navbar, Nav, NavItem, NavLink } from 'reactstrap' 
import '../Footer/Footer.css'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>

                <Navbar id="footer">
                        <Container>

                        <Nav className="">
                            <NavItem>
                                    <NavLink id="social-link" className="rounded-circle" href="https://www.linkedin.com/in/eagobert/">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin-in']}/>
                                    </NavLink>
                            </NavItem>
                            <NavItem> 
                                    <NavLink id="social-link" className="rounded-circle" href="https://twitter.com/ErinAgobert">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'twitter']}/>
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink id="social-link" className="rounded-circle" href="https://github.com/eagobert">
                                    <FontAwesomeIcon className="icon" icon={['fab', 'github-alt']}/>
                                    </NavLink>
                            </NavItem>
                        </Nav>
                        <p className="">Copyright &copy; Erin Agobert 2018</p>
                        </Container>
                </Navbar>

            </React.Fragment>
            )
    }
}
export default Footer