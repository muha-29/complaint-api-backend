export const APP_CONFIG = {
  name: 'Complaint Portal',
  version: '1.0.0',
  environment: __DEV__ ? 'development' : 'production',
  apiTimeout: parseInt(process.env.REACT_APP_API_TIMEOUT || '15000', 10),
};
