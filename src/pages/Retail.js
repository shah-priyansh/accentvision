// src/pages/About.js
import React, {Fragment} from "react";

function Retail() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Retail</h1>
            <p>
              Transform your retail operations with TOC360, delivering advanced automation for seamless efficiency, accuracy, and enhanced customer experiences.

            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='page-banner-img wow animate__animated animate__fadeInRight'>
            <img src='/assets/images/about/about-banner.jpg' alt='img' className='img-fluid' width='100%'/>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-white text-primary-dark animation-div py-5'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <div className='quality-img mb-5 wow animate__animated animate__fadeInUp'>
              <img
                  src="/assets/images/retail/retail1.JPG"
                  alt="img"
                  className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5 bg-dark-primary animation-div">
      <div className="container">

        <div className="row align-items-center">
          <div className='col-md-12 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/retail/retail2.JPG"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>
    </div>
  </div>;
}

export default Retail;
