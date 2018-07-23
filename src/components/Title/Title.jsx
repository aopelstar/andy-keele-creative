import React from 'react';
import './title.css';


export default function title(){
    return(
        <div className="title-main">
            <h1>
                Andrew Keele
            </h1>
            <h2>
                Awesome Freelance Developer
            </h2>
            <div>
                <img src="http://res.cloudinary.com/drapplestar/image/upload/a_180/v1532374174/AJK%20creative/IMG_7846.jpg" alt="pic of me" className="title-photo" />
            </div>
            <h3>
            They say that charity never faileth and neither do I. 
            I am a hard working professional, currently working as a freelance 
            web developer. I love problem solving and the pay off involved 
            with overcoming a complex problem. I also enjoy photography, building/flying 
            drones, and creative writing.
            </h3>
        </div>
    )
}