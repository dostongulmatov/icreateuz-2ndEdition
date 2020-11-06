import React from 'react'
import Macbook from '../images/MacBook.png'
const Content1 = () => {
  return (
    <div className="content-part1">
      <div className="row" >
        <div className="col-lg-5 content-heading-container">
          <h1 className="content-heading">Fully responsive and Fast websites are waiting</h1>
          <p className="content-p">Online business is getting profitable day by day and many businesses are making their services, so don't waste
          your time and expand your business</p>
          <a className="content-btn btn btn-md btn-primary" href="#">Contact Us</a>
          <a className="content-btn btn btn-md btn-outline-primary" href="#">Check our Works</a>
        </div>
        <div className="col-lg-5">
          <img src={Macbook} alt="..." className="mac-img" style={{width: "800px"}} />
        </div>
      </div>
      <div style={{textAlign: "center"}}>
        <a href="#our-services"><i class="fas fa-arrow-down"></i></a>
      </div>
    </div>
  )
}

export default Content1