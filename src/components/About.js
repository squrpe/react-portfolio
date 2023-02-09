import React from 'react'
import img from '../utils/self.jpg'

export default function About() {
    return (<div className='aboutContainer'>

        <img src={img} alt="Lara Grocke" width="300" height="320" className="aboutItem aboutImage"/>

        <h3 className="aboutItem">Hiya! My names Lara, and I'm an aspiring Software Engineer!</h3>

        <p className="aboutItem">
        Motivated 20-year-old student working towards a Bachelor of Computer Science, eager to pursue roles that allow myself to further develop my understanding in this area.
        </p>
        
    </div>)
}