import { useEffect } from "react";

function useAuthToken() {
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      console.log(`Using token: ${token}`);
    }
  }, [token]);

  return token;
}
