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
import DoctorsListPage from "../Page/DoctorsListPage";
import PasswordPage from "../Page/PasswordPage";
import ResetPasswordPage from "../Page/ResetPasswordPage";
import ContactPage from "../Page/ContactPage";
import ConfirmationRegistration from "../components/ConfirmationRegistration/ConfirmationRegistration";
import RecordsPage from "../Page/RecordsPage";
import DoctorsRegistrPage from "../Page/DoctorsRegistrPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutClinicPage />} />
      <Route path="/doctors" element={<DoctarsPage />} />
      <Route path="/Connection" element={<ConnectionPage />} />
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="/Diagnostics" element={<DiagnosticsPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/ServicePrices" element={<ServicePricesPage />} />
      <Route path="/RegisterForm" element={<RegisterFormPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/DoctorsList" element={<DoctorsListPage />} />
      <Route path="/forgotPassword" element={<PasswordPage />} />
      <Route path="/resetPassword" element={<ResetPasswordPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route
        path="/ConfirmationRegistration"
        element={<ConfirmationRegistration />}
      />
      <Route path="/RecordsPage" element={<RecordsPage />} />
      <Route path="/doctorsRegistr" element={<DoctorsRegistrPage/>} />
    </Routes>
  );
};

export default Routers;
