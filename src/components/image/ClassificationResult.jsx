import React from "react";

const ClassificationResult = ({ result, preview, showPopup, onClosePopup }) => {
  // In-line result for AutoWithIoT
  if (result && !showPopup) {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 w-full">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700 text-center sm:text-left">
          Your waste is: <span className="text-green-600">{result}</span>
        </h2>
      </div>
    );
  }

  // Modal result for ClassifyByImage
  if (showPopup && result) {
    return (
      <div className="fixed inset-0 bg-gray-500/60 flex items-center justify-center z-50 p-4">
        <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg text-center border border-green-300">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
            Your waste is
          </h2>
          {preview && (
            <img
              src={preview}
              alt="Predicted"
              className="mx-auto mb-4 w-full max-w-xs rounded border object-contain"
            />
          )}
          <p className="text-2xl sm:text-3xl font-bold text-green-700 mb-3">
            {result}
          </p>
          <p className="text-lg sm:text-xl font-bold italic text-red-800 mb-4">
            Please throw in {result} bag
          </p>
          <button
            onClick={onClosePopup}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full sm:w-auto transition"
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
