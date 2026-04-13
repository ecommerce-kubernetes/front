"use client";
import { AuthProvider } from "./AuthProvider";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  );
}
