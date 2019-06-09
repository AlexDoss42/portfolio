import React from "react"
import Header from '../components/Header'
import Navbar from "../components/Navbar"

export default () => (
  <div>
    <Navbar />
    <Header headerText='Skills/Certificates' />
    <h2 className='centeredHeader'>Skills</h2>
    <p>
      PostgreSQL
      Express
      React.js
      Node.js
      Redux
      HTML
      CSS
      JavaScript
      Git
      Socket.io
      Gatsby.js
      MongoDB
      Jest
      Cypress
      SCRUM
      Agile
      DigitalOcean
      Postman
      </p>

    <h2 className='centeredHeader'>Certificates</h2>

    <div className='certificatesContainer'>
      <div className='certificate'>
      <a href='https://www.udemy.com/course/react-front-to-back/'><h4>React Front to Back</h4></a>
        <h5>Author: Brad Traversy</h5>
        <img 
        src='https://udemy-certificate.s3.amazonaws.com/image/UC-7TVHZOJE.jpg?l=null' 
        className='certificateImg'/>
        
      </div>
      <div className='certificate'>
        <a href='https://www.udemy.com/understand-javascript/'>
        <h4>JavaScript: Understanding the Weird Parts</h4></a>
        <h5>Author: Anthony Alicia</h5>
        <img 
        src='https://udemy-certificate.s3.amazonaws.com/image/UC-OPL1ZS5Y.jpg?l=null' 
        className='certificateImg'/>
      </div>
    </div>
  </div>
)