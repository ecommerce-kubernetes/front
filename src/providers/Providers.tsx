"use client";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "sonner";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
      <Toaster position="bottom-center" richColors />
    </ReactQueryProvider>
  );
}
