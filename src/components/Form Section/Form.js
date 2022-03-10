import React from "react"
import { FormBox, TextBox, FormTitle, SubTitle, Superman } from "./styles.js"
import SUperman from "../../../content/assets/FATMAN.svg"

const Form = () => {
  return (
    <FormBox>
      <Superman>
        <img src={SUperman} alt="" />
      </Superman>
      <TextBox>
        <FormTitle>Contact us / Order book</FormTitle>
        <SubTitle>In general, we reply within 24-28 hours.</SubTitle>
        <form>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label for="name">Name</label>
            <input type="text" name="Name" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
            }}
          >
            <label for="email">Email</label>
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
            <label for="message">Message or Book order</label>
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
