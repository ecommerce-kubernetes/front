"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    __MSW_STARTED__?: boolean;
  }
}

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(() => {
    if (typeof window !== "undefined") {
      return window.__MSW_STARTED__ || false;
    }
    return false;
  });

  useEffect(() => {
    const init = async () => {
      if (
        process.env.NODE_ENV === "development" &&
        process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
      ) {
        if (window.__MSW_STARTED__) {
          setMswReady(true);
          return;
        }
        const { worker } = await import("@/src/mocks/browser");
        await worker.start({ onUnhandledRequest: "bypass" });
        window.__MSW_STARTED__ = true;
      }
      setMswReady(true);
    };
    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (process.env.NODE_ENV === "development" && !mswReady) {
    return null;
  }
  return <>{children}</>;
};
