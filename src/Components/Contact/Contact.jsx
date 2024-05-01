import React from 'react';
import './Contact.css'

const Contact = () => {
    return <div className="contact-container">
        <h2>Contact Me</h2>
        <form>
            <div>
                <label className='label' htmlFor="email">Email</label>
                <input type="mail"  id='email'/>
            </div>
            <div>
                <label className='label' htmlFor="">Messages</label>
                <textarea value={'Type your message here...'} id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button className='button' type='submit'>Send</button>
            </div>
        </form>
    </div>
}

export default Contact;
