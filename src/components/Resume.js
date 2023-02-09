import React from 'react';
import resume from '../utils/resume.pdf'

export default function Resume() {
    return (<div className='resumeDiv'>
        <div className='resumeContent'>
        <h3>Resume</h3>

        <p>My name's Lara, and I am an aspiring Software Engineer.</p>

        <h4>My Skills:</h4>

            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Object Oriented Programming</li>

        </div>

        <a href={resume} download="Lara Grocke Resume">
            <button>Download Resume</button>
        </a>

    </div>)
}