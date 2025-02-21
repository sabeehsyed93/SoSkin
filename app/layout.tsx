import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import RootLayoutContent from "./components/RootLayoutContent";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "SóSkin Aesthetics - Beauty & Wellness",
  description: "Professional aesthetic treatments and beauty services for your wellness journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.variable}>
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}
