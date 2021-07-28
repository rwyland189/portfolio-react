import React from 'react';
import photo from '../../assets/headshot.jpg';

function About () {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>

            <div className="flex-row">
                <img src={photo} alt="Headshot" className="headshot"/>
                <div className="about-text">lorem</div>
            </div>
        </section>
    );
}

export default About;