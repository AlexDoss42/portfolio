import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

import { FaLinkedin, FaEnvelopeOpenText, FaGithub } from 'react-icons/fa'

export default () => (
  <div>
    <Navbar />
    <Header headerText="Talk to me Goose" />

    <div className='contactHero'>
      <p>
        <FaEnvelopeOpenText />   Alex.Doss42@gmail.com</p>
      <p>
        <FaLinkedin />    
        <a 
        href='https://www.linkedin.com/in/alex-doss/' 
        target='_blank'
        rel="noopener noreferrer"
        >https://www.linkedin.com/in/alex-doss
        /</a></p>
      <p> 
        <FaGithub />    
        <a 
        href='https://github.com/AlexDoss42' 
        target='_blank'
        rel="noopener noreferrer"
        >https://github.com/AlexDoss42</a>
      </p>
    </div>

  </div>
)