import React, { Component } from 'react';
import Header from './Header/Header'
import HeaderRoutes from './Header/HeaderRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedinIn, faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap'
import 'typeface-poppins'
import 'typeface-special-elite'
import 'typeface-dosis'
import './App.css';

library.add(fab,faLinkedinIn, faGithubAlt, faTwitter, faArrowCircleDown)

class App extends Component {
  render() {
    return (
      <Router>
        <Container id="App">
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Container>
                <HeaderRoutes />
            </Container>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
