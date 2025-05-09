import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { Camera, Image as ImageIcon, RefreshCcw } from "lucide-react";
import ApiErrorPopup from "../../components/errorException/ApiErrorPopup";

export default function ClassifyByImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [apiError, setApiError] = useState(false);

  const webcamRef = useRef(null);

  const handleFileChange = (e) => {
    const img = e.target.files[0];
    if (img) {
      setFile(img);
      setPreview(URL.createObjectURL(img));
      setResult(null);
    }
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
        "http://localhost:8000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const predictedClass = response.data.class.toUpperCase();
      setResult(predictedClass);
      setShowResultPopup(true);
    } catch (error) {
      console.error("Prediction failed:", error);
      setApiError(true);
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setShowResultPopup(false);
    setShowCamera(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        Classify Waste by Image
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-green-200">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
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

        {/* Preview hình sau khi chọn hoặc chụp */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="rounded-md border border-gray-300 mt-4 w-[300px] object-contain mx-auto"
          />
        )}

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleUpload}
            disabled={!file || loading}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 disabled:opacity-50 transition"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-1 bg-green-700/80 border border-gray-300 text-white py-3 px-4 rounded hover:bg-green-900/80 transition"
          >
            <RefreshCcw size={16} />
            Reset
          </button>
        </div>
      </div>

      {/* Popup Camera */}
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

      {/* Popup Result */}
      {showResultPopup && (
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
              onClick={() => setShowResultPopup(false)}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {apiError && <ApiErrorPopup onClose={() => setApiError(false)} />}
    </div>
  );
}
