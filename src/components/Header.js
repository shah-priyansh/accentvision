// src/components/Header.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
      <header className='main-header wow animate__animated animate__fadeInDown'>
          <nav className="navbar navbar-expand-lg py-0">
              <div className="container">
                  <a className="navbar-brand" href="/"> <img src='/assets/images/logo.png' alt='img'
                                                             className='img-fluid'
                                                             width='120'/>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link" href="/">
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
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/about'>
                                                  About Us
                                                  <span>
                                                      Accentvision Technology Inc is a world-class Technology Solutions provider specializing in the following cutting-edge offerings:
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/quality-and-strategy'>
                                                  Quality & Strategy
                                                  <span>Establish best practices and quality framework as per customer requirements.</span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-4'>
                                          <div className='menu-box'>
                                              <a href='/academy'>
                                                  Academy
                                                  <span>Smarter Way Of Building Career In IT </span>
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
                                              <a href='/automation'>
                                                  Automation
                                                  <span>Accentvision: Elevating Automation Excellence</span>
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
                                              <a href='/onshore-staffing'>
                                                  Onshore Staffing
                                                  <span>
                                                       Your Gateway to Global Talent with Cost Efficiency
                                                  </span>
                                              </a>
                                          </div>
                                      </div>
                                      <div className='col-md-6'>
                                          <div className='menu-box'>
                                              <a href='/offshore-staffing'>
                                                  Offshore Staffing
                                                  <span> Your Gateway to Global Talent with Cost Efficiency </span>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/career">
                                  <span>Career</span>
                              </a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/contact">
                                  <span>Contact Us</span>
                              </a>
                          </li>
                      </ul>
                      <div className='get-demo'>
                          <a className='btn hl-btn' href='/contact'>Get in Touch</a>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
  );
}

export default Header;
