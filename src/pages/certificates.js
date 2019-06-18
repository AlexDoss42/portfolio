import React from "react"

import Header from '../components/Header'
import Navbar from "../components/Navbar"

import express from "../images/Express.png"
import postgres from "../images/PostgreSQL.png"
import react from "../images/react.png"
import node from "../images/node.png"
import redux from "../images/redux.png"
import html from "../images/HTML.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import git from "../images/git.png"
import socket from "../images/socket.png"
import gatsby from "../images/gatsby.png"
import mongodb from "../images/mongodb.png"
import jest from "../images/jest.png"
import scrum from "../images/scrum.png"
import digitalocean from "../images/digitalocean.png"
import postman from "../images/postman.png"
import sass from "../images/sass.png"
import nodemailer from "../images/nodemailer.png"

export default (props) => {
  console.log(props.data)
  return (
    <div>
      <Navbar />
      <Header headerText='Skills/Certificates' />
      <h2 className='centeredHeader'>Skills</h2>
      <div className='skillContainer'>

      <div className='skill'>
          <img
            src={postgres}
            alt='postgreSQL Logo' />
          <p>postgeSQL</p>
        </div>

      <div className='skill'>
        <img src={express} alt='Express Logo' /> 
        <p>Express</p>
      </div>

      <div className='skill'>
        <img src={react} alt='React Logo' />
        <p>React.js</p>
      </div>

      <div className='skill'>
        <img src={node} alt='Node Logo' />
        <p>Node.js</p>
      </div>

      <div className='skill'>
        <img src={redux} alt='Redux Logo' />
        <p>Redux</p>
      </div>

      <div className='skill'>
        <img src={html} alt='HTML Logo' />
        <p>HTML</p>
      </div>

      <div className='skill'>
        <img src={css} alt='CSS Logo' />
        <p>CSS</p>
      </div>

      <div className='skill'>
        <img src={javascript} alt='JavaScript Logo' />
        <p>JavaScript</p>
      </div>

      <div className='skill'>
        <img src={git} alt='Git Logo' />
        <p>Git</p>
      </div>

      <div className='skill'>
        <img src={socket} alt='Socket.io Logo' />
        <p>Socket.io</p>
      </div>

      <div className='skill'>
        <img src={gatsby} alt='Gatsby Logo' />
        <p>Gatsby.js</p>
      </div>

      <div className='skill'>
        <img src={mongodb} alt='MongoDB Logo' />
        <p>MongoDB</p>
      </div>

      <div className='skill'>
        <img src={jest} alt='Jest Logo' />
        <p>Jest</p>
      </div>

      <div className='skill'>
        <img src={scrum} alt='Scrum Logo' />
        <p>SCRUM</p>
      </div>

      <div className='skill'>
        <img src={digitalocean} alt='DigitalOcean Logo' />
        <p>DigitalOcean</p>
      </div>

      <div className='skill'>
        <img src={postman} alt='Postman Logo' />
        <p>Postman</p>
      </div>

      <div className='skill'>
        <img src={sass} alt='Sass Logo' />
        <p>Sass</p>
      </div>

      <div className='skill'>
        <img src={nodemailer} alt='Nodemailer Logo' />
        <p>Nodemailer</p>
      </div>

      </div>

      <h2 className='centeredHeader'>Certificates</h2>

      <div className='certificatesContainer'>

        <div className='certificate'>
          <a
            href='https://www.udemy.com/understand-javascript/'
            target='_blank'
            rel="noopener noreferrer" >
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