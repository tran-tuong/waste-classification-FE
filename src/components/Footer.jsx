import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-green-600 text-white py-6">
    <div className="mx-auto px-4 flex flex-col sm:flex-row lg:ml-40 lg:mr-40 justify-between items-start gap-8">
      {/* About Section */}
      <div className="sm:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Smart Waste</h2>
        <p className="text-sm leading-relaxed">
          A smart and eco-friendly platform for classifying and managing waste
          using AI and IoT technologies.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 text-sm">
        <p className="flex items-center gap-2">
          <FaEnvelope /> support@wastewise.com
        </p>
        <p className="flex items-center gap-2">
          <FaPhone /> +84 123 456 789
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> No 1 Trinh Van Bo, Hanoi
        </p>
      </div>
    </div>
    {/* Social Media */}
    {/* <div className="mt-8 flex justify-center gap-6 text-white text-xl">
      <a href="#" className="hover:text-gray-100" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="#" className="hover:text-gray-100" aria-label="Twitter">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-gray-100" aria-label="Instagram">
        <FaInstagram />
      </a>
    </div> */}
    {/* Copyright */}
    {/* <div className="text-center text-sm mt-1 opacity-80">
      © 2025 Smart Waste System. All rights reserved.
    </div> */}
  </footer>
);

export default Footer;
