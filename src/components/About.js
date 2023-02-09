import React from 'react'
import img from '../utils/self.jpg'

export default function About() {
    return (<div>

        <h3>Hiya! My names Lara, and I'm an aspiring Software Engineer!</h3>

        <img src={img} alt="Lara Grocke" width="300" height="320"/>

        <p>
        Motivated 20-year-old student working towards a Bachelor of Computer Science, eager to pursue roles that allow myself to further develop my understanding in this area.
        </p>
    </div>)
}