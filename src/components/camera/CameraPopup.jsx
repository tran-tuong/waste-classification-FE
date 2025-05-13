import React from "react";
import Webcam from "react-webcam";

export default function CameraPopup({ webcamRef, onCapture, onCancel }) {
  return (
    <div className="fixed inset-0 bg-gray-500/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center border border-green-300 w-full max-w-md">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-md w-full h-auto aspect-video object-cover"
        />
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
