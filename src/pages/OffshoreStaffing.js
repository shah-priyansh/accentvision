// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1>Offshore Staffing </h1>
              <p>
                Your gateway to global talent with cost efficiency, trust, and round-the-clock support.
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
              <span className="hl-color wow animate__animated animate__fadeInDown">global talent</span>
              <h3 className='wow animate__animated animate__fadeInUp'> Unparalleled access to global talent and
                unmatched staffing solutions</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img bg-white p-2 p-sm-2 p-md-5 mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/onshore/offshore-staffing.png"
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
              <h3 className='wow animate__animated animate__fadeInUp'>Why Choose Accentvision?</h3>
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
                <h4>Cost Efficiency</h4>
                <p className="text-lt">
                  Cost-effective talent solutions that can help you optimize your workforce expenses without
                  compromising on quality.
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
                <h4>Round-the-Clock Deployment</h4>
                <p className="text-lt">
                  Flexibility of round-the-clock deployment, ensuring that you have the necessary resources available
                  whenever you need them, regardless of time zones.

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
                <h4>Global Reach</h4>
                <p className="text-lt">
                  Our extensive network and global reach allow us to source talent from around the world, enabling you
                  to access a diverse pool of skilled professionals.
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
                <h4>Streamlined Screening Process</h4>
                <p className="text-lt">
                  We employ a rigorous screening process that ensures you receive candidates with the right skills and
                  qualifications for your specific projects.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-100q-70.77 0-132.61-26.77-61.85-26.77-107.85-72.77-46-46-72.77-107.85Q140-369.23 140-440q0-70.77 26.77-132.61 26.77-61.85 72.77-107.85 46-46 107.85-72.77Q409.23-780 480-780q70.77 0 132.61 26.77 61.85 26.77 107.85 72.77 46 46 72.77 107.85Q820-510.77 820-440q0 70.77-26.77 132.61-26.77 61.85-72.77 107.85-46 46-107.85 72.77Q550.77-100 480-100Zm0-340Zm118.92 161.08 42.16-42.16L510-452.15V-640h-60v212.15l148.92 148.93ZM230.15-844.46l42.16 42.15-154.62 154.62-42.15-42.16 154.61-154.61Zm499.7 0 154.61 154.61-42.15 42.16-154.62-154.62 42.16-42.15ZM480-160q116.62 0 198.31-81.69T760-440q0-116.62-81.69-198.31T480-720q-116.62 0-198.31 81.69T200-440q0 116.62 81.69 198.31T480-160Z"/>
                  </svg>
                </div>
                <h4>Customized Solutions</h4>
                <p className="text-lt">
                  Tailors its services to meet your unique requirements, providing personalized talent solutions that
                  align with your business goals.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="m618.92-298.92 42.16-42.16L510-492.16V-680h-60v212.15l168.92 168.93ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                  </svg>
                </div>
                <h4>Scalability</h4>
                <p className="text-lt">
                  We offer scalable solutions, allowing you to easily adapt to changing project demands and market
                  conditions. Compliance and Quality Assurance: Our commitment to compliance and quality assurance
                  ensures that you receive top-notch talent who adhere to industry standards and regulations.
                </p>
              </div>
            </div>
            {/*<div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M172.31-100Q142-100 121-121q-21-21-21-51.31v-415.38Q100-618 121-639q21-21 51.31-21H380v-140q0-24.92 17.54-42.46T440-860h80q24.92 0 42.46 17.54T580-800v140h207.69Q818-660 839-639q21 21 21 51.31v415.38Q860-142 839-121q-21 21-51.31 21H172.31Zm0-60h615.38q5.39 0 8.85-3.46t3.46-8.85v-415.38q0-5.39-3.46-8.85t-8.85-3.46H580v15.39q0 24.53-17.73 42.26-17.73 17.73-42.27 17.73h-80q-24.54 0-42.27-17.73Q380-560.08 380-584.61V-600H172.31q-5.39 0-8.85 3.46t-3.46 8.85v415.38q0 5.39 3.46 8.85t8.85 3.46Zm73.84-91.54h227.7v-11.85q0-15.46-8.54-28.42T441.69-312q-19.61-8.62-39.73-12.92-20.11-4.31-41.96-4.31t-41.96 4.31q-20.12 4.3-39.73 12.92-15.08 7.23-23.62 20.19-8.54 12.96-8.54 28.42v11.85ZM560-312.31h160V-360H560v47.69ZM360-360q22.31 0 38.08-15.77t15.77-38.08q0-22.3-15.77-38.07T360-467.69q-22.31 0-38.08 15.77t-15.77 38.07q0 22.31 15.77 38.08T360-360Zm200-60h160v-47.69H560V-420ZM440-584.61h80V-800h-80v215.39ZM480-380Z"/>
                  </svg>
                </div>
                <h4>Dedicated Support</h4>
                <p className="text-lt">
                  Our team of experts is dedicated to providing ongoing support, ensuring a smooth and productive
                  collaboration throughout the engagement.
                </p>
              </div>
            </div>*/}

          </div>
        </div>
      </div>



    </div>;
}

export default About;
