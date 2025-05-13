import React from "react";
import BinCard from "./BinCard";

const BinGrid = ({ bins, openedBin, onOpenBin }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {bins.map((bin) => (
        <BinCard 
          key={bin.id} 
          bin={bin} 
          isOpen={openedBin} 
          onOpenBin={onOpenBin} 
        />
      ))}
    </div>
  );
};

export default BinGrid;