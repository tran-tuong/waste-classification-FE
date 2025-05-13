import React from "react";
import { Camera, Image as ImageIcon } from "lucide-react";

const ImageUploader = ({ onFileChange, onCameraClick }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-between items-center w-full">
      <label className="flex items-center justify-center w-full md:w-auto gap-2 text-green-700 font-medium cursor-pointer border border-green-500 md:border-0 px-4 py-2 rounded hover:bg-green-50 transition">
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
        className="flex items-center justify-center w-full md:w-auto gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        <Camera className="w-5 h-5" />
        Use Camera
      </button>
    </div>
  );
};

export default ImageUploader;
