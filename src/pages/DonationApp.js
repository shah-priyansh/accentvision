// src/pages/About.js
import React, {Fragment} from "react";

function DonationApp() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Donation App</h1>
            <p>
              Simplify giving with our donation app, designed to securely manage donations, and support your mission with ease and transparency.
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
              Donation Aps have revolutionized the way we give to charities, making it more convenient and accessible, especially in setting where cash is less used.


            </h3>
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

DONATION APPS
                </span>
              <h3 className="wow animate__animated animate__fadeInUp text-white">
                BRIDGING THE GAP

              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">
              <h4 className="text-white">Mobile Donation Apps

              </h4>
              <p className="text-lt">
                Apps like Venmo, CashApp, and Paypal allow users to easily send monetary donations directly to charities and individuals in need with just a few taps on their smartphone.

              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">

              <h4 className="text-white">Digital Wallets

              </h4>
              <p className="text-lt">
                Integrating donation capabilities into digital wallets like Apple Pay and Google Pay makes it simple for users to contribute to causes with the payment methods they already use for everyday purchases.



              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">

              <h4 className="text-white">Kiosks and Terminals

              </h4>
              <p className="text-lt">
                Donation kiosks and terminals placed in public spaces, like grocery stores and malls, provide a convenient way for people to donate spare change or larger amounts using a debit/credit card when they may not have cash on hand.


              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-card bg-dark-primary wow animate__animated animate__fadeInUp">

              <h4 className="text-white">Contactless Payments

              </h4>
              <p className="text-lt">
                The rise of contactless payment technologies, such as tap-to-pay credit/debit cards and mobile wallets, enable faster, more hygienic donation experiences at physical collection points.


              </p>
            </div>
          </div>




        </div>
      </div>
    </div>



  </div>;
}

export default DonationApp;
