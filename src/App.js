import React, { Component } from 'react';
import Home from './Home/Home'
import About from './About/About'
import Technologies from './Technologies/Technologies'
import Portfolio from './Portfolio/Portfolio'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedinIn, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'
import 'typeface-poppins'
import 'typeface-special-elite'
import 'typeface-dosis'
import './App.css';

library.add(fab,faLinkedinIn, faGithubAlt, faTwitter, faArrowCircleDown)

class App extends Component {
  render() {
    return (
          <div className="App">
            <Navigation />
            <Home />
            <About />
            <Technologies />
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
          </div>

    );
  }
}

export default App;
