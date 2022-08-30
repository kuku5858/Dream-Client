import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import "../../styles/interior.css";

function Estimate() {
  const [selected, setSelected] = useState({
    space: "",
    project: "",
    size: "",
    time: "",
  });

  const handleSelect = (e) => {
    setSelected(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    });
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_k6rvxy6",
      "template_kr0l3qh",
      form.current,
      "q_6q2FlfSnNaQwC4e"
    );

    console.log(form.current)

    e.target.reset();
  };

  return (
    <div className="container estimate__container">
      <h2>Estimate the project</h2>
      <form ref={form} onSubmit={sendEmail} className="estimate__form">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <div className="phone__city">
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number"
            required
          />
          <input type="text" name="city" placeholder="City" required />
        </div>

        <div className="select__container">
          <select name="space" value={selected.space} onChange={handleSelect}>
            <option value="">
              Choose the place where the project will be arranged?
            </option>
            <option>Apartment</option>
            <option value="House">House</option>
            <option value="Cafe">Cafe</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Office">Office</option>
            <option value="Other">Other</option>
          </select>

          <select name="project" value={selected.project} onChange={handleSelect}>
            <option value="project">How the project will be arranged?</option>
            <option value="Remote">Remote</option>
            <option value="onSite">On site</option>
          </select>
 
          <select name="size" value={selected.size} onChange={handleSelect}>
            <option value="Size">Choose the size of the place?</option>
            <option value="upto 29m2">Upto 29m2</option>
            <option value="30-59 m2">30-59 m2</option>
            <option value="60-99 m2">60-99 m2</option>
            <option value="100-149 m2">100-149 m2</option>
            <option value="150-199 m2">150-199 m2</option>
            <option value="200+ m2">200+ m2</option>
          </select>

          <select name="time" value={selected.time} onChange={handleSelect}>
            <option value="Starting time">Starting time of the project</option>
            <option value="Immediately">Immediately</option>
            <option value="With in a month">With in a month</option>
            <option value="With in 3 month">With in 3 month</option>
            <option value="With in  6 months">With in  6 months</option>
            <option value="After 6 months">After 6 months</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="10"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Estimate;
