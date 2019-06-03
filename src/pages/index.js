import React from "react"
import Header from '../components/Header'
import Navbar from "../components/Navbar"

export default () => (
  <div>
    <Navbar />
    <Header headerText='Alex Doss'/>
    <p>Web Developer | Economist | Fantasy Football Consultant</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
