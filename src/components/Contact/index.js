import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // sync internal state of component formState with the user input from the DOM
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }

        }

        // only let state update with the user input if there is no error message
        if (!errorMessage) {
            // setFormState() used to update the formState value for the name property
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // prevent default action of the form Submit button
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="my-5">
            <h1 id="contact-me">Contact Me</h1>

            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;