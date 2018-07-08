import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import '../Header/Header.css'

class Header extends Component {
    render() {
        return (
            <React.Fragment>

                <Navbar id="nav-container">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"><span>E</span>RIN <span>A</span>GOBERT</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav id="nav-links" pullRight>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/technologies">Technologies</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </React.Fragment>
        );
    }
}
export default Header