import { Cookies } from "react-cookie";
import { jwtDecode } from 'jwt-decode';

const cookies = new Cookies();

export const isAuthenticated = () => {
//   FOR TEST
//   return true;

  const token = cookies.get("authToken");
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken?.exp && decodedToken.exp < currentTime) {
      // Token is expired
      return false;
    }
    return true;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};
