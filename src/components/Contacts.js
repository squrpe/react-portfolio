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
                setErrorMessage(`${event.target.name} is required.`);
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
        <form className="contact-form">
            Name: <input name="name" defaultValue={formState.name} onBlur={handleChange}></input>

            Email: <input name="email" defaultValue={formState.email} onBlur={handleChange}></input>

            Your Message: <textarea type="text" name="message" rows="2" className="form-control md-textarea" defaultValue={formState.message} onBlur={handleChange}></textarea>
            {/* <input name="message" defaultValue={formState.message} onBlur={handleChange}></input> */}

            {errorMessage && (<div>
                {errorMessage}
            </div>)}

            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>

    )
}
