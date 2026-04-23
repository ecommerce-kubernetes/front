import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { refreshAccessToken } from "../api/client";
import { decodeTokenToUser } from "../util/jwt";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, setAuth, clearAuth } = useAuthStore();

  useEffect(() => {
    const silentRefresh = async () => {
      if (accessToken) {
        return;
      }

      if (localStorage.getItem("isLoggedIn") !== "true") {
        return;
      }

      try {
        const data = await refreshAccessToken();
        const authUser = decodeTokenToUser(data.accessToken);
        setAuth(authUser, data.accessToken);
      } catch (error) {
        console.log(error);
        clearAuth();
      }
    };

    silentRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearAuth, setAuth]);

  return <>{children}</>;
};
