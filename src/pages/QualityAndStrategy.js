// src/pages/About.js
import React, {Fragment} from "react";

function About() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6 order-2 order-sm-2 order-md-1'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Quality & <span className='hl-color'>Strategy</span></h1>
            <p>
              Establish best practices and quality framework as per customer requirements.
            </p>
          </div>
        </div>
        <div className='col-md-6 order-2 order-sm-2 order-md-2'>
          <div className='page-banner-img wow animate__animated animate__fadeInRight'>
            <img src='/assets/images/about/about-banner.jpg' alt='img' className='img-fluid' width='100%'/>
          </div>
        </div>
      </div>
    </div>


    <div className='quality-div bg-white text-primary-dark'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 order-1 order-sm-1 order-md-1'>
            <div className='quality-img wow animate__animated animate__fadeInLeft'>
              <img src='/assets/images/quality/qualitypolicy.jpg' alt='img' className='img-fluid' width='100%'/>
            </div>
          </div>
          <div className='col-md-6 order-1 order-sm-1 order-md-2'>
            <div className='content-div ps-md-4 wow animate__animated animate__fadeInRight'>
              <h3>
                Quality Policy
              </h3>
              <ul className='qp-ul'>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  Establish best practices and quality framework as per customer requirements.
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  Ensure Customer satisfaction by delivering products and services that pass through benchmarked quality
                  measures.
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  Continuous improvement by quantifying results and lessons learned.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className='strategy-div' id='Strategy'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6 order-1 order-sm-1 order-md-2'>
            <div className='quality-img wow animate__animated animate__fadeInRight'>
              <img src='/assets/images/quality/ourstartegy.jpg' alt='img' className='img-fluid' width='100%'/>
            </div>
          </div>
          <div className='col-md-6 order-1 order-sm-1 order-md-1'>
            <div className='content-div pe-md-4 wow animate__animated animate__fadeInLeft'>
              <h3>
                Our Strategy
              </h3>
              <ul className='qp-ul'>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  Partnering with leading technology partners to extend our offerings.
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  Manage all the technical complexities, so that our customers can focus on their core business.
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  Think from the customer's perspective, by focusing on business outcomes.
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  High quality delivery, by bench marking every solution.
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                  </svg>
                  Enhanced communication through transparency across all the stakeholders.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>;
}

export default About;
