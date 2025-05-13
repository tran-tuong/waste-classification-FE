import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col items-center justify-center text-gray-800 p-4 sm:p-6 relative overflow-hidden">
      {/* Floating geometric background elements */}
      <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-green-300 rounded-full top-5 sm:top-10 left-5 sm:left-10 opacity-20 animate-pulse-slow"></div>
      <div className="absolute w-60 h-60 sm:w-96 sm:h-96 bg-green-200 rounded-full bottom-[-3rem] sm:bottom-[-5rem] right-[-3rem] sm:right-[-5rem] opacity-30 animate-spin-slow"></div>

      {/* Animated Icon */}
      <div className="text-[6rem] sm:text-[8rem] lg:text-[10rem] text-green-500/60 mb-6 animate-bounce-slow drop-shadow-lg">
        <FaExclamationTriangle />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-green-600/90 font-extrabold mb-3 text-center">
        404 - Page Not Found
      </h1>

      <p className="text-base sm:text-lg italic text-green-900/60 mt-3 sm:mt-5 text-center mb-6 max-w-xl">
        Oops! The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
