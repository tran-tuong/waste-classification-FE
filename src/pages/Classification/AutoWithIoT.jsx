import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import binData from "../../constants/binData";
import ImageUploader from "../../components/image/ImageUploader";
import ImagePreview from "../../components/image/ImagePreview";
import ClassificationResult from "../../components/image/ClassificationResult";
import BinGrid from "../../components/bins/BinGrid";
import BinOpenPopup from "../../components/bins/BinOpenPopup";
import CameraPopup from "../../components/camera/CameraPopup";
import BinBusyPopup from "../../components/errorHandling/BinBusyPopup";
import ApiErrorPopup from "../../components/errorHandling/ApiErrorPopup";
import { PredictButton, ResetButton } from "../../components/ui/ActionButton";
import { RefreshCcw } from "lucide-react";
import { getApiUrl, ENDPOINTS } from "../../config/api";

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
        getApiUrl(ENDPOINTS.PREDICT_IOT),
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
        setBinBusy(true);
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

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4 relative">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Auto Waste Classification with IoT
      </h1>

      <div className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-lg shadow">
        {/* Image upload and camera controls */}
        <ImageUploader
          onFileChange={handleFileChange}
          onCameraClick={() => setShowCamera(true)}
        />

        {/* Image preview */}
        <ImagePreview preview={preview} />

        {/* Predict button */}
        <div className="mt-6 flex gap-4">
          {!result && (
            <PredictButton
              onClick={handleUpload}
              disabled={!file || loading}
              loading={loading}
            />
          )}

          {result && <ResetButton onClick={handleReset} />}
        </div>

        {/* Classification result */}
        <ClassificationResult
          result={result}
          preview={preview}
          onReset={handleReset}
        />
      </div>

      {/* Bin grid */}
      <BinGrid bins={binData} openedBin={openedBin} />

      {/* Bin open popup */}
      {showPopup && (
        <BinOpenPopup
          bins={binData}
          openedBin={openedBin}
          countdown={countdown}
        />
      )}

      {/* Camera popup */}
      {showCamera && (
        <CameraPopup
          webcamRef={webcamRef}
          onCapture={handleCapture}
          onCancel={() => setShowCamera(false)}
        />
      )}

      {/* Error popups */}
      {binBusy && <BinBusyPopup onClose={() => setBinBusy(false)} />}
      {apiError && <ApiErrorPopup onClose={() => setApiError(false)} />}
    </div>
  );
}
