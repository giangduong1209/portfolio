import type { Metadata } from "next";
import { Open_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import "./globals.css";
import NavBarHeader from "@/components/NavBarHeader";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        <NavBarHeader />
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
