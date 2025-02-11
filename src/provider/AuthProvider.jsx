import { useEffect, useState } from "react";
import { AuthContext } from "../context";

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem("authToken");
    const user = JSON.parse(sessionStorage.getItem("user"));
    return token ? { token, user } : {};
  });

  useEffect(() => {
    if (auth.token) {
      sessionStorage.setItem("authToken", auth.token);
      if (auth.user) {
        sessionStorage.setItem("user", JSON.stringify(auth.user));
      }
    } else {
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("user");
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
