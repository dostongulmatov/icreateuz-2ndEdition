import React from 'react'
import QatraUzImg from '../images/qatrauzImg.png'
const Carousel = () => {
  return (
    <div className="carousel-container">
      <p className="question-p">What we have done till now?</p>
      <h2>Biggest projects, we have done.</h2>
      <div className="row container-fluid project-container">
        <div className="col-lg-5 project-img-container">
          <img title="go to the website" src={QatraUzImg} alt="..."/>
          <a href="#"><div className="p-inside-img"><p>Go to Qatra.uz website</p></div></a>
        </div>
        <div className="col-lg-5 project-description-container">
          <h3>Qatra.uz</h3>
          <a href="#">What problem does this project solve?</a>
          <p>It is our biggest project which is donation website. Here rich people can donate their money to need, poor or disabled people.
          Moreover, Masjids, schools, Retirement home and orphanage. We want to make it the biggest non-profit online donation app in Central Asia.
          </p>
          <a href="#" className="project-link"><i className="fab fa-2x fa-github-square"></i></a>
          <a href="#" className="project-link"><i className="fas fa-2x fa-link"></i></a>
          <a href="#" className="project-link"><i className="far fa-2x fa-heart"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Carousel
