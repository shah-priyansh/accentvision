// src/pages/About.js
import React, {Fragment} from "react";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1> iOS <span className='hl-color'> Development </span></h1>
              <p>
                Unleash iOS Brilliance for Your Next App
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
              <span className="hl-color wow animate__animated animate__fadeInDown">iOS App</span>
              <h3 className='wow animate__animated animate__fadeInUp'> When it comes to crafting exceptional iOS apps, our team stands out from the crowd. Here's why you should partner with us:</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-122.31q-24.08 0-42.58-12.69-18.5-12.7-25.88-33.31H400q-24.54 0-42.27-17.73Q340-203.77 340-228.31v-131.23q-60.54-36.69-95.27-98.38Q210-519.62 210-590q0-112.92 78.54-191.46T480-860q112.92 0 191.46 78.54T750-590q0 71.61-34.73 132.69T620-359.54v131.23q0 24.54-17.73 42.27-17.73 17.73-42.27 17.73h-11.54q-7.38 20.61-25.88 33.31-18.5 12.69-42.58 12.69Zm-80-106h160v-37.54H400v37.54Zm0-72.92h160V-340H400v38.77ZM392-400h64.15v-116.46l-85.69-85.69L404-635.69l76 76 76-76 33.54 33.54-85.69 85.69V-400H568q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-159.69Zm0-40.31Z"/>
                  </svg>
                </div>
                <h4>Innovative Solutions</h4>
                <p className="text-lt">
                  We push the boundaries of creativity. Our iOS app services are driven by innovation, ensuring your app
                  is captivating.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M260-100v-161.23q-57-52-88.5-119.19-31.5-67.2-31.5-139.86 0-141.55 99.17-240.63Q338.33-860 480-860q116.54 0 208.42 69.66 91.89 69.65 119.35 180.73l46.73 184.58q4.5 17.11-6.35 31.07Q837.31-380 819.23-380H740v127.69q0 29.83-21.24 51.07Q697.52-180 667.69-180H580v80h-60v-140h147.69q5.39 0 8.85-3.46t3.46-8.85V-440h108l-38-155q-23-91.38-98.38-148.19Q576.23-800 480-800q-116 0-198 81.11t-82 197.27q0 59.91 24.5 113.82t69.5 95.84L320-288v188h-60Zm234-350Zm-45.15 81.54h62.3l4.46-43.46q11.85-3 22.2-8.73 10.34-5.74 17.65-14.2l39.08 18.08 31.15-53-34.61-25.77q4.3-12.23 4.3-24.46t-4.3-24.46l34.61-25.77-31.15-53-39.08 18.08q-7.31-8.46-17.65-14.2-10.35-5.73-22.2-8.73l-4.46-43.46h-62.3l-4.46 43.46q-11.85 3-22.2 8.73-10.34 5.74-17.65 14.2l-39.08-18.08-31.15 53 34.61 25.77q-4.3 12.23-4.3 24.46t4.3 24.46l-34.61 25.77 31.15 53 39.08-18.08q7.31 8.46 17.65 14.2 10.35 5.73 22.2 8.73l4.46 43.46Zm31.13-84.23q-28.06 0-47.67-19.64-19.62-19.64-19.62-47.69 0-28.06 19.64-47.67 19.64-19.62 47.69-19.62 28.06 0 47.67 19.64 19.62 19.64 19.62 47.69 0 28.06-19.64 47.67-19.64 19.62-47.69 19.62Z"/>
                  </svg>
                </div>
                <h4>Expertise That Matters</h4>
                <p className="text-lt">
                  Our seasoned iOS developers bring a wealth of experience with deep understanding of the iOS ecosystem.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-290q-71.46 0-123.46-45.5T292.08-450H100v-60h192.08q12.46-69 64.46-114.5Q408.54-670 480-670t123.65 45.5q52.2 45.5 64.27 114.5H860v60H667.92q-12.07 69-64.27 114.5Q551.46-290 480-290Zm0-60q53.85 0 91.92-38.08Q610-426.15 610-480t-38.08-91.92Q533.85-610 480-610t-91.92 38.08Q350-533.85 350-480t38.08 91.92Q426.15-350 480-350Z"/>
                  </svg>
                </div>
                <h4>Tailored to Perfection</h4>
                <p className="text-lt">
                  Every app idea is unique. Hence, we tailor iOS app services to your specific needs, to aligns
                  perfectly with your goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="m330-254.62 150-114.3 150 114.3-56.15-185.69 149.61-106.3H540.15L480-741.54l-60.15 194.93H236.54l149.61 106.3L330-254.62ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                  </svg>
                </div>
                <h4>Seamless User Experiences</h4>
                <p className="text-lt">
                  Our user-centric approach ensures that your app is not only visually appealing but also intuitive and
                  user-friendly.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-73.85-130h147.7v-60h-147.7v60Zm0-160h147.7v-60h-147.7v60ZM480-440Zm0 300q-59.61 0-110.11-29.31T289.69-250H180v-60h87.08q-6.08-24.61-6.58-49.81Q260-385 260-410h-80v-60h80q0-25.38.12-50.58.11-25.19 6.96-49.42H180v-60h109.69q14.39-24.54 34-44.73 19.62-20.19 44.93-34.04l-67.85-69.08 41.38-41.38L427.39-734q25.69-7.84 51.99-7.84 26.31 0 52 7.84l87.23-85.23L660-777.85l-69.08 69.08q25.31 13.85 45.16 33.73 19.84 19.89 34.23 45.04H780v60h-87.08q6.85 24.23 6.96 49.42.12 25.2.12 50.58h80v60h-80q0 25-.5 50.19-.5 25.2-6.58 49.81H780v60H670.31q-29.7 51.38-80.2 80.69Q539.61-140 480-140Z"/>
                  </svg>
                </div>
                <h4>Rigorous Testing</h4>
                <p className="text-lt">
                  Quality is non-negotiable. We conduct rigorous testing to identify and eliminate any issues, ensuring
                  a reliable performance.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M438-311.85 650.15-524l-42.77-42.77L438-397.38l-85.38-85.39L309.85-440 438-311.85ZM480-100q-70.77 0-132.61-26.77-61.85-26.77-107.85-72.77-46-46-72.77-107.85Q140-369.23 140-440q0-70.77 26.77-132.61 26.77-61.85 72.77-107.85 46-46 107.85-72.77Q409.23-780 480-780q70.77 0 132.61 26.77 61.85 26.77 107.85 72.77 46 46 72.77 107.85Q820-510.77 820-440q0 70.77-26.77 132.61-26.77 61.85-72.77 107.85-46 46-107.85 72.77Q550.77-100 480-100Zm0-340ZM230.15-844.46l42.16 42.15-154.62 154.62-42.15-42.16 154.61-154.61Zm499.7 0 154.61 154.61-42.15 42.16-154.62-154.62 42.16-42.15ZM480-160q116.62 0 198.31-81.69T760-440q0-116.62-81.69-198.31T480-720q-116.62 0-198.31 81.69T200-440q0 116.62 81.69 198.31T480-160Z"/>
                  </svg>
                </div>
                <h4>Timely Delivery</h4>
                <p className="text-lt">
                  We value your time. Our efficient development process ensures that your app is delivered on schedule,
                  for faster go-to-market.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M455.39-140v-60h292.3q5 0 8.66-3.08 3.65-3.07 3.65-8.07v-279.77q0-114.7-82.08-193.12-82.07-78.42-197.92-78.42t-197.92 78.42Q200-605.62 200-490.92v235.53h-30q-28.77 0-49.38-20.03Q100-295.46 100-324.23v-77.69q0-19.46 11.08-35.66 11.08-16.19 28.92-26.03l1.85-51.08q4.92-65.31 33.92-121t74.38-96.96q45.39-41.27 104.77-64.31Q414.31-820 480-820t124.77 23.04q59.08 23.04 104.77 64t74.38 96.65q28.69 55.7 34.23 121l1.85 50.08q17.46 8.23 28.73 23.54Q860-426.38 860-407.54v89.31q0 18.84-11.27 34.15-11.27 15.31-28.73 23.54v49.39q0 29.53-21.19 50.34Q777.61-140 747.69-140h-292.3Zm-87.7-269.23q-14.69 0-25.04-9.96-10.34-9.96-10.34-24.66 0-14.69 10.34-24.84 10.35-10.16 25.04-10.16 14.7 0 25.04 10.16 10.35 10.15 10.35 24.84 0 14.7-10.35 24.66-10.34 9.96-25.04 9.96Zm224.62 0q-14.7 0-25.04-9.96-10.35-9.96-10.35-24.66 0-14.69 10.35-24.84 10.34-10.16 25.04-10.16 14.69 0 25.04 10.16 10.34 10.15 10.34 24.84 0 14.7-10.34 24.66-10.35 9.96-25.04 9.96ZM254.85-472q-6.23-97.92 60.92-167.58 67.15-69.65 166.23-69.65 83.23 0 146.88 51.5 63.66 51.5 77.27 133.34-85.23-1-157.5-44.76-72.27-43.77-110.96-120-15.23 74.61-63.84 131.92-48.62 57.31-119 85.23Z"/>
                  </svg>
                </div>
                <h4>Post-Launch Support</h4>
                <p className="text-lt">
                  Our commitment doesn't end with the launch. We offer continuous support to keep your app up and
                  running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='quality-div'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 order-1 order-sm-1 order-md-1'>
              <div className='quality-img wow animate__animated animate__fadeInLeft'>
                <img src='/assets/images/app/mobile-app-life-cycle.jpg' alt='img' className='img-fluid' width='100%'/>
              </div>
            </div>
            <div className='col-md-6 order-1 order-sm-1 order-md-2'>
              <div className='content-div ps-md-4 wow animate__animated animate__fadeInRight'>
                <h3>
                  Coverage of full life cycle for IOS development
                </h3>
                <ul className='qp-ul'>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    Conceptualization & Market Study
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                         fill="#000000">
                      <path d="M382-253.85 168.62-467.23 211.38-510 382-339.38 748.62-706l42.76 42.77L382-253.85Z"/>
                    </svg>
                    Consulting and prototyping
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
