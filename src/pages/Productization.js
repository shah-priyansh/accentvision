// src/pages/About.js
import React, {Fragment} from "react";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1> Productization</h1>
              <p>
                Empower Your Product Evolution with Our Expertise!
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
                <h4>Product Assessment</h4>
                <p className="text-lt">
                  We evaluate your technology, existing products, and market potential to guide your product strategy.
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
                <h4>Market Insights</h4>
                <p className="text-lt">
                  Our in-depth market analysis and segmentation uncover valuable customer segments and validate demand.
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
                <h4>Modular Excellence</h4>
                <p className="text-lt">
                  We re-engineer your product with modular design, customizability, and scalability in mind.
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
                <h4>Streamlined Efficiency</h4>
                <p className="text-lt">
                  Implementing standardization and automation to optimize production, delivery, and deployment
                  workflows.
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
                <h4>Scalability Infrastructure</h4>
                <p className="text-lt">
                  Upgrade your infrastructure for efficient resource management and seamless scalability.
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
                <h4>Fortified Security</h4>
                <p className="text-lt">
                  Enhance software security with robust protocols, ensuring compliance with industry standards.
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
                  Redesign your user interface for an intuitive, seamless experience across touchpoints.
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
                  Establish rigorous testing, including automated and user acceptance testing, for reliable systems.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M328.85-180q-109.69 0-186.96-75.35Q64.62-330.69 64.62-440q0-104.31 73.77-177.46t179.38-81.69l-72.61-74.46 42.15-42.16L433.08-670 287.31-524.23 245.16-567l70.92-70.92q-79.85 9.38-135.66 64.57-55.8 55.2-55.8 133.35 0 83.77 60.03 141.88Q244.69-240 329.23-240H430v60H328.85ZM530-523.85V-780h330v256.15H530ZM530-180v-256.15h330V-180H530Zm60-60h210v-136.16H590V-240Z"/>
                  </svg>
                </div>
                <h4>Knowledge Transfer</h4>
                <p className="text-lt">
                  Develop comprehensive documentation and training programs for users and administrators.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M98.85-187.69v-88.93q0-31.84 16.04-55.65 16.03-23.81 42.57-37.27 51-26 107.69-42.07 56.7-16.08 133.7-16.08 30 0 55.8 2.42 25.81 2.42 48.2 7.27l-53.08 53.08q-11-2-23.81-2.39-12.81-.38-27.11-.38-71 0-124.43 15.84Q221-336 185-316q-13.62 7.31-19.88 17.08-6.27 9.77-6.27 22.3v28.93h242.3l60 60H98.85ZM617-157.85 492.85-282 535-324.15l82 82 202-202L861.15-402 617-157.85ZM398.85-492.31q-57.75 0-98.88-41.12-41.12-41.13-41.12-98.88 0-57.75 41.12-98.87 41.13-41.13 98.88-41.13 57.75 0 98.87 41.13 41.12 41.12 41.12 98.87 0 57.75-41.12 98.88-41.12 41.12-98.87 41.12Zm2.3 244.62Zm-2.3-304.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Z"/>
                  </svg>
                </div>
                <h4>Market Success</h4>
                <p className="text-lt">
                  Execute a strategic go-to-market plan, encompassing product launches and business development.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className='quality-div'>
        <div className='container'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">E-Commerce</span>
              <h3 className='wow animate__animated animate__fadeInUp'> Point of Sales and E-Commerce </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img bg-white p-2 p-sm-2 p-md-5 mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/productization/Productization.png"
                    alt="img"
                    className="img-fluid w-100"
                />
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
                <h3 className='wow animate__animated animate__fadeInUp'> Our valued clients </h3>
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
