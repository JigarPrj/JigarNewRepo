import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" id="name" className="form-control" placeholder="Name" required />
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" id="email" className="form-control" placeholder="Email" required />
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                    <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
            </form>
        )
    }
}
