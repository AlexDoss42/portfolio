import React from "react"
import Header from "../components/header"
import Navbar from "../components/Navbar"

export default () => (
  <div>
    <Navbar />
    <Header headerText="Contact" />

    <p>Email: Alex.Doss42@gmail.com</p>
    <p>LinkedIn:<a>https://www.linkedin.com/in/alex-doss/</a></p>
    <p>GitHub:<a>https://github.com/AlexDoss42</a></p>
  </div>
)