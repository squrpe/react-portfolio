import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers'


export default function Contacts() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChange(event) {
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);

            if (isValid) {
                setErrorMessage('');
            } else {
                setErrorMessage('Email is invalid!');
            }

        } else {
            if (!event.target.value.length) {
                setErrorMessage(`A ${event.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value});
        }

        console.log(formState);
    }

    return (
        <form className="contactForm">
            <legend>Contact Me</legend>

            <div className='formItem'>Name: <input name="name" defaultValue={formState.name} onBlur={handleChange}></input></div>

            <div className='formItem'>Email: <input name="email" defaultValue={formState.email} onBlur={handleChange}></input></div>

            <div className='formItem'>Your Message: <textarea type="text" name="message" rows="2" className="form-control md-textarea" defaultValue={formState.message} onBlur={handleChange}></textarea></div>
            {/* <input name="message" defaultValue={formState.message} onBlur={handleChange}></input> */}

            {errorMessage && (<div className='error'>
                {errorMessage}
            </div>)}

            <div className='formItem'><button type="submit" onSubmit={handleSubmit}>Submit</button></div>
        </form>

    )
}
