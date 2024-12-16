// src/components/Header.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
      <header className='main-header wow animate__animated animate__fadeInDown'>
          <nav className="navbar navbar-expand-lg py-0">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/"> <img src='/assets/images/logo.png' alt='img'
                                                             className='img-fluid'
                                                             width='120'/>
                  </a>


                  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

                      <ul className="navbar-nav">
                          {/*<li className="nav-item">
                              <a className="nav-link" href="/">
                                  <span>Home</span>
                              </a>
                          </li>*/}
                          {/* Insights*/}
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Insights</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      {/*<div className='col-md-12'>*/}
                                      {/*    <div className='menu-box-title'>*/}
                                      {/*        <h5>Insight's Menu</h5>*/}
                                      {/*    </div>*/}
                                      {/*</div>*/}
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/about'>
                                                  About Us
                                                  <span>
                                                      Accentvision Technology Inc delivers innovative, high-quality technology solutions focused on solving problems, creating value, and driving strategic alignment.
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/quality-and-strategy'>
                                                  Quality
                                                  <span>Exceeding quality expectations with best practices, customer focus, and continuous improvement.</span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/strategy'>
                                                  Strategy
                                                  <span>Collaborating with leading technology partners to extend our offerings</span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/team'>
                                                  Our Team
                                                  <span>A blend of highly performing teams differentiates our company. Together, we innovate, deliver, and ensure exceptional results. </span>
                                              </a>
                                          </div>
                                      </div>
                                      {/*<div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/academy'>
                                                  Academy
                                                  <span>Smarter Way Of Building Career In IT </span>
                                              </a>
                                          </div>
                                      </div>*/}
                                  </div>
                              </div>
                          </li>

                          {/* Staffing */}
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Staffing</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      {/*<div className='col-md-12'>*/}
                                      {/*    <div className='menu-box-title'>*/}
                                      {/*        <h5>Staffing's Menu</h5>*/}
                                      {/*    </div>*/}
                                      {/*</div>*/}

                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/offshore-staffing'>
                                                  Offshore Staffing
                                                  <span> Your Gateway to Global Talent with Cost Efficiency </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/onshore-staffing'>
                                                  Onsite Staffing
                                                  <span>
                                                       Your Gateway to Global Talent with Cost Efficiency
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/automation'>
                                                  Automation
                                                  <span>Accentvision: Elevating Automation Excellence</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          {/* Services */}
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Services</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      {/*<div className='col-md-12'>*/}
                                      {/*    <div className='menu-box-title'>*/}
                                      {/*        <h5>Services's Menu</h5>*/}
                                      {/*    </div>*/}
                                      {/*</div>*/}
                                      <div className='col-md-4'>

                                          <div className='menu-box'>
                                              <a href='/andriod-app-development'>
                                                  Software & Mobile Apps
                                                  <span>
                                                      Why Choose Our Android and iOS App Development Service?
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/artificial-intelligence-services'>
                                                  Artificial Intelligence
                                                  <span>
                                                      Harness the power of Artificial Intelligence to transform your business..
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/data-analytics'>
                                                  Data Analytics
                                                  <span>
                                                      Celebrate Excellence in Data Solutions with Us
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>

                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Infrastructure Services
                                                  <span>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Cybersecurity
                                                  <span>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/cloud-services'>
                                                  Cloud Services
                                                  <span>
                                                      Accentvision: Your Partner in Cloud Transformation
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Dynamics
                                                  <span>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  DevOps
                                                  <span>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  ERP
                                                  <span>
                                                      Experience a Paradigm Shift: Say Goodbye to Exorbitant ERP Expenses..
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          {/*<li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Solutions</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>

                                      <div className='col-md-4'>
                                          <div className='menu-box-title'>
                                              <h5>Solution's</h5>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/artificial-intelligence-services'>
                                                  Artificial Intellegence
                                                  <span>
                                                      Harness the power of Artificial Intelligence to transform your business..
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/pos-and-ecom'>
                                                  POS and E-Commerce
                                                  <span>Our top-rated business management solution integrates..</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/sales-force-solutions'>
                                                  Salesforce Solutions
                                                  <span>Our top-rated business management solution integrates..</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/erp'>
                                                  ERP Solutions
                                                  <span>Experience a Paradigm Shift: Say Goodbye to Exorbitant ERP Expenses..</span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box-title'>
                                              <h5>Enterprise Mobile Apps</h5>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/andriod-app-development'>
                                                  Android Development
                                                  <span>Why Choose Our Android App Development Service?</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/iosDev'>
                                                  IOS Development
                                                  <span>When it comes to crafting exceptional iOS apps</span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box-title'>
                                              <h5>Others</h5>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/data-analytics'>
                                                  Data Platform & Analytics
                                                  <span>Celebrate Excellence in Data Solutions with Us</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='/productization'>
                                                  productization
                                                  <span>Empower Your Product Evolution with Our Expertise!</span>
                                              </a>
                                          </div>

                                          <div className='menu-box'>
                                              <a href='/cloud-services'>
                                                  Cloud Services
                                                  <span>Accentvision: Your Partner in Cloud Transformation</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>*/}

                          {/* Industries */}
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Industries</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      {/*<div className='col-md-12'>*/}
                                      {/*    <div className='menu-box-title'>*/}
                                      {/*        <h5>Industries's Menu</h5>*/}
                                      {/*    </div>*/}
                                      {/*</div>*/}
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Telecom
                                                  <span>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Finance
                                                  <span>
                                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Retail
                                                  <span>
                                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                      </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  ECommerce
                                                  <span>
                                                     Our top-rated business management solution integrates..
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          {/* Products */}
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Products</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      {/*<div className='col-md-12'>*/}
                                      {/*    <div className='menu-box-title'>*/}
                                      {/*        <h5>Products's Menu</h5>*/}
                                      {/*    </div>*/}
                                      {/*</div>*/}
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  TOC360
                                                  <span>
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  PMS
                                                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  SmartSense
                                                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          {/* Marketplace */}
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Marketplace</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      {/*<div className='col-md-12'>*/}
                                      {/*    <div className='menu-box-title'>*/}
                                      {/*        <h5>Marketplace's Menu</h5>*/}
                                      {/*    </div>*/}
                                      {/*</div>*/}
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Automation & AI
                                                  <span>
                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Telecom 5G
                                                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Donation App
                                                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>

                          {/* Career */}
                          {/*<li className="nav-item">
                              <a className="nav-link" href="/career">
                                  <span>Career</span>
                              </a>
                          </li>*/}

                          <li className="nav-item">
                              <a className="nav-link" href="/contact">
                                  <span>Contact Us</span>
                              </a>
                          </li>
                      </ul>
                      <hr/>
                      <div className='get-demo d-block d-sm-block d-md-none ps-2 my-3'>
                          <ul className='social-media-link'>
                              <li>
                                  <a href='https://www.instagram.com/accentvisioninc/' target='_blank'>
                                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                           viewBox="0 0 24 24">
                                          <path fill="currentColor" fill-rule="evenodd"
                                                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                                clip-rule="evenodd"/>
                                      </svg>

                                  </a>
                              </li>
                              <li>
                                  <a href='https://www.youtube.com/watch?v=fDUJV2rd8Q4' target='_blank'>
                                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                           fill="currentColor"
                                           viewBox="0 0 24 24">
                                          <path fill-rule="evenodd"
                                                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                                clip-rule="evenodd"/>
                                      </svg>

                                  </a>
                              </li>
                              <li>
                                  <a href='https://www.facebook.com/accentvision' target='_blank'>
                                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                           fill="currentColor"
                                           viewBox="0 0 24 24">
                                          <path fill-rule="evenodd"
                                                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                clip-rule="evenodd"/>
                                      </svg>

                                  </a>
                              </li>
                              <li>
                                  <a href='https://www.linkedin.com/company/accentvision/' target='_blank'>
                                      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                           xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                           fill="currentColor"
                                           viewBox="0 0 24 24">
                                          <path fill-rule="evenodd"
                                                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                clip-rule="evenodd"/>
                                          <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                      </svg>

                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className='get-demo d-none d-sm-none d-md-block'>
                      <ul className='social-media-link'>


                          <li>
                              <a href='https://www.linkedin.com/company/accentvision/' target='_blank'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fill-rule="evenodd"
                                            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                            clip-rule="evenodd"/>
                                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                  </svg>

                              </a>
                          </li>
                          <li>
                              <a href='https://www.instagram.com/accentvisioninc/' target='_blank'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                       viewBox="0 0 24 24">
                                      <path fill="currentColor" fill-rule="evenodd"
                                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                            clip-rule="evenodd"/>
                                  </svg>

                              </a>
                          </li>
                          <li>
                              <a href='https://www.facebook.com/accentvision' target='_blank'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fill-rule="evenodd"
                                            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                            clip-rule="evenodd"/>
                                  </svg>

                              </a>
                          </li>
                          <li>
                              <a href='https://www.youtube.com/watch?v=fDUJV2rd8Q4' target='_blank'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fill-rule="evenodd"
                                            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                            clip-rule="evenodd"/>
                                  </svg>

                              </a>
                          </li>
                      </ul>
                  </div>
                  <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className='spn-menu'>
                          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                               fill="#000000">
                          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                      </svg>
                      </span>
                      <span className='spn-close'>
                          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                               fill="#000000"><path
                              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                      </span>

                  </button>
              </div>
          </nav>
      </header>
  );
}

export default Header;
