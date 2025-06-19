import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-green-600 text-white py-10">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* About Section */}
        <div className="max-w-md text-center md:text-left space-y-3">
          <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start">
            <FaLeaf className="mr-2 text-green-200" /> Waste Wise
          </h2>
          <p className="text-sm text-justify leading-relaxed">
            A smart and eco-friendly platform for classifying and managing waste
            using AI and IoT technologies to create a cleaner environment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right space-y-3">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center md:justify-end gap-2 hover:text-green-200 transition duration-300">
              <span>support@wastewise.com</span>
              <FaEnvelope className="text-green-200" />
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2 hover:text-green-200 transition duration-300">
              <span>+84 123 456 789</span>
              <FaPhone className="text-green-200" />
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2 hover:text-green-200 transition duration-300">
              <span>Hanoi, Vietnam</span>
              <FaMapMarkerAlt className="text-green-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-green-500 text-center">
        <p className="text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Waste Wise. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;