import axios from "axios";
import { Cookies } from "react-cookie";

const MAX_RETRIES = 2;
const cookies = new Cookies();
const API_URL = axios.create({
  baseURL: "https://www.airalo.com/api/",
});

API_URL.interceptors.request.use(
  (config) => {
    const token = cookies.get('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API_URL.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    let message = "";

    try {
      if (error.response.status === 401) {
        // Redirect to the login page
        cookies.remove("authToken");
        window.location.href = "/auth/login";
        return Promise.reject(error);
      }
    } catch (e) {
      message = e.message || "";
    }

    try {
      const config = error.config;
      config.headers["retryCount"] = config.headers["retryCount"] || 0;

      if (
        (error.response.status === 404 || error.response.status >= 500) &&
        config.headers["retryCount"] < MAX_RETRIES
      ) {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        config.headers["retryCount"]++;
        const response = await API_URL(config);
        return response;
      } else {
        console.error(error.response.status);
        window.location.href = "/";
      }
    } catch (e) {
      // ignored
    }

    return Promise.reject(error);
  }
);

export { API_URL };
