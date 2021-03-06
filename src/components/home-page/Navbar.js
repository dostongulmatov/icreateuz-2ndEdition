import React from 'react'
import usaFlag from '../images/usaFlag.png'
import russiaFlag from '../images/russia.png'
import uzFlag from '../images/uzbekistan.png'
const Navbar = () => {
  return (
    <div>
      <nav class="icreate-nav navbar navbar-expand-lg navbar-light bg-light">
        <a class="icreate-brand navbar-brand" href="#">ICreate.uz</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#our-works">Portfolio</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          <ul className="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="tel:998946368565">(99) 636-85-65</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={usaFlag} alt="..." style={{paddingRight: "5px", height: "30px", marginTop: "-4px"}}/>English
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                <img src={russiaFlag} alt="..." style={{paddingRight: "5px", height: "30px", marginTop: "-4px"}}/>Russian</a>
                <a class="dropdown-item" href="#">
                <img src={uzFlag} alt="..." style={{paddingRight: "5px", height: "30px", marginTop: "-4px"}}/>Uzbek</a>
              </div>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">CONTACT US</button>
            </li>
          </ul>
          </form>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
