import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { refreshAccessToken } from "../api/client";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, setAccessToken, clearAuth } = useAuthStore();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const silentRefresh = async () => {
      if (accessToken) return;

      try {
        const data = await refreshAccessToken();
        setAccessToken(data.accessToken);
      } catch (error) {
        console.log(error);
        clearAuth();
      } finally {
        setIsInitializing(false);
      }
    };

    silentRefresh();
  }, [accessToken, clearAuth, setAccessToken]);

  if (isInitializing) return null;

  return <>{children}</>;
};
