// src/pages/About.js
import React, {Fragment} from "react";

function About() {
    return <div>
      <div className='page-banner-div overflow-hidden'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='page-banner-content'>
              <h1>Point of Sales and <br/> <span className='hl-color'>E-Commerce </span></h1>
              <p>
                Our top-rated business management solution integrates cutting-edge technology to streamline
                your operations, from in-store transactions to online sales. This ecosystem is designed to
                meet the diverse needs of modern businesses, enhancing efficiency and driving growth.
              </p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='page-banner-img'>
              <img src='/assets/images/about/about-banner.jpg' alt='img' className='img-fluid' width='100%'/>
            </div>
          </div>
        </div>
      </div>


      <div className='services-div key-feature'>
        <div className='container'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
            <span className="hl-color">Key Features</span>
              <h3> Complete
                Solutions for Seamless Transactions and Online Growth</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                       width="24px"
                       fill="#000000">
                    <path
                        d="M286.15-97.69q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43Zm387.7 0q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57Q703-97.69 673.85-97.69ZM240.61-730 342-517.69h272.69q3.46 0 6.16-1.73 2.69-1.73 4.61-4.81l107.31-195q2.31-4.23.38-7.5-1.92-3.27-6.54-3.27h-486Zm-28.76-60h555.38q24.54 0 37.11 20.89 12.58 20.88 1.2 42.65L677.38-494.31q-9.84 17.31-26.03 26.96-16.2 9.66-35.5 9.66H324l-46.31 84.61q-3.08 4.62-.19 10 2.88 5.39 8.65 5.39h457.69v60H286.15q-40 0-60.11-34.5-20.12-34.5-1.42-68.89l57.07-102.61L136.16-810H60v-60h113.85l38 80ZM342-517.69h280-280Z"/>
                  </svg>
                </div>
                <h4>E-commerce Integration</h4>
                <p className="text-lt">
                  Easily manage your online store with robust e-commerce solutions that connect directly
                  to the POS
                  system, ensuring seamless transactions and inventory management.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                       width="24px"
                       fill="#000000">
                    <path
                        d="M210-280h540q37.23 0 63.62-26.38Q840-332.77 840-370v-220q0-37.23-26.38-63.62Q787.23-680 750-680H210q-37.23 0-63.62 26.38Q120-627.23 120-590v220q0 37.23 26.38 63.62Q172.77-280 210-280Zm90 95.38V-220h-90q-62.15 0-106.08-43.92Q60-307.85 60-370v-220q0-62.15 43.92-106.08Q147.85-740 210-740h540q62.15 0 106.08 43.92Q900-652.15 900-590v220q0 62.15-43.92 106.08Q812.15-220 750-220h-90v35.38H300Zm120-260q14.69 0 25.04-10.15 10.34-10.15 10.34-25.23 0-14.69-10.34-25.04-10.35-10.34-25.04-10.34-15.08 0-25.23 10.34-10.15 10.35-10.15 25.04 0 15.08 10.15 25.23T420-444.62Zm-120 0q14.69 0 25.04-10.15 10.34-10.15 10.34-25.23 0-14.69-10.34-25.04-10.35-10.34-25.04-10.34-15.08 0-25.23 10.34-10.15 10.35-10.15 25.04 0 15.08 10.15 25.23T300-444.62Zm240 0q14.69 0 25.04-10.15 10.34-10.15 10.34-25.23 0-14.69-10.34-25.04-10.35-10.34-25.04-10.34-15.08 0-25.23 10.34-10.15 10.35-10.15 25.04 0 15.08 10.15 25.23T540-444.62Zm120 0q14.69 0 25.04-10.15 10.34-10.15 10.34-25.23 0-14.69-10.34-25.04-10.35-10.34-25.04-10.34-15.08 0-25.23 10.34-10.15 10.35-10.15 25.04 0 15.08 10.15 25.23T660-444.62ZM480-480Z"/>
                  </svg>
                </div>
                <h4>Smart Table Interface</h4>
                <p className="text-lt">
                  Upgrade your customer experience with smart tables, allowing interactive engagement and
                  easy access to
                  product information and ordering.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M432.85-100q-30.31 0-57.31-12.77-27-12.77-45.15-36.69L126.62-413.39l14.77-15.76q15-16 35.88-19.23 20.88-3.24 39.11 7.92l97.47 52.31v-316.46q0-12.75 8.63-21.38 8.62-8.62 21.38-8.62t21.68 8.62q8.92 8.63 8.92 21.38v422.38l-120.08-65.39L379.15-185q9.85 12.38 24 18.69 14.16 6.31 29.7 6.31h196.76q37.62 0 64.01-26.19Q720-212.39 720-250v-150.77q0-20.6-13.93-34.53-13.94-13.93-34.53-13.93H469.85v-60h201.69q45.19 0 76.82 31.63Q780-445.96 780-400.77v150.74q0 62.18-44.18 106.11Q691.65-100 629.61-100H432.85ZM188.16-614.61q-11.85-20.08-18.08-42.94-6.23-22.86-6.23-47.06 0-74.93 52.54-127.46 52.53-52.54 127.46-52.54 74.92 0 127.46 52.54 52.53 52.53 52.53 127.41 0 24.35-6.23 47.16-6.23 22.81-18.07 42.89l-51.69-30q8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5l-51.69 30Zm299.22 280Z"/>
                  </svg>
                </div>
                <h4>Self-Serving Kiosks</h4>
                <p className="text-lt">
                  Empower your customers with self-service kiosks, providing a quick and efficient way to
                  browse products,
                  place orders, and make payments.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M297.84-633.85q-30.07 0-51.26-21.24-21.19-21.24-21.19-51.06v-66.16q0-29.82 21.24-51.06 21.24-21.24 51.06-21.24h364.47q30.07 0 51.26 21.24 21.19 21.24 21.19 51.06v66.16q0 29.82-21.24 51.06-21.24 21.24-51.06 21.24H297.84Zm-.15-59.99h364.62q5.77 0 9.04-3.27 3.26-3.27 3.26-9.04v-66.16q0-5.77-3.26-9.03-3.27-3.27-9.04-3.27H297.69q-5.77 0-9.04 3.27-3.26 3.26-3.26 9.03v66.16q0 5.77 3.26 9.04 3.27 3.27 9.04 3.27Zm-110 578.45q-29.82 0-51.06-21.24-21.24-21.24-21.24-51.06v-40h729.22v40q0 29.92-21.24 51.11-21.24 21.19-51.06 21.19H187.69Zm-72.3-147.69 123.93-287.84q8.91-20.23 27.08-31.58 18.17-11.35 39.06-11.35h349.08q20.89 0 39.06 11.35t27.08 31.58l123.93 287.84H115.39Zm229.23-72.31h40q7.07 0 12.38-5.3 5.31-5.31 5.31-12.39 0-7.07-5.31-12.38-5.31-5.31-12.38-5.31h-40q-7.08 0-12.39 5.31-5.31 5.31-5.31 12.38 0 7.08 5.31 12.39 5.31 5.3 12.39 5.3Zm0-75.38h40q7.07 0 12.38-5.31 5.31-5.31 5.31-12.38 0-7.08-5.31-12.39-5.31-5.3-12.38-5.3h-40q-7.08 0-12.39 5.3-5.31 5.31-5.31 12.39 0 7.07 5.31 12.38 5.31 5.31 12.39 5.31Zm0-75.38h40q7.07 0 12.38-5.31 5.31-5.31 5.31-12.39 0-7.07-5.31-12.38-5.31-5.31-12.38-5.31h-40q-7.08 0-12.39 5.31-5.31 5.31-5.31 12.38 0 7.08 5.31 12.39 5.31 5.31 12.39 5.31ZM460-335.39h40q7.08 0 12.38-5.3 5.31-5.31 5.31-12.39 0-7.07-5.31-12.38-5.3-5.31-12.38-5.31h-40q-7.08 0-12.38 5.31-5.31 5.31-5.31 12.38 0 7.08 5.31 12.39 5.3 5.3 12.38 5.3Zm0-75.38h40q7.08 0 12.38-5.31 5.31-5.31 5.31-12.38 0-7.08-5.31-12.39-5.3-5.3-12.38-5.3h-40q-7.08 0-12.38 5.3-5.31 5.31-5.31 12.39 0 7.07 5.31 12.38 5.3 5.31 12.38 5.31Zm0-75.38h40q7.08 0 12.38-5.31 5.31-5.31 5.31-12.39 0-7.07-5.31-12.38-5.3-5.31-12.38-5.31h-40q-7.08 0-12.38 5.31-5.31 5.31-5.31 12.38 0 7.08 5.31 12.39 5.3 5.31 12.38 5.31Zm115.38 150.76h40q7.08 0 12.39-5.3 5.31-5.31 5.31-12.39 0-7.07-5.31-12.38-5.31-5.31-12.39-5.31h-40q-7.07 0-12.38 5.31-5.31 5.31-5.31 12.38 0 7.08 5.31 12.39 5.31 5.3 12.38 5.3Zm0-75.38h40q7.08 0 12.39-5.31 5.31-5.31 5.31-12.38 0-7.08-5.31-12.39-5.31-5.3-12.39-5.3h-40q-7.07 0-12.38 5.3-5.31 5.31-5.31 12.39 0 7.07 5.31 12.38 5.31 5.31 12.38 5.31Zm0-75.38h40q7.08 0 12.39-5.31 5.31-5.31 5.31-12.39 0-7.07-5.31-12.38-5.31-5.31-12.39-5.31h-40q-7.07 0-12.38 5.31-5.31 5.31-5.31 12.38 0 7.08 5.31 12.39 5.31 5.31 12.38 5.31Z"/>
                  </svg>
                </div>
                <h4>Centralized POS Management</h4>
                <p className="text-lt">
                  Handle all your sales, whether in a single store or across multiple branches and chain
                  stores, with our
                  integrated POS system. This includes features like purchase and sales order management,
                  billing,
                  inventory management, and basic accounting.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M71.93-187.69v-88.93q0-30.92 15.96-55.19 15.96-24.27 42.63-37.76 57.02-27.89 114.67-43.01 57.66-15.11 126.73-15.11 69.08 0 126.73 15.11 57.66 15.12 114.68 43.01 26.67 13.49 42.63 37.76 15.96 24.27 15.96 55.19v88.93H71.93Zm679.99 0v-93.85q0-39.38-19.28-75.07-19.29-35.68-54.72-61.23 40.23 6 76.39 18.57 36.15 12.58 69 29.73 31 16.54 47.88 38.99 16.88 22.44 16.88 49.01v93.85H751.92Zm-380-304.62q-57.75 0-98.87-41.12-41.12-41.13-41.12-98.88 0-57.75 41.12-98.87 41.12-41.13 98.87-41.13 57.75 0 98.88 41.13 41.12 41.12 41.12 98.87 0 57.75-41.12 98.88-41.13 41.12-98.88 41.12Zm345.38-140q0 57.75-41.12 98.88-41.12 41.12-98.87 41.12-6.77 0-17.23-1.54-10.47-1.54-17.23-3.38 23.66-28.45 36.37-63.12 12.7-34.67 12.7-72 0-37.34-12.96-71.73-12.96-34.38-36.11-63.3 8.61-3.08 17.23-4 8.61-.93 17.23-.93 57.75 0 98.87 41.13 41.12 41.12 41.12 98.87ZM131.92-247.69h480v-28.93q0-12.53-6.27-22.3-6.26-9.77-19.88-17.08-49.38-25.46-101.69-38.58-52.31-13.11-112.16-13.11-59.84 0-112.15 13.11-52.31 13.12-101.69 38.58-13.62 7.31-19.89 17.08-6.27 9.77-6.27 22.3v28.93Zm240-304.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0 304.62Zm0-384.62Z"/>
                  </svg>
                </div>
                <h4>Customer Engagement Tools</h4>
                <p className="text-lt">
                  Boost your marketing efforts with AI-powered analytics, customer promotions, and market
                  campaigns, all
                  from within your POS system.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="m400-558.46 80-40 80 40V-760H400v201.54ZM280-290v-60h200v60H280Zm-67.69 150Q182-140 161-161q-21-21-21-51.31v-535.38Q140-778 161-799q21-21 51.31-21h535.38Q778-820 799-799q21 21 21 51.31v535.38Q820-182 799-161q-21 21-51.31 21H212.31ZM200-760v560-560Zm12.31 560h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H620v299.23l-140-70-140 70V-760H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85Z"/>
                  </svg>
                </div>
                <h4>Production and Delivery Management</h4>
                <p className="text-lt">
                  Optimize your production workflows and integrate with delivery systems for efficient
                  order fulfillment.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M280-407.69q13.54 0 22.92-9.39 9.39-9.38 9.39-22.92 0-13.54-9.39-22.92-9.38-9.39-22.92-9.39-13.54 0-22.92 9.39-9.39 9.38-9.39 22.92 0 13.54 9.39 22.92 9.38 9.39 22.92 9.39Zm0-160q13.54 0 22.92-9.39 9.39-9.38 9.39-22.92 0-13.54-9.39-22.92-9.38-9.39-22.92-9.39-13.54 0-22.92 9.39-9.39 9.38-9.39 22.92 0 13.54 9.39 22.92 9.38 9.39 22.92 9.39ZM362.31-410H710v-60H362.31v60Zm0-160H710v-60H362.31v60ZM340-140v-80H172.31Q142-220 121-241q-21-21-21-51.31v-455.38Q100-778 121-799q21-21 51.31-21h615.38Q818-820 839-799q21 21 21 51.31v455.38Q860-262 839-241q-21 21-51.31 21H620v80H340ZM172.31-280h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM160-280v-480 480Z"/>
                  </svg>
                </div>
                <h4>Kitchen Ordering and Display System</h4>
                <p className="text-lt">
                  Streamline your restaurant operations with a dedicated kitchen ordering and display
                  system, ensuring
                  timely and accurate order processing.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-63.08q-29.15 0-49.58-20.42Q410-103.92 410-133.08q0-29.15 20.42-49.57 20.43-20.43 49.58-20.43t49.58 20.43Q550-162.23 550-133.08q0 29.16-20.42 49.58Q509.15-63.08 480-63.08Zm-235.38-700q-29.16 0-49.58-20.42-20.42-20.42-20.42-49.58 0-29.15 20.42-49.57 20.42-20.43 49.58-20.43 29.15 0 49.57 20.43 20.42 20.42 20.42 49.57 0 29.16-20.42 49.58-20.42 20.42-49.57 20.42Zm0 235.39q-29.16 0-49.58-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.58-20.42 29.15 0 49.57 20.42t20.42 49.58q0 29.15-20.42 49.57-20.42 20.43-49.57 20.43Zm0 235.38q-29.16 0-49.58-20.42-20.42-20.42-20.42-49.58 0-29.15 20.42-49.57 20.42-20.43 49.58-20.43 29.15 0 49.57 20.43 20.42 20.42 20.42 49.57 0 29.16-20.42 49.58-20.42 20.42-49.57 20.42Zm470.76-470.77q-29.15 0-49.57-20.42t-20.42-49.58q0-29.15 20.42-49.57 20.42-20.43 49.57-20.43 29.16 0 49.58 20.43 20.42 20.42 20.42 49.57 0 29.16-20.42 49.58-20.42 20.42-49.58 20.42ZM480-292.31q-29.15 0-49.58-20.42Q410-333.15 410-362.31q0-29.15 20.42-49.57 20.43-20.43 49.58-20.43t49.58 20.43Q550-391.46 550-362.31q0 29.16-20.42 49.58-20.43 20.42-49.58 20.42Zm235.38 0q-29.15 0-49.57-20.42t-20.42-49.58q0-29.15 20.42-49.57 20.42-20.43 49.57-20.43 29.16 0 49.58 20.43 20.42 20.42 20.42 49.57 0 29.16-20.42 49.58-20.42 20.42-49.58 20.42Zm0-235.38q-29.15 0-49.57-20.43-20.42-20.42-20.42-49.57 0-29.16 20.42-49.58 20.42-20.42 49.57-20.42 29.16 0 49.58 20.42 20.42 20.42 20.42 49.58 0 29.15-20.42 49.57-20.42 20.43-49.58 20.43Zm-235.38 0q-29.15 0-49.58-20.43Q410-568.54 410-597.69q0-29.16 20.42-49.58 20.43-20.42 49.58-20.42t49.58 20.42Q550-626.85 550-597.69q0 29.15-20.42 49.57-20.43 20.43-49.58 20.43Zm0-235.39q-29.15 0-49.58-20.42Q410-803.92 410-833.08q0-29.15 20.42-49.57 20.43-20.43 49.58-20.43t49.58 20.43Q550-862.23 550-833.08q0 29.16-20.42 49.58-20.43 20.42-49.58 20.42Z"/>
                  </svg>
                </div>
                <h4>Button Calling System</h4>
                <p className="text-lt">
                  Enhance service speed and efficiency with a button calling system, enabling staff or
                  servers to respond
                  quickly to customer needs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card">
                <div className="sc-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M180-140v-180.85q0-29.84 21.24-51.03 21.24-21.2 51.07-21.2h455.38q29.83 0 51.07 21.24Q780-350.6 780-320.77V-140H180Zm185.77-308.46q-77.09 0-131.43-54.34T180-634.23q0-77.09 54.34-131.43T365.77-820h228.46q77.09 0 131.43 54.34T780-634.23q0 77.09-54.34 131.43t-131.43 54.34H365.77ZM240-200h480v-120.77q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85V-200Zm125.77-308.46h228.46q52.69 0 89.23-36.54Q720-581.54 720-634.23q0-52.69-36.54-89.23Q646.92-760 594.23-760H365.77q-52.69 0-89.23 36.54Q240-686.92 240-634.23q0 52.69 36.54 89.23 36.54 36.54 89.23 36.54Zm-.01-91.16q14.7 0 24.66-9.94 9.96-9.95 9.96-24.66 0-14.7-9.94-24.66-9.95-9.97-24.66-9.97-14.7 0-24.66 9.95-9.97 9.95-9.97 24.66 0 14.7 9.95 24.66t24.66 9.96Zm228.46 0q14.7 0 24.66-9.94 9.97-9.95 9.97-24.66 0-14.7-9.95-24.66-9.95-9.97-24.66-9.97-14.7 0-24.66 9.95t-9.96 24.66q0 14.7 9.94 24.66 9.95 9.96 24.66 9.96ZM480-200Zm0-434.23Z"/>
                  </svg>
                </div>
                <h4>Self-Serving Robot</h4>
                <p className="text-lt">
                  Take automation to the next level with self-serving robots that assist in delivering
                  orders directly to customers.
                </p>
              </div>
            </div>
            <p>
              <i>
                With our integrated ecosystem, managing your business has never been easier. Whether you're
                expanding online or optimizing in-store operations, our solutions are designed to support
                your growth every step of the way.
              </i>
            </p>
          </div>
        </div>
      </div>


      <div className='quality-div'>
        <div className='container'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color">E-Commerce</span>
              <h3> Point of Sales and E-Commerce </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 order-1 order-sm-1 order-md-1'>
              <div className='quality-img mb-5'>
                <img
                    src="/assets/images/pos/pos-image.png"
                    alt="img"
                    className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>;
}

export default About;
