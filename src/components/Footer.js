// src/components/Footer.js
import React, {Fragment} from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (

      <footer className="main-footer wow animate__animated animate__fadeInUp">
          <div id="particles-js"></div>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-12'>
                      <div className='footer-top'>
                          <h6 className='wow animate__animated animate__fadeInDown'>Lorem Ipsum is simply dummy.</h6>
                          <h1 className='wow animate__animated animate__fadeInDown'>trust the <span>Future</span></h1>

                          <button className='btn hl-btn wow animate__animated animate__zoomIn'>Contact Us</button>

                      </div>

                      <div className='footer-form mb-5 wow animate__animated animate__fadeInUp'>
                          <h5>Stay Connected</h5>
                          <div className='form-div'>
                              <div className='row'>
                                  <div className='col-md-4'>
                                      <div className='form-group'>
                                          <input type='text' className='form-control' placeholder='First Name'/>
                                      </div>
                                  </div>
                                  <div className='col-md-4'>
                                      <div className='form-group'>
                                          <input type='text' className='form-control' placeholder='Last Name'/>
                                      </div>
                                  </div>
                                  <div className='col-md-4'>
                                      <div className='form-group'>
                                          <input type='email' className='form-control' placeholder='Email Address'/>
                                      </div>
                                  </div>
                              </div>
                              <button className='btn'>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M8.0155 21.6538L6.59625 20.2345L14.8308 12L6.59625 3.7655L8.0155 2.34625L17.6693 12L8.0155 21.6538Z"
                                          fill="black"/>
                                  </svg>

                              </button>
                          </div>

                          <p>
                              <input type='checkbox' className='me-2'/>
                              By submitting this form, you agree to receive future emails from accentvision.
                          </p>
                      </div>


                      <div className='bottom-footer'>
                          <div className='footer-link mb-4 wow animate__animated animate__fadeInUp'>
                              <ul>
                                  <li><a href='#'>Home</a></li>
                                  <li><a href='#'>Insights</a></li>
                                  <li><a href='#'>Solutions</a></li>
                                  <li><a href='#'>Staffing</a></li>
                                  <li><a href='#'>Career</a></li>
                                  <li><a href='#'>Contact Us</a></li>
                              </ul>
                          </div>
                          <div className='social-link mb-5 wow animate__animated animate__fadeInUp'>
                              <a href='#'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fill-rule="evenodd"
                                            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                            clip-rule="evenodd"/>
                                  </svg>
                              </a>
                              <a href='#'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fill-rule="evenodd"
                                            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                            clip-rule="evenodd"/>
                                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                  </svg>

                              </a>
                              <a href='#'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path
                                          d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                                  </svg>

                              </a>
                              <a href='#'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                       viewBox="0 0 24 24">
                                      <path fill="currentColor" fill-rule="evenodd"
                                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                            clip-rule="evenodd"/>
                                  </svg>

                              </a>
                          </div>
                          <div className='copyright-div wow animate__animated animate__fadeInUp'>
                              <p className='text-center'>© Copyright 2023 Accentvision Technology Inc</p>
                          </div>
                      </div>


                  </div>
              </div>
          </div>

      </footer>

  );
}

export default Footer;
