import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Page/NomePage";
import AboutClinicPage from "../Page/AboutClinicPage";
import DoctarsPage from "../Page/DoctarsPage";
import ConnectionPage from "../Page/ConnectionPage";
import ServicesPage from "../Page/ServicesPage";
import ErrorPage from "../Page/ErrorPage";
import DiagnosticsPage from "../Page/DiagnosticsPage";
import ServicePricesPage from "../Page/ServicePricesPage";
import RegisterFormPage from "../Page/RegisterFormPage";
import Profile from "../Page/Profile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutClinicPage />} />
      <Route path="/doctors" element={<DoctarsPage />} />
      <Route path="/Connection" element={<ConnectionPage />} />
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="Diagnostics" element={<DiagnosticsPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="ServicePrices" element={<ServicePricesPage />} />
      <Route path="RegisterForm" element={<RegisterFormPage/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};

export default Routers;
