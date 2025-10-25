import crashlytics from '@react-native-firebase/crashlytics';
import { ERROR_MESSAGES } from './constants';

class ErrorHandler {
  handleError(error: any, context?: string) {
    const errorMessage = error?.message || 'Unknown error';
    console.error(`[${context || 'Error'}]`, errorMessage);

    if (!__DEV__) {
      crashlytics().recordError(new Error(errorMessage));
    }
  }

  getErrorMessage(error: any): string {
    if (error?.response?.status === 401) {
      return ERROR_MESSAGES.UNAUTHORIZED;
    }
    if (error?.response?.status >= 500) {
      return ERROR_MESSAGES.SERVER_ERROR;
    }
    if (error?.message?.includes('Network')) {
      return ERROR_MESSAGES.NETWORK_ERROR;
    }
    return error?.message || ERROR_MESSAGES.UNKNOWN_ERROR;
  }

  setupGlobalErrorHandler() {
    ErrorUtils.setGlobalHandler((error: Error, isFatal: boolean) => {
      this.handleError(error, isFatal ? 'FATAL' : 'ERROR');
    });
  }
}

export default new ErrorHandler();
