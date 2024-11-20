// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import QualityAndStrategy from "./pages/QualityAndStrategy";
import Academy from "./pages/Academy";
import ArtificialIntelligenceServices from "./pages/ArtificialIntelligenceServices";
import PointofSalesandECommerce from "./pages/PointofSalesandECommerce";
import SalesforceIntegrationCustomization from "./pages/SalesforceIntegrationCustomization";
import Erp from "./pages/Erp";
import AndroidAppDevelopment from "./pages/AndroidAppDevelopment";
import IOSDevelopment from "./pages/IOSDevelopment";
import DataAnalytics from "./pages/DataAnalytics";
import Productization from "./pages/Productization";
import Automation from "./pages/Automation";
import CloudServices from "./pages/CloudServices";
import OnshoreStaffing from "./pages/OnshoreStaffing";
import OffshoreStaffing from "./pages/OffshoreStaffing";
import Career from "./pages/Career";
import OwlCarousel from "react-owl-carousel";
import WOW from "wowjs";
import "animate.css";
function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <Router>
      <div className="page-content-div">
        <Header />
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
          <Routes>
            <Route path="/" element={<Home />} />
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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
