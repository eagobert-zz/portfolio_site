import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Technologies from '../Technologies/Technologies'
import Portfolio from '../Portfolio/Portfolio'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'

class HeaderRoutes extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/technologies" component={Technologies} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </React.Fragment>
            );
    }
}
export default HeaderRoutes