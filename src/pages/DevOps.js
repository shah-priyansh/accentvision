// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1>DevOps </h1>
              <p>
                Accelerated delivery, team collaboration, and continuous improvement for your software development & deployment.
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


      <div className='quality-div bg-white animation-div text-primary-dark animation-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img bg-white p-2 p-sm-2 p-md-5 mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/devops.jpg"
                    alt="img"
                    className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>;
}

export default About;
