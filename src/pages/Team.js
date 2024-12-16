// src/pages/About.js
import React, {Fragment} from "react";

function Privacy() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Team</h1>
            <p>
              A blend of highly performing teams differentiates our company. Together, we innovate, deliver, and ensure exceptional results.
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='page-banner-img wow animate__animated animate__fadeInRight'>
            <img src='/assets/images/about/about-banner.jpg' alt='img' className='img-fluid' width='100%'/>
          </div>
        </div>
      </div>
    </div>

    <div className='team-div bg-white text-primary-dark overflow-hidden py-5'>
      <div className='container'>
        <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">
                Team
              </span>
          <h3 className="wow animate__animated animate__fadeInUp">
            Our Team
          </h3>
        </div>

        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='team-card card p-4 h-100 wow animate__animated animate__zoomIn'>
              <div className='team-head'>
                <h3>Michael Wise</h3>
                <small>Strategic Engagement Manger</small>
              </div>
              <div className='team-body'>
                <p>
                  Michael is a dynamic business development expert with expertise in creating both traditional and
                  alternative delivery models to drive growth and market expansion.<br/>
                  Adopts a hands-on approach, actively collaborating with managers and consultants to ensure consistent
                  execution of best practices and strategic initiatives.<br/>
                  Proven ability to manage projects within budget while consistently exceeding client expectations.
                  Core competencies include performance management, talent acquisition, vendor negotiations, pricing
                  strategies, technical documentation, P&L oversight, resource management, risk mitigation, quality
                  control, and developing innovative proposals for external partnerships.
                </p>
              </div>

            </div>

          </div>
          <div className='col-md-4 mb-4'>
            <div className='team-card card p-4 h-100 wow animate__animated animate__zoomIn'>
              <div className='team-head'>
                <h3>Rohit Singh</h3>
                <small>Chief Strategy Officer </small>
              </div>
              <div className='team-body'>
                <p>
                  Rohit has more than two decades of IT industry experience. He has provided leadership in the
                  management, and delivery of solutions, and services.<br/>
                  Rohit is responsible for leading the growth of the organization through revenue improvement with
                  existing customers, increased market penetration, and the development of new products and markets.
                  Rohit has had experience building companies from ground up, mergers and acquisition. He has been part
                  of team that successfully presented business cases and provided services to Fortune 500 companies and
                  government agencies. He is ultimately responsible for corporate profitability and establishing
                  policies, procedures and strategies consistent with the values and integrity of the organization.<br/>
                  Rohit holds a Bachelors of Economics (Honors) from Aligarh Muslim University, India, Masters of
                  Science in International Business Management from The Nottingham Trent University, U.K. and an MBA
                  from University of North Texas, USA
                </p>
              </div>

            </div>

          </div>
          <div className='col-md-4 mb-4'>
            <div className='team-card card p-4 h-100 wow animate__animated animate__zoomIn'>
              <div className='team-head'>
                <h3>Pinky Kumar</h3>
                <small>Chief Executive Officer</small>
              </div>
              <div className='team-body'>
                <p>
                  A seasoned entrepreneur with extensive expertise in running staffing, event management, and retail
                  businesses. Pinky leverages years of experience in corporate to deliver innovative solutions and
                  strategic insights. Known for her versatility and strategic approach, she has successfully partnered
                  with diverse businesses to drive growth and operational excellence. Gained in-depth experience in
                  corporate IT, implementing technology-driven solutions. She has a Bachelor of Engineering in Computer
                  Technology from Rajiv Gandhi College of Engineering, India.
                </p>
              </div>

            </div>

          </div>

          <div className='col-md-4 mb-4'>
            <div className='team-card card p-4 h-100 wow animate__animated animate__zoomIn'>
              <div className='team-head'>
                <h3>Pritam Kumar</h3>
                <small>President </small>
              </div>
              <div className='team-body'>
                <p>
                  Pritam is an accomplished professional with over 20 years of experience, dedicated to driving
                  technological innovation and business expansion across Fortune 10 companies. He is recognized for
                  breaking down complex challenges, implementing strategic enterprise roadmaps, and nurturing
                  collaborative work environments. Focused on reshaping industry practices with a customer-first,
                  results-oriented mindset, while motivating teams to achieve top performance.<br/>
                  Pritam holds a M.B.A. from Texas A&M University, and a Master of Science in Information Technology
                  from India.<br/>
                  Pritam holds multiple certifications including PMP, Black Belt, CSM, Solution Architect, MCP, etc.
                </p>
              </div>

            </div>

          </div>
          <div className='col-md-4 mb-4'>
            <div className='team-card card p-4 h-100 wow animate__animated animate__zoomIn'>
              <div className='team-head'>
                <h3>David Abraham </h3>
                <small>Chief Technology Officer </small>
              </div>
              <div className='team-body'>

              </div>

            </div>

          </div>
          <div className='col-md-4 mb-4'>
            <div className='team-card card p-4 h-100 wow animate__animated animate__zoomIn'>
              <div className='team-head'>
                <h3>Hardik Brahmbhatt </h3>
                <small>Head </small>
              </div>
              <div className='team-body'>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>;
}

export default Privacy;
