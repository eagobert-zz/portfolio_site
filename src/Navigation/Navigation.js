import React, { Component } from 'react'
import '../Navigation/Navigation.css'


class Navigation extends Component {

    render() {
        return (
            <React.Fragment>
                {/* <!-- Navigation --> */}
<a className="menu-toggle rounded" href="" ng-click="menuController()">
                    <i className="fa fa-bars"></i>
                </a>
                <nav id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand">
                            <a className="js-scroll-trigger" href="#page-top">Erin Agobert</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#page-top">Home</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#about">About Me</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#services">Technologies</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="sidebar-nav-item">
                            <a className="js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>

            </React.Fragment>
        );
    }
}
export default Navigation