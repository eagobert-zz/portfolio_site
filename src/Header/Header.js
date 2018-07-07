import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar className="nav-container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/technologies">Technologies</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </Navbar>

            </React.Fragment>
            );
    }
}
export default Header