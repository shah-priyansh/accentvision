// src/pages/Home.js
import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";

const Home = () => {

  //Owl Carousel Settings
  const options1 = {
    loop: false,
    items: 3,
    stagePadding: 0,
    margin: 20,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3,
      }
    }
  };
  return (
    <div className="home-content">
      <div className="banner-div">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="banner-content wow animate__animated animate__fadeInLeft">
                <h1>
                  Enterprise
                  <span className="hl-color"> Mobile App </span>
                </h1>
              </div>
            </div>
            <div className="col-md-5">
              <div className="banner-img wow animate__animated animate__fadeInRight">
                <img
                  src="/assets/images/banner-img1.png"
                  alt="img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="we-are-div py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="div-title text-center mb-5">
                <span className="hl-color wow animate__animated animate__fadeInDown">Partner</span>
                <h3 className='wow animate__animated animate__fadeInUp'> We are Your Global Elite Partner </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wa-card active wow animate__animated animate__zoomInUp">
                <div className="we-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5077 14.1155L18.9807 11.1155L20.423 11.25L16.677 14.4787L17.7847 19.3655L16.5615 18.623L15.5077 14.1155ZM13.6 8.21925L12.627 5.923L13.1807 4.55775L14.7692 8.32875L13.6 8.21925ZM7.35 16.825L10.5 14.925L13.65 16.85L12.825 13.25L15.6 10.85L11.95 10.525L10.5 7.125L9.05 10.5L5.4 10.825L8.175 13.25L7.35 16.825ZM5.825 18.923L7.0655 13.6095L2.94225 10.0385L8.373 9.56725L10.5 4.55775L12.627 9.56725L18.0577 10.0385L13.9345 13.6095L15.175 18.923L10.5 16.102L5.825 18.923Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="we-content">
                  <h2>Quality & Experience</h2>
                  <p>
                    Our experts collaborates with you to understand your
                    challenges, and deliver top-quality solutions through
                    cutting-edge technology and unwavering commitment.
                  </p>
                </div>
              </div>
              <div className="wa-card wow animate__animated animate__zoomInUp">
                <div className="we-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 15.5V14.5H10.5V15.5H3.5ZM3.5 11.5V10.5H14.5V11.5H3.5ZM3.5 7.5V6.5H14.5V7.5H3.5ZM16.35 18.3078L13.4923 15.45L14.2 14.7423L16.35 16.8808L20.6 12.6308L21.3078 13.35L16.35 18.3078Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="we-content">
                  <h2>Professionalism & Commitment </h2>
                  <p>
                    We are unwaveringly committed to meeting your business needs
                    with the utmost integrity, unparalleled efficiency, and
                    professionalism that sets a global standard.
                  </p>
                </div>
              </div>
              <div className="wa-card wow animate__animated animate__zoomInUp">
                <div className="we-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7692 20V19H18.3845C18.5512 19 18.6954 18.9487 18.8173 18.8462C18.9391 18.7436 19 18.6089 19 18.4423V11.5537C19 9.68075 18.3112 8.11633 16.9337 6.8605C15.5561 5.60483 13.9115 4.977 12 4.977C10.0885 4.977 8.44392 5.60483 7.06625 6.8605C5.68875 8.11633 5 9.68075 5 11.5537V17.2307H4.5C4.091 17.2307 3.73875 17.0926 3.44325 16.8163C3.14775 16.5401 3 16.1975 3 15.7885V13.9037C3 13.6051 3.09708 13.3401 3.29125 13.1088C3.48558 12.8773 3.72183 12.6891 4 12.5442L4.01725 11.3155C4.04808 10.2718 4.28433 9.30517 4.726 8.4155C5.16767 7.52567 5.74908 6.75125 6.47025 6.09225C7.19142 5.43325 8.02925 4.91983 8.98375 4.552C9.93825 4.184 10.9437 4 12 4C13.0563 4 14.0608 4.184 15.0135 4.552C15.966 4.91983 16.8038 5.43233 17.527 6.0895C18.25 6.7465 18.8314 7.51983 19.2712 8.4095C19.7109 9.29933 19.9481 10.266 19.9828 11.3095L20 12.5135C20.2653 12.6378 20.4983 12.8052 20.699 13.0155C20.8997 13.2257 21 13.4782 21 13.773V15.9385C21 16.2333 20.8997 16.4859 20.699 16.6963C20.4983 16.9064 20.2653 17.0737 20 17.198V18.4423C20 18.8769 19.8427 19.2452 19.528 19.547C19.2132 19.849 18.832 20 18.3845 20H11.7692ZM9.3845 13.5385C9.17817 13.5385 8.99842 13.4683 8.84525 13.328C8.69208 13.1875 8.6155 13.0141 8.6155 12.8078C8.6155 12.6013 8.69208 12.4247 8.84525 12.278C8.99842 12.1312 9.17817 12.0578 9.3845 12.0578C9.591 12.0578 9.77083 12.1312 9.924 12.278C10.0772 12.4247 10.1537 12.6013 10.1537 12.8078C10.1537 13.0141 10.0772 13.1875 9.924 13.328C9.77083 13.4683 9.591 13.5385 9.3845 13.5385ZM14.6155 13.5385C14.409 13.5385 14.2292 13.4683 14.076 13.328C13.9228 13.1875 13.8462 13.0141 13.8462 12.8078C13.8462 12.6013 13.9228 12.4247 14.076 12.278C14.2292 12.1312 14.409 12.0578 14.6155 12.0578C14.8218 12.0578 15.0016 12.1312 15.1548 12.278C15.3079 12.4247 15.3845 12.6013 15.3845 12.8078C15.3845 13.0141 15.3079 13.1875 15.1548 13.328C15.0016 13.4683 14.8218 13.5385 14.6155 13.5385ZM6.71725 11.95C6.62625 10.4525 7.10833 9.17625 8.1635 8.12125C9.21867 7.06608 10.5142 6.5385 12.05 6.5385C13.341 6.5385 14.4849 6.926 15.4818 7.701C16.4786 8.476 17.0873 9.49425 17.3078 10.7557C15.9834 10.7391 14.7543 10.4013 13.6203 9.74225C12.4863 9.08325 11.616 8.16658 11.0095 6.99225C10.7685 8.14608 10.2669 9.15733 9.50475 10.026C8.74258 10.8945 7.81342 11.5358 6.71725 11.95Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="we-content">
                  <h2>Service & Support </h2>
                  <p>
                    We consistently earn accolades for our extraordinary
                    services and unparalleled after-sales support, a testament
                    to our unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video w-embed wow animate__animated animate__fadeInRight">
                <video width="100%" autoPlay="" loop="" muted="" playsInline="">
                  <source
                    src="https://player.vimeo.com/progressive_redirect/playback/856965749/rendition/720p/file.mp4?loc=external&amp;signature=7910641d0578740e4b63b29071476babf145ae25232830cbdf3bf1693fd556b1"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-div">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="div-title text-center mb-5 pb-3">
                <span className="hl-color wow animate__animated animate__fadeInDown">Services</span>
                <h3 className='wow animate__animated animate__fadeInUp'>Solutions for your business needs</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.30775 20.5C3.80258 20.5 3.375 20.325 3.025 19.975C2.675 19.625 2.5 19.1974 2.5 18.6923V8.30775C2.5 7.80258 2.675 7.375 3.025 7.025C3.375 6.675 3.80258 6.5 4.30775 6.5H8.5V4.80775C8.5 4.30258 8.675 3.875 9.025 3.525C9.375 3.175 9.80258 3 10.3078 3H13.6923C14.1974 3 14.625 3.175 14.975 3.525C15.325 3.875 15.5 4.30258 15.5 4.80775V6.5H19.6923C20.1974 6.5 20.625 6.675 20.975 7.025C21.325 7.375 21.5 7.80258 21.5 8.30775V18.6923C21.5 19.1974 21.325 19.625 20.975 19.975C20.625 20.325 20.1974 20.5 19.6923 20.5H4.30775ZM4.30775 19H19.6923C19.7693 19 19.8398 18.9679 19.9038 18.9038C19.9679 18.8398 20 18.7693 20 18.6923V8.30775C20 8.23075 19.9679 8.16025 19.9038 8.09625C19.8398 8.03208 19.7693 8 19.6923 8H4.30775C4.23075 8 4.16025 8.03208 4.09625 8.09625C4.03208 8.16025 4 8.23075 4 8.30775V18.6923C4 18.7693 4.03208 18.8398 4.09625 18.9038C4.16025 18.9679 4.23075 19 4.30775 19ZM10 6.5H14V4.80775C14 4.73075 13.9679 4.66025 13.9038 4.59625C13.8398 4.53208 13.7693 4.5 13.6923 4.5H10.3078C10.2308 4.5 10.1603 4.53208 10.0963 4.59625C10.0321 4.66025 10 4.73075 10 4.80775V6.5Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>Global Staffing</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.5C10.6872 21.5 9.45292 21.2503 8.29725 20.751C7.14142 20.2517 6.13592 19.5744 5.28075 18.7193C4.42558 17.8641 3.74833 16.8586 3.249 15.7027C2.74967 14.5471 2.5 13.3128 2.5 12C2.5 10.2475 2.94292 8.62633 3.82875 7.1365C4.71475 5.64683 5.92758 4.48658 7.46725 3.65575C7.49042 3.89558 7.52058 4.13792 7.55775 4.38275C7.59492 4.62758 7.65575 4.909 7.74025 5.227C6.57242 5.96667 5.65708 6.93267 4.99425 8.125C4.33142 9.31733 4 10.609 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 10.609 19.667 9.31317 19.001 8.1125C18.335 6.91183 17.4097 5.94167 16.225 5.202C16.3097 4.8905 16.3722 4.61392 16.4125 4.37225C16.4528 4.13058 16.4897 3.89175 16.523 3.65575C18.0628 4.48658 19.2773 5.64433 20.1663 7.129C21.0554 8.6135 21.5 10.2372 21.5 12C21.5 13.3128 21.2503 14.5471 20.751 15.7027C20.2517 16.8586 19.5744 17.8641 18.7193 18.7193C17.8641 19.5744 16.8586 20.2517 15.7027 20.751C14.5471 21.2503 13.3128 21.5 12 21.5ZM12 17.5C10.4743 17.5 9.17625 16.9648 8.10575 15.8943C7.03525 14.8238 6.5 13.5257 6.5 12C6.5 11.168 6.67408 10.3831 7.02225 9.64525C7.37025 8.90742 7.86542 8.28083 8.50775 7.7655C8.57825 7.9705 8.65225 8.1955 8.72975 8.4405C8.80742 8.68533 8.90708 8.98208 9.02875 9.33075C8.69425 9.70125 8.43917 10.1134 8.2635 10.5673C8.08783 11.0211 8 11.4987 8 12C8 13.1 8.39167 14.0417 9.175 14.825C9.95833 15.6083 10.9 16 12 16C13.1 16 14.0417 15.6083 14.825 14.825C15.6083 14.0417 16 13.1 16 12C16 11.4923 15.9106 11.0148 15.7318 10.5673C15.5529 10.1199 15.2962 9.70775 14.9615 9.33075C15.0563 9.05258 15.1275 8.84042 15.175 8.69425C15.2225 8.54808 15.3199 8.23525 15.4673 7.75575C16.1159 8.27125 16.6169 8.8995 16.9703 9.6405C17.3234 10.3815 17.5 11.168 17.5 12C17.5 13.5257 16.9648 14.8238 15.8943 15.8943C14.8238 16.9648 13.5257 17.5 12 17.5ZM11.1923 8.25C10.5756 6.38967 10.1811 5.11725 10.0088 4.43275C9.83625 3.74808 9.75 3.10383 9.75 2.5C9.75 1.8705 9.96767 1.33817 10.403 0.903C10.8382 0.467667 11.3705 0.25 12 0.25C12.6295 0.25 13.1618 0.467667 13.597 0.903C14.0323 1.33817 14.25 1.8705 14.25 2.5C14.25 3.10383 14.1638 3.74808 13.9913 4.43275C13.8189 5.11725 13.4244 6.38967 12.8078 8.25H11.1923ZM12 13.75C11.5142 13.75 11.101 13.5798 10.7605 13.2395C10.4202 12.899 10.25 12.4858 10.25 12C10.25 11.5142 10.4202 11.101 10.7605 10.7605C11.101 10.4202 11.5142 10.25 12 10.25C12.4858 10.25 12.899 10.4202 13.2395 10.7605C13.5798 11.101 13.75 11.5142 13.75 12C13.75 12.4858 13.5798 12.899 13.2395 13.2395C12.899 13.5798 12.4858 13.75 12 13.75Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>Salesforce</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 20.5C9.57317 20.5 7.54975 20.1573 5.92975 19.472C4.30992 18.7868 3.5 17.9308 3.5 16.9038V7C3.5 6.03467 4.3295 5.21 5.9885 4.526C7.6475 3.842 9.65133 3.5 12 3.5C14.3487 3.5 16.3525 3.842 18.0115 4.526C19.6705 5.21 20.5 6.03467 20.5 7V16.9038C20.5 17.9308 19.6901 18.7868 18.0703 19.472C16.4503 20.1573 14.4268 20.5 12 20.5ZM12 8.95775C13.4577 8.95775 14.9253 8.75167 16.403 8.3395C17.8805 7.92733 18.7366 7.48275 18.9712 7.00575C18.7429 6.51608 17.8958 6.05933 16.4298 5.6355C14.9638 5.21183 13.4872 5 12 5C10.5153 5 9.04383 5.20608 7.5855 5.61825C6.12717 6.03042 5.2685 6.48008 5.0095 6.96725C5.26217 7.46725 6.11442 7.924 7.56625 8.3375C9.01825 8.751 10.4962 8.95775 12 8.95775ZM12 13.9615C12.6937 13.9615 13.3687 13.9282 14.025 13.8615C14.6813 13.7948 15.3086 13.6974 15.9068 13.5692C16.5048 13.4411 17.0647 13.2821 17.5865 13.0923C18.1083 12.9026 18.5795 12.6878 19 12.448V8.9C18.5795 9.13967 18.1083 9.35442 17.5865 9.54425C17.0647 9.73392 16.5048 9.89283 15.9068 10.021C15.3086 10.1493 14.6813 10.2468 14.025 10.3135C13.3687 10.3802 12.6937 10.4135 12 10.4135C11.2937 10.4135 10.6055 10.3785 9.9355 10.3085C9.26567 10.2387 8.63333 10.1397 8.0385 10.0115C7.44367 9.88333 6.8895 9.726 6.376 9.5395C5.8625 9.35283 5.40383 9.13967 5 8.9V12.448C5.40383 12.6878 5.8625 12.901 6.376 13.0875C6.8895 13.274 7.44367 13.4313 8.0385 13.5595C8.63333 13.6878 9.26567 13.7869 9.9355 13.8567C10.6055 13.9266 11.2937 13.9615 12 13.9615ZM12 19C12.8115 19 13.6083 18.9465 14.3905 18.8395C15.1725 18.7323 15.884 18.5862 16.525 18.401C17.166 18.2157 17.7067 18.0006 18.147 17.7557C18.5875 17.5109 18.8718 17.2538 19 16.9845V13.948C18.5795 14.1878 18.1083 14.4026 17.5865 14.5923C17.0647 14.7821 16.5048 14.9411 15.9068 15.0692C15.3086 15.1974 14.6813 15.2948 14.025 15.3615C13.3687 15.4282 12.6937 15.4615 12 15.4615C11.2937 15.4615 10.6055 15.4266 9.9355 15.3567C9.26567 15.2869 8.63333 15.1878 8.0385 15.0595C7.44367 14.9313 6.8895 14.774 6.376 14.5875C5.8625 14.401 5.40383 14.1878 5 13.948V17C5.12817 17.2757 5.40992 17.5317 5.84525 17.7682C6.28042 18.0047 6.8185 18.2157 7.4595 18.401C8.10067 18.5862 8.81483 18.7323 9.602 18.8395C10.3892 18.9465 11.1885 19 12 19Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>Data Solutions</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13.6923L1.50975 8.09625L12 2.5L22.5 8.09625L12 13.6923ZM12 17.596L2.08475 12.3155L3.65575 11.4537L12 15.8885L20.3538 11.4537L21.925 12.3155L12 17.596ZM12 21.5L2.08475 16.2193L3.65575 15.3578L12 19.7923L20.3538 15.3578L21.925 16.2193L12 21.5ZM12 11.9848L19.373 8.09625L12 4.20775L4.6365 8.09625L12 11.9848Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>Productization</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.69225 21.5L9.3115 18.4538C9.04367 18.3641 8.769 18.2385 8.4875 18.077C8.20617 17.9153 7.95459 17.7423 7.73275 17.5578L4.9115 18.75L2.604 14.75L5.04425 12.9058C5.02125 12.7571 5.00492 12.6078 4.99525 12.4578C4.98559 12.3078 4.98075 12.1583 4.98075 12.0095C4.98075 11.8673 4.98559 11.7228 4.99525 11.576C5.00492 11.4292 5.02125 11.2686 5.04425 11.0943L2.604 9.25L4.9115 5.26925L7.723 6.452C7.96417 6.261 8.22159 6.08633 8.49525 5.928C8.76892 5.76967 9.03784 5.64242 9.302 5.54625L9.69225 2.5H14.3078L14.6885 5.55575C14.9885 5.66475 15.2599 5.792 15.5028 5.9375C15.7458 6.083 15.991 6.2545 16.2385 6.452L19.0885 5.26925L21.396 9.25L18.9173 11.123C18.9531 11.2845 18.9727 11.4355 18.976 11.576C18.9792 11.7163 18.9808 11.8577 18.9808 12C18.9808 12.1358 18.9775 12.274 18.971 12.4145C18.9647 12.5548 18.9417 12.7154 18.902 12.8963L21.3615 14.75L19.0538 18.75L16.2385 17.548C15.991 17.7455 15.7384 17.9202 15.4808 18.072C15.2231 18.224 14.959 18.3481 14.6885 18.4443L14.3078 21.5H9.69225ZM11 20H12.9655L13.325 17.3212C13.8353 17.1879 14.3017 16.9985 14.724 16.753C15.1465 16.5073 15.5539 16.1916 15.9463 15.8057L18.4308 16.85L19.4155 15.15L17.2463 13.5155C17.3296 13.2565 17.3863 13.0026 17.4163 12.7538C17.4464 12.5051 17.4615 12.2538 17.4615 12C17.4615 11.7397 17.4464 11.4884 17.4163 11.2463C17.3863 11.0039 17.3296 10.7564 17.2463 10.5038L19.4345 8.85L18.45 7.15L15.9365 8.2095C15.6018 7.85183 15.2009 7.53583 14.7338 7.2615C14.2664 6.98717 13.7937 6.79292 13.3155 6.67875L13 4H11.0155L10.6845 6.66925C10.1743 6.78975 9.70325 6.97433 9.27125 7.223C8.83909 7.47183 8.42684 7.79233 8.0345 8.1845L5.55 7.15L4.5655 8.85L6.725 10.4595C6.64167 10.6968 6.58334 10.9437 6.55 11.2C6.51667 11.4563 6.5 11.7262 6.5 12.0095C6.5 12.2698 6.51667 12.525 6.55 12.775C6.58334 13.025 6.6385 13.2718 6.7155 13.5155L4.5655 15.15L5.55 16.85L8.025 15.8C8.4045 16.1897 8.81025 16.5089 9.24225 16.7578C9.67442 17.0064 10.152 17.1974 10.675 17.3307L11 20ZM12.0115 15C12.8435 15 13.5515 14.708 14.1355 14.124C14.7195 13.54 15.0115 12.832 15.0115 12C15.0115 11.168 14.7195 10.46 14.1355 9.876C13.5515 9.292 12.8435 9 12.0115 9C11.1692 9 10.4586 9.292 9.87975 9.876C9.30092 10.46 9.0115 11.168 9.0115 12C9.0115 12.832 9.30092 13.54 9.87975 14.124C10.4586 14.708 11.1692 15 12.0115 15Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>Automation</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.30775 22.5C6.80258 22.5 6.375 22.325 6.025 21.975C5.675 21.625 5.5 21.1974 5.5 20.6923V3.30775C5.5 2.80258 5.675 2.375 6.025 2.025C6.375 1.675 6.80258 1.5 7.30775 1.5H16.6923C17.1974 1.5 17.625 1.675 17.975 2.025C18.325 2.375 18.5 2.80258 18.5 3.30775V20.6923C18.5 21.1974 18.325 21.625 17.975 21.975C17.625 22.325 17.1974 22.5 16.6923 22.5H7.30775ZM7 17.7693V20.6923C7 20.7693 7.03208 20.8398 7.09625 20.9038C7.16025 20.9679 7.23075 21 7.30775 21H16.6923C16.7693 21 16.8398 20.9679 16.9038 20.9038C16.9679 20.8398 17 20.7693 17 20.6923V17.7693H7ZM12 20.2693C12.2448 20.2693 12.4535 20.183 12.626 20.0105C12.7983 19.8382 12.8845 19.6295 12.8845 19.3845C12.8845 19.1397 12.7983 18.9311 12.626 18.7587C12.4535 18.5862 12.2448 18.5 12 18.5C11.7552 18.5 11.5465 18.5862 11.374 18.7587C11.2017 18.9311 11.1155 19.1397 11.1155 19.3845C11.1155 19.6295 11.2017 19.8382 11.374 20.0105C11.5465 20.183 11.7552 20.2693 12 20.2693ZM7 16.2693H17V5.75H7V16.2693ZM7 4.25H17V3.30775C17 3.23075 16.9679 3.16025 16.9038 3.09625C16.8398 3.03208 16.7693 3 16.6923 3H7.30775C7.23075 3 7.16025 3.03208 7.09625 3.09625C7.03208 3.16025 7 3.23075 7 3.30775V4.25Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>Enterprise Mobile Apps</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 19.5C5.118 19.5 3.93917 19.0206 2.9635 18.0617C1.98783 17.1029 1.5 15.9311 1.5 14.5463C1.5 13.3039 1.89967 12.2113 2.699 11.2683C3.49833 10.3253 4.48967 9.76658 5.673 9.59225C5.9935 8.09742 6.74517 6.875 7.928 5.925C9.11067 4.975 10.468 4.5 12 4.5C13.8107 4.5 15.3467 5.13067 16.608 6.392C17.8693 7.65333 18.5 9.18933 18.5 11V11.5H18.8078C19.8616 11.582 20.7404 12.0058 21.4443 12.7713C22.1481 13.5366 22.5 14.4462 22.5 15.5C22.5 16.6153 22.1154 17.5608 21.3462 18.3365C20.5769 19.1122 19.6346 19.5 18.5193 19.5H13.0578C12.5526 19.5 12.125 19.325 11.775 18.975C11.425 18.625 11.25 18.1974 11.25 17.6923V12.2152L9.4 14.0345L8.34625 12.9905L12 9.3365L15.6538 12.9905L14.6 14.0345L12.75 12.2152V17.6923C12.75 17.7693 12.7821 17.8398 12.8462 17.9038C12.9102 17.9679 12.9808 18 13.0578 18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5125 8.4375 15.5375 7.4625C14.5625 6.4875 13.3833 6 12 6C10.6167 6 9.4375 6.4875 8.4625 7.4625C7.4875 8.4375 7 9.61667 7 11H6.48075C5.53325 11 4.71625 11.3417 4.02975 12.025C3.34325 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18H9V19.5H6.5Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>Cloud Services</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.75 14.596H8.94225V11.0962H7.75V12.25H6.25V13.4422H7.75V14.596ZM9.94225 13.4422H17.75V12.25H9.94225V13.4422ZM15.0578 10.9038H16.25V9.75H17.75V8.55775H16.25V7.404H15.0578V10.9038ZM6.25 9.75H14.0578V8.55775H6.25V9.75ZM8.5 20.5V18.5H4.30775C3.80258 18.5 3.375 18.325 3.025 17.975C2.675 17.625 2.5 17.1974 2.5 16.6923V5.30775C2.5 4.80258 2.675 4.375 3.025 4.025C3.375 3.675 3.80258 3.5 4.30775 3.5H19.6923C20.1974 3.5 20.625 3.675 20.975 4.025C21.325 4.375 21.5 4.80258 21.5 5.30775V16.6923C21.5 17.1974 21.325 17.625 20.975 17.975C20.625 18.325 20.1974 18.5 19.6923 18.5H15.5V20.5H8.5ZM4.30775 17H19.6923C19.7693 17 19.8398 16.9679 19.9038 16.9038C19.9679 16.8398 20 16.7693 20 16.6923V5.30775C20 5.23075 19.9679 5.16025 19.9038 5.09625C19.8398 5.03208 19.7693 5 19.6923 5H4.30775C4.23075 5 4.16025 5.03208 4.09625 5.09625C4.03208 5.16025 4 5.23075 4 5.30775V16.6923C4 16.7693 4.03208 16.8398 4.09625 16.9038C4.16025 16.9679 4.23075 17 4.30775 17Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h4>ERP</h4>
                <p className="text-lt">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-div">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">Clients</span>
              <h3 className='wow animate__animated animate__fadeInUp'>Testimonials</h3>
            </div>
            <div className="col-md-12">
              <OwlCarousel className="owl-theme" {...options1}>
                <div className="item">
                  <div className="testimonial-card h-100">
                    <div className="tsm-img mx-auto">
                      <img
                          src="/assets/images/user.jpg"
                          alt="img"
                          className="img-fluid"
                      />
                    </div>
                    <div className="tsm-content">
                      <h4 className="mb-3">Gaurang Prajapati</h4>
                      <p className="text-lt">
                        Working with Accentvision Technology has been a
                        game-changer for our business. We can focus on what we
                        do best, knowing that our IT needs are in capable hands.
                        Thank you to the entire team for your exceptional
                        service and support!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-card h-100">
                    <div className="tsm-img mx-auto">
                      <img
                          src="/assets/images/user.jpg"
                          alt="img"
                          className="img-fluid"
                      />
                    </div>
                    <div className="tsm-content">
                      <h4 className="mb-3">Anurag Nayar</h4>
                      <p className="text-lt">
                        Accentvision Technology assessed our business needs and
                        goals, and provided us with customized solutions that
                        have made a significant impact on our operations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-card h-100">
                    <div className="tsm-img mx-auto">
                      <img
                          src="/assets/images/user.jpg"
                          alt="img"
                          className="img-fluid"
                      />
                    </div>
                    <div className="tsm-content">
                      <h4 className="mb-3">Robert Norton</h4>
                      <p className="text-lt">
                        Accentvision Technology is an efficient and professional
                        company. Working with them has been a positive
                        experience. They were always able to turn around our
                        requirements in an appropriate amount of time.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
