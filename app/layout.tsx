import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Vijay",
  description: "This is my portfolio",
  openGraph: {
    title: "VijayFolio",
    description:"This is my portfolio That shows My skills and Experience",
    url: "https://vijayfolio.vercel.app/",
    siteName: "vijayfolio",
    images: [
      {
        url: "https://images.app.goo.gl/7aWWdvFYKjU8KgZM7",
        width: 1200,
        height: 630,
        alt: "A description of the image",
      },
    ],
    locale: "en_US",
    type: "website", 
  },
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
