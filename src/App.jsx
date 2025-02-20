import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import Conversation from "./pages/Conversation";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import OtpPage from "./pages/OtpPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/me" element={<ProfilePage />} />
          <Route path="/chat" element={<Conversation />} />
        </Route>

        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
