import React, { useEffect } from 'react';
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div className='d-flex justify-content-center mt-5 contact-part py-5'>
          <div className='d-flex flex-lg-row flex-md-column   flex-sm-column flex-column'>
            <div>
             <div className='contact-form'
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            >
              <div className='contact-text'>
                <h1>Ready to be in the ultimate software solutions?</h1>
                <h1>Contact Us Today! </h1>
              </div>
               <div className='contact-form-list'>               
                      <input className='contact' type="text" placeholder='Full Name*'/> <br/>
                      <input className='contact'  type="email" placeholder='G-mail*'/> <br/>
                      <input className='contact'  type="text" placeholder='Contact'/> <br/>
                      <textArea className='contact' style={{ height: "200px"}}  placeholder='Tell us, How can we help you?'></textArea> <br/>
                      <button className='contact-btn'>submit</button>               
               </div>
             </div>
            </div>
         <div>
         {/* next card start here  */}

           <div className='next-form' 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
               >
              <div>
                 <h1 className='my-5'>What next?</h1>
             
              </div>
              <div className='next-form-list'>
                <div className='next-list mt-5'>
                    <h1>1</h1>
                    <p>Our manager will reach you within some days and gather requirements from you.</p>
                </div>
                    
                <div className='next-list mt-5'>
                    <h1>2</h1>
                    <p>Our manager will reach you within some days and gather requirements from you</p>
                </div>
                    
                <div className='next-list mt-5'>
                    <h1>3</h1>
                    <p>Our manager will reach you within some days and gather requirements from you</p>
                </div>    
              </div>
            </div>
           </div>
          </div>
        </div>
    );
};

export default Contact;