import React from "react";
import { Camera, Image as ImageIcon } from "lucide-react";

const ImageUploader = ({ onFileChange, onCameraClick }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <label className="flex items-center gap-2 text-green-700 font-medium cursor-pointer">
        <ImageIcon className="w-5 h-5" />
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="hidden"
        />
        Upload Image
      </label>

      <button
        onClick={onCameraClick}
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        <Camera className="w-5 h-5" />
        Use Camera
      </button>
    </div>
  );
};

export default ImageUploader;