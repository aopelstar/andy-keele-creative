import React from 'react';
import './skills.css';
import CSS from '../../images/css.png'
import Git from '../../images/git.png';
import Github from '../../images/github.png';
import Html from '../../images/html.png';
import Js from '../../images/js.png';
import Mailer from '../../images/mailer.png';
import Node from '../../images/node.png';
import Post from '../../images/postgres.png';
import reactjs from '../../images/react.png';
import SQL from '../../images/sql.png';
import Cloud from '../../images/cloudinary.png';


export default function skills() {
    return (
        <div className="skills-main">
            <h1>Skills</h1>
            <div className="icons-container">

                <div className="icon-container">
                    <div><img src={CSS} alt="CSS" className="icon-image" /></div>
                    <div>CSS</div>
                </div>
                <div className="icon-container">
                    <div><img src={Git} alt="" className="icon-image" /></div>
                    <div>Git</div>
                </div>
                <div className="icon-container">
                    <div><img src={Github} alt="" className="icon-image" /></div>
                    <div>Github</div>
                </div>
                <div className="icon-container">
                    <div><img src={Html} alt="" className="icon-image" /></div>
                    <div>HTML</div>
                </div>
                <div className="icon-container">
                    <div><img src={Js} alt="" className="icon-image" /></div>
                    <div>JS</div>
                </div>
                <div className="icon-container">
                    <div><img src={Mailer} alt="" className="icon-image" /></div>
                    <div>NodeMailer</div>
                </div>
                <div className="icon-container">
                    <div><img src={Node} alt="" className="icon-image" /></div>
                    <div>Node</div>
                </div>
                <div className="icon-container">
                    <div><img src={Post} alt="" className="icon-image" /></div>
                    <div>Postgres</div>
                </div>
                <div className="icon-container">
                    <div><img src={reactjs} alt="" className="icon-image" /></div>
                    <div>Reactjs</div>
                </div>
                <div className="icon-container">
                    <div><img src={SQL} alt="" className="icon-image" /></div>
                    <div>SQL</div>
                </div>
                <div className="icon-container">
                    <div><img src={Cloud} alt="" className="icon-image" /></div>
                    <div>Cloudinary</div>
                </div>

            </div>
        </div>
    )
}