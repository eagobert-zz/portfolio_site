import React, { Component } from 'react'
import '../Contact/Contact.css'
import { Button, Col } from 'reactstrap'

class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                <Col id="container_contact">

                </Col>
                <Col id="contactform_main">
                    <Col id="contactform_top"></Col>
                    <Col id="contactform_middle">
                        <div className="row">
                            <h1 className="col contactform_header">Contact Me</h1>
                        </div>

                        <form action="https://formspree.io/eagobert@hotmail.com" method="POST" name="contactForm" id="container_contactform">

                            <div className="form-row">
                                <div className="form-group col">
                                    <label for="firstname">First Name * </label>
                                    <input type="text" className="form-control form-control" autocomplete="given-name" placeholder="Please enter your first name." name="firstName" required />
                                </div>

                                <div className="form-group col">
                                    <label for="lastname">Last Name * </label>
                                    <input type="text" className="form-control form-control" autocomplete="family-name" placeholder="Please enter your last name." name="lastName" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col">
                                    <label for="email">Email * </label>
                                    <input type="email" className="form-control form-control" autocomplete="email" id="email" placeholder="Please enter your email address." name="_replyto" required />
                                </div>

                                <div className="form-group col">
                                    <label for="phone">Phone</label>
                                    <input type="tel" className="form-control form-control" autocomplete="phone" id="phone" placeholder="Please enter your phone number." name="phone" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label for="textarea">Comments: </label>
                                    <textarea className="form-control form-control" id="textarea" rows="3" name="comments"></textarea>
                                </div>
                            </div>

                            <Button type="submit" className="" value="Send">SEND</Button>

                            {/* <!-- Insert Formspree.io Captcha --> */}
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />

                            {/* <!-- Insert Return Page  --> */}
                            <input type="hidden" name="_next" value="http://127.0.0.1:8080/" />
                        </form>
                    </Col>
                    <Col id="contactform_bottom"></Col>

                </Col>
            </React.Fragment>
        )
    }
}
export default Contact