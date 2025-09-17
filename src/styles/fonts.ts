import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";

export const geistSans = GeistSans;
export const geistMono = GeistMono;

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVars = `${geistSans.variable} ${geistMono.variable} ${inter.variable}`;
