import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biometric Signature - Hardware-Backed Biometric Authentication for Flutter",
  description: "Secure cryptographic signatures using device biometrics. Hardware-backed RSA & ECDSA with Secure Enclave (iOS) and StrongBox (Android) support.",
  keywords: ["Flutter", "biometric", "authentication", "signature", "Secure Enclave", "StrongBox", "FaceID", "TouchID", "cryptography"],
  authors: [{ name: "Vision Flutter" }],
  openGraph: {
    title: "Biometric Signature - Flutter Plugin",
    description: "Hardware-backed biometric authentication for Flutter apps",
    siteName: "Vision Flutter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biometric Signature - Flutter Plugin",
    description: "Hardware-backed biometric authentication for Flutter apps",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
