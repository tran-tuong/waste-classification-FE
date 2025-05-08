import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col items-center justify-center text-gray-800 p-6 relative overflow-hidden">
      {/* Floating geometric background elements */}
      <div className="absolute w-72 h-72 bg-green-300 rounded-full top-10 left-10 opacity-20 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 bg-green-200 rounded-full bottom-[-5rem] right-[-5rem] opacity-30 animate-spin-slow"></div>

      {/* Animated Icon */}
      <div className="text-[10rem] text-green-500/60 mb-6 animate-bounce-slow drop-shadow-lg">
        <FaExclamationTriangle />
      </div>

      <h1 className="text-8xl text-green-600/90 font-extrabold mb-3 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-lg italic text-green-900/60 mt-5 text-center mb-6">
        Oops! The page you're looking for doesn't exist or has been moved. Let's
        get you back on track.
      </p>

      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
