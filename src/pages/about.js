import React from "react"
import Header from '../components/Header'
import Navbar from "../components/Navbar";

export default () => (
  <div>
    <Navbar />
    <Header headerText='About Me' />

    <div className='ExperienceContainer'>
      <p className='aboutMeP'>Well Chris Pratt beat me to the dad-bod comedian role so I guess I have to be a web developer now. Fortunately, with the Web Developer salary I should be able to afford a personal trainer and nutrionist to have the Star Lord/Jurassic World Chris Pratt transformation.  All jokes aside, I love to solve problems and I have an entreprenuerial itch that is near impossible to scratch.  I have spent my professional career working for startups and building awesome products.  I love to learn and dive in head-first in to the next challenge.  After a couple years of project and product management, I finally decided I was going to learn development skills and now I am ready to build something amazing with the next team.</p>
    </div>

    <h2 className='centeredHeader'>Experience</h2>

    <div className="ExperienceContainer">
      <div className="Experience">
        <h3>Rentie, LLC</h3>
        <h4>Operations and Product Manager</h4>
        <h5>Provo, UT</h5>
        <h5>Nov 2018 - Feb 2019</h5>

        <ul>
          <li>
            Initiated SCRUM Project Management methodology increasing the velocity of the engineering team and quicker delivery of shippable software
          </li>
          <li>
            Implemented ghSmart Hiring Process and currently adding three Full Stack Engineers to the team
          </li>
          <li>
            Built out sales strategy to monetize the product with four streams of revenue through ad space, selling leads, promoted listing space, and application fees
          </li>
        </ul>
      </div>

      <div className="Experience">
        <h3>Dwelo Inc.</h3>
        <h4>Project Manager</h4>
        <h5>Dallas, TX</h5>
        <h5>May 2017 – Nov 2018</h5>
        <ul>
          <li>
            Opened the Dallas, TX operations regional office allowing access to the Eastern United States leading to increased sales opportunities on a national level and supporting 14+ markets and built out a team of 9 employees
          </li>
          <li>
            Audited client records for user error issues leading to the addition of 200+ users increasing ARR by $40K+
          </li>
          <li>
            Spearheaded a customer feedback initiative to improve brand perception, resulting in 35+ app reviews boosting the rating from 2.8 to 3.6/5 in 3 weeks which led to 8 additional communities with a piloting customer
          </li>
        </ul>
      </div>

      <div className="Experience">
        <h3>BYU Economics Department</h3>
        <h4>Research Assistant – Dr. Price</h4>
        <h5>Provo, UT</h5>
        <h5>Oct 2015 – Jun 2016</h5>
        <ul>
          <li>
            Data-Mined US population demographic statistics by county creating a database for analysis used in a paper on the purchasing behaviors of WIC recipients
          </li>
          <li>
            Analyzed purchasing behavior of over a million customers using STATA regressions providing statistics to be used in a paper on WIC recipients’ purchasing behavior
          </li>
          <li>
            Designed a website to coordinate the math education of 3rd-grade students between parents, teacher, and tutor
          </li>
        </ul>
      </div>
    </div>
  </div>
)