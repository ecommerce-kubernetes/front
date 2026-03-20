import "./globals.css";
import localFont from "next/font/local";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Providers from "../providers/Providers";
import { fetchHeaderCategoryTree } from "../api/category";

const pretendardFont = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerCategories = await fetchHeaderCategoryTree();
  return (
    <html lang="ko" className={pretendardFont.variable}>
      <body className="min-h-screen flex flex-col min-w-5xl">
        <Providers>
          <Header initCategories={headerCategories} />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
