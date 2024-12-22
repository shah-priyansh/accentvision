// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1>Cybersecurity </h1>
              <p>
                Comprehensive protection, proactive monitoring, and resilient solutions for your organization.
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
              <h3 className='wow animate__animated animate__backInUp'>Cybersecurity </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Identify Cyber Threats

                  </h3>
                  <p>
                    Understand the diverse range of cyber threats, including malware, phishing, distributed denial-of-service (DDoS) attacks, and data breaches, that can compromise your digital assets and privacy.



                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Develop Incident response plan

                  </h3>
                  <p>
                    Establish a comprehensive incident response plan that outlines the steps to be taken in the event of a successful cyber attack, ensuring your organization can swiftly contain the damage and restore normal operations.


                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Implement Robust Security Measures

                  </h3>
                  <p>
                    Deploy a multilayered approach to cybersecurity, including firewalls, antivirus software, encryption, access controls, and regular software updates, to safeguard your systems and data.


                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Continuously monitor and adapt

                  </h3>
                  <p>
                    Implement real-time monitoring and threat detection systems to identify and mitigate emerging cyber risks, while regularly reviewing and updating your cybersecurity strategies to address evolving threats.

                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 mb-4'>
              <div className='os-card wow animate__animated animate__zoomIn'>
                <div className='os-content'>
                  <h3>Educate & empower workforce
                  </h3>
                  <p>
                    Foster a culture of cybersecurity awareness by providing regular training and resources to your employees, empowering them to recognize and respond to potential cyber threats.

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
