import { useState, useEffect } from "react";
import axios from "axios"; // Gọi API backend
import {
  FaLeaf,
  FaRecycle,
  FaExclamationTriangle,
  FaQuestion,
} from "react-icons/fa";

const bins = [
  {
    id: "organic",
    label: "Organic",
    icon: <FaLeaf />,
    color: "bg-green-500",
    index: 0,
  },
  {
    id: "recycle",
    label: "Recycle",
    icon: <FaRecycle />,
    color: "bg-blue-500",
    index: 1,
  },
  {
    id: "hazardous",
    label: "Hazardous",
    icon: <FaExclamationTriangle />,
    color: "bg-red-500",
    index: 2,
  },
  {
    id: "other",
    label: "Other",
    icon: <FaQuestion />,
    color: "bg-gray-500",
    index: 3,
  },
];

const IoTControl = () => {
  const [openedBin, setOpenedBin] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
      alert(
        "Error opening bin: " + error?.response?.data?.detail || error.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 relative">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
        IoT Trash Bin Control
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bins.map((bin) => (
          <div
            key={bin.id}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center ${bin.color} text-white transition-all duration-300`}
          >
            <div className="text-5xl mb-4">{bin.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{bin.label} Bin</h2>
            <button
              onClick={() => handleOpenBin(bin.id, bin.index)}
              disabled={openedBin === bin.id}
              className="mt-auto bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-100 transition-all disabled:opacity-50"
            >
              Open Bin
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showModal && openedBin && (
        <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
            {bins.map((bin) =>
              bin.id === openedBin ? (
                <div key={bin.id}>
                  <div className="flex justify-center text-6xl mb-4 text-green-600/30">
                    {bin.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-emerald-600">
                    <a className="text-3xl font-extrabold uppercase">
                      {bin.label}
                    </a>{" "}
                    bin is open
                  </h2>
                  <p className="text-xl italic text-red-500">
                    Closing in {countdown}s...
                  </p>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IoTControl;
