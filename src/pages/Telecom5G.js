// src/pages/About.js
import React, {Fragment} from "react";

function Telecom5G() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Telecom 5G</h1>
            <p>
              Empower your business with secure, high-speed 5G private networks designed for unparalleled connectivity,
              low latency, and tailored industry applications.
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
        <div className="col-md-12">
          <div className="div-title text-center mb-4 pb-2">

            <h3 className="wow animate__animated animate__fadeInUp text-dark">
              PRIVATE 5G: ENABLING INNOVATIVE USE CASES

            </h3>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className='col-md-12 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/telecom5g/img1.JPG"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>

    </div>

    <div className="services-div animation-div">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="div-title text-center mb-4 pb-2">
                <span className="hl-color wow animate__animated animate__fadeInDown">

PRIVATE 5G
                </span>
              <h3 className="wow animate__animated animate__fadeInUp text-white">
                CONNECTIVITY FOR THE FUTURE
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">
              <h4 className="text-white">Tailored Solutions
              </h4>
              <p className="text-lt">
                Private 5G networks offer customized connectivity solutions for specific industry needs, optimizing
                performance and efficiency.

              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">

              <h4 className="text-white">Enhanced Reliability
              </h4>
              <p className="text-lt">
                Dedicated private 5G infrastructure ensures reliable and secure communications, critical for
                mission-critical applications.

              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">

              <h4 className="text-white">Low Latency
              </h4>
              <p className="text-lt">
                Private 5G's low latency enables real-time data processing and decision-making, powering innovative
                applications such as autonomous systems and remote control.

              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">

              <h4 className="text-white">Scalability
              </h4>
              <p className="text-lt">
                Private 5G networks can be easily scaled to accommodate changing business requirements, providing
                future-proof connectivity.

              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">

              <h4 className="text-white">Data Control
              </h4>
              <p className="text-lt">
                Enterprises maintain full control over their data and network, ensuring privacy and compliance with
                industry regulations.

              </p>
            </div>
          </div>


        </div>
      </div>
    </div>

    <div className="py-5 bg-white animation-div">
      <div className="container">
        <div className="col-md-12">
          <div className="div-title text-center mb-4 pb-2">
            <h3 className="wow animate__animated animate__fadeInUp text-dark">
              PRIVATE 5G: VERSATILE SOLUTIONS
            </h3>
          </div>
        </div>
        <div className="row align-items-center justify-content-center wow animate__animated animate__fadeInUp">
          <div className='col-md-12 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/telecom5g/img2.JPG"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>

    </div>

  </div>;
}

export default Telecom5G;
