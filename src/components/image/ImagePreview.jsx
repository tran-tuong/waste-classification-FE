import React from "react";
import { Image as ImageIcon } from "lucide-react";

const ImagePreview = ({ preview }) => {
  if (!preview) {
    return (
      <div className="mt-6 flex justify-center items-center">
        <div className="w-[300px] h-[200px] object-contain rounded border border-dashed border-green-600/60 flex flex-col justify-center items-center p-4">
          <ImageIcon className="w-12 h-12 text-green-600/60 mb-4" />
          <p className="text-center text-green-800/60 italic">
            Please upload the image
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={preview}
      alt="Preview"
      className="rounded-md border border-gray-300 mt-4 w-[300px] object-contain mx-auto"
    />
  );
};

export default ImagePreview;