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
            <h2>
                Timpview Events
        </h2>
            <h3>
                A mobile first, fullstack web app
        </h3>
            <ul>
                <li>•React and JS to create components</li>
                <li>•Server created using Node and Express</li>
                <li>•Data management using PostgreSQL</li>
            </ul>
            <div>

                <div>
                    <img src="https://res.cloudinary.com/drapplestar/image/upload/v1532376970/AJK%20creative/splash.png" className="twitter-photo" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/drapplestar/image/upload/v1532376967/AJK%20creative/home.png" alt="twitter photo 2" className="twitter-photo" />
                </div>
            </div>

        </div>
    )
}