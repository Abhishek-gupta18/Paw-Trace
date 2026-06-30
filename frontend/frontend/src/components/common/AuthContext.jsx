import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "../../utils/api";

const AuthContext = createContext(null);
const DEV_AUTH_BYPASS = true;
const DEV_USER = {
  id: "dev-user",
  name: "PawTrace User",
  email: "user@pawtrace.app",
  role: "user",
  dashboardPath: "/dashboard",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(DEV_AUTH_BYPASS ? DEV_USER : null);
  const [isCheckingSession, setIsCheckingSession] = useState(!DEV_AUTH_BYPASS);

  useEffect(() => {
    // TEMP DEV AUTH BYPASS: skip JWT session checks while building the frontend.
    if (DEV_AUTH_BYPASS) {
      setUser(DEV_USER);
      setIsCheckingSession(false);
      return undefined;
    }

    let isMounted = true;

    apiRequest("/api/auth/session")
      .then((data) => {
        if (isMounted) {
          setUser(data.user);
        }
      })
      .catch(() => {
        if (isMounted) {
          setUser(null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsCheckingSession(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  async function login(email, password) {
    // TEMP DEV AUTH BYPASS: pretend login succeeded without asking the backend for JWT.
    if (DEV_AUTH_BYPASS) {
      const devUser = {
        ...DEV_USER,
        email: email || DEV_USER.email,
      };
      setUser(devUser);
      return devUser;
    }

    const data = await apiRequest("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    setUser(data.user);
    return data.user;
  }

  async function logout() {
    // TEMP DEV AUTH BYPASS: keep a demo user active so protected frontend pages stay visible.
    if (DEV_AUTH_BYPASS) {
      setUser(DEV_USER);
      return;
    }

    await apiRequest("/api/auth/logout", { method: "POST" });
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isCheckingSession,
      login,
      logout,
    }),
    [user, isCheckingSession],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
