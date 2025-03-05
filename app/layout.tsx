import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

// Ana metin için Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Başlıklar için Sora
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AscendSphere | Startup Growth Platform",
  description:
    "Empower your startup journey with AscendSphere - The ultimate platform for startup growth and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
