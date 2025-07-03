import type { Metadata } from "next";
import {Roboto_Mono} from "next/font/google";
import "./globals.css";


const robotoMono = Roboto_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Devang Mehra",
  description: "Frontend Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
