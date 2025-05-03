import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import { Camera, Image as ImageIcon, RefreshCcw } from "lucide-react";
import {
  FaLeaf,
  FaRecycle,
  FaExclamationTriangle,
  FaQuestion,
} from "react-icons/fa";

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
      console.error("Prediction failed:", error);
      setResult("Error during prediction.");
    } finally {
      setLoading(false);
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

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="rounded-md border border-gray-300 mt-4 w-[300px] object-contain mx-auto"
          />
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition disabled:opacity-50"
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

      {showCamera && (
        <div className="fixed inset-0 bg-gray-500/60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-lg text-center border border-green-300">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-md"
            />
            <div className="mt-4 flex gap-4 justify-center">
              <button
                onClick={handleCapture}
                className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
              >
                Capture
              </button>
              <button
                onClick={() => setShowCamera(false)}
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup hiển thị khi mở thùng */}
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
    </div>
  );
}
