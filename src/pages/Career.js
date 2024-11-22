// src/pages/About.js
import React, {Fragment} from "react";
import OwlCarousel from "react-owl-carousel";
const About = () => {

  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 20,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4,
        stagePadding:70,
      }
    }
  };

  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6 order-2 order-sm-2 order-md-1'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Career</h1>
            <p>
              We are always looking to work with talented people with an entrepreneurial outlook, drive to succeed,
              and the confidence to change the world with technology.
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


    <div className='service-div bg-white text-primary-dark'>
      <div className='container'>
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <span className="hl-color animate__animated animate__backInDown">RIGHT TIME TO SHOW YOUR SKILLS  </span>
            <h3 className='wow animate__animated animate__backInUp'>WE ARE HIRING TALENTS </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/career/t4.jpeg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Internal Workshops </h3>
                <p>
                  We often arrange internal workshops, including technical expert sessions and personal growth seminars.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/career/t2.jpeg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Gifts & Appraisal </h3>
                <p>
                  We value our employees and strive to recognize their hard work and dedication through our appraisal
                  process to help everyone grow and develop.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/career/t3.png' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Awesome Co-Workers</h3>
                <p>
                  Everyone at Enterprise Analytic believes in maintaining cordial relationships with colleagues to
                  learn, educate and grow together.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/career/t4.jpeg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3>Frequent Team Events </h3>
                <p>
                  With events and celebrations, working is always fun at Enterprise Analytic, as we all believe in
                  learning with enjoyment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='life-div py-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-md-12">
            <div className='container'>
              <div className="div-title text-center mb-5">
                <h3 className='animate__animated animate__backInDown'> LIFE AT ACCENTVISION</h3>
                <p className='text-lt wow animate__animated animate__backInUp'>
                  We make sure that your journey never comes to a halt. We empower you to bring out the best in yourself
                  by providing challenging and fruitful opportunities. Enterprise Analytic is the destination for talent
                  to find more ways to move forward in their career. We have something for almost everyone, and we are
                  constantly adding new positions for aspiring talent.
                </p>
              </div>
            </div>

          </div>
          <div className='col-md-12 wow animate__animated animate__fadeInRight'>
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a1.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a2.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a3.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a4.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a5.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a6.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a7.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a8.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
              <div className="item">
                <div className='life-card'>
                  <img src='/assets/images/career/a9.jpg' alt='img' className='img-fluid' width='100%'/>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>

    <div className='service-div bg-white text-primary-dark'>
      <div className='container'>
        <div className="col-md-12">
          <div className="div-title text-center mb-5">
            <span className="hl-color animate__animated animate__backInDown">To be the best, you need to prove yourself best.  </span>
            <h3 className='wow animate__animated animate__backInUp'> PROCESS OF INTERVIEW </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/career/i1.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3> HR Interview  </h3>
                <p>
                  First, our HR will connect with you in no time for an HR Interview round. Later on, our HR will schedule your interview with one of our experts at Enterprise Analytic for personal interview.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/career/i2.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3> Personal Interview  </h3>
                <p>
                  Our expert will measure your skills and knowledge in the current field. Your passion and interest in the work will be the main factor during the personal interview.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-4'>
            <div className='os-card wow animate__animated animate__zoomIn'>
              <div className='os-img'>
                <img src='/assets/images/career/i3.jpg' alt='img' className='img-fluid'/>
              </div>
              <div className='os-content'>
                <h3> Practical Round </h3>
                <p>
                  To measure your practical prowess, a practical round will be settled during the interview. Once the process is finished, HR will inform you about the results of the interview process.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>;
}
export default About;
