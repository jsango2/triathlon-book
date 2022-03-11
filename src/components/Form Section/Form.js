import React from "react"
import { FormBox, TextBox, FormTitle, SubTitle, Superman } from "./styles.js"
import SUperman from "../../../content/assets/FATMAN.svg"

const Form = () => {
  return (
    <FormBox id="order">
      <Superman>
        <img src={SUperman} alt="" />
      </Superman>
      <TextBox>
        <FormTitle>Contact us / Order book</FormTitle>
        <SubTitle>In general, we reply within 24-28 hours.</SubTitle>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="Contact_Form" value="contact" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
            }}
          >
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
              marginBottom: "35px",
            }}
          >
            <label htmlFor="message">Message or Book order</label>
            <textarea
              name="message"
              placeholder="Write something.."
              style={{ height: "120px" }}
            ></textarea>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <input type="submit" name="button" value="Send Message / Order" />
          </div>
        </form>
      </TextBox>
    </FormBox>
  )
}

export default Form
