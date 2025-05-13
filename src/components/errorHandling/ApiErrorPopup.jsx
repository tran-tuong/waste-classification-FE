import React from "react";

const ApiErrorPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-xl p-5 sm:p-6 w-full max-w-sm sm:max-w-md text-center border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-red-600 mb-3 animate-pulse">
          Oops! Error
        </h2>
        <p className="text-gray-700 mb-4 text-base sm:text-lg">
          Couldn’t connect to the server. Please try again in a few minutes.
        </p>
        <button
          onClick={onClose}
          className="mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow transition w-full sm:w-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApiErrorPopup;
