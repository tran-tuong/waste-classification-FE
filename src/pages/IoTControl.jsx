import { useState, useEffect } from "react";
import axios from "axios";
import binData from "../constants/binData";
import BinGrid from "../components/bins/BinGrid";
import BinOpenPopup from "../components/bins/BinOpenPopup";
import BinBusyPopup from "../components/errorHandling/BinBusyPopup";
import ApiErrorPopup from "../components/errorHandling/ApiErrorPopup";

const IoTControl = () => {
  const [openedBin, setOpenedBin] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [binBusy, setBinBusy] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    let timer;

    if (openedBin && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (openedBin && countdown === 0) {
      setOpenedBin(null);
      setShowModal(false);
    }

    return () => clearTimeout(timer);
  }, [countdown, openedBin]);

  const handleOpenBin = async (binId, binIndex) => {
    try {
      await axios.post("http://localhost:8000/control_bin", {
        bin_index: binIndex,
      });
      setOpenedBin(binId);
      setCountdown(5);
      setShowModal(true);
    } catch (error) {
      if (error.response?.status === 409) {
        setBinBusy(true);
      } else {
        console.log(error?.response?.data?.detail || error.message);
        setApiError(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 relative">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
        IoT Trash Bin Control
      </h1>

      {/* Bin grid with open buttons */}
      <BinGrid 
        bins={binData} 
        openedBin={openedBin} 
        onOpenBin={handleOpenBin} 
      />

      {/* Bin open popup */}
      {showModal && (
        <BinOpenPopup 
          bins={binData} 
          openedBin={openedBin} 
          countdown={countdown} 
        />
      )}

      {/* Error popups */}
      {binBusy && <BinBusyPopup onClose={() => setBinBusy(false)} />}
      {apiError && <ApiErrorPopup onClose={() => setApiError(false)} />}
    </div>
  );
};

export default IoTControl;