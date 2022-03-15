import React from 'react'
import {Carousel} from 'react-bootstrap'
function Slider() {
  return (
        <>
       <section id="hero">
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/slide/slide-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div class="carousel-item active">
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
            <h2>Welcome to <span>Satori</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center"><a href="/" class="btn-get-started">Enroll Now</a></div>
            </div>
          </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/slide/slide-2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <div class="carousel-item active">
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Satori</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center"><a href="/" class="btn-get-started">Enroll Now</a></div>
            </div>
          </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/slide/slide-3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <div class="carousel-item active">
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
            <h2>Welcome to <span>Satori</span></h2>
              <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <div class="text-center"><a href="/" class="btn-get-started">Enroll Now</a></div>
            </div>
          </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

       </section>
 
  
        </>
  )
}

export default Slider