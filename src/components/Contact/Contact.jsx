import React, { Component } from 'react';
import './contact.css';
import axios from 'axios'

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            phone: "",
            email: "",
            message: "",
            nameTrue: false,
            phoneTrue: false,
            emailTrue: false,
            messageTrue: false,
            invalid: false

        }

        this.handleFocus = this.handleFocus.bind(this);
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleFocus(key) {
        this.setState({
            [key]: !this.state.key
        })
    }

    handleBlur(key, val) {
        if (key === "emailTrue") {
            if (val.indexOf('@') === -1) {
                this.setState({
                    invalid: true
                })
            } else {
                this.setState({
                    [key]: false,
                    invalid: false
                })
            }
        } else {
            this.setState({
                [key]: false
            })
        }
    }



    submit() {
        if (this.state.invalid === true) {
            alert('Please enter a valid email')
        } else {
            let body = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                message: this.state.message
            }

            let promise = axios.post('/api/sendEmail', body)
            promise.then(() => {
                window.location.reload()
                alert("Your message has been sent.  Get stoked.")
            })
        }
    }

    render() {
        return (
            <div className="contact-main">
                <h1>Got a question?</h1>
                <h2>Hit Me Up</h2>
                <div className={this.state.invalid ?
                    "contact-row-invalid" :
                    "contact-row-valid"}>please enter a valid email address
                                </div>
                <div className="contact-container">
                    <div className="contact-row">
                        <div className={this.state.nameTrue ? "contact-row-indent" : "contact-row-normal"}>Name:</div>
                        <div><input className="contact-input" type="text" onFocus={() => this.handleFocus("nameTrue")} onBlur={(e) => this.handleBlur("nameTrue", e.target.value)} onChange={(e) => this.handleChange("name", e.target.value)} /></div>
                    </div>
                    <div className="contact-row">
                        <div className={this.state.phoneTrue ? "contact-row-indent" : "contact-row-normal"}>Telephone:</div>
                        <div><input className="contact-input" type="text" onFocus={() => this.handleFocus("phoneTrue")} onBlur={(e) => this.handleBlur("phoneTrue", e.target.value)} onChange={(e) => this.handleChange("phone", e.target.value)} /></div>
                    </div>
                    <div className="contact-row">
                        <div className={this.state.emailTrue ? "contact-row-indent" : "contact-row-normal"}>Email:</div>
                        <div>
                            <div className={this.state.invalid ?
                                "contact-row-invalid" :
                                "contact-row-valid"}>X
                                </div>
                            <input className="contact-input" type="text" onFocus={() => this.handleFocus("emailTrue")} onBlur={(e) => this.handleBlur("emailTrue", e.target.value)} onChange={(e) => this.handleChange("email", e.target.value)} />
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className={this.state.messageTrue ? "contact-row-indent" : "contact-row-normal"}>Message:</div>
                        <div><input className="contact-input" type="text" onFocus={() => this.handleFocus("messageTrue")} onBlur={(e) => this.handleBlur("messageTrue", e.target.value)} onChange={(e) => this.handleChange("message", e.target.value)} /></div>
                    </div>
                    <div className="button-container">
                        <button className="contact-button" onClick={() => this.submit()}>
                            Submit
                    </button>
                    </div>

                </div>

            </div>
        )
    }
}