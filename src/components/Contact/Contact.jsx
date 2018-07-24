import React, { Component } from 'react';
import './contact.css';
import axios from 'axios'

export default class Contact extends Component{
    constructor(){
        super();
        this.state ={
            name:"",
            phone:"",
            email:"",
            message:""
        }
    }

    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

    submit(){
        let body={
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message
        }

        let promise = axios.post('http://localhost:7654/api/sendEmail', body)
        promise.then( ()=> {
            window.location.reload()
            alert("Your message has been sent.  Get stoked.")
        })
    }

    render(){
        return(
            <div className="contact-main">
            <h1>Got a question?</h1>
            <h2>Hit Me Up</h2>
            <div className="contact-container">
                <div className="contact-row">
                    <div>Name:</div>
                    <div><input type="text" onChange={(e) => this.handleChange("name", e.target.value)}/></div>
                </div>
                <div className="contact-row">
                    <div>Telephone:</div>
                    <div><input type="text" onChange={(e) => this.handleChange("phone", e.target.value)}/></div>
                </div>
                <div className="contact-row">
                    <div>Email:</div>
                    <div><input type="text" onChange={(e) => this.handleChange("email", e.target.value)}/></div>
                </div>
                <div className="contact-row">
                    <div>Request:</div>
                    <div><input type="text" onChange={(e) => this.handleChange("message", e.target.value)}/></div>
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