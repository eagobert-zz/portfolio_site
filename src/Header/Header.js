import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Technologies from '../Technologies/Technologies'
import Portfolio from '../Portfolio/Portfolio'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'

class Header extends Component {
    render() {
        return (
            <div className="nav-container">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/technologies">Technologies</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/technologies" component={Technologies} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </div>);
    }
}
export default Header