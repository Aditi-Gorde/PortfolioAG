import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Workf() {
    const form = useRef();
    const notifySuccess = () => {
        console.log("okiess");
        toast.success('Message sent successfully!!', {
            position: "top-right",
            autoClose: 2000,
            theme:'dark',
            opacity:'0.5',
        });
      };

      const notifyError = () => {
        toast.error('Oops! Something went wrong.', {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: false, // Do not auto-close the error notification
          theme:'dark',
        });
      };

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ieg43j2', 'template_jf2bfxv', form.current, 'wj5OVe1KK24t-3Oab')
        .then((result) => {
            console.log(result.text);
            notifySuccess();
        }, (error) => {
            console.log(error.text);
            notifyError();
        });
    };
  return (
    <>
    <div id="contact">
        <h1 id="Workh1">Work with me</h1><br />
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h4 style={{color:'white'}}>You can also find me on</h4><br />
                <div style={{paddingLeft:0}} class="d-grid gap-2 col-6 mx-auto" id="soc">
                   <a href='https://www.linkedin.com/in/aditi-gorde-67797a211/' target="_blank" rel="noopener"><button class="btn btn-outline-secondary" type="button" style={{color:'white'}}>LinkedIn</button></a><br />

                    <a target='_blank' rel="noopener" href='https://www.instagram.com/aditigorde10/?next=%2F'><button class="btn btn-outline-secondary" type="button" style={{color:'white'}}>Instagram</button></a><br />

                  <a target="_blank" rel="noopener" href='https://github.com/Aditi-Gorde'>  <button class="btn btn-outline-secondary" type="button" style={{color:'white'}}>Github</button></a><br />
                </div>
            </div>
            <div className='col' id="soc1">
                <form ref={form} onSubmit={sendEmail}>
                    <div class="relative mb-3">
                        <label for="Name" class="leading-7 text-sm text-gray-400">Name</label>
                        <input type="text" name="user_name" class="form-control bg-secondary" id="Name" aria-describedby="NameHelp"/>
                    </div>
                    <div class="relative mb-3">
                    <label for="Email1" class="leading-7 text-sm text-gray-400">Email address</label>
                        <input type="email" name="user_email" class="form-control bg-secondary" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="relative mb-3">
                        <label for="Msg" class="leading-7 text-sm text-gray-400">Message</label>
                        {/* <input type="textArea" style={{height:100}} name="message" class="form-control bg-secondary" id="Msg" aria-describedby="Msg"/> */}
                        <textarea class="form-control bg-secondary" id="Msg" name="message" cols="15" rows="5"></textarea>
                    </div><br />
                    <input className='formInput' type="submit" value="Submit" />
                    <ToastContainer />
                </form>
            </div>
            </div>
    </div>
</div>
    </>
  )
}
