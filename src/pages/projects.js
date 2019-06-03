import React from "react"
import Header from '../components/Header'
import Navbar from "../components/Navbar"

export default () => (
  <div>
    <Navbar />
    <Header headerText='Portfolio' />
    <p>All My Projects</p>

    <div>
      <h2>TRIPDADDY</h2>
      <h4>May-Present</h4>

      <h3>Full Stack Developer</h3>

      <h4>
        Tech Stack: PostgreSQL | Express | React.js | Node.js | Redux | RESTful API | Nodemailer | Sass | bcrypt.js
</h4>

      <p>
        Tripdaddy is a web app that eliminates the pain points of coordinating a trip with friends and family. Users are able to pin ideas for their trip to a board and chat in-app as they discuss which events they want to do. Users are able to invite friends to the trip and use the gear and todo list to make sure nothing is forgotten.
  </p>

      <ul>
        <li>
          Coordinated with a UX/UI designer to implement user-friendly flow and proper design specs
        </li>

        <li>
          Coded every line front to back as part of the personal project for DevMountain Curriculum
        </li>
        </ul>
        <ul>
          <li>
            Github Repo: <a>https://github.com/AlexDoss42/silver-maverick</a>
          </li>
          <li>
            Url: <a>http://tripdaddy.business/#/</a>
          </li>
        </ul>
      

      <div>
        <h2>Fin-S</h2>
        <h4>May-Present</h4>

        <h3>Full Stack Developer/Team-Lead</h3>

        <h4>
          Tech Stack: PostgreSQL | Express | React.js | Node.js | Redux | RESTful API | Jest  | Chart.js | bcrypt.js
        </h4>

        <p>
          Fin-S is a mobile responsive web app that is designed to help users take control of their financial health as it guides them through simple steps.  The app has users enter their financial data and then helps them to gain financial stability through budgeting, snowballing debts, building emergency funds, and proper investment practices.
  </p>

        <ul>
          <li>
            Coordinated with a UX/UI designer to implement user-friendly flow and proper design specs
          </li>
          <li>
            Coded every line front to back as part of the personal project for DevMountain Curriculum
          </li>
        </ul>

        <ul>
          <li>
            Github Repo: <a>https://github.com/fin-s/fin-s</a>
          </li>
          <li>
            Url: <a>ADD LINK HERE!!!</a>
          </li>
        </ul>
      </div>

    </div>

  </div>
)