// src/pages/About.js
import React, {Fragment} from "react";

function PMS() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>PMS</h1>
            <p>
              Streamline hotel operations with our simple-to-use Property Management System, offering seamless booking, guest management, and superior experience.

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

    <div className='contact-location bg-white text-primary-dark animation-div py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img'>
                <img src='/assets/images/pms/icon1.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3>
                Smart Room Automation
              </h3>
              <div className='contact-detail'>
                <p>
                  Innovative technology solutions for automated control of lighting, temperature, and entertainment
                  systems in hotel rooms.
                </p>

              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img'>
                <img src='/assets/images/pms/icon2.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3>
                Predictive Maintenance
              </h3>
              <div className='contact-detail'>
                <p>
                  Leveraging IoT sensors and AI-powered analytics to predict equipment failures and schedule proactive
                  maintenance in hotels and real estate properties.
                </p>

              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img'>
                <img src='/assets/images/pms/icon3.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3>
                Augmented Reality Tours
              </h3>
              <div className='contact-detail'>
                <p>
                  Utilizing AR technology to provide immersive, interactive virtual tours of hotel suites and real
                  estate properties for prospective guests and buyers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div className='hl-bg py-3 text-center'>
      <div className='container'>
        <h3 className='text-white'>
          These innovative technology solutions have the potential to revolutionize the hospitality and real estate
          industries, enhancing the guest experience, improving operational efficiency, and driving business growth.
        </h3>
      </div>
    </div>
    <div className="py-5 bg-dark-primary animation-div">
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className='col-md-12 wow animate__animated animate__fadeInUp'>
            <img
                src="/assets/images/pms/pms1.jpg"
                alt="img"
                className="img-fluid w-100"
            />
          </div>

        </div>
      </div>

    </div>

    <div className='service-div bg-white text-primary-dark'>
      <div className='container'>
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <h3 className='wow animate__animated animate__backInUp'>PMS Capabilities
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-content'>
                <h3>Streamlined Operations
                </h3>
                <p>
                  The PMS automates and integrates various hotel management tasks, such as front desk
                  check-in/check-out, room assignment, and inventory management, reducing manual efforts and enhancing
                  overall operational efficiency.

                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-content'>
                <h3>Improved Guest Satisfaction

                </h3>
                <p>
                  The PMS provides real-time access to guest information, enabling staff to offer personalized service,
                  address guest concerns promptly, and enhance the overall guest experience.


                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-content'>
                <h3>Enhanced Efficiency
                </h3>
                <p>
                  The PMS offers data-driven insights and reporting capabilities, enabling hotel managers to make
                  informed decisions, optimize resource allocation, and improve the overall profitability of the hotel.
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-6 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-content'>
                <h3>Seamless Integration
                </h3>
                <p>
                  The PMS integrates with various hotel systems, such as point-of-sale, revenue management, and
                  housekeeping, creating a centralized platform for managing all hotel operations.
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-6 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-content'>
                <h3>Robust Data Management

                </h3>
                <p>
                  The PMS maintains a comprehensive database of guest information, reservation details, and historical data, allowing hotel staff to access and analyze critical data to drive business decisions.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;
}

export default PMS;
