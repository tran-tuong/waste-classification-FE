import React from "react";
import { RefreshCcw } from "lucide-react";

const ClassificationResult = ({ result, preview, onReset, showPopup, onClosePopup }) => {
  // In-line result for AutoWithIoT
  if (result && !showPopup) {
    return (
      <div className="flex justify-between mt-6">
        <h2 className="text-lg font-semibold text-gray-700">
          Your waste is: <span className="text-green-600">{result}</span>
        </h2>

        <button
          onClick={onReset}
          className="flex items-center justify-center gap-1 bg-green-600 border border-green-600 text-white py-3 px-4 rounded hover:bg-green-800 transition"
        >
          <RefreshCcw size={16} />
          Try Again
        </button>
      </div>
    );
  }

  // Modal result for ClassifyByImage
  if (showPopup && result) {
    return (
      <div className="fixed inset-0 bg-gray-500/60 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Your waste is
          </h2>
          {preview && (
            <img
              src={preview}
              alt="Predicted"
              className="mx-auto mb-4 max-w-xs rounded border"
            />
          )}
          <p className="text-3xl font-bold text-green-700 mb-4">{result}</p>
          <p className="text-xl font-bold italic text-red-800 mb-4">
            Please throw in {result} bag
          </p>
          <button
            onClick={onClosePopup}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default ClassificationResult;