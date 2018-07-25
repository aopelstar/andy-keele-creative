import React from 'react';
import './projects.css';


export default function projects() {
    return (
        <div className="projects-main">
            <h1>
                Projects
        </h1>
            <h2>
                TwitterBook
        </h2>
            <h3>
                A full stack application made with a team of developers
        </h3>
            <ul>
                <li>•Accessed twitter database using Node</li>
                <li>•Shopping cart using Stripe</li>
                <li>•Functional components for data management</li>
            </ul>
            <div>

                <div>
                    <img src="https://res.cloudinary.com/drapplestar/image/upload/v1532376969/AJK%20creative/twitterbook2.png" alt="twitter photo 1" className="twitter-photo" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/drapplestar/image/upload/v1532376964/AJK%20creative/twitterbook.png" alt="twitter photo 2" className="twitter-photo" />
                </div>
            </div>
            <div className="project-repo">
                <div>
                    <a href="https://github.com/aopelstar/Twitter-book" target="_blank">
                    Click here to visit the repo
                    </a>
                    </div>
                <div>
                    <a href="https://www.youtube.com/embed/5_IYrQumvCk" target="_blank">
                    Click here to watch the site tour
                    </a>
                    </div>
            </div>
            <h2>
                TKO Media
        </h2>
            <h3>
                A full stack web application for a local sports media company
        </h3>
            <ul>
                <li>•React framework</li>
                <li>•NodeMailer to send emails to client via web server</li>
                <li>•Cloudinary API and framework </li>
            </ul>
            <div>

                <div>
                    <img src="https://res.cloudinary.com/drapplestar/image/upload/v1532376970/AJK%20creative/splash.png" className="twitter-photo" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/drapplestar/image/upload/v1532376967/AJK%20creative/home.png" alt="twitter photo 2" className="twitter-photo" />
                </div>
            </div>
            <div className="project-repo">
                <div>
                    <a href="https://github.com/aopelstar/media-tko">
                    Click here to visit the repo
                    </a>
                    </div>
                    <div>
                        <a href="http://www.tko-media.andrewkeelecreative.com" target="_blank">
                        Click here to visit the site(still in beta)
                        </a>
                    </div>
            </div>

        </div>
    )
}