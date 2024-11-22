// src/pages/About.js
import React, {Fragment} from "react";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1> Android App<br/> <span className='hl-color'> Development </span></h1>
              <p>
                Elevate Your Business with Android App Expertise
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


      <div className='services-div key-feature'>
        <div className='container'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">Android App</span>
              <h3 className='wow animate__animated animate__fadeInUp'> Why Choose Our Android App Development Service?</h3>
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
                <h4>Experienced Developers</h4>
                <p className="text-lt">
                  Our seasoned developers have a proven track record of creating successful Android apps across various
                  industries.
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
                <h4>Customized Solutions</h4>
                <p className="text-lt">
                  We tailor our app services to meet your specific business needs and objectives. No one-size-fits-all
                  solutions here!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M100-680v-67.69Q100-778 121-799q21-21 51.31-21h615.38Q818-820 839-799q21 21 21 51.31V-680h-60v-67.69q0-5.39-3.46-8.85t-8.85-3.46H172.31q-5.39 0-8.85 3.46t-3.46 8.85V-680h-60Zm240 540v-80H172.31Q142-220 121-241q-21-21-21-51.31V-360h60v67.69q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85V-360h60v67.69Q860-262 839-241q-21 21-51.31 21H620v80H340Zm140-380Zm-295.69 0 104-104-42.16-42.15L100-520l146.15 146.15L288.31-416l-104-104Zm591.38 0-104 104 42.16 42.15L860-520 713.85-666.15 671.69-624l104 104Z"/>
                  </svg>
                </div>
                <h4>Cutting-Edge Technology</h4>
                <p className="text-lt">
                  We use latest trends in the app development world to ensure your app is modern and competitive.
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
                <h4>User-Centric Design</h4>
                <p className="text-lt">
                  Our philosophy revolves around creating intuitive, pleasing, and user-friendly interfaces to enhance
                  user engagement.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M479.93-330.77q44.22 0 78.84-26.58 34.61-26.57 50.46-67.73H350.77q15.85 41.16 50.39 67.73 34.55 26.58 78.77 26.58Zm-92.15-150.77q21.84 0 37.03-15.28Q440-512.1 440-533.94q0-21.83-15.28-37.02-15.29-15.19-37.12-15.19t-37.02 15.28q-15.19 15.28-15.19 37.11 0 21.84 15.28 37.03 15.28 15.19 37.11 15.19Zm184.62 0q21.83 0 37.02-15.28 15.19-15.28 15.19-37.12 0-21.83-15.28-37.02-15.28-15.19-37.11-15.19-21.84 0-37.03 15.28Q520-555.59 520-533.76q0 21.84 15.28 37.03 15.29 15.19 37.12 15.19ZM315-690.15l108.15-141.93q10.77-14.41 25.58-21.16Q463.54-860 480-860t31.27 6.76q14.81 6.75 25.58 21.16L645-690.15l165.38 55.84q23.7 7.62 36.96 26.87 13.27 19.26 13.27 42.54 0 10.75-3.14 21.43T847.15-523L739.46-373.54l4 158.62q1 31.59-20.83 53.25Q700.81-140 671.77-140q-.85 0-20.08-2.62L480-191.85l-171.69 49.23q-5 2-10.32 2.31-5.32.31-9.76.31-29.31 0-51-21.67-21.69-21.66-20.69-53.25l4-159.62L113.46-523q-7.18-9.83-10.32-20.55Q100-554.28 100-565q0-22.63 13.18-42.09 13.18-19.46 36.82-27.6l165-55.46Zm37.08 51.69-182.85 60.92q-5.77 1.92-7.88 7.89-2.12 5.96 1.73 10.96l117.84 166.31-4.38 178.69q-.39 6.54 4.61 10.38 5 3.85 11.16 1.93L480-254.08l187.69 53.7q6.16 1.92 11.16-1.93 5-3.84 4.61-10.38l-4.38-179.69 117.84-164.31q3.85-5 1.73-10.96-2.11-5.97-7.88-7.89l-182.85-62.92-118.3-156.15q-3.47-5.01-9.62-5.01-6.15 0-9.62 5.01l-118.3 156.15ZM480-499.62Z"/>
                  </svg>
                </div>
                <h4>Quality Assurance</h4>
                <p className="text-lt">
                  Rigorous testing and QA processes are integral to our development cycle, ensuring your app functions
                  flawlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className='quality-div bg-white text-primary-dark'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 order-1 order-sm-1 order-md-1'>
              <div className='quality-img wow animate__animated animate__fadeInLeft'>
                <img src='/assets/images/app/EnterpriseMobileApp.png' alt='img' className='img-fluid' width='100%'/>
              </div>
            </div>
            <div className='col-md-6 order-1 order-sm-1 order-md-2'>
              <div className='content-div ps-md-4 wow animate__animated animate__fadeInRight'>
                <h3>
                  Full life cycle Management for Android Apps
                </h3>
                <ul className='qp-ul'>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    Strategic Consulting
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    Prototyping
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    Native and cross-platform solutions
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    Web and E-Commerce integration
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    UI/UX design
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    Maintenance and support
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='customer-div'>
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
