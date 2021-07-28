import React from 'react';
import photo from '../../assets/headshot.jpg';

function About () {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>

            <div className="flex-row">
                <img src={photo} alt="Headshot" className="headshot"/>
                <div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
        </section>
    );
}

export default About;