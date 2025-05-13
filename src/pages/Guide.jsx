import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import images (replace with your actual images in your project)
import organicWasteImage from "../assets/default.png";
import recyclableWasteImage from "../assets/default.png";
import hazardousWasteImage from "../assets/default.png";
import otherWasteImage from "../assets/default.png";
import heroImage from "../assets/logo2.png";
import smartBinImage from "../assets/default.png";
import communityImage from "../assets/default.png";
import natureImage from "../assets/default.png";

const Guide = () => {
  // Animate items as they appear in viewport
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // For responsive adjustments
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="min-h-screen bg-green-50 pb-16">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-96 md:h-[500px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            The Story of Our Waste
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Every item we discard has a journey. Let's make sure it ends in the
            right place.
          </motion.p>
        </div>
      </div>

      {/* Introduction Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
            Our Waste Journey Begins
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            In a world overflowing with discarded items, understanding waste
            classification isn't just a practice—it's an essential story of
            transformation. Each piece of waste we generate has the potential to
            become something new, to return to the earth, or to harm our
            environment. By learning how to classify waste properly, you become
            part of this remarkable story of renewal and protection.
          </p>
        </motion.div>

        {/* Nature Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl h-80"
          >
            <img
              src={natureImage}
              alt="Nature thriving"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
              Why Our Choices Matter
            </h3>
            <p className="text-gray-700 mb-6">
              When we properly sort our waste, we reduce landfill usage by up to
              80%. Every banana peel that goes into organic waste instead of a
              landfill produces compost that can nourish new plants instead of
              generating methane gas. Every plastic bottle that's recycled saves
              enough energy to power a light bulb for 6 hours.
            </p>
            <p className="text-gray-700 font-medium">
              These small acts of proper waste sorting create a ripple effect
              across our planet's ecosystems, writing a better ending to our
              waste's story.
            </p>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12"
        >
          The Characters in Our Waste Story
        </motion.h2>

        {/* Grid of Waste Type Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Organic Waste */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-102 transition-all"
          >
            <div className="h-56 md:h-64 overflow-hidden">
              <img
                src={organicWasteImage}
                alt="Organic Waste"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-6 border-l-8 border-green-600">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Organic Waste: Nature's Return
              </h2>
              <p className="mb-4 text-gray-700">
                Vegetables, fruits, leftovers, and yard trimmings—these once
                gave us nourishment and beauty. Their story doesn't end in the
                trash, but continues through composting to become rich soil that
                grows the next generation of plants.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  Common Examples:
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Fruit and vegetable scraps</li>
                  <li>Coffee grounds and tea bags</li>
                  <li>Eggshells and nutshells</li>
                  <li>Yard trimmings and leaves</li>
                  <li>Food leftovers (non-dairy, non-meat)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Recyclable Waste */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-102 transition-all"
          >
            <div className="h-56 md:h-64 overflow-hidden">
              <img
                src={recyclableWasteImage}
                alt="Recyclable Waste"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-6 border-l-8 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Recyclable Waste: The Transformation
              </h2>
              <p className="mb-4 text-gray-700">
                Paper, plastics, glass, and metals—these items can be reborn. A
                plastic bottle can become part of a park bench, an aluminum can
                could be part of a bicycle in its next life. Their story is one
                of endless transformation.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Common Examples:
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Paper and cardboard</li>
                  <li>Glass bottles and jars</li>
                  <li>Metal cans and foil</li>
                  <li>Plastic containers (types 1-7)</li>
                  <li>Clean, empty food packaging</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Hazardous Waste */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-102 transition-all"
          >
            <div className="h-56 md:h-64 overflow-hidden">
              <img
                src={hazardousWasteImage}
                alt="Hazardous Waste"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-6 border-l-8 border-red-500">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                Hazardous Waste: The Careful Chapter
              </h2>
              <p className="mb-4 text-gray-700">
                Batteries, chemicals, and electronic waste—these powerful tools
                require special handling. Their story could turn dangerous if
                mishandled, potentially releasing harmful substances into our
                soil and water. With proper disposal, we can keep their story
                contained.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">
                  Common Examples:
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Batteries and electronics</li>
                  <li>Paint and solvents</li>
                  <li>Pesticides and herbicides</li>
                  <li>Medical waste and medications</li>
                  <li>Light bulbs and fluorescent tubes</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Other Waste */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-102 transition-all"
          >
            <div className="h-56 md:h-64 overflow-hidden">
              <img
                src={otherWasteImage}
                alt="Other Waste"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-6 border-l-8 border-yellow-500">
              <h2 className="text-2xl font-bold text-yellow-600 mb-4">
                Other Waste: The Mixed Narrative
              </h2>
              <p className="mb-4 text-gray-700">
                Diapers, broken toys, and worn-out shoes—these items tell the
                complex story of modern life. While they may not be easily
                recycled or composted today, innovation continues to find ways
                to give these items better endings in the future.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Common Examples:
                </h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Diapers and sanitary products</li>
                  <li>Broken household items</li>
                  <li>Worn-out clothing and shoes</li>
                  <li>Mixed material packaging</li>
                  <li>Pet waste and cat litter</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Smart Bin Technology Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
                Technology: The Modern Storyteller
              </h3>
              <p className="text-gray-700 mb-6">
                Waste Wise's smart bin technology acts as a guide in your waste
                journey, using advanced AI to identify and sort your waste. No
                more confusion about where things belong—our technology
                recognizes items and automatically directs them to the proper
                bin.
              </p>
              <p className="text-gray-700 mb-6">
                This intelligent system learns and adapts, becoming more
                accurate over time. It's like having a waste expert with you
                24/7, ensuring your waste story always has the right ending.
              </p>
              <Link
                to="/classify/iot"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105"
              >
                Experience Smart Sorting
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={smartBinImage}
                alt="Smart Bin Technology"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Join the Story of Positive Change
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
            Every piece of waste has a story that you help write. With Waste
            Wise, you can ensure it's a story of renewal, transformation, and
            protection. Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/classify/image"
              className="bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition transform hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Classify Waste by Image
            </Link>

            <Link
              to="/classify/iot"
              className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Use Smart Bin with AI
            </Link>

            <Link
              to="/iot-control"
              className="bg-purple-600 text-white px-6 py-4 rounded-lg hover:bg-purple-700 transition transform hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Use Smart Bin Technology
            </Link>
          </div>
        </motion.div>

        {/* Quick Reference Guide */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-green-700 mb-6 text-center">
            Quick Reference Guide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h4 className="font-semibold text-green-700 mb-2">Organic</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Food scraps</li>
                <li>✓ Plant materials</li>
                <li>✓ Coffee grounds</li>
                <li>✓ Meat or dairy</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-semibold text-blue-700 mb-2">Recyclable</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Clean paper</li>
                <li>✓ Plastic bottles</li>
                <li>✓ Metal cans</li>
                <li>✘ Soiled items</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h4 className="font-semibold text-red-700 mb-2">Hazardous</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Batteries</li>
                <li>✓ Electronics</li>
                <li>✓ Chemicals</li>
                <li>✘ Regular trash</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <h4 className="font-semibold text-yellow-700 mb-2">Other</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Diapers</li>
                <li>✓ Worn textiles</li>
                <li>✓ Mixed materials</li>
                <li>✘ Recyclables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
