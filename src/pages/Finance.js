// src/pages/About.js
import React, {Fragment} from "react";

function Finance() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Finance</h1>
            <p>
              Delivering comprehensive, scalable finance solutions to streamline operations, ensure compliance, and
              drive financial growth.
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
    <div className='bg-white text-primary-dark animation-div'>
      <div className='container'>
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <h3 className='wow animate__animated animate__fadeInUp'>Automation
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='quality-img mb-5 wow animate__animated animate__fadeInUp'>
              <img
                  src="/assets/images/finance/fn1.JPG"
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
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <h3 className='wow animate__animated animate__fadeInUp'>Data Architecture & Engineering
            </h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className='col-md-12 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/finance/fn2.JPG"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>
    </div>
    <div className='bg-white text-primary-dark animation-div'>
      <div className='container'>
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <h3 className='wow animate__animated animate__fadeInUp'>Data Quality</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='quality-img mb-5 wow animate__animated animate__fadeInUp'>
              <img
                  src="/assets/images/finance/fn3.JPG"
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
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <h3 className='wow animate__animated animate__fadeInUp'>Data Governance

            </h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div className='col-md-12 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/finance/fn4.JPG"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>
    </div>


  </div>;
}

export default Finance;
