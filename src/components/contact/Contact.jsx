import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hwwtlh4', 'template_3oohm7k', form.current, 'lKwhA86MxUZbEMiY9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact__option_icon'/>
            <h4>Email</h4>
            <h5>segun.olatunbosun10@yahoo.com</h5>
            <a href='mailto:segun.olatunbosun10@yahoo.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact__option_icon'/>
            <h4>Messenger</h4>
            {/* <h5></h5> */}
            <a href='https://m.me/badboi.sidd' target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <ImWhatsapp className='contact__option_icon'/>
            <h4>Whatsapp</h4>
            <h5></h5>
            <a href='https://api.whatsapp.com/send?phone=2349076621550' target='_blank'>Send a Message</a>
          </article>

        </div>
          {/* END OF CONTACT OPTION */}
          
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='text' placeholder='Your Fullname' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact