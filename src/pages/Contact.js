// src/pages/Contact.js
import React from "react";

function Contact() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1> Contact Us </h1>

          </div>
        </div>
        <div className='col-md-6'>
          <div className='page-banner-img wow animate__animated animate__fadeInRight'>
            <img src='/assets/images/about/about-banner.jpg' alt='img' className='img-fluid' width='100%'/>
          </div>
        </div>
      </div>
    </div>

    <div className='contact-location bg-white text-primary-dark'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12">
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">Way</span>
              <h3 className='wow animate__animated animate__fadeInUp'> Smarter Way Of Building Career In IT </h3>
            </div>
          </div>
          <div className='col-md-3 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img'>
                <img src='/assets/images/contact/united-states.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3>
                US (DALLAS)
              </h3>
              <div className='contact-detail'>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-291q98.62-83.08 149.31-160.54T680-596.69q0-89.23-56-146.27Q568-800 480-800t-144 57.04q-56 57.04-56 146.27 0 67.69 50.69 145.15Q381.38-374.08 480-291Zm0 76Q350.15-315.54 285.08-411.42 220-507.31 220-596.69q0-115.39 72.62-189.35Q365.23-860 480-860t187.38 73.96Q740-712.08 740-596.69q0 89.38-65.08 185.07Q609.85-315.92 480-215Zm0-312.69q29.92 0 51.11-21.2 21.2-21.19 21.2-51.11 0-29.92-21.2-51.11-21.19-21.2-51.11-21.2-29.92 0-51.11 21.2-21.2 21.19-21.2 51.11 0 29.92 21.2 51.11 21.19 21.2 51.11 21.2ZM220-100v-60h520v60H220Zm260-500Z"/>
                  </svg>
                  4400 State Hwy 121, Ste # 300<br/>
                  Lewisville, TX 75056
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M172.31-180Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h615.38Q818-780 839-759q21 21 21 51.31v455.38Q860-222 839-201q-21 21-51.31 21H172.31ZM480-457.69 160-662.31v410q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85v-410L480-457.69Zm0-62.31 313.85-200h-627.7L480-520ZM160-662.31V-720v467.69q0 5.39 3.46 8.85t8.85 3.46H160v-422.31Z"/>
                  </svg>
                  info@accentvision.com
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M292.31-60Q262-60 241-81q-21-21-21-51.31v-695.38Q220-858 241-879q21-21 51.31-21h375.38Q698-900 719-879q21 21 21 51.31v695.38Q740-102 719-81q-21 21-51.31 21H292.31ZM280-170v37.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-170H280Zm0-60h400v-500H280v500Zm0-560h400v-37.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H292.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-790Zm0 0v-50 50Zm0 620v50-50Z"/>
                  </svg>
                  +1 469 416 5333
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img'>
                <img src='/assets/images/contact/united-kingdom.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3>
                UK

              </h3>
              <div className='contact-detail'>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-291q98.62-83.08 149.31-160.54T680-596.69q0-89.23-56-146.27Q568-800 480-800t-144 57.04q-56 57.04-56 146.27 0 67.69 50.69 145.15Q381.38-374.08 480-291Zm0 76Q350.15-315.54 285.08-411.42 220-507.31 220-596.69q0-115.39 72.62-189.35Q365.23-860 480-860t187.38 73.96Q740-712.08 740-596.69q0 89.38-65.08 185.07Q609.85-315.92 480-215Zm0-312.69q29.92 0 51.11-21.2 21.2-21.19 21.2-51.11 0-29.92-21.2-51.11-21.19-21.2-51.11-21.2-29.92 0-51.11 21.2-21.2 21.19-21.2 51.11 0 29.92 21.2 51.11 21.19 21.2 51.11 21.2ZM220-100v-60h520v60H220Zm260-500Z"/>
                  </svg>
                  24A Woodlands, Harrow, <br/>Greater London, HA2 6EL
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M172.31-180Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h615.38Q818-780 839-759q21 21 21 51.31v455.38Q860-222 839-201q-21 21-51.31 21H172.31ZM480-457.69 160-662.31v410q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85v-410L480-457.69Zm0-62.31 313.85-200h-627.7L480-520ZM160-662.31V-720v467.69q0 5.39 3.46 8.85t8.85 3.46H160v-422.31Z"/>
                  </svg>
                  info@accentvision.com
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M292.31-60Q262-60 241-81q-21-21-21-51.31v-695.38Q220-858 241-879q21-21 51.31-21h375.38Q698-900 719-879q21 21 21 51.31v695.38Q740-102 719-81q-21 21-51.31 21H292.31ZM280-170v37.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-170H280Zm0-60h400v-500H280v500Zm0-560h400v-37.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H292.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-790Zm0 0v-50 50Zm0 620v50-50Z"/>
                  </svg>
                  + 44 7767 905590
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img'>
                <img src='/assets/images/contact/india.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3>
                INDIA
              </h3>


              <div className='contact-detail'>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-291q98.62-83.08 149.31-160.54T680-596.69q0-89.23-56-146.27Q568-800 480-800t-144 57.04q-56 57.04-56 146.27 0 67.69 50.69 145.15Q381.38-374.08 480-291Zm0 76Q350.15-315.54 285.08-411.42 220-507.31 220-596.69q0-115.39 72.62-189.35Q365.23-860 480-860t187.38 73.96Q740-712.08 740-596.69q0 89.38-65.08 185.07Q609.85-315.92 480-215Zm0-312.69q29.92 0 51.11-21.2 21.2-21.19 21.2-51.11 0-29.92-21.2-51.11-21.19-21.2-51.11-21.2-29.92 0-51.11 21.2-21.2 21.19-21.2 51.11 0 29.92 21.2 51.11 21.19 21.2 51.11 21.2ZM220-100v-60h520v60H220Zm260-500Z"/>
                  </svg>
                211, Maruti Titanium, S.P. Ring Road,   Nikol, Ahmedabad - 382350, Gujarat
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M172.31-180Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h615.38Q818-780 839-759q21 21 21 51.31v455.38Q860-222 839-201q-21 21-51.31 21H172.31ZM480-457.69 160-662.31v410q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85v-410L480-457.69Zm0-62.31 313.85-200h-627.7L480-520ZM160-662.31V-720v467.69q0 5.39 3.46 8.85t8.85 3.46H160v-422.31Z"/>
                  </svg>
                  info@accentvision.com
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M292.31-60Q262-60 241-81q-21-21-21-51.31v-695.38Q220-858 241-879q21-21 51.31-21h375.38Q698-900 719-879q21 21 21 51.31v695.38Q740-102 719-81q-21 21-51.31 21H292.31ZM280-170v37.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-170H280Zm0-60h400v-500H280v500Zm0-560h400v-37.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H292.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-790Zm0 0v-50 50Zm0 620v50-50Z"/>
                  </svg>
                  + 91 99099 49254
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img'>
                <img src='/assets/images/contact/united-states.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3>
                US (DENVER)
              </h3>
              <div className='contact-detail'>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M480-291q98.62-83.08 149.31-160.54T680-596.69q0-89.23-56-146.27Q568-800 480-800t-144 57.04q-56 57.04-56 146.27 0 67.69 50.69 145.15Q381.38-374.08 480-291Zm0 76Q350.15-315.54 285.08-411.42 220-507.31 220-596.69q0-115.39 72.62-189.35Q365.23-860 480-860t187.38 73.96Q740-712.08 740-596.69q0 89.38-65.08 185.07Q609.85-315.92 480-215Zm0-312.69q29.92 0 51.11-21.2 21.2-21.19 21.2-51.11 0-29.92-21.2-51.11-21.19-21.2-51.11-21.2-29.92 0-51.11 21.2-21.2 21.19-21.2 51.11 0 29.92 21.2 51.11 21.19 21.2 51.11 21.2ZM220-100v-60h520v60H220Zm260-500Z"/>
                  </svg>
                  110 16th Street, Suite 1400 <br/>Denver, CO 80202
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M172.31-180Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h615.38Q818-780 839-759q21 21 21 51.31v455.38Q860-222 839-201q-21 21-51.31 21H172.31ZM480-457.69 160-662.31v410q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85v-410L480-457.69Zm0-62.31 313.85-200h-627.7L480-520ZM160-662.31V-720v467.69q0 5.39 3.46 8.85t8.85 3.46H160v-422.31Z"/>
                  </svg>
                  info@accentvision.com
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#000000">
                    <path
                        d="M292.31-60Q262-60 241-81q-21-21-21-51.31v-695.38Q220-858 241-879q21-21 51.31-21h375.38Q698-900 719-879q21 21 21 51.31v695.38Q740-102 719-81q-21 21-51.31 21H292.31ZM280-170v37.69q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-170H280Zm0-60h400v-500H280v500Zm0-560h400v-37.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H292.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-790Zm0 0v-50 50Zm0 620v50-50Z"/>
                  </svg>
                  +1 469 416 5333
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='contact-form-div bg-dark-primary'>
      <div className='container'>
        <div className='contact-form'>
          <div className="div-title text-center mb-5">
            <span className="hl-color wow animate__animated animate__fadeInDown">Contact Us</span>
            <h3 className='wow animate__animated animate__fadeInUp'> Write Us a Message </h3>
          </div>
          <div className='row wow animate__animated animate__fadeInUp'>
            <div className='col-md-6'>
              <div className='contact-form-group'>
                <input className='form-control' placeholder='Your Name' type='text'/>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='contact-form-group'>
                <input className='form-control' placeholder='Email Address' type='email'/>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='contact-form-group'>
                <input className='form-control' placeholder='Phone Number' type='text'/>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='contact-form-group'>
                <input className='form-control' placeholder='Subject' type='text'/>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='contact-form-group'>
                <textarea rows='6' className='form-control' placeholder='Write Message'/>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='contact-form-btn-div'>
                <button className='btn btn-primary'>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>;
}

export default Contact;
