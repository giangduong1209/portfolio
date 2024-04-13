import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giang Duong",
  description:
    "Explore a showcase of my diverse portfolio, featuring a fusion of creativity and innovation. From sleek web designs to captivating branding projects, witness my passion for crafting compelling digital experiences. Discover how I blend aesthetics with functionality to deliver impactful solutions tailored to your needs.",
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
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
