import React from "react"
// import { staticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../components/Header'
import Navbar from "../components/Navbar"
import { graphql } from 'gatsby'


export default (props) => {
  console.log(props.data)
  return (
    <div>
      <Navbar />
      <Header headerText='Skills/Certificates' />
      <h2 className='centeredHeader'>Skills</h2>
      <div className='skillContainer'>
      <h3 className='centeredHeader'>
          PostgreSQL | Express | React.js | Node.js | Redux | HTML | CSS | JavaScript | Git | DigitalOcean | Socket.io | Gatsby.js | RESTful API | Nodemailer | Sass | bcrypt.js | SCRUM | Agile | MongoDB | Postman | Jest
      </h3>
        {/* <div className='skill'>
          <Img
            resolutions={props.data.postgeSQL.childImageSharp.fixed}
            alt='postgeSQL Logo' />
          <p>postgeSQL</p>
        </div> */}
        {/* <div className='skill'>
        <Img src={express} alt='Express Logo' /> 
        <p>Express</p>
      </div>
      <div className='skill'>
        <Img src='' alt='postgeSQL' />
        <p>React.js</p>
      </div>
      <div className='skill'>
        <Img src='' alt='postgeSQL' />
        <p>Node.js</p>
      </div>
      <div className='skill'>
        <img src='' alt='postgeSQL' />
        <p>Redux</p>
      </div>
      <div className='skill'>
        <img src='' alt='postgeSQL' />
        <p>HTML</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>CSS</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>JavaScript</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>Git</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>Socket.io</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>Gatsby.js</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>MongoDB</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>Jest</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>Cypress</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>SCRUM</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>DigitalOcean</p>
      </div>
      <div className='skill'>
        <img src='https://banner2.kisspng.com/20180421/lkw/kisspng-postgresql-database-logo-computer-icons-replicatio-software-developer-5adbf4c2ceb373.0739840815243644828467.jpg' alt='postgeSQL' />
        <p>Postman</p>
      </div>  */}
      </div>

      <h2 className='centeredHeader'>Certificates</h2>

      <div className='certificatesContainer'>

        <div className='certificate'>
          <a
            href='https://www.udemy.com/understand-javascript/'
            target='_blank'
            rel="noopener noreferrer" å>
            <h4>JavaScript: Understanding the Weird Parts</h4></a>
          <h5>Author: Anthony Alicia</h5>
          <img
            src='https://udemy-certificate.s3.amazonaws.com/image/UC-OPL1ZS5Y.jpg?l=null'
            alt='Udemy Certificate'
            className='certificateImg' />
        </div>

        <div className='certificate'>
          <a
            href='https://www.udemy.com/course/react-front-to-back/'
            target='_blank'
            rel="noopener noreferrer"><h4>React Front to Back</h4></a>
          <h5>Author: Brad Traversy</h5>
          <img
            src='https://udemy-certificate.s3.amazonaws.com/image/UC-7TVHZOJE.jpg?l=null'
            className='certificateImg'
            alt='Udemy Certificate' />
        </div>

      </div>

    </div>
  )
}

// export const imageQuery = graphql`
//   query imageQuery {
//     postgres: file(relativePath: { eq: "/PostgreSQL.png"}) {
//       childImageSharp {
//         fixed(width: 175, height: 60) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }

// `