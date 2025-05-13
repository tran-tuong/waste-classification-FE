import React from "react";
import { RefreshCcw } from "lucide-react";

const ActionButton = ({ onClick, disabled, loading, icon, label, className, type = "primary" }) => {
  // Define button styles based on type
  const styles = {
    primary: `w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 disabled:opacity-50 transition`,
    secondary: `w-full flex items-center justify-center gap-1 bg-green-700/80 border border-gray-300 text-white py-3 px-4 rounded hover:bg-green-900/80 transition`,
    reset: `flex items-center justify-center gap-1 bg-green-900/90 text-white py-3 px-4 rounded hover:bg-green-600 transition`
  };

  const baseStyle = styles[type] || styles.primary;
  const finalClassName = `${baseStyle} ${className || ""}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={finalClassName}
    >
      {icon && icon}
      {loading ? "Processing..." : label}
    </button>
  );
};

// Predefined button types for common use cases
export const PredictButton = ({ onClick, disabled, loading }) => (
  <ActionButton
    onClick={onClick}
    disabled={disabled}
    loading={loading}
    label={loading ? "Predicting..." : "Predict"}
    type="primary"
  />
);

export const ResetButton = ({ onClick }) => (
  <ActionButton
    onClick={onClick}
    icon={<RefreshCcw size={16} />}
    label="Try Again"
    type="secondary"
  />
);

export default ActionButton;