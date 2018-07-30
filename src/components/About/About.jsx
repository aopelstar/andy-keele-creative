import React from 'react';
import './about.css';

export default function about() {
    return (
        <div className="about-main">
            <div className="about-container">
                <h1 className="about-h1">
                    About Me
            </h1>
                <div className="the-man-container">
                    <div className="about-image">
                        <img src="https://res.cloudinary.com/drapplestar/image/upload/v1532374174/AJK%20creative/IMG_7846.jpg" alt="me" className="about-pic" />
                    </div>

                    <div className="about-desc">
                        They say that charity never faileth and neither do I.
                                I am a hard working professional, currently working as a freelance
                                web developer. I love problem solving and the pay off involved
                                with overcoming a complex problem. I also enjoy photography, building/flying
                                drones, and creative writing.
                    </div>
                </div>
            </div>
        </div>
    )
}


