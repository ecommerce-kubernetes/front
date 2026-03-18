import { MSWComponent } from "./MSWComponent";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MSWComponent>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </MSWComponent>
  );
}
