// src/components/Footer.js
import React, {Fragment} from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (

      <footer className="main-footer animation-div">

          <div id="particles-js"></div>
          <div className='container'>
              <div className='row'>
                  <div className='col-md-12'>
                      <div className='footer-top'>
                          {/*<h6 className='wow animate__animated animate__fadeInDown'>Lorem Ipsum is simply dummy.</h6>*/}
                          {/*<h1 className='wow animate__animated animate__fadeInDown'>trust the <span>Future</span></h1>*/}
                          <p className='wow animate__animated animate__fadeInDown h2 mb-4'>Stay updated with our
                              Newsletter</p>
                          {/*<button className='btn hl-btn wow animate__animated animate__zoomIn'>Contact Us</button>*/}

                      </div>

                      <div className='footer-form mb-5 wow animate__animated animate__fadeInUp'>
                          {/*<h5>Stay updated with our Newsletter</h5>*/}
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

                          {/*<p>
                              <input type='checkbox' className='me-2'/>
                              By submitting this form, you agree to receive future emails from accentvision.
                          </p>*/}
                      </div>


                      <div className='bottom-footer'>
                          <div className='footer-link mb-4 wow animate__animated animate__fadeInUp'>
                              <ul>
                                  <li><a href='/'>Home</a></li>
                                  <li><a href='/privacy'>Privacy Policy</a></li>
                                  <li><a href='/terms'>Terms of Use</a></li>
                                  <li><a href='/career'>Career</a></li>
                                  <li><a href='/contact'>Contact Us</a></li>
                              </ul>
                          </div>
                          <div className='social-link mb-5 wow animate__animated animate__fadeInUp'>
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
                              <a href='https://www.instagram.com/accentvisioninc/' target='_blank'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                       viewBox="0 0 24 24">
                                      <path fill="currentColor" fill-rule="evenodd"
                                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                            clip-rule="evenodd"/>
                                  </svg>

                              </a>
                              <a href='https://www.facebook.com/accentvision' target='_blank'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fill-rule="evenodd"
                                            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                            clip-rule="evenodd"/>
                                  </svg>
                              </a>

                              <a href='https://www.youtube.com/watch?v=fDUJV2rd8Q4&feature=youtu.be' target='_blank'>
                                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fill-rule="evenodd"
                                            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
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
