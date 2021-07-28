import React from 'react';

function Resume () {
    return (
        <section className="my-5">
            <h1 id="resume">Resume</h1>

            <h2>Front End Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
            </ul>
            
            <h2>Back End Skills</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>SQL/MySQL</li>
                <li>Mongoose/MongoDB</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
    );
}

export default Resume;