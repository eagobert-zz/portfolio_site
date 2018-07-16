import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, Collapse, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import '../Header/Header.css'


class Header extends Component {

    constructor(props){
        super(props);

        // this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
          collapsed: true
        };
      }
    
    toggleNavbar = function(){
        this.setState({
          collapsed: !this.state.collapsed
        });
      }.bind(this)

    render() {
        return (
            <React.Fragment>
                <Navbar id="nav-container">
                        <NavbarBrand href="/" id="brand" className="mr-auto">
                            <h2>
                                <span>E</span>RIN 
                            </h2>
                            <h2>
                                <span>A</span>GOBERT
                            </h2>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} id="menu-btn" className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav id="nav-links" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink></NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink></NavItem>
                            <NavItem>
                                <NavLink href="/technologies">Technologies</NavLink></NavItem>
                            <NavItem>
                                <NavLink href="/portfolio">Portfolio</NavLink></NavItem>
                            <NavItem>
                                <NavLink href="/blog">Blog</NavLink></NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header