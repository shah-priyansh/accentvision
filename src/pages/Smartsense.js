// src/pages/About.js
import React, {Fragment} from "react";

function Smartsense() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>
              SmartSense
            </h1>
            <p>
              Prevent booking theft and enhance security, tracking room activity to ensure efficient and safe
              operations.

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
    <div className='service-div bg-white text-primary-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mb-4 mb-sm-4 mb-md-0'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-content'>
                <h3>Specializing in developing versatile smart home and building automation products.
                </h3>

              </div>
            </div>
          </div>
          <div className='col-md-6 mb-4 mb-sm-4 mb-md-0'>
            <div className='os-card wow animate__animated animate__zoomIn'>

              <div className='os-content'>
                <h3>We offer a range of solutions for real-time monitoring and control of various environments through mobile apps.
                </h3>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="py-5 bg-dark-primary animation-div">
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className='col-md-12 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/smartsense/smartsense.jpg"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>
    </div>
  </div>;
}

export default Smartsense;
