import React from "react"
import Header from '../components/Header'
import Navbar from "../components/Navbar"

export default () => (
  <div>
    <Navbar />
    <Header headerText='Skills/Certificates' />
    <h2>Skills</h2>
    <p>PostgreSQL | Express | React.js | Node.js | Redux | HTML | CSS  JavaScript | Git | RESTful API | Socket.io | Gatsby.js | MongoDB Jest | Cypress | SCRUM | Agile | DigitalOcean | Postman</p>

    <h2>Certificates</h2>

    <div>
      <h4>React Front to Back</h4>
      <h5>Author: Brad Traversy</h5>
      <a>https://www.udemy.com/course/react-front-to-back/</a>
      <img src='https://udemy-certificate.s3.amazonaws.com/image/UC-7TVHZOJE.jpg?l=null' />
    </div>
    <div>
      <h4>JavaScript: Understanding the Weird Parts</h4>
      <h5>Author: Anthony Alicia</h5>
      <a>https://www.udemy.com/understand-javascript/</a>
      <img src='https://udemy-certificate.s3.amazonaws.com/image/UC-OPL1ZS5Y.jpg?l=null' />
    </div>

  </div>
)