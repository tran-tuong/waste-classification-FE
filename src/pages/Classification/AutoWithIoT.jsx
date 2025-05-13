import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Camera, Image as ImageIcon, RefreshCcw } from "lucide-react";
import {
  FaLeaf,
  FaRecycle,
  FaExclamationTriangle,
  FaQuestion,
} from "react-icons/fa";
import BinBusyPopup from "../../components/errorHandling/BinBusyPopup";
import ApiErrorPopup from "../../components/errorHandling/ApiErrorPopup";
import CameraPopup from "../../components/CameraPopup";

const bins = [
  { id: "organic", label: "Organic", icon: <FaLeaf />, color: "bg-green-500" },
  {
    id: "recycle",
    label: "Recycle",
    icon: <FaRecycle />,
    color: "bg-blue-500",
  },
  {
    id: "hazardous",
    label: "Hazardous",
    icon: <FaExclamationTriangle />,
    color: "bg-red-500",
  },
  { id: "other", label: "Other", icon: <FaQuestion />, color: "bg-gray-500" },
];

export default function AutoWithIoT() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openedBin, setOpenedBin] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [showPopup, setShowPopup] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [binBusy, setBinBusy] = useState(false);
  const [apiError, setApiError] = useState(false);

  const webcamRef = useRef(null);

  useEffect(() => {
    let timer;
    if (openedBin) {
      setCountdown(5);
      setShowPopup(true);
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setOpenedBin(null);
            setShowPopup(false);
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [openedBin]);

  const handleFileChange = (e) => {
    const img = e.target.files[0];
    setFile(img);
    setPreview(URL.createObjectURL(img));
    setResult(null);
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const imgFile = new File([blob], "capture.jpg", { type: "image/jpeg" });
        setFile(imgFile);
        setPreview(imageSrc);
        setShowCamera(false);
        setResult(null);
      });
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/predict_iot",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const predictedClass = response.data.class.toLowerCase();
      setResult(predictedClass);
      handleOpenBin(predictedClass);
    } catch (error) {
      if (error.response?.status === 409) {
        setBinBusy(true); // Show busy popup
      } else {
        console.error("Prediction failed:", error);
        setApiError(true);
        setPreview(null);
      }
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  const handleOpenBin = (binId) => {
    setOpenedBin(binId);
    console.log(`Mở thùng rác: ${binId}`);
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setShowCamera(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getBinLabel = (id) => {
    const bin = bins.find((b) => b.id === id);
    return bin ? bin.label : "";
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 relative">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Auto Waste Classification with IoT
      </h1>

      <div className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <label className="flex items-center gap-2 text-green-700 font-medium cursor-pointer">
            <ImageIcon className="w-5 h-5" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            Upload Image
          </label>

          <button
            onClick={() => setShowCamera(true)}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <Camera className="w-5 h-5" />
            Use Camera
          </button>
        </div>

        {/* Hình mặc định */}
        {!preview && (
          <div className="mt-6 flex justify-center items-center">
            <div className="w-[300px] h-[200px] object-contain rounded border border-dashed border-green-600/60 flex flex-col justify-center items-center p-4">
              <ImageIcon className="w-12 h-12 text-green-600/60 mb-4" />
              <p className="text-center text-green-800/60  italic">
                Please upload the image
              </p>
            </div>
          </div>
        )}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="rounded-md border border-gray-300 mt-4 w-[300px] object-contain mx-auto"
          />
        )}

        <button
          onClick={handleUpload}
          disabled={loading || !file}
          className={`mt-6 w-full py-3 rounded transition 
            ${
              !file || loading
                ? "bg-green-600/55 hover:bg-green-700/55 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }
            ${loading ? "opacity-50" : ""}`}
        >
          {loading ? "Predicting..." : "Upload & Predict"}
        </button>

        {result && (
          <div className="flex justify-between mt-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Your waste is: <span className="text-green-600">{result}</span>
            </h2>

            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-1 bg-green-600 border border-green-600 text-white py-3 px-4 rounded hover:bg-green-800 transition"
            >
              <RefreshCcw size={16} />
              Try Again
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bins.map((bin) => (
          <div
            key={bin.id}
            className={`rounded-xl shadow-lg p-6 flex flex-col items-center ${bin.color} text-white transition-all duration-300`}
          >
            <div className="text-5xl mb-4">{bin.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{bin.label} Bin</h2>
            {openedBin === bin.id && (
              <p className="mt-2 text-2xl font italic">Bin is now opened.</p>
            )}
          </div>
        ))}
      </div>

      {/* Popup Camera */}
      {showCamera && (
        <CameraPopup
          webcamRef={webcamRef}
          onCapture={handleCapture}
          onCancel={() => setShowCamera(false)}
        />
      )}

      {showPopup && (
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

      {binBusy && <BinBusyPopup onClose={() => setBinBusy(false)} />}
      {apiError && <ApiErrorPopup onClose={() => setApiError(false)} />}
    </div>
  );
}
