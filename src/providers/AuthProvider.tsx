import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { refreshAccessToken } from "../api/client";
import { decodeTokenToUser } from "../util/jwt";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, setAuth, clearAuth } = useAuthStore();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const silentRefresh = async () => {
      if (accessToken) {
        setIsInitializing(false);
        return;
      }

      if (localStorage.getItem("isLoggedIn") !== "true") {
        return setIsInitializing(false);
      }

      try {
        const data = await refreshAccessToken();
        const authUser = decodeTokenToUser(data.accessToken);
        setAuth(authUser, data.accessToken);
      } catch (error) {
        console.log(error);
        clearAuth();
      } finally {
        setIsInitializing(false);
      }
    };

    silentRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearAuth, setAuth]);

  if (isInitializing) return null;

  return <>{children}</>;
};
