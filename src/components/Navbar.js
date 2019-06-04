import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className='navbarLinks'>
    <Link to="/"><p>Home</p></Link>
    <Link to='/projects'><p>Portfolio</p></Link>
    <Link to='/certificates'><p>Skills</p></Link>
    <Link to='/about'><p>About</p></Link>
    <Link to='/contact'><p>Contact</p></Link>
  </div>

)