import React from "react"
import Header from '../components/Header'
import Navbar from "../components/Navbar"
import dashboard from "../images/Trip_Dashboard.png"
import chart from "../images/Fin-S_Chart_View.png"

export default () => (
  <div>
    <Navbar />
    <Header headerText='Portfolio' className='Header' />

    <div className="ProjectsContainer">
      <div className="Project">
        <h2><a
          href='http://tripdaddy.business/#/'
          target='_blank'
          rel="noopener noreferrer">TripDaddy</a></h2>
        <h4>May-Present</h4>

        <p>
          TripDaddy is a web app that eliminates the pain points of coordinating a trip with friends and family. Users are able to pin ideas for their trip to a board and chat in-app as they discuss which events they want to do. Users are able to invite friends to the trip and use the gear and todo list to make sure nothing is forgotten.
        </p>
        <img src={dashboard} alt='Trip Dashboard' className='projectPic' />

        <h3>Full Stack Developer</h3>

        <h4>
          Tech Stack: PostgreSQL | Express | React.js | Node.js | Redux | RESTful API | Nodemailer | Sass | bcrypt.js
      </h4>
        <p>
          <a
            href='https://github.com/AlexDoss42/silver-maverick'
            target='_blank'
            rel="noopener noreferrer">Github Repo</a>
        </p>


        <ul>
          <li>
            Coordinated with a UX/UI designer to implement user-friendly flow and proper design specs
          </li>
          <li>
            Used socket.io to create a live in-trip chat feature
          </li>
          <li>
            Utilized Sass extensions and inheritance to keep code DRY
          </li>
        </ul>

      </div>

      <div className="Project">
        <h2><a
          href='https://fin-s.us/#/'
          target='_blank'
          rel="noopener noreferrer">Fin-S</a></h2>
        <h4>May-Present</h4>
        <p>
          Fin-S is a mobile responsive web app that is designed to help users take control of their financial health as it guides them through simple steps.  The app has users enter their financial data and then helps them to gain financial stability through budgeting, snowballing debts, building emergency funds, and proper investment practices.
        </p>

        <img src={chart} alt='Fin-S Dashboard' className='projectPic' />

        <h3>Full Stack Developer/Team-Lead</h3>
        
        <h4>
          Tech Stack: PostgreSQL | MongoDB | Mongoose | Express | React.js | Node.js | Redux | RESTful API | Jest | Chart.js | bcrypt.js | Sass
        </h4>
        <p>
          <a
            href='https://github.com/fin-s/fin-s'
            target='_blank'
            rel="noopener noreferrer">Github Repo</a>
        </p>
        <ul>
          <li>
            Unit testing with Jest
          </li>
          <li>
            Chart.js was used to demonstrate the impact of increasing payments on debts
          </li>
          <li>
            Implemented MongoDB to create better data storage of users and incomes/debts/expenses
          </li>
        </ul>
      </div>
    </div>
  </div>
)