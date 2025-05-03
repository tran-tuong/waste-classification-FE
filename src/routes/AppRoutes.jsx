import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Guide from "../pages/Guide";
import ClassifyByImage from "../pages/Classification/ClassifyByImage";
import AutoWithIoT from "../pages/Classification/AutoWithIoT";
import IoTControl from "../pages/IoTControl";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
};

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/classify/image" element={<ClassifyByImage />} />
        <Route path="/classify/iot" element={<AutoWithIoT />} />
        <Route path="/iot-control" element={<IoTControl />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRoutes;
