import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContactArea = () => {


    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })



    const handleChange = (key, value) => {
        setForm((pre) => ({
            ...pre,
            [key]: value
        }))

    }

    const handleSubmit = () => {

        const YOUR_SERVICE_ID = 'service_dlfoehl'
        const YOUR_TEMPLATE_ID = 'template_rdepd7g'
        const YOUR_PUBLIC_KEY = 'qxwF5lGxB4YwolQBp'
        const formData = {
            from_name: form.name,
            from_email: form.email,
            to_name: 'Bidyut Sikder',
            message: form.message
        }


        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, {
            publicKey: YOUR_PUBLIC_KEY
        })
            .then(
                (res) => {
                    console.log('SUCCESS!', res);
                    toast.success('Your Message has been sent successfully')
                    setForm({
                        name: '',
                        email: '',
                        message: ''
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send your message. Please try again later')
                },
            );
    }






    return (
        <div id="contact">
            <div className="container" id="contact">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>

                        <p><i className="fas fa-paper-plane"></i> bidyutsikder420@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i> 01733463493</p>

                        <div className="social-icons">
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-twitter-square"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            <Link href="#"><i className="fab fa-linkedin"></i></Link>
                        </div>
                        <Link to="/images/my-cv.pdf" target="blank" className="btn btn2">Download CV</ Link>

                    </div>

                    <div className="contact-right">
                        <form onSubmit={(e) => e.preventDefault()} >
                            <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} type="text" name="Name" placeholder="Your Name" required />
                            <input
                                value={form.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                type="text"
                                name="Email"
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                value={form.message}
                                onChange={(e) => handleChange('message', e.target.value)}
                                name="Message"
                                id=""
                                rows="6"
                                placeholder="Your Message"
                            ></textarea>
                            <button className="btn btn2" onClick={handleSubmit} type="submit">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactArea;