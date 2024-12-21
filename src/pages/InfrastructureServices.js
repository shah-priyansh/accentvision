// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";

function InfrastructureServices() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
              <h1>Infrastructure  <span className='hl-color'>Services</span></h1>
              <p>
                Robust solutions, scalable architecture, and reliable support for your business growth.
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
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img mb-5 wow animate__animated animate__zoomIn'>
                <img
                    src="/assets/images/infrastructure-services/infrastructure-services.jpg"
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
              <h3 className='wow animate__animated animate__fadeInDown'> Why Choose Accentvision?</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M479.93-330.77q44.22 0 78.84-26.58 34.61-26.57 50.46-67.73H350.77q15.85 41.16 50.39 67.73 34.55 26.58 78.77 26.58Zm-92.15-150.77q21.84 0 37.03-15.28Q440-512.1 440-533.94q0-21.83-15.28-37.02-15.29-15.19-37.12-15.19t-37.02 15.28q-15.19 15.28-15.19 37.11 0 21.84 15.28 37.03 15.28 15.19 37.11 15.19Zm184.62 0q21.83 0 37.02-15.28 15.19-15.28 15.19-37.12 0-21.83-15.28-37.02-15.28-15.19-37.11-15.19-21.84 0-37.03 15.28Q520-555.59 520-533.76q0 21.84 15.28 37.03 15.29 15.19 37.12 15.19ZM315-690.15l108.15-141.93q10.77-14.41 25.58-21.16Q463.54-860 480-860t31.27 6.76q14.81 6.75 25.58 21.16L645-690.15l165.38 55.84q23.7 7.62 36.96 26.87 13.27 19.26 13.27 42.54 0 10.75-3.14 21.43T847.15-523L739.46-373.54l4 158.62q1 31.59-20.83 53.25Q700.81-140 671.77-140q-.85 0-20.08-2.62L480-191.85l-171.69 49.23q-5 2-10.32 2.31-5.32.31-9.76.31-29.31 0-51-21.67-21.69-21.66-20.69-53.25l4-159.62L113.46-523q-7.18-9.83-10.32-20.55Q100-554.28 100-565q0-22.63 13.18-42.09 13.18-19.46 36.82-27.6l165-55.46Zm37.08 51.69-182.85 60.92q-5.77 1.92-7.88 7.89-2.12 5.96 1.73 10.96l117.84 166.31-4.38 178.69q-.39 6.54 4.61 10.38 5 3.85 11.16 1.93L480-254.08l187.69 53.7q6.16 1.92 11.16-1.93 5-3.84 4.61-10.38l-4.38-179.69 117.84-164.31q3.85-5 1.73-10.96-2.11-5.97-7.88-7.89l-182.85-62.92-118.3-156.15q-3.47-5.01-9.62-5.01-6.15 0-9.62 5.01l-118.3 156.15ZM480-499.62Z"/>
                  </svg>
                </div>
                <h4>Expertise</h4>
                <p className="text-lt">
                  Our professionals excel in data management, analytics, and AI/ML, ensuring top-tier service.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-122.31q-24.08 0-42.58-12.69-18.5-12.7-25.88-33.31H400q-24.54 0-42.27-17.73Q340-203.77 340-228.31v-131.23q-60.54-36.69-95.27-98.38Q210-519.62 210-590q0-112.92 78.54-191.46T480-860q112.92 0 191.46 78.54T750-590q0 71.61-34.73 132.69T620-359.54v131.23q0 24.54-17.73 42.27-17.73 17.73-42.27 17.73h-11.54q-7.38 20.61-25.88 33.31-18.5 12.69-42.58 12.69Zm-80-106h160v-37.54H400v37.54Zm0-72.92h160V-340H400v38.77ZM392-400h64.15v-116.46l-85.69-85.69L404-635.69l76 76 76-76 33.54 33.54-85.69 85.69V-400H568q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-159.69Zm0-40.31Z"/>
                  </svg>
                </div>
                <h4>Customization</h4>
                <p className="text-lt">
                  We tailor solutions to your unique business requirements, no one-size-fits-all here.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-160q75 0 127.5-52.5T660-340q0-75-52.5-127.5T480-520q-75 0-127.5 52.5T300-340q0 75 52.5 127.5T480-160ZM363.77-549.31q19.61-11.77 41.73-18.84 22.12-7.08 45.12-9.85l-96-191.23h-100l109.15 219.92Zm232.46 0 110.15-219.92h-101l-86.15 171.54 11.69 23.38q17.46 4 33.73 9.85 16.27 5.85 31.58 15.15Zm-323.69 344q-8.15-17.84-11.69-38.65-3.54-20.81-1.23-43.34-9.23-32.93-8.58-67 .65-34.08 11.11-66.93 0-15 5.2-28.46 5.19-13.46 14.42-24.23-28.15 8.23-47.07 29.88-18.93 21.65-21.23 50.57-22.31 28.93-21.28 66.35 1.04 37.42 26.88 68.35 0 22.31 15.58 37.88 15.58 15.58 37.89 15.58Zm414.92 0q48.15-8.61 80.35-46.04Q800-288.77 800-340q0-51.23-32.19-88.65-32.2-37.43-80.35-46.04-2.31 0-4.62.19-2.3.19-4.61.58 19.69 28.61 30.73 62.69T720-340q0 37.15-11.04 71.23-11.04 34.08-30.73 62.69 2.31.39 4.61.58 2.31.19 4.62.19ZM480-100q-39.23 0-74.58-11.69-35.34-11.7-64.8-32.85-9.77 2.77-20.12 3.65-10.35.89-21.5.89-82.54 0-140.77-58.23Q100-256.46 100-339q0-80.08 54.54-137.08 54.54-57 133.38-61.3 4.23 0 8.08.57 3.85.58 7.69 1.35L156.93-829.23h235.38L480-653.84l87.69-175.39h235.38L657.69-537.84q3.46-.77 7.12-1.16 3.65-.38 7.5-.38 79.23 4.92 133.46 61.92Q860-420.46 860-340q0 83.54-58.23 141.77Q743.54-140 660-140q-10.54 0-21-.89-10.46-.88-20.23-3.65-29.46 20.77-64.5 32.65Q519.23-100 480-100Zm0-240ZM363.77-549.31 254.62-769.23l109.15 219.92Zm232.46 0 110.15-219.92-110.15 219.92ZM411.77-239.23l25.69-84.08-68.23-48.77h84.08L480-460.77l26.69 88.69h84.08l-68.23 48.77 25.69 84.08L480-291l-68.23 51.77Z"/>
                  </svg>
                </div>
                <h4>Proven Results</h4>
                <p className="text-lt">
                  Our track record showcases successful data transformations that have empowered organizations like
                  yours.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="m618.92-298.92 42.16-42.16L510-492.16V-680h-60v212.15l168.92 168.93ZM480.07-100q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100ZM480-480Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                  </svg>
                </div>
                <h4>Dedication</h4>
                <p className="text-lt">
                  We're committed to your success, going the extra mile to meet your data goals.
                </p>
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

export default InfrastructureServices;
