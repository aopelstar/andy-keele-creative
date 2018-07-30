import React, { Component } from 'react';
import './head.css';
import icon from '../../images/hamburger.png'

export default class Head extends Component {
    constructor() {
        super();
        this.state = {
            menu: false
        }

        this.menuClick = this.menuClick.bind(this)
    }

    menuClick() {
        this.setState({
            menu: !this.state.menu
        })
    }


    render() {
        return (
            <div className="head-main">
                <div className="head-container">
                    <div className='head-left'>
                        AndrewKeeleCreative.com
                </div>
                    <div className='head-right' onClick={() => this.menuClick()}>

                        <img src={icon} alt="hamburger" className="hamburger" />
                    </div>
                </div>

                <div className={this.state.menu?"head-menu": "head-menu head-menu-hidden"}>
                    <div className="head-menu-item">About</div>
                    <div className="head-menu-item">Portfolio</div>
                    <div className="head-menu-item">Skills</div>
                    <div className="head-menu-item">Projects</div>
                    <div className="head-menu-item">Contact</div>

                </div>

            </div>
        )
    }
}