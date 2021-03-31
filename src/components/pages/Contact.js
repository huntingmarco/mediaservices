import emailjs from "emailjs-com";
import React from 'react';
import './Formcontact.css'

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_3coqm38', 'template_ex5aada', e.target, 'user_elemesRZhjLVOQ8OWfUw4')
        .then((result) => {
            //console.log(result.text);
            alert("Thank you for reaching out to us. We will get back to you shortly.");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail} className='form'>
         
                <label for="fname">Name</label>
                <input type="text" name="name" placeholder="Your name.." required></input>
                <label for="fname">Email</label>
                <input type="text" name="email" placeholder="Your email.." pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required></input>
                <label for="fname">Subject</label>
                <input type="text" name="subject" placeholder="Subject.." required></input>
                <label for="fname">Message</label>
                <textarea type="text" name="message" placeholder="Your message.." required></textarea>
                <input type="submit" value="Send Message"></input>
                
                   
                </form>
            </div>
        </div>
    )
}