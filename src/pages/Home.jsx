import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero-section.mp4";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
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

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-700 mb-6"
          >
            What is Waste Wise?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto"
          >
            Waste Wise is an AI-powered smart waste management system that
            combines cutting-edge Deep Learning with intelligent IoT technology.
            We aim to make waste sorting effortless, accurate, and engaging for
            everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/classify/image"
                className="px-8 py-4 bg-green-700 text-white font-bold rounded-lg shadow-lg hover:scale-105 hover:bg-green-900 transition"
              >
                Get Started
              </Link>
              <Link
                to="/guide"
                className="px-8 py-4 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-600 hover:text-white hover:border-green-600 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-green-700 mb-12"
          >
            Powerful Features at Your Fingertips
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Powered Waste Classification",
                description:
                  "Using ResNet50 transfer learning to achieve high-accuracy waste recognition.",
              },
              {
                title: "Smart Bin Control",
                description:
                  "Two intuitive modes: Auto and Manual, with real-time status display.",
              },
              {
                title: "Interactive Voice Feedback",
                description:
                  "Voice notifications for user actions and presence detection.",
              },
              {
                title: "Seamless Web Integration",
                description:
                  "Manage AI predictions and device control easily via our friendly web app.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Learning Technology */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-700 mb-6"
          >
            Advanced Deep Learning at the Core
          </motion.h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Leveraging the power of ResNet50 transfer learning, Waste Wise
            classifies waste into four categories with exceptional precision:
            Hazardous, Organic, Recyclable, Other.
          </p>
          {/* You can add an animated image or progress bar here */}
        </div>
      </section>

      {/* Smart Bin System */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-700 mb-6"
          >
            Intelligent Smart Bin Modes
          </motion.h2>
          <p className="text-lg max-w-3xl mx-auto mb-10">
            Switch easily between Auto and Manual modes with voice confirmation,
            sensor detection, and manual controls for seamless waste management.
          </p>
          {/* Add image or icons here if available */}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-700 mb-10"
          >
            How Waste Wise Works
          </motion.h2>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {[
              "Upload a waste image via the web app.",
              "Get instant classification with confidence scores.",
              "Press the corresponding bin button to dispose of the waste.",
              "Let Waste Wise guide you with voice and visual feedback.",
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center justify-center"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {idx + 1}
                </div>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-linear-to-r/srgb from-green-600 to-emerald-600 text-white text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg mb-8">
            Start sorting your waste smarter with Waste Wise today!
          </p>
          <Link
            to="/classify/iot"
            className="px-8 py-4 bg-white text-green-700 font-bold rounded-lg shadow-lg hover:scale-105 transition inline-block"
          >
            Try Waste Wise Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
