// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1>Dynamics </h1>
              <p>
                Enhance sales efficiency, and drive business success with tailored Dynamics solutions and expert
                support.
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
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <h3 className='wow animate__animated animate__backInUp'>Dynamics </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Streamlined Operation
                  </h3>
                  <p>
                    Microsoft Dynamics integrates your business processes, reducing manual tasks and improving
                    efficiency.

                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Data-driven Insights
                  </h3>
                  <p>
                    Gain real-time visibility into your business with powerful analytics and reporting tools.

                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Seamless Collaboration
                  </h3>
                  <p>
                    Empower your teams to work together seamlessly with integrated communication and project management
                    features.

                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Scalable Growth
                  </h3>
                  <p>
                    Microsoft Dynamics can scale to meet the evolving needs of your organization, supporting your
                    business growth.

                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Improved Customer Experience</h3>
                  <p>
                    Enhance customer satisfaction with personalized interactions and streamlined service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>;
}

export default About;
