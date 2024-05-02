import React from 'react';
import './Contact.css'
import { BiSend } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';

const Contact = ({handleSubmit, handleEmail, handleMessage, email, message}) => {
    return <div className="contact-container">
        <h2 style={{position:'relative'}}>Contact Me {<GrContact style={{position:'absolute', top:'3px', marginLeft:'5px'}}/>}</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label className='label' htmlFor="email">Email</label>
                <input required onChange={(e) => handleEmail(e)} value={email} type="mail" placeholder='@your email here...' id='email'/>
            </div>
            <div>
                <label className='label' htmlFor="">Messages</label>
                <textarea required onChange={(e) =>handleMessage()} value={message===''?'Type your message here...':message} id="" cols="30" rows="10" ></textarea>
            </div>
            <div>
                <button className='button' type='submit'>Send {<BiSend />}</button>
            </div>
        </form>
    </div>
}

export default Contact;
