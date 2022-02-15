import React from "react"

import { UslugeWrap } from "./styles.js"
import UslugeEstetika from "./uslugeEstetika.js"
import UslugeStomatologija from "./uslugeStomatologija.js"

const Usluge = () => {
  return (
    <UslugeWrap>
      <UslugeStomatologija />
      <UslugeEstetika />
    </UslugeWrap>
  )
}

export default Usluge
