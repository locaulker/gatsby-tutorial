import React from "react"
import Navbar from "./Navbar"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <hr />
      <main>{children}</main>
      <hr />
      <Footer />
    </>
  )
}

export default Layout
