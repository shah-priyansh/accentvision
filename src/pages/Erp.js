// src/pages/About.js
import React, {Fragment} from "react";

function About() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1> Odoo Customization </h1>
            <p>
              Experience a Paradigm Shift: Say Goodbye to Exorbitant ERP Expenses. Elevate Your Business with Odoo, the
              Ultimate in Flexibility and Affordability. Seamlessly Navigate Your Enterprise with Odoo's
              All-Encompassing ERP Features. Our Expertise in Industry-Specific Modules Ensures Tailored Solutions for
              Your Unique Business Requirements.
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


    <div className='erp-solutions-div bg-white text-primary-dark'>
      <div className='container'>
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <span className="hl-color wow animate__animated animate__fadeInDown">ERP Solutions</span>
            <h3 className='wow animate__animated animate__fadeInUp'> Revolutionize
              Your Business with Affordable and Tailored ERP Solutions</h3>
          </div>
        </div>
        <div className='row mv-points mb-3 mt-3'>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              CRM
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Point of Sale
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Inventory
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Manufacturing
            </h4>
          </div>

          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Purchase
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Employee
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Website
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              ECommerce
            </h4>
          </div>

          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Marketing Automation
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Email Marketing
            </h4>
          </div>
          <div className='col-md-3 wow animate__animated animate__zoomIn'>
            <h4>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#000000">
                <path
                    d="m352.46-85.39-71.38-120.3-135.54-29.7 13.23-139.53L66.93-480l91.84-105.08-13.23-139.53 135.54-29.7 71.38-120.3L480-820.46l127.54-54.15 71.38 120.3 135.54 29.7-13.23 139.53L893.07-480l-91.84 105.08 13.23 139.53-135.54 29.7-71.38 120.3L480-139.54 352.46-85.39ZM438-351.85 650.15-564 608-607.38l-170 170-86-84.77L309.85-480 438-351.85Z"/>
              </svg>
              Supply Chain Management
            </h4>
          </div>

        </div>
        <div className="mv-img-div wow animate__animated animate__fadeInUp">
          <img src="/assets/images/erp/Bg_banner.png" alt="icon" className="img-fluid" width="100%"/>
        </div>
      </div>
    </div>

    <div className="we-are-div py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">Odoo</span>
              <h3 className='wow animate__animated animate__fadeInUp'> ERP Solution (Odoo) </h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="quality-img wow animate__animated animate__zoomIn">
              <img
                  src="/assets/images/erp/odoo.png"
                  alt="img"
                  className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='customer-div bg-dark-primary'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">clients </span>
              <h3 className='wow animate__animated animate__fadeInUp'>  Our valued clients  </h3>
            </div>
          </div>
          <div className='col-4 col-md'>
            <div className='customer-img wow animate__animated animate__zoomIn'>
              <img src='/assets/images/ai/customer1.png' alt='img' className='img-fluid'/>
            </div>
          </div>
          <div className='col-4 col-md'>
            <div className='customer-img wow animate__animated animate__zoomIn'>
              <img src='/assets/images/ai/customer2.png' alt='img' className='img-fluid'/>
            </div>
          </div>
          <div className='col-4 col-md'>
            <div className='customer-img wow animate__animated animate__zoomIn'>
              <img src='/assets/images/ai/customer3.png' alt='img' className='img-fluid'/>
            </div>
          </div>
          <div className='col-4 col-md'>
            <div className='customer-img wow animate__animated animate__zoomIn'>
              <img src='/assets/images/ai/customer4.png' alt='img' className='img-fluid'/>
            </div>
          </div>
          <div className='col-4 col-md'>
            <div className='customer-img wow animate__animated animate__zoomIn'>
              <img src='/assets/images/ai/customer5.png' alt='img' className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;
}

export default About;
