"use client";
import { useEffect, useState } from "react";

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (
        process.env.NODE_ENV === "development" &&
        process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
      ) {
        const { worker } = await import("@/src/mocks/browser");
        await worker.start({ onUnhandledRequest: "bypass" });
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
