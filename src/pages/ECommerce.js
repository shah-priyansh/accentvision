// src/pages/About.js
import React, {Fragment} from "react";

function ECommerce() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>
              ECommerce
            </h1>
            <p>
              Elevate your business with advanced Ecommerce solutions seamlessly integrated with TOC360, streamlining operations and enhancing customer engagement.

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

    <div className="py-5 bg-white animation-div">
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className='col-md-8 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/ecommerce/ecommerce.JPG"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>
    </div>
  </div>;
}

export default ECommerce;
