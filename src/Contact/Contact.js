import React, { Component } from 'react'
import '../Contact/Contact.css'
import { Button, Col } from 'reactstrap'

class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                {/* <!-- Contact Page --> */}
                <section id="contact">
                    {/* <!-- empty divider --> */}
                    <nav className="navbar navbar-light bg-light">
                        <span className="p-4"></span>
                    </nav>

                    {/* <!-- Contact Form Header --> */}
                    <div className="row pl-5">
                        <h1 className="col text-muted pl-4">Contact Me</h1>
                    </div>

                    {/* <!-- Begin Form --> */}
                    <form action="https://formspree.io/eagobert@hotmail.com" method="POST" name="contactForm" className="container">

                        <div className="row">
                            <div className="form-group col">
                                <label for="firstname">First Name * </label>
                                <input type="text" className="form-control form-control-lg" autocomplete="given-name" placeholder="Please enter your first name." name="firstName" required />
                            </div>

                            <div className="form-group col">
                                <label for="lastname">Last Name * </label>
                                <input type="text" className="form-control form-control-lg" autocomplete="family-name" placeholder="Please enter your last name." name="lastName" required />
                            </div>
                        </div>

                        <div className="row">

                            <div className="form-group col">
                                <label for="email">Email * </label>
                                <input type="email" className="form-control form-control-lg" autocomplete="email" id="email" placeholder="Please enter your email address." name="_replyto" required />
                            </div>

                            <div className="form-group col">
                                <label for="phone">Phone</label>
                                <input type="tel" className="form-control form-control-lg" autocomplete="phone" id="phone" placeholder="Please enter your phone number." name="phone" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label for="textarea">Comments: </label>
                            <textarea className="form-control form-control-lg" id="textarea" rows="3" name="comments"></textarea>
                        </div>

                        <input type="submit" className="btn btn-primary btn-block" value="Send"></input>

                        {/* <!-- Insert Formspree.io Captcha --> */}
                        <input type="text" name="_gotcha" style="display:none" />

                        {/* <!-- Insert Return Page  --> */}
                        <input type="hidden" name="_next" value="http://127.0.0.1:8080/" />
                    </form>


                </section>
            </React.Fragment>
        )
    }
}
export default Contact