import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Guide from "../pages/Guide";
import ClassifyByImage from "../pages/Classification/ClassifyByImage";
import AutoWithIoT from "../pages/Classification/AutoWithIoT";
import IoTControl from "../pages/IoTControl";
import NotFound from "../pages/NotFound";
import TransitionEffect from "../components/ui/TransitionEffect";

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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <TransitionEffect key={location.pathname} />{" "}
      {/* Transition chạy khi pathname thay đổi */}
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/classify/image" element={<ClassifyByImage />} />
            <Route path="/classify/iot" element={<AutoWithIoT />} />
            <Route path="/iot-control" element={<IoTControl />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <AnimatedRoutes />
  </BrowserRouter>
);

export default AppRoutes;
