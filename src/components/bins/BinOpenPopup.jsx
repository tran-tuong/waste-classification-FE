import React from "react";

const BinOpenPopup = ({ bins, openedBin, countdown, onClose }) => {
  if (!openedBin) return null;

  const currentBin = bins.find(bin => bin.id === openedBin);
  if (!currentBin) return null;

  return (
    <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
        <div className="flex justify-center text-6xl mb-4 text-green-600/30">
          {currentBin.icon}
        </div>
        <h2 className="text-2xl font-bold mb-2 text-emerald-600">
          <a className="text-3xl font-extrabold uppercase">
            {currentBin.label}
          </a>{" "}
          bin is open
        </h2>
        <p className="text-xl italic text-red-500">
          Closing in {countdown}s...
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default BinOpenPopup;