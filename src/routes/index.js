import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import QualityAndStrategy from "../pages/QualityAndStrategy";
import Academy from "../pages/Academy";
import ArtificialIntelligenceServices from "../pages/ArtificialIntelligenceServices";
import PointofSalesandECommerce from "../pages/PointofSalesandECommerce";
import SalesforceIntegrationCustomization from "../pages/SalesforceIntegrationCustomization";
import Erp from "../pages/Erp";
import OdooErp from "../pages/OdooErp";
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
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import Strategy from "../pages/Strategy";
import InfrastructureServices from "../pages/InfrastructureServices";
import Team from "../pages/Team";
import DevOps from "../pages/DevOps";
import Dynamics from "../pages/Dynamics";
import Cybersecurity from "../pages/Cybersecurity";
import Finance from "../pages/Finance";
import Retail from "../pages/Retail";
import ECommerce from "../pages/ECommerce";
import PMS from "../pages/PMS";
import TOC360 from "../pages/TOC360";
import Smartsense from "../pages/Smartsense";
import AutomationAI from "../pages/AutomationAI";
import Telecom5G from "../pages/Telecom5G";
import DonationApp from "../pages/DonationApp";
import Telecom from "../pages/Telecom";

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
  { path: "/privacy", element: <Privacy />, label: "Privacy" },
  { path: "/terms", element: <Terms />, label: "Terms" },
  { path: "/strategy", element: <Strategy />, label: "Strategy" },
  { path: "/team", element: <Team />, label: "Team" },
  { path: "/odooerp", element: <OdooErp />, label: "OdooErp" },
  { path: "/infrastructure-services", element: <InfrastructureServices />, label: "InfrastructureServices" },
  { path: "/devops", element: <DevOps />, label: "DevOps" },
  { path: "/dynamics", element: <Dynamics />, label: "Dynamics" },
  { path: "/cybersecurity", element: <Cybersecurity />, label: "Cybersecurity" },
  { path: "/finance", element: <Finance />, label: "Finance" },
  { path: "/retail", element: <Retail />, label: "Retail" },
  { path: "/ecommerce", element: <ECommerce />, label: "ECommerce" },
  { path: "/pms", element: <PMS />, label: "PMS" },
  { path: "/toc360", element: <TOC360 />, label: "TOC360" },
  { path: "/smartsense", element: <Smartsense />, label: "Smartsense" },
  { path: "/Automation-Ai", element: <AutomationAI />, label: "AutomationAI" },
  { path: "/telecom5g", element: <Telecom5G />, label: "Telecom5G" },
  { path: "/donation-app", element: <DonationApp />, label: "DonationApp" },
  { path: "/telecom", element: <Telecom />, label: "Telecom" },
];
