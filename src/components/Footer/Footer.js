import React from 'react'
import Icons from "./SocialIcons"
import Services from './Services'
import Pages from './Pages'
import AboutUs from './AboutUs'
const Footer = () => {
  return (
    <div >
      <div className="need-help-container"><p></p>Need Help: Contact our support team 24/7 at <a href="mailto: icreate@gmail.com">ICreateuz@gmail.com</a></div>
      <div id="icreate-footer" className="row container-fluid">
        <Pages />
        <Services />
        <Icons />
        <AboutUs />
        <div className="row">
          <p className="col-lg-6" style={{float: "right"}}>
            <a href="#" style={{marginRight: "20px"}}>Terms of services</a>
            <a href="#">Privacy policy</a>
          </p>
          <p className="col-lg-12" style={{float: "left"}}>&copy; 2020 ICreate.uz. All rights reserved</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
