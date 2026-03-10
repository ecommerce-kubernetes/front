import "./globals.css";
import localFont from "next/font/local";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const pretendardFont = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendardFont.variable}>
      <body className="min-h-screen flex flex-col min-w-[1024px]">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
