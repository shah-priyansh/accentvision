// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";

function About() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6 order-2 order-sm-2 order-md-1'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Artificial <span className='hl-color'>Intelligence </span> Services</h1>
            <p>
              Harness the power of Artificial Intelligence to transform your business and stay ahead of the competition.
              Our AI solutions are designed to streamline operations, enhance customer engagement, and provide
              insightful analytics that drive business growth
            </p>
          </div>
        </div>
        <div className='col-md-6 order-2 order-sm-2 order-md-2'>
          <div className='page-banner-img wow animate__animated animate__fadeInRight'>
            <img src='/assets/images/about/about-banner.jpg' alt='img' className='img-fluid' width='100%'/>
          </div>
        </div>
      </div>
    </div>


    <div className='service-div bg-white text-primary-dark animation-div'>
      <div className='container'>
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <span className="hl-color wow animate__animated animate__fadeInDown">Explore Our Services </span>
            <h3 className='wow animate__animated animate__fadeInUp'> Unlocking New Growth Potential </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/ai/ai1.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Voice Command Integration</h3>
                <p>
                  Enable your systems to take verbal commands, making interactions more intuitive and expanding your
                  outreach effortlessly.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/ai/ai2.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Intelligent Chatbot</h3>
                <p>
                  Deploy an advanced chatbot capable of seamlessly switching to live agents, ensuring smooth and
                  effective customer service supported by internal bots.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/ai/ai3.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Social Media Analytics</h3>
                <p>
                  Extend your reach by leveraging social media platform analysis. Gain deep insights and enhance your
                  business strategies through data-driven decisions.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/ai/ai4.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>AI Virtual Assistant</h3>
                <p>
                  Empower your staff with a virtual assistant featuring AI avatar, designed to keep your team on track
                  with timely reminders and task management.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/ai/ai5.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>AI-Generated Summaries</h3>
                <p>
                  Utilize image and video summarization tools, presenting the key insights through engaging AI-driven
                  avatars, making information consumption more efficient.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/ai/ai6.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Sentiment Analysis & Recommendations</h3>
                <p>
                  Analyze customer sentiments and receive tailored recommendations, helping you to better understand
                  your audience and refine your offerings for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*<div className='customer-div'>
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

export default About;
