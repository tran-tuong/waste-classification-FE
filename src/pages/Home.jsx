import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroVideo from "../assets/hero-section.mp4";
import wasteWise from "../assets/logo2.png";
import smartBinImage from "../assets/logo2.png";
import webImage from "../assets/web.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-10"></div>{" "}
        {/* Overlay for better text visibility */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* About Section with image */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
              What is Waste Wise?
            </h2>
            <p className="text-lg mb-6">
              Waste Wise is an AI-powered smart waste management system that
              combines cutting-edge Deep Learning with intelligent IoT
              technology. We aim to make waste sorting effortless, accurate, and
              engaging for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/classify/image"
                className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:bg-green-800 transition"
              >
                Get Started
              </Link>
              <Link
                to="/guide"
                className="px-6 py-3 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-600 hover:text-white hover:border-green-600 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={wasteWise}
              alt="Smart Waste Management System"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
          >
            Powerful Features at Your Fingertips
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "AI-Powered Classification",
                description:
                  "Using ResNet50 transfer learning to achieve high-accuracy waste recognition.",
                image: wasteWise,
              },
              {
                title: "IoT Bin Control",
                description:
                  "IoT Bin with real-time status display and automated sorting.",
                image: smartBinImage,
              },
              {
                title: "Interactive Voice Feedback",
                description:
                  "Voice notifications for user actions.",
                image: wasteWise,
              },
              {
                title: "Seamless Web Integration",
                description:
                  "Manage AI predictions and device control easily via our friendly web app.",
                image: webImage,
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Learning Technology with Visual */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${isMobile ? "order-2" : "order-1"}`}
            >
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={wasteWise}
                    alt="Neuron Network"
                    className="w-full h-full object-cover"
                  />
                </div>
                
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${isMobile ? "order-1" : "order-2"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                Advanced Deep Learning at the Core
              </h2>
              <p className="text-lg mb-6">
                Leveraging the power of ResNet50 transfer learning, Waste Wise
                classifies waste into four categories with exceptional
                precision:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  <span>
                    <strong>Organic</strong>: Food waste, plant material,
                    compostables
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                  <span>
                    <strong>Recyclable</strong>: Paper, plastics, metals, glass
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                  <span>
                    <strong>Hazardous</strong>: Batteries, chemicals, medical
                    waste
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-4 h-4 bg-gray-500 rounded-full mr-3"></span>
                  <span>
                    <strong>Other</strong>: Mixed or undefined waste types
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IoT Bin System with Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                IoT Waste Bin
              </h2>
              <p className="text-lg mb-6">
                Our ioT Bin system provides real-time feedback and automated
                sorting to make waste disposal effortless:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p>Voice confirmation for seamless waste management</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p>
                    Automatic bin compartment selection based on AI
                    classification
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p>
                    Fill level monitoring with notifications when bins need
                    emptying
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p>User-friendly manual controls when needed</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={smartBinImage}
                alt="IoT Bin System"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10"
          >
            How Waste Wise Works
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Upload Image",
                description: "Upload or capture a waste image via the web app.",
                icon: (
                  <svg
                    className="w-12 h-12 text-green-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                ),
              },
              {
                title: "AI Classification",
                description:
                  "Get instant classification with confidence scores.",
                icon: (
                  <svg
                    className="w-12 h-12 text-green-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                ),
              },
              {
                title: "Bin Selection",
                description:
                  "Automated in the website or press the bin button to dispose of the waste.",
                icon: (
                  <svg
                    className="w-12 h-12 text-green-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Guided Experience",
                description:
                  "Waste Wise guide you with voice and visual feedback.",
                icon: (
                  <svg
                    className="w-12 h-12 text-green-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01-.707-7.072m-2.122 9.9a9 9 0 010-12.728"
                    />
                  </svg>
                ),
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              >
                {step.icon}
                <h3 className="text-xl font-bold mb-3 text-green-700">
                  {step.title}
                </h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Accessibility Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${isMobile ? "order-2" : "order-1"}`}
            >
              <img
                src={wasteWise}
                alt="Waste Wise"
                className="rounded-xl shadow-xl mx-auto max-w-xs"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${isMobile ? "order-1" : "order-2"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
                Use Waste Wise Anywhere
              </h2>
              <p className="text-lg mb-6">
                Access our powerful waste classification system from anywhere
                with our responsive web app. Waste Wise works on all your
                devices:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Mobile Devices</p>
                    <p className="text-gray-600">
                      Capture images directly with your phone camera
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Desktop Computers</p>
                    <p className="text-gray-600">
                      Upload images or access advanced analytics
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Tablets</p>
                    <p className="text-gray-600">
                      Perfect for educational settings and group use
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
