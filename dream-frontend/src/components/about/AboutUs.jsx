import React, { useRef } from "react";
import emailjs from "emailjs-com";

import "../../styles/aboutus.css";

function AboutUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_k6rvxy6",
      "template_hj1d2ja",
      form.current,
      "q_6q2FlfSnNaQwC4e"
    );

    e.target.reset();
  };

  return (
    <section>
      <h5>A FEW WORD ABOUT US</h5>
      <h2>OUR COMPANY</h2>

      <div className="container aboutus__container">
        <p>
          DREAM INTERIOR DESIGN is a design studio founded by architect Eyerusalem Yilma.
          The main activity of the company is the design and arrangement of
          private and commercial interiors such as apartments, houses,
          restaurants, shops and hotels in Addis Ababa and the whole country.<br></br><br></br> Our
          interior designs are characterized by innovation and attention to
          detail using the highest quality materials. All activities are carried
          out in accordance with the Investor's budget, in order to obtain the
          best end result in the form of a beautiful and functional interior.
          The scope of work does not have to be limited only to the design
          process. We also offer comprehensive implementation care in the form
          of author's supervision, construction and finishing consultations, up
          to interior design, as well as decorating and home staging services.
          We also specialize in the design and implementation of custom-made
          furniture. <br></br><br></br>During the design process, we put great emphasis on direct
          contact between the Architect and the Investor. The key is to get to
          know all his needs and expectations before starting work. Each project
          is a challenge for us and we approach it with great enthusiasm.
          Effectiveness in operation is ensured by the combination of many years
          of practice with the knowledge of the latest trends in architecture
          and interior design. In addition, we cooperate with many professional
          companies from the construction, finishing and carpentry industries,
          which are happy to provide support at every stage of implementation.
          <br></br><br></br>Cooperation with DREAM INTERIOR DESIGN guarantees not only a beautiful
          interior, but also support throughout the entire implementation
          process, thanks to which we have been trusted by a wide group of
          customers from all over Ethiopia.
        </p>

        <div className="form__title">
          <h2>WRITE TO US</h2>
          <h5>Any Question or Review?</h5>
        </div>

        <div className="form__container">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="aboutus__input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="aboutus__input"
            />
            <div className="phone__city">
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone number"
                required
              />
              <input type="text" name="city" placeholder="City" required />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="15"
              required
              className=".aboutus__textarea"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
