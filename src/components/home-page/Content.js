import React from 'react'
import Macbook from '../images/MacBook.png'
const Content = () => {
  return (
    <div className="content-part">
      <div className="row" >
        <div className="col-lg-5 content-heading-container">
          <h1 className="content-heading">Have a dream of making <br/> your own website?</h1>
          <p className="content-p">Your are in the right place. Tell about your dreams. Don't hesitate <br/>to contact us. We are always ready to help you.</p>
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

export default Content
