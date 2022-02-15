import React from "react"
import { WrapFormSection, Form, Photo, Rectangle } from "./styles.js"

const formular = () => {
  return (
    <WrapFormSection>
      <Photo />
      <Rectangle />
      <Form>
        <form>
          <input type="text" name="Ime" placeholder="Ime" />
          <input type="email" name="Email" placeholder="Email" />
          <textarea name="Text" rows="5" cols="33" placeholder="Poruka" />
          <button type="submit">POŠALJI UPIT</button>
        </form>
      </Form>
    </WrapFormSection>
  )
}

export default formular
