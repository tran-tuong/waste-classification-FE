import React from "react";

const ApiErrorPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md text-center border-l-8 border-red-500">
        <h2 className="text-2xl font-bold text-red-600 mb-3 animate-pulse">
          Ops Error!
        </h2>
        <p className="text-gray-700 mb-4">
          Couldn’t connect to the server. Please try again in a few minutes.
        </p>
        <button
          onClick={onClose}
          className="mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded shadow transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApiErrorPopup;