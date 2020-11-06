import React from 'react'
import DostonImg from '../images/DostonImg.jpg'
import AliImg from '../images/AliImg.jpg'

const Team = () => {
  return (
    <div id="Team-page">
      <p className="question-p">Why choose our team?</p>
      <h2 className="team-page-heading">We have experienced developers.<br/> Meet ICreate's team</h2>
        <div className="row justify-content-center">
          <div className="col-lg-3 team-member-container">
            <img src={DostonImg} className="team-img" />
            <h1 className="team-member-name">Doston</h1>
            <p className="developer-type">React Front-end developer</p>
            <p>Doston has not much experience, but always interested in learning new things.
            Experienced in Front-end Development, React and Bootstrap.</p>
          </div>
          <div className="col-lg-3 team-member-container">
            <img src={AliImg} className="team-img" />
            <h1 className="team-member-name">Ali</h1>
            <p className="developer-type">Node.js Full-stack developer</p>
            <p>Ali is wanderful and creative developer.He is studying. Experienced in Front-end Development, React, Bootstrap,
            Node.js, react.js and etc.</p>
          </div>
          <div className="col-lg-3 team-member-container">
            <img src={DostonImg} className="team-img" />
            <h1 className="team-member-name">Doston</h1>
            <p className="developer-type">UI/UX designer</p>
            <p>Doston has not much experience, but always interested in learning new things. 
            Experienced in UI/UX Design, Figma and Adobe XD.</p>
          </div>
        </div>
        <div className="choose-us">
          <p className="question-p">Why choose us?</p>
          <p>We are new agency with new skills and people love our work. ICreate will be one of the best software providing 
          agency, so do not lose opportunity of working with us. We are only focused on qaulity, usability and client satisfaction.</p>
        </div>
    </div>
  )
}

export default Team
