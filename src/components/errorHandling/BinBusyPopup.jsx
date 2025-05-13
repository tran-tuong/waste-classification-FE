import React from "react";

export default function BinBusyPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg text-center w-full max-w-sm sm:max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600/60 mb-3">
          The waste bin is busy
        </h2>
        <p className="text-green-700 text-base sm:text-lg mb-4">
          Please wait a few moments and try again.
        </p>
        <button
          onClick={onClose}
          className="w-full sm:w-auto bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}
