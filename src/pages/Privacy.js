// src/pages/About.js
import React, {Fragment} from "react";

function Privacy() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Privacy <span className='hl-color'>Policy</span> </h1>

          </div>
        </div>
        <div className='col-md-6'>
          <div className='page-banner-img wow animate__animated animate__fadeInRight'>
            <img src='/assets/images/about/about-banner.jpg' alt='img' className='img-fluid' width='100%'/>
          </div>
        </div>
      </div>
    </div>

    <div className='page-div bg-white text-primary-dark overflow-hidden py-5'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-12'>
            <div className='page-content-div'>
              <h1><b>Privacy Policy</b></h1>
              <hr/>
              <p>
                1. Information we collect<br/>
              </p>
              <ul className='ps-3 mb-4'>
                <li>
                  Personal Information: If you contact us or sign up, we may collect your name, email, or phone
                  number.

                </li>
                <li>
                  Non-Personal Information: We may gather data like IP addresses, browser type, and site usage for
                  analytics.
                </li>
              </ul>
              <p>
                2. How we use your information<br/>
                We use the information to:<br/>




              </p>
              <ul className='ps-3 mb-4'>
                <li>Respond to your inquiries.</li>
                <li>Improve our website and services.</li>
                <li>Send updates if you subscribe to our newsletter (optional).</li>
              </ul>


              <p>

                3. Sharing your information<br/>
                We do not sell, trade, or share your personal information with third parties, except when required by
                law.<br/>


              </p>
              <p>
                4. Cookies
                We use cookies to improve your experience. You can disable cookies in your browser settings.<br/>

              </p>
              <p>

                5. Data security
                We take reasonable steps to keep your information secure but cannot guarantee absolute security.<br/>

              </p>
              <p>

                6. Your rights<br/>
                You can:<br/>
                • Request to view, edit, or delete your personal information.<br/>
                • Opt out of newsletters or communications anytime.<br/>

              </p>
              <p>
                7. Updates to this policy<br/>
                We may update this policy occasionally. Please check back for changes.<br/>


              </p>
              <p>
                Contact us<br/>
                If you have questions about this policy, contact us at: <a href='mailto:info@accentvision.com'
                                                                           className='text-primary-dark text-decoration-underline'>info@accentvision.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>;
}

export default Privacy;
