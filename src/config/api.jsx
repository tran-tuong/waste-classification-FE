const ENV = import.meta.env.VITE_ENV;

const getBaseUrl = () => {
  if (ENV === 'prod') {
    return import.meta.env.VITE_API_URL_PROD;
  }
  return import.meta.env.VITE_API_URL_DEV;
};

const API_CONFIG = {
  BASE_URL: getBaseUrl(),
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