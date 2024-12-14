import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import QualityAndStrategy from "../pages/QualityAndStrategy";
import Academy from "../pages/Academy";
import ArtificialIntelligenceServices from "../pages/ArtificialIntelligenceServices";
import PointofSalesandECommerce from "../pages/PointofSalesandECommerce";
import SalesforceIntegrationCustomization from "../pages/SalesforceIntegrationCustomization";
import Erp from "../pages/Erp";
import AndroidAppDevelopment from "../pages/AndroidAppDevelopment";
import IOSDevelopment from "../pages/IOSDevelopment";
import DataAnalytics from "../pages/DataAnalytics";
import Productization from "../pages/Productization";
import Automation from "../pages/Automation";
import CloudServices from "../pages/CloudServices";
import OnshoreStaffing from "../pages/OnshoreStaffing";
import OffshoreStaffing from "../pages/OffshoreStaffing";
import Career from "../pages/Career";
import Animation from "../pages/animation";

export const routes = [
  { path: "/", element: <Home />, label: "Home" },
  { path: "/animation", element: <Animation />, label: "Animation" },
  { path: "/about", element: <About />, label: "About" },
  { path: "/contact", element: <Contact />, label: "Contact" },
  {
    path: "/quality-and-strategy",
    element: <QualityAndStrategy />,
    label: "Quality and Strategy",
  },
  { path: "/academy", element: <Academy />, label: "Academy" },
  {
    path: "/artificial-intelligence-services",
    element: <ArtificialIntelligenceServices />,
    label: "AI Services",
  },
  {
    path: "/pos-and-ecom",
    element: <PointofSalesandECommerce />,
    label: "POS and E-Commerce",
  },
  {
    path: "/sales-force-solutions",
    element: <SalesforceIntegrationCustomization />,
    label: "Salesforce Solutions",
  },
  { path: "/erp", element: <Erp />, label: "ERP" },
  {
    path: "/andriod-app-development",
    element: <AndroidAppDevelopment />,
    label: "Android Development",
  },
  { path: "/iosDev", element: <IOSDevelopment />, label: "iOS Development" },
  {
    path: "/data-analytics",
    element: <DataAnalytics />,
    label: "Data Analytics",
  },
  {
    path: "/productization",
    element: <Productization />,
    label: "Productization",
  },
  { path: "/automation", element: <Automation />, label: "Automation" },
  {
    path: "/cloud-services",
    element: <CloudServices />,
    label: "Cloud Services",
  },
  {
    path: "/onshore-staffing",
    element: <OnshoreStaffing />,
    label: "Onshore Staffing",
  },
  {
    path: "/offshore-staffing",
    element: <OffshoreStaffing />,
    label: "Offshore Staffing",
  },
  { path: "/career", element: <Career />, label: "Career" },
];
