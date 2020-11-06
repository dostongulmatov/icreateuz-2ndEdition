import React from 'react'
import  DataBaseImg from '../images/database-storage.png'
import  FrontEndImg from '../images/frontend.png'
import  BackendImg from '../images/server.png'
import  DesignImg from '../images/ux-design.png'


const Cards = () => {
  return (
    <div>
      <div className="row cards-container">
        <div className="col-lg-2 our-services-container pair-cards">
          <img className="our-services-img" src={FrontEndImg}/>
          <h5 className="cards-heading">Front-end Development</h5>
          <p>We use best tools for making Responsive websites Html, CSS, JS, Bootstrap, React</p>
        </div>
        <div className="col-lg-3 our-services-container">
          <img className="our-services-img" src={BackendImg}/>
          <h5 className="cards-heading">Back-end Development</h5>
          <p>Your server should be fast so we use newest technologies JS, Nodejs, Express.js</p>
        </div>
        <div className="col-lg-3 our-services-container pair-cards">
          <img className="our-services-img" src={DataBaseImg}/>
          <h5 className="cards-heading">DataBase Development</h5>
          <p>Do you want to get data from users, than our Database devs and MongoDB can help</p>
        </div>
        <div className="col-lg-2 our-services-container">
          <img className="our-services-img" src={DesignImg}/>
          <h5 className="cards-heading">UI/UX Development</h5>
          <p>For attracting users design is important so make your it with professional designers</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
