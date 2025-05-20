const API_CONFIG = {
  BASE_URL: "http://localhost:8000",
  ENDPOINTS: {
    PREDICT: "/predict",
    PREDICT_IOT: "/predict_iot",
    CONTROL_BIN: "/control_bin"
  }
};

export const getApiUrl = (endpoint) => {
  if (endpoint.startsWith('/')) {
    return `${API_CONFIG.BASE_URL}${endpoint}`;
  }
  return `${API_CONFIG.BASE_URL}/${endpoint}`;
};

export const ENDPOINTS = API_CONFIG.ENDPOINTS;

export default API_CONFIG;