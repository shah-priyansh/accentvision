// src/pages/About.js
import React, {Fragment} from "react";

function OdooErp() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1> ERP </h1>
            <p>
              Say goodbye to costly ERP solutions. Embrace Odoo for affordable, scalable, and efficient business management.
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




    <div className="we-are-div bg-white py-5 animation-div">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-12">
            <div className="quality-img wow animate__animated animate__zoomIn">
              <img
                  src="/assets/images/erp/erp-img.jpg"
                  alt="img"
                  className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*<div className='customer-div bg-dark-primary'>
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
    </div>*/}

  </div>;
}

export default OdooErp;
