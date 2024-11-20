// src/pages/About.js
import React, {Fragment} from "react";

function About() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Accentvision <br/><span className='hl-color'>Technology</span> Inc</h1>
            <p>
              is a world-class Technology Solutions provider specializing in the <br/>following cutting-edge offerings:
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

    <div className='about-us-div overflow-hidden'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='about-left wow animate__animated animate__fadeInLeft'>
              <h5>
                Our unwavering commitment is to meticulously assess the unique requirements of our esteemed clientele
                and deliver superlative solutions, consistently on schedule and within budget. We harness the power of
                Agile and Lean principles to ensure lightning-fast time-to-market and deliver exceptional Returns on
                Investment.
              </h5>
            </div>

          </div>
          <div className='col-md-6'>
            <div className='about-right wow animate__animated animate__fadeInRight'>
              <ul className='ps-3'>
                <li>Premium Business Platform Solutions - Salesforce</li>
                <li>Elite IT Staffing and Consultancy Services</li>
                <li>Exemplary Android and iOS Mobile App Development</li>
                <li>ERP Excellence through Odoo Development and Customization</li>
                <li>Data Solution and MDM Mastery</li>
                <li>Cloud Transformation Services for Scalability and Efficiency</li>
                <li>Productization and Automation for Unparalleled Revenue Growth</li>
              </ul>
              <p>
                At Accentvision, we are the epitome of excellence, driven by our unwavering commitment to deliver
                unparalleled business value. With an unrelenting focus on quality and cultivating enduring, long-term
                relationships, our solutions are meticulously designed to align seamlessly with your strategic business
                objectives. Our delivery process is a masterpiece, incorporating industry best practices and time-tested
                quality frameworks.
              </p>
              <p>
                Why Accentvision Stands Above the Rest: Our relentless dedication to innovation, a legacy of quality
                delivery, and our profound ability to tackle your most intricate business challenges set us apart as the
                indisputable market leader.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className='about-img-div wow animate__animated animate__fadeInUp'>
      <img src='/assets/images/about/about-img.webp' alt='img' className='img-fluid'/>
    </div>

    <div className='mission-vision-div'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='div-title text-center mb-5'>
              <span className='hl-color wow animate__animated animate__fadeInDown'>Accentvision</span>
              <h3 className='wow animate__animated animate__fadeInUp'> We are Accentvision </h3>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='mv-card wow animate__animated animate__fadeInLeft'>
              <div className='mv-icon'>
                <img src='/assets/images/about/mission.svg' alt='icon' className='img-fluid' width='100'/>
              </div>
              <div className='mv-content'>
                <h4>OUR MISSION</h4>
                <p>
                  Deliver IT solutions through innovation and automation.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='mv-card wow animate__animated animate__fadeInRight'>
              <div className='mv-icon'>
                <img src='/assets/images/about/vision.svg' alt='icon' className='img-fluid' width='100'/>
              </div>
              <div className='mv-content'>
                <h4>OUR VISION</h4>
                <p>
                  Empower customers to grow through technology.
                </p>
              </div>

            </div>
          </div>
        </div>
        <div className='row mv-points mb-3 mt-3'>
          <div className='col-md-4 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Innovation
            </h4>
          </div>
          <div className='col-md-4 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Speed
            </h4>
          </div>
          <div className='col-md-4 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Quality
            </h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='mv-img-div wow animate__animated animate__fadeInUp'>
              <img src='/assets/images/about/team.jpg' alt='icon' className='img-fluid' width='100%'/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;
}

export default About;
