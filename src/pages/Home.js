// src/pages/Home.js
import React from "react";
import OwlCarousel from "react-owl-carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../animation.css";
import Marquee from "react-fast-marquee";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

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
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const images = [
    "/assets/images/clients/client1.jpg",
    "/assets/images/clients/client2.jpeg",
    "/assets/images/clients/client5.jpg",
    "/assets/images/clients/client6.png",
    "/assets/images/clients/client7.jpg",
    "/assets/images/clients/client8.png",
    "/assets/images/clients/client9.jpg",
    "/assets/images/clients/client12.jpg",
    "/assets/images/clients/client13.png",
    "/assets/images/clients/client17.png",
    "/assets/images/clients/client18.png",
    "/assets/images/clients/client19.jpg",
    "/assets/images/clients/client20.png",
    "/assets/images/clients/client21.png",
    "/assets/images/clients/client22.webp",
    "/assets/images/clients/client23.png",
    "/assets/images/clients/client24.png",
    "/assets/images/clients/client25.jpeg",
    "/assets/images/clients/client26.jpeg",
    "/assets/images/clients/client27.jpg",
    "/assets/images/clients/client28.png",
    "/assets/images/clients/client29.png",
    "/assets/images/clients/client30.jpeg",
    "/assets/images/clients/client31.png",
    "/assets/images/clients/client32.webp",
    "/assets/images/clients/client33.jpg",
  ];
  const chunkSize = Math.ceil(images.length / 3); // 3 rows
  const rows = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    rows.push(images.slice(i, i + chunkSize));
  }
  return (
    <div className="home-content scroll-container">
      <div className="banner-div animation-div">
        {/*<div className="container-fluid">
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
        </div>*/}

        <video muted autoPlay={"autoplay"} preLoad="auto" loop>
          <source src="/assets/images/home-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="we-are-div bg-white text-primary-dark animation-div py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="div-title text-center mb-5">
                <span className="hl-color wow animate__animated animate__fadeInDown">
                  Partner
                </span>
                <h3 className="wow animate__animated animate__fadeInUp text-capitalize">
                  We are your trusted global partner.
                </h3>
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

      <div className="services-div animation-div">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="div-title text-center mb-4 pb-2">
                <span className="hl-color wow animate__animated animate__fadeInDown">
                  Services
                </span>
                <h3 className="wow animate__animated animate__fadeInUp text-white">
                  Solutions for your business needs
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M207.54-287.54q-56.23-58.08-84.19-128T95.39-560q0-74.54 27.96-144.46t84.19-128l37.23 37.23Q196-746.08 172-684.54 148-623 148-560q0 63 24 124.54 24 61.54 72.77 110.69l-37.23 37.23ZM302-382q-36.69-37.46-55.65-83.77-18.96-46.31-18.96-94.23t18.96-94.23Q265.31-700.54 302-738l37.23 37.23q-29.61 27.77-44.42 64.96Q280-598.62 280-560q0 36.77 14.62 73.77 14.61 37 44.61 67L302-382Zm-.46 268.92 125.77-377.31q-16.77-12.07-26.27-30.49-9.5-18.43-9.5-39.12 0-37 25.73-62.73Q443-648.46 480-648.46t62.73 25.73Q568.46-597 568.46-560q0 20.69-9.11 38.73-9.12 18.04-26.66 30.88l125.77 377.31h-60.77l-26-80H388.92l-26.23 80h-61.15Zm107.23-140h142.46L480-466.93l-71.23 213.85ZM658-382l-37.23-37.23q29.61-27.77 44.42-64.96Q680-521.38 680-560q0-35.62-14.81-73t-44.42-67.77L658-738q36.69 37.46 54.73 84.15 18.04 46.7 19.88 94.23 0 47.93-18.76 94.04Q695.08-419.46 658-382Zm94.46 94.46-37.23-37.23Q764-373.92 788-435.46 812-497 812-560q0-63-24-124.54-24-61.54-72.77-110.69l37.23-37.23q55.85 58.08 84 128T864.61-560q0 74.54-26.84 144.46-26.85 69.92-85.31 128Z" />
                  </svg>
                </div>
                <h4 className="text-white">Offshore Staffing</h4>
                <p className="text-lt">
                  Your gateway to global talent with cost efficiency, trust, and
                  round-the-clock support.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M100-100v-447.54l240-102.07v79.23l200-80V-540h320v440H100Zm60-60h640v-320H480v-82l-200 80v-78l-120 53v347Zm284.62-89.23h70.76v-141.54h-70.76v141.54Zm-160 0h70.76v-141.54h-70.76v141.54Zm320 0h70.76v-141.54h-70.76v141.54ZM860-540H697.69l40-304.61h84.62L860-540ZM160-160h640-640Z" />
                  </svg>
                </div>
                <h4 className="text-white">Onsite Staffing</h4>
                <p className="text-lt">
                  Local Talent with seamless collaboration, strong teamwork, and
                  100% reliability.
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
                <h4 className="text-white">Software & Mobile Apps</h4>
                <p className="text-lt">
                  Innovative solutions, exceptional user experiences, and
                  incredible teamwork.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M684.62-604.62h70.76v-70.76h-70.76v70.76Zm0 160h70.76v-70.76h-70.76v70.76Zm0 160h70.76v-70.76h-70.76v70.76ZM660-140v-60h180v-560H467.69v71.77l-60-43.38V-820H900v680H660Zm-600 0v-370l260-185.38L580-510v370H365.39v-190h-90.78v190H60Zm60-60h94.62v-190h210.76v190H520v-280L320-621.23 120-480v280Zm540-350ZM425.38-200v-190H214.62v190-190h210.76v190Z" />
                  </svg>
                </div>
                <h4 className="text-white">Infrastructure Services</h4>
                <p className="text-lt">
                  Robust solutions, scalable architecture, and reliable support
                  for your business growth.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M438-351.85 650.15-564l-42.77-42.77L438-437.38l-84.77-84.77-42.77 42.77L438-351.85Zm42 251.08q-129.77-35.39-214.88-152.77Q180-370.92 180-516v-230.15l300-112.31 300 112.31V-516q0 145.08-85.12 262.46Q609.77-136.16 480-100.77Zm0-63.23q104-33 172-132t68-220v-189l-240-89.62L240-705v189q0 121 68 220t172 132Zm0-315.62Z" />
                  </svg>
                </div>
                <h4 className="text-white">Cybersecurity</h4>
                <p className="text-lt">
                  Comprehensive protection, proactive monitoring, and resilient
                  solutions for your organization.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M180-140v-180.85q0-29.84 21.24-51.03 21.24-21.2 51.07-21.2h455.38q29.83 0 51.07 21.24Q780-350.6 780-320.77V-140H180Zm185.77-308.46q-77.09 0-131.43-54.34T180-634.23q0-77.09 54.34-131.43T365.77-820h228.46q77.09 0 131.43 54.34T780-634.23q0 77.09-54.34 131.43t-131.43 54.34H365.77ZM240-200h480v-120.77q0-5.38-3.46-8.85-3.46-3.46-8.85-3.46H252.31q-5.39 0-8.85 3.46-3.46 3.47-3.46 8.85V-200Zm125.77-308.46h228.46q52.69 0 89.23-36.54Q720-581.54 720-634.23q0-52.69-36.54-89.23Q646.92-760 594.23-760H365.77q-52.69 0-89.23 36.54Q240-686.92 240-634.23q0 52.69 36.54 89.23 36.54 36.54 89.23 36.54Zm-.01-91.16q14.7 0 24.66-9.94 9.96-9.95 9.96-24.66 0-14.7-9.94-24.66-9.95-9.97-24.66-9.97-14.7 0-24.66 9.95-9.97 9.95-9.97 24.66 0 14.7 9.95 24.66t24.66 9.96Zm228.46 0q14.7 0 24.66-9.94 9.97-9.95 9.97-24.66 0-14.7-9.95-24.66-9.95-9.97-24.66-9.97-14.7 0-24.66 9.95t-9.96 24.66q0 14.7 9.94 24.66 9.95 9.96 24.66 9.96ZM480-200Zm0-434.23Z" />
                  </svg>
                </div>
                <h4 className="text-white">Artificial Intelligence </h4>
                <p className="text-lt">
                  Intelligent solutions, Data-driven insights, and
                  transformative Innovation for your business.
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
                <h4 className="text-white">Data Analytics</h4>
                <p className="text-lt">
                  Actionable insights, informed decisions, and strategic growth
                  powered by your data.
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
                <h4 className="text-white">Cloud Services</h4>
                <p className="text-lt">
                  Scalable solutions, Seamless integration, and enhanced
                  flexibility for your business needs.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-card wow animate__animated animate__fadeInUp">
                <div className="sc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M207.54-287.54q-56.23-58.08-84.19-128T95.39-560q0-74.54 27.96-144.46t84.19-128l37.23 37.23Q196-746.08 172-684.54 148-623 148-560q0 63 24 124.54 24 61.54 72.77 110.69l-37.23 37.23ZM302-382q-36.69-37.46-55.65-83.77-18.96-46.31-18.96-94.23t18.96-94.23Q265.31-700.54 302-738l37.23 37.23q-29.61 27.77-44.42 64.96Q280-598.62 280-560q0 36.77 14.62 73.77 14.61 37 44.61 67L302-382Zm-.46 268.92 125.77-377.31q-16.77-12.07-26.27-30.49-9.5-18.43-9.5-39.12 0-37 25.73-62.73Q443-648.46 480-648.46t62.73 25.73Q568.46-597 568.46-560q0 20.69-9.11 38.73-9.12 18.04-26.66 30.88l125.77 377.31h-60.77l-26-80H388.92l-26.23 80h-61.15Zm107.23-140h142.46L480-466.93l-71.23 213.85ZM658-382l-37.23-37.23q29.61-27.77 44.42-64.96Q680-521.38 680-560q0-35.62-14.81-73t-44.42-67.77L658-738q36.69 37.46 54.73 84.15 18.04 46.7 19.88 94.23 0 47.93-18.76 94.04Q695.08-419.46 658-382Zm94.46 94.46-37.23-37.23Q764-373.92 788-435.46 812-497 812-560q0-63-24-124.54-24-61.54-72.77-110.69l37.23-37.23q55.85 58.08 84 128T864.61-560q0 74.54-26.84 144.46-26.85 69.92-85.31 128Z" />
                  </svg>
                </div>
                <h4 className="text-white">DevOps</h4>
                <p className="text-lt">
                  Accelerated delivery, team collaboration, and continuous
                  improvement for your software development & deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-div bg-white text-primary-dark animation-div">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
            <div className="div-title text-center mb-5">
              <span className="hl-color wow animate__animated animate__fadeInDown">
                Clients
              </span>
              <h3 className="wow animate__animated animate__fadeInUp">
                Testimonials
              </h3>
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

      <div className="customer-div customer-div-light bg-white animation-div">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="div-title text-center mb-5">
                <span className="hl-color wow animate__animated animate__fadeInDown">
                  clients
                </span>
                <h3 className="wow animate__animated animate__fadeInUp">
                  Our valued clients
                </h3>
              </div>
              <div className="slider-div">
                {rows.map((row, rowIndex) => (
                    <div className="slider-row" key={`row-${rowIndex}`}>
                      <Marquee
                          gradient={false}
                          speed={40 + rowIndex * 10} // Different speed for each row
                          pauseOnHover={true} // Pause scrolling on hover
                      >
                        {row.map((src, index) => (
                            <div
                                className="customer-img wow animate__animated animate__zoomIn"
                                key={index}
                            >
                              <img src={src} alt="client" className="img-fluid"/>
                            </div>
                        ))}
                      </Marquee>
                    </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
