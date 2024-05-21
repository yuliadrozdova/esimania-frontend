import { Cookies } from "react-cookie";
import { API_URL } from "../config/config";
import axios from "axios";

const cookies = new Cookies();
const expires = new Date();
expires.setDate(expires.getDate() + 30);

export const fetchLoginUser = async (
  email: string,
  password: string,
  goToAnotherPage: () => void
  //  goTo2FactorPage: () => void
) => {
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(`${API_URL}/auth/signIn`, data);

    if (response.data.isSuccess) {
      cookies.set("authToken", response.data.bearerToken, {
        path: "/",
        expires,
      });
      goToAnotherPage();
    } else {
      //redirect to two-factor authentication
      // goTo2FactorPage()
      console.error("Authorization failed:", response.data.message);
    }
  } catch (error) {
    console.error("Error during authorization:", error);
  }
};

export const fetchRegistrationUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  goToAnotherPage: () => void
) => {
  const data = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };

  try {
    const response = await axios.post(`${API_URL}/auth/signUp`, data);

    if (response.data.isSuccess) {
      cookies.set("authToken", response.data.bearerToken, {
        path: "/",
        expires,
      });
      goToAnotherPage();
    } else {
      console.error("Registration failed:", response.data.message);
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

export const fetchForgotPassword = async (
  email: string,
  goToAnotherPage: () => void
) => {
  const data = {
    email: email,
  };

  try {
    const response = await axios.post(`${API_URL}/auth/forgetPassword`, data);

    if (response.data.isSuccess) {
      goToAnotherPage();
    } else {
      console.error(response.data.message);
    }
  } catch (error) {
    console.error(error);
  }
};
