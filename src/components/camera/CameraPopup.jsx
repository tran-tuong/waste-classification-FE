import React, { useState } from "react";
import Webcam from "react-webcam";

export default function CameraPopup({ webcamRef, onCapture, onCancel }) {
  const [facingMode, setFacingMode] = useState("environment"); // Default to rear camera

  const videoConstraints = {
    facingMode: facingMode, // "environment" for rear, "user" for front
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "environment" ? "user" : "environment"));
  };

  return (
    <div className="fixed inset-0 bg-gray-500/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center border border-green-300 w-full max-w-md">
        <div className="flex flex-col items-center gap-2">
          <div className="w-[224px] h-[224px] relative rounded-md overflow-hidden">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="w-full h-full object-cover"
            />

            <button
              onClick={toggleCamera}
              className="absolute bottom-2 right-2 bg-gray-600/30 p-2 rounded-full text-white hover:bg-gray-700 shadow-md"
              aria-label="Switch Camera"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12a8 8 0 0112-6.742m0 0l-3-3m3 3l-3 3M20 12a8 8 0 01-12 6.742m0 0l3 3m-3-3l3-3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onCapture}
            className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 w-full sm:w-auto"
          >
            Capture
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 w-full sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
