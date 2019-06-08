import React from "react"
import Header from "../components/header"
import Navbar from "../components/Navbar"

export default () => (
  <div>
    <Navbar />
    <Header headerText="Talk to me Goose" />

    <p><i class="fas fa-envelope-open-text"></i>    Alex.Doss42@gmail.com</p>
    <p><i class="fab fa-linkedin"></i>    <a>https://www.linkedin.com/in/alex-doss/</a></p>
    <p><i class="fab fa-github"></i>    <a>https://github.com/AlexDoss42</a></p>
  </div>
)