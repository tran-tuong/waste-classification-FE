import React from "react";

export default function BinBusyPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600/55 mb-4">
          The waste bin is busy
        </h2>
        <p className="text-green-700 mb-4">
          Please wait a few moments and try again.
        </p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          OK
        </button>
      </div>
    </div>
  );
}