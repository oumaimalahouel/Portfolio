import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mrgwvbpb");
  
  return (
    <section className="contactUs">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact me
      </h1>
      <p className="subtitle">
        Contact me for more information and Get notified when I publish somthing
        new.
      </p>

      <div className="flex">
      <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Adress : </label>
            <input  required type="email" id="email" name="email"/>

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>

            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit"  className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ...":"Submit"}
          
          </button>
          {state.succeeded && (
              <p style={{fontSize:"16px", marginTop:"1.7rem"}}>Your message has been sent successfully !</p>
          )}
        </form>
        <div className="animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;
