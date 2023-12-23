import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="third_page">
        <div>
          <img
            src="../images/contact-bg.jpg"
            className="d-block w-100"
            alt="..."
          />
          
          <h3 className="item-text contact-us">| Contact Us</h3>
          <h3 className="first_heading text-light ">
            Get In Touch
            <br /> With Our Agents
          </h3>
        </div>
        <div className="deal deal-container">
          {/* <img
            className="card border rounded"
            width="600px"
            height="400px"
            src="../images/video-frame.jpg"
            alt="map"
          /> */}
          
          
          <iframe className="card border rounded" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15132.37589771775!2d73.8550281!3d18.524655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c10b0cd008bb%3A0xd87c839225caa8a3!2sNexAI%20Tech!5e0!3m2!1sen!2sin!4v1703317876829!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          <div>
            <div className='card5'>
                <div><img src="../images/phone-icon.png"  alt=""  /></div>
                <div>
                    <div>020-1234-5678</div>
                    <div className='text-secondary'>Phone Number</div>
                </div>
            </div>
            <div className='card6'>
                <div><img src="../images/email-icon.png" alt=""  /></div>
                <div>
                    <div>info@villa.com</div>
                    <div className='text-secondary'>Email</div>
                </div>
            </div>
            <div></div>
        </div>
          
          <div className="form card border rounded">
            <div class="form-container form card border rounded ">
              <form class="login-form">
                <div>
                  <label for="name">Name </label>
                  <input type="text" placeholder="Your Name ..." />
                </div>

                <div>
                  <label for="email">Email </label>
                  <input id="email" type="email" placeholder="Your Email..." />
                </div>

                <div>
                  <label for="password">Subject </label>
                  <input type="text" placeholder="Subject ..." />
                </div>

                <div>
                  <label for="password">Message </label>
                  <input type="text" placeholder="Message ..." />
                </div>

                <button class="btn btn-dark rounded-pill btn--form" >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer class="dark-footer">
        <div>
          <p>&copy; 2023 Made With Love By Siddhant Kakade</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
