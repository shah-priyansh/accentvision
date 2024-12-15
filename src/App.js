// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import QualityAndStrategy from "./pages/QualityAndStrategy";
// import Academy from "./pages/Academy";
// import ArtificialIntelligenceServices from "./pages/ArtificialIntelligenceServices";
// import PointofSalesandECommerce from "./pages/PointofSalesandECommerce";
// import SalesforceIntegrationCustomization from "./pages/SalesforceIntegrationCustomization";
// import Erp from "./pages/Erp";
// import AndroidAppDevelopment from "./pages/AndroidAppDevelopment";
// import IOSDevelopment from "./pages/IOSDevelopment";
// import DataAnalytics from "./pages/DataAnalytics";
// import Productization from "./pages/Productization";
// import Automation from "./pages/Automation";
// import CloudServices from "./pages/CloudServices";
// import OnshoreStaffing from "./pages/OnshoreStaffing";
// import OffshoreStaffing from "./pages/OffshoreStaffing";
// import Career from "./pages/Career";
// import OwlCarousel from "react-owl-carousel";
import WOW from "wowjs";
import "animate.css";
// import Animation from "./pages/animation";
import Layout from "./layout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { routes } from "./routes";

// Grouped route configuration for better readability

const App = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  // useEffect(() => {
  //   const cards = gsap.utils.toArray(".card"); // Get all card elements
  //   const lastCardIndex = cards.length - 1;
  //   const lastCardST = ScrollTrigger.create({
  //     trigger: cards[lastCardIndex],
  //     start: "center center",
  //     markers: false,
  //   });
  //   // Iterate through cards and create animations
  //   cards.forEach((card, index) => {
  //     const scale = index === lastCardIndex ? 1 : 0.9;
  //     // const opacity = index === lastCardIndex ? 1 : 0.7;
  //     const opacity = 1;
  //     const scaleAndFade = gsap.to(card, {
  //       scale: scale,
  //       opacity: opacity,
  //       duration: 0.5,
  //     });
  //     ScrollTrigger.create({
  //       trigger: card,
  //       start: "bottom bottom",
  //       end: () => lastCardST.start,
  //       pin: true,
  //       pinSpacing: false,
  //       scrub: 0.5,
  //       ease: "none",
  //       markers: false,
  //       animation: scaleAndFade,
  //       toggleActions: "restart none none reverse",
  //       onEnter: () => gsap.to(card, { opacity: 1 }), // Ensure the current card is fully visible
  //       onLeaveBack: () => gsap.to(card, { opacity: 1 }), // Fade out previous cards
  //     });
  //   });
  //   return () => {
  //     // Cleanup ScrollTriggers when the component unmounts
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  //   // **************************************
  // }, []);
  useEffect(() => {
    let scrollTriggers = [];

    const handleResize = () => {
      // Clear existing ScrollTriggers
      scrollTriggers.forEach((trigger) => trigger.kill());
      scrollTriggers = []; // Reset the array

      // Check if the screen width is greater than or equal to 1200px
      if (window.innerWidth >= 1200) {
        const cards = gsap.utils.toArray(".card");
        const lastCardIndex = cards.length - 1;

        const lastCardST = ScrollTrigger.create({
          trigger: cards[lastCardIndex],
          start: "center center",
          markers: false,
        });

        // Iterate through cards and create animations
        cards.forEach((card, index) => {
          const scale = index === lastCardIndex ? 1 : 0.9;
          // const opacity = index === lastCardIndex ? 1 : 0.7;
          const opacity = 1;

          const scaleAndFade = gsap.to(card, {
            scale: scale,
            opacity: opacity,
            duration: 0.5,
          });

          const trigger = ScrollTrigger.create({
            trigger: card,
            start: "bottom bottom",
            end: () => lastCardST.start,
            pin: true,
            pinSpacing: false,
            scrub: 0.5,
            ease: "none",
            markers: false,
            animation: scaleAndFade,
            toggleActions: "restart none none reverse",
            onEnter: () => gsap.to(card, { opacity: 1 }),
            onLeaveBack: () => gsap.to(card, { opacity: 1 }),
          });

          scrollTriggers.push(trigger);
        });
      }
    };

    // Initial setup
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      // Remove resize listener
      window.removeEventListener("resize", handleResize);

      // Kill all ScrollTriggers
      scrollTriggers.forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array

  return (
    <Router>
      <div className="page-content-div">
        {/* <Header /> */}
        {/*<div
          className={`wow animate__animated animate__fadeIn`}
          data-wow-delay={"0.5s"}
          data-wow-duration={"1s"}
          data-wow-offset={"50"}
        >
          <h2>Fade In Animation</h2>
        </div>
        <div
          className={`wow animate__animated animate__zoomIn`}
          data-wow-delay={"0.2s"}
          data-wow-duration={"1.2s"}
          data-wow-offset={"30"}
        >
          <button>Zoom In Button</button>
        </div>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          <div class="item">
            <h4>1</h4>
          </div>
          <div class="item">
            <h4>2</h4>
          </div>
          <div class="item">
            <h4>3</h4>
          </div>
          <div class="item">
            <h4>4</h4>
          </div>
          <div class="item">
            <h4>5</h4>
          </div>
          <div class="item">
            <h4>6</h4>
          </div>
          <div class="item">
            <h4>7</h4>
          </div>
          <div class="item">
            <h4>8</h4>
          </div>
          <div class="item">
            <h4>9</h4>
          </div>
          <div class="item">
            <h4>10</h4>
          </div>
          <div class="item">
            <h4>11</h4>
          </div>
          <div class="item">
            <h4>12</h4>
          </div>
        </OwlCarousel>*/}
        <div className="flex-grow-1">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/quality-and-strategy"
              element={<QualityAndStrategy />}
            />
            <Route path="/academy" element={<Academy />} />
            <Route
              path="/artificial-intelligence-services"
              element={<ArtificialIntelligenceServices />}
            />
            <Route
              path="/pos-and-ecom"
              element={<PointofSalesandECommerce />}
            />
            <Route
              path="/sales-force-solutions"
              element={<SalesforceIntegrationCustomization />}
            />
            <Route path="/erp" element={<Erp />} />
            <Route
              path="/andriod-app-development"
              element={<AndroidAppDevelopment />}
            />
            <Route path="/iosDev" element={<IOSDevelopment />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/productization" element={<Productization />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/cloud-services" element={<CloudServices />} />
            <Route path="/onshore-staffing" element={<OnshoreStaffing />} />
            <Route path="/offshore-staffing" element={<OffshoreStaffing />} />
            <Route path="/career" element={<Career />} />
          </Routes> */}
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route
                key={index}
                path={path}
                element={<Layout>{element}</Layout>}
              />
            ))}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
