import React,{useRef} from 'react'
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast"


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zaesys9', 'template_kcwbpfn', form.current, 'kNHa9luxy4LaoCjFI')
      .then((result) => {
          toast.success("Sent Successfully")
          let name=document.getElementById("name")
          let email=document.getElementById("email")
          let message=document.getElementById("message")
          name.value=null
          email.value=null
          message.value=null;
      }, (error) => {
          toast.error("Try Again!!")
      });
  };



  return (
    <section className='contact'>
        <motion.form ref={form} onSubmit={sendEmail}>
            <h2>CONTACT US</h2>
            <input type="text" placeholder='Name' name='from_name' id="name" required/>
            <input type="email" placeholder="Email" name='from_email' id="email" required/>
            <textarea  cols="30" rows="30" placeholder='Message...' name='message' id="message" required></textarea>
            <button>Send</button>
        </motion.form>
    </section>
  )
}

export default Contact