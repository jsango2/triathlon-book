import * as React from "react"
import Navbar from "./Navigation/navbar"

const Layout = ({ title, children }) => {
  return (
    <div className="WrapLayout">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
