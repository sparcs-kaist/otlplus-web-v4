import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";

// import { removeLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import logger from "@/utils/logger";

const errorInterceptor = {
  onFulfilled(values: AxiosResponse) {
    return values;
  },
  async onRejected(error: AxiosError) {
    switch (error.response?.status) {
      case HttpStatusCode.Unauthorized: {
        // TODO: Add refresh token logic here
        logger.error("Unauthorized API request", error);

        return Promise.reject(error);
      }
      case HttpStatusCode.Forbidden: {
        logger.error("Forbidden API request", error);
        window.alert(
          "[FORBIDDEN] You do not have permission to access this resource.",
        );

        const previousPage = document.referrer;

        if (previousPage.startsWith(window.location.origin)) {
          window.history.back();
        } else {
          window.location.href = "/";
        }

        return Promise.reject(error);
      }
      default: {
        logger.error("API request failed", error.status, error);
        window.alert(
          `[ERROR] ${error.response?.status} An error occurred while processing your request. Please try again later.`,
        );
        return Promise.reject(error);
      }
    }
  },
};

export default errorInterceptor;
