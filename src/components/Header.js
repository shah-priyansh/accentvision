// src/components/Header.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
      <header className='main-header'>
          <nav className="navbar navbar-expand-lg py-0">
              <div className="container">

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                      <a className="navbar-brand" href="#"> <img src='/assets/images/logo.png' alt='img'
                                                                 className='img-fluid'
                                                                 width='120'/>
                      </a>
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link" href="#">
                                  <span>Home</span>
                              </a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>insights</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      <div className='col-md-12'>
                                          <div className='menu-box-title'>
                                              <h5>Insight's Menu</h5>
                                          </div>
                                      </div>
                                      <div className='col-md-6'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  About Us
                                                  <span>
                                                      Accentvision Technology Inc is a world-class Technology Solutions provider specializing in the following cutting-edge offerings:
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-6'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Quality & Strategy
                                                  <span>Establish best practices and quality framework as per customer requirements.</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="nav-item dropdown">
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
                                              <a href='#'>
                                                  Artificial Intellegence
                                                  <span>
                                                      Harness the power of Artificial Intelligence to transform your business..
                                                  </span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  POS and E-Commerce
                                                  <span>Our top-rated business management solution integrates..</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Salesforce Solutions
                                                  <span>Our top-rated business management solution integrates..</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
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
                                              <a href='#'>
                                                  Android Development
                                                  <span>Why Choose Our Android App Development Service?</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
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
                                              <a href='#'>
                                                  Data Platform & Analytics
                                                  <span>Celebrate Excellence in Data Solutions with Us</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  productization
                                                  <span>Empower Your Product Evolution with Our Expertise!</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Automation
                                                  <span>Accentvision: Elevating Automation Excellence</span>
                                              </a>
                                          </div>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Cloud Services
                                                  <span>Accentvision: Your Partner in Cloud Transformation</span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                                  <span>Staffing</span>
                              </a>
                              <div className="mega-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                                  <div className='row'>
                                      <div className='col-md-12'>
                                          <div className='menu-box-title'>
                                              <h5>Staffing's Menu</h5>
                                          </div>
                                      </div>
                                      <div className='col-md-6'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Onshore Staffing
                                                  <span>
                                                       Your Gateway to Global Talent with Cost Efficiency
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-6'>
                                          <div className='menu-box'>
                                              <a href='#'>
                                                  Offshore Staffing
                                                  <span> Your Gateway to Global Talent with Cost Efficiency </span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/Contact">
                                  <span>Career</span>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/Contact">
                                  <span>Contact Us</span>
                              </a>
                          </li>
                      </ul>
                      <div className='get-demo'>
                          <a className='btn btn-outline-dark' href='#'>Get in Touch</a>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
  );
}

export default Header;
