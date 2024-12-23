// src/pages/About.js
import React, {Fragment} from "react";

function AutomationAI() {
  return <div>
    <div className='page-banner-div overflow-hidden'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <div className='page-banner-content wow animate__animated animate__fadeInLeft'>
            <h1>Automation & AI</h1>
            <p>
              Streamline your business with intelligent chatbots and workflow automation, enhancing efficiency and
              delivering smarter customer interactions.

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

    <div className='about-us-div bg-white text-primary-dark overflow-hidden animation-div'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='about-left wow animate__animated animate__fadeInLeft'>
              <img src='/assets/images/automation-ai/img-lefy.png' alt='img' className='img-fluid rounded-4'
                   width='100%'/>
            </div>

          </div>
          <div className='col-lg-8'>
            <div className='about-right wow animate__animated animate__fadeInRight'>

              <div className="div-title mb-5">
                <h3> THE POWER OF AUTOMATION</h3>
              </div>
              <ul className='ps-3 mb-3'>
                <li className='h4'>Automation and Artificial Intelligence have become powerful tools that can transform
                  the way we approach various tasks and processes.
                </li>
                <li className='h4'>By automating repetitive or time-consuming activities, organizations can streamline
                  their operations, increase efficiency, and free up valuable human resources to focus on more strategic
                  and creative endeavors.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div className='contact-location bg-dark-primary text-primary-dark animation-div pt-5 pb-0 animation-div'>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-md-4 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img rounded-5 p-2 bg-white'>
                <img src='/assets/images/automation-ai/ai-icon1.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3 className='hl-color mt-4'>
                Chatbots: Seamless Customer Interactions

              </h3>
              <div className='contact-detail '>
                <p className='text-white'>
                  Conversational AI-powered chatbots that can handle a wide range of customer inquiries and provide
                  instant, personalized responses.

                </p>

              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img rounded-5 p-2 bg-white'>
                <img src='/assets/images/automation-ai/ai-icon2.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3 className='hl-color mt-4'>
                Workflow Automation: Streamlined Processes

              </h3>
              <div className='contact-detail '>
                <p className='text-white'>
                  Automate repetitive tasks and workflows, enabling businesses to increase efficiency, reduce errors,
                  and free up employees for more strategic work.

                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-4 wow animate__animated animate__fadeInUp'>
            <div className='contact-card'>
              <div className='location-img rounded-5 p-2 bg-white'>
                <img src='/assets/images/automation-ai/ai-icon3.png' alt='img' className='img-fluid' width='100'/>
              </div>
              <h3 className='hl-color mt-4'>
                Agent Creation: Intelligent Assistants
              </h3>
              <div className='contact-detail '>
                <p className='text-white'>
                  Develop AI-powered virtual agents that can take on specific tasks, such as scheduling, information
                  retrieval, or even sales and customer service.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="hl-bg py-3 text-center">
        <div className="container"><h3 className="text-white">By harnessing the power of automation and AI, businesses
          can unlock new levels of efficiency, customer satisfaction, and innovative capabilities, ultimately driving
          growth and success in the digital age.
        </h3></div>
      </div>

    </div>


  </div>;
}

export default AutomationAI;
