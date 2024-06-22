import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = IBM_Plex_Mono({weight : "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "neuraleverage",
  description: "reading research papers and finding their applications in your ai startup is boring. we do this for you. with ❤️ by @_hiteshbandhu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
}
