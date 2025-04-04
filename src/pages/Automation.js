// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1>Automation</h1>
              <p>
                Automate your staffing process with the power of our cutting-edge EnterpriseRecruit platform.
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

      <div className='quality-div bg-white text-primary-dark animation-div'>
        <div className='container'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">success</span>
              <h3 className='wow animate__animated animate__fadeInUp'> Empower your automation journey for
                success. </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img bg-white p-2 p-sm-2 p-md-5 mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/automation/Automation-1.png"
                    alt="img"
                    className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='quality-div bg-dark-primary text-white animation-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img bg-white p-2 p-sm-2 p-md-5 mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/automation/slide1.JPG"
                    alt="img"
                    className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='quality-div bg-white text-primary-dark animation-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img bg-white p-2 p-sm-2 p-md-5 mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/automation/slide2.JPG"
                    alt="img"
                    className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='services-div key-feature animation-div'>
        <div className='container'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">Choose</span>
              <h3 className='wow animate__animated animate__fadeInUp'> Why Choose Accentvision?</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="m644.15-387.69 145.46-125 88.85 7.69-162.93 141.08 48.16 211.23-75.46-45.85-44.08-189.15ZM559-651.61l-40.46-94.93 34.07-82.3 77.77 183.92-71.38-6.69ZM294-287l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm-91 125.46 57.31-246.77L68.85-574.23l252.61-21.92L420-828.84l98.54 232.69 252.61 21.92-191.46 165.92L637-161.54 420-292.46 203-161.54Zm217-298.84Z"/>
                  </svg>
                </div>
                <h4>Compliance Automation</h4>
                <p className="text-lt">
                  Ensure regulatory compliance with real-time monitoring and reporting across all transactions.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-122.31q-24.08 0-42.58-12.69-18.5-12.7-25.88-33.31H400q-24.54 0-42.27-17.73Q340-203.77 340-228.31v-131.23q-60.54-36.69-95.27-98.38Q210-519.62 210-590q0-112.92 78.54-191.46T480-860q112.92 0 191.46 78.54T750-590q0 71.61-34.73 132.69T620-359.54v131.23q0 24.54-17.73 42.27-17.73 17.73-42.27 17.73h-11.54q-7.38 20.61-25.88 33.31-18.5 12.69-42.58 12.69Zm-80-106h160v-37.54H400v37.54Zm0-72.92h160V-340H400v38.77ZM392-400h64.15v-116.46l-85.69-85.69L404-635.69l76 76 76-76 33.54 33.54-85.69 85.69V-400H568q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-159.69Zm0-40.31Z"/>
                  </svg>
                </div>
                <h4>CRM Upgrade with AI</h4>
                <p className="text-lt">
                  Integrate Salesforce Einstein for predictive analytics and automated customer engagement to boost lead
                  conversion and retention.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M165.05-140q-45.82 0-77.93-32.08Q55-204.17 55-250q0-37.46 22.69-66.73Q100.39-346 135-355.31v-249.38q-34.61-9.31-57.31-38.58Q55-672.54 55-710q0-45.83 32.07-77.92Q119.14-820 164.96-820q45.81 0 77.92 32.08Q275-755.83 275-710q0 37.46-22.69 66.73Q229.61-614 195-604.69V-510h255v-94.69q-34.61-9.31-57.31-38.58Q370-672.54 370-710q0-45.83 32.07-77.92Q434.14-820 479.95-820q45.82 0 77.93 32.08Q590-755.83 590-710q0 37.46-22.69 66.73Q544.61-614 510-604.69V-510h205.38q20.85 0 35.43-14.58 14.58-14.57 14.58-35.42v-44.69q-34.62-9.31-57.31-38.58-22.69-29.27-22.69-66.73 0-45.83 32.06-77.92Q749.52-820 795.34-820q45.81 0 77.93 32.08 32.11 32.09 32.11 77.92 0 37.46-22.69 66.73Q860-614 825.38-604.69V-560q0 45.83-32.08 77.92Q761.22-450 715.38-450H510v94.69q34.61 9.31 57.31 38.58Q590-287.46 590-250q0 45.83-32.07 77.92Q525.86-140 480.05-140q-45.82 0-77.93-32.08Q370-204.17 370-250q0-37.46 22.69-66.73Q415.39-346 450-355.31V-450H195v94.69q34.61 9.31 57.31 38.58Q275-287.46 275-250q0 45.83-32.07 77.92Q210.86-140 165.05-140Zm-.05-60q20.85 0 35.42-14.58Q215-229.15 215-250t-14.58-35.42Q185.85-300 165-300t-35.42 14.58Q115-270.85 115-250t14.58 35.42Q144.15-200 165-200Zm0-460q20.85 0 35.42-14.58Q215-689.15 215-710t-14.58-35.42Q185.85-760 165-760t-35.42 14.58Q115-730.85 115-710t14.58 35.42Q144.15-660 165-660Zm315 460q20.85 0 35.42-14.58Q530-229.15 530-250t-14.58-35.42Q500.85-300 480-300t-35.42 14.58Q430-270.85 430-250t14.58 35.42Q459.15-200 480-200Zm0-460q20.85 0 35.42-14.58Q530-689.15 530-710t-14.58-35.42Q500.85-760 480-760t-35.42 14.58Q430-730.85 430-710t14.58 35.42Q459.15-660 480-660Zm315.38 0q20.85 0 35.43-14.58 14.58-14.57 14.58-35.42t-14.58-35.42Q816.23-760 795.38-760q-20.84 0-35.42 14.58-14.58 14.57-14.58 35.42t14.58 35.42Q774.54-660 795.38-660ZM165-250Zm0-460Zm315 460Zm0-460Zm315.38 0Z"/>
                  </svg>
                </div>
                <h4>CICD Pipeline Automation</h4>
                <p className="text-lt">
                  Streamline DevOps processes for enhanced efficiency.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M140-520v-300h300v300H140Zm0 380v-300h300v300H140Zm380-380v-300h300v300H520Zm0 380v-300h300v300H520ZM200-580h180v-180H200v180Zm380 0h180v-180H580v180Zm0 380h180v-180H580v180Zm-380 0h180v-180H200v180Zm380-380Zm0 200Zm-200 0Zm0-200Z"/>
                  </svg>
                </div>
                <h4>Data-Driven Decision-Making</h4>
                <p className="text-lt">
                  Provide customizable dashboards through Power BI for advanced analytics and actionable insights.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M570-290h180v-180h-60v120H570v60ZM210-490h60v-120h120v-60H210v180Zm-37.69 310Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h615.38Q818-780 839-759q21 21 21 51.31v455.38Q860-222 839-201q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM160-240v-480 480Z"/>
                  </svg>
                </div>
                <h4>AI-Powered Contact Center</h4>
                <p className="text-lt">
                  Implement an AI-driven call center for autonomous management of inquiries and improved productivity.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M438-351.85 650.15-564l-42.77-42.77L438-437.38l-84.77-84.77-42.77 42.77L438-351.85Zm42 251.08q-129.77-35.39-214.88-152.77Q180-370.92 180-516v-230.15l300-112.31 300 112.31V-516q0 145.08-85.12 262.46Q609.77-136.16 480-100.77Zm0-63.23q104-33 172-132t68-220v-189l-240-89.62L240-705v189q0 121 68 220t172 132Zm0-315.62Z"/>
                  </svg>
                </div>
                <h4>Customer Self-Service Portals</h4>
                <p className="text-lt">
                  Enable AI-enhanced self-service portals for customer convenience, payments, and financial advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='quality-div bg-white text-primary-dark animation-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img bg-white p-2 p-sm-2 p-md-5 mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/automation/slide3.JPG"
                    alt="img"
                    className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className='customer-div customer-div-light'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-12">
              <div className="div-title text-center mb-5">
                <span className="hl-color wow animate__animated animate__fadeInDown">clients </span>
                <h3 className='wow animate__animated animate__fadeInUp'> Our valued clients </h3>
              </div>
            </div>

            <div className='slider-div'>
              <OwlCarousel className="owl-theme" items={5} margin={15} loop={true} autoplay={true}
                           autoplayTimeout={3000}
                           responsive={{0: {items: 2}, 600: {items: 3}, 1000: {items: 5}}}>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client1.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client2.jpeg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client3.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client4.jpeg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client5.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>

                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client6.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client7.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client9.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client10.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client11.png' alt='img' className='img-fluid'/>
                  </div>
                </div>

                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client12.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client13.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client14.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client15.png' alt='img' className='img-fluid'/>
                  </div>
                </div>

                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client16.webp' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client17.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client18.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client19.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client20.png' alt='img' className='img-fluid'/>
                  </div>
                </div>

                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client21.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client22.webp' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client23.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client24.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client25.jpeg' alt='img' className='img-fluid'/>
                  </div>
                </div>

                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client26.jpeg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client27.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client28.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client29.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client30.jpeg' alt='img' className='img-fluid'/>
                  </div>
                </div>

                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client31.png' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client32.webp' alt='img' className='img-fluid'/>
                  </div>
                </div>
                <div className='item'>
                  <div className='customer-img wow animate__animated animate__zoomIn'>
                    <img src='/assets/images/clients/client33.jpg' alt='img' className='img-fluid'/>
                  </div>
                </div>
              </OwlCarousel>
        </div>

          </div>
        </div>
      </div>*/}

    </div>;
}

export default About;
