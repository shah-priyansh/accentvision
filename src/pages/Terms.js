// src/pages/About.js
import React, {Fragment} from "react";

function Terms() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Terms  <span className='hl-color'>of Use</span> </h1>

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
              <h1><b>Terms of Use</b></h1>
              <hr/>
              <p>
                By accessing or using this website, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use the website.
              </p>
              <p>
                1. Use of Website<br/>
                You may browse, view, and use this website for personal or informational purposes only. You agree not to misuse the website, including attempting to hack, disrupt, or harm the site or its users.
              </p>
              <p>

                2. Intellectual Property<br/>
                All content, including text, images, logos, and designs, belongs to us unless otherwise stated. You may not copy, distribute, or use any content without our written permission.



              </p>
              <p>
                3. User Responsibilities<br/>
                You agree to use the website lawfully and not for any illegal activity. If you submit information (e.g., through forms), it must be accurate and truthful.


              </p>
              <p>
                4. Disclaimers<br/>
                This website is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or availability of the content. We are not liable for any damages or losses from using the website.


              </p>
              <p>
                5. External Links<br/>
                Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.


              </p>
              <p>
                6. Changes to Terms<br/>
                We may update these Terms of Use at any time. Continued use of the website means you accept the updated terms.

              </p>
              <p>
                7. Governing Law<br/>
                These Terms of Use are governed by the laws of Texas, United States.
              </p>

              <p>
                Contact us<br/>
                If you have any questions about these Terms, contact us at: <a href='mailto:info@accentvision.com'
                                                                               className='text-primary-dark text-decoration-underline'>info@accentvision.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>;
}

export default Terms;
