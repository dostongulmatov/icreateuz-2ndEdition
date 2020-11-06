import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Navbar1 from './Navbar1'
import Content1 from './Content1'

const Home = () => {  
  return (
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Navbar />
          <Content />
        </div>
        <div class="carousel-item">
          <Navbar1 />
          <Content1 />
        </div>
      </div>

      <a className="carousel-control-prev carousel-btn-previous" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next carousel-btn-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </div>
  )

}

export default Home
