import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Pages/Test";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./Pages/Register";
import Layout from "./layout/Layout";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import EmailVerification from "./Pages/EmailVerification";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verify-email" element={<EmailVerification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
