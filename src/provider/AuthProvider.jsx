import { useEffect, useState } from "react";
import { AuthContext } from "../context";

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("authToken");
    return token ? { token } : {};
  });

  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("authToken", auth.token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [auth.token]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
