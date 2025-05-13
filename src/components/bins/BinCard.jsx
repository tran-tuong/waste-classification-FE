import React from "react";

const BinCard = ({ bin, isOpen, onOpenBin }) => {
  return (
    <div
      className={`rounded-xl shadow-lg p-6 flex flex-col items-center ${bin.color} text-white transition-all duration-300`}
    >
      <div className="text-5xl mb-4">{bin.icon}</div>
      <h2 className="text-xl font-semibold mb-2">{bin.label} Bin</h2>
      
      {/* Conditionally render button for IoTControl page */}
      {onOpenBin && (
        <button
          onClick={() => onOpenBin(bin.id, bin.index)}
          disabled={isOpen === bin.id}
          className="mt-auto bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-100 transition-all disabled:opacity-50"
        >
          Open Bin
        </button>
      )}

      {/* Show opened status for AutoWithIoT page */}
      {isOpen === bin.id && !onOpenBin && (
        <p className="mt-2 text-2xl font italic">Bin is now opened.</p>
      )}
    </div>
  );
};

export default BinCard;