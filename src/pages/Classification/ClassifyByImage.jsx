import React, { useRef, useState } from "react";
import axios from "axios";
import { RefreshCcw } from "lucide-react";
import ImageUploader from "../../components/image/ImageUploader";
import ImagePreview from "../../components/image/ImagePreview";
import ClassificationResult from "../../components/image/ClassificationResult";
import CameraPopup from "../../components/camera/CameraPopup";
import ApiErrorPopup from "../../components/errorHandling/ApiErrorPopup";
import ActionButton, {
  PredictButton,
  ResetButton,
} from "../../components/ui/ActionButton";

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
      setPreview(null);
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
        {/* Image upload and camera controls */}
        <ImageUploader
          onFileChange={handleFileChange}
          onCameraClick={() => setShowCamera(true)}
        />

        {/* Image preview */}
        <ImagePreview preview={preview} />

        {/* Action buttons */}
        <div className="flex gap-4 mt-6">
          {!result && (
            <PredictButton
              onClick={handleUpload}
              disabled={!file || loading}
              loading={loading}
            />
          )}

          {(result || file || preview ) && !loading && !showResultPopup && (
            <ActionButton
              onClick={handleReset}
              icon={<RefreshCcw size={16} />}
              label="Reset"
              type="reset"
            />
          )}
        </div>
      </div>

      {/* Camera popup */}
      {showCamera && (
        <CameraPopup
          webcamRef={webcamRef}
          onCapture={handleCapture}
          onCancel={() => setShowCamera(false)}
        />
      )}

      {/* Classification result popup */}
      <ClassificationResult
        result={result}
        preview={preview}
        showPopup={showResultPopup}
        onClosePopup={() => {
          setShowResultPopup(false);
          setResult(null);
        }}
      />

      {/* Error popup */}
      {apiError && <ApiErrorPopup onClose={() => setApiError(false)} />}
    </div>
  );
}
