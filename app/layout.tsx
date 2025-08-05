import type { Metadata } from "next";
import * as Sentry from '@sentry/nextjs';
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isreal's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
  other: {
    ...Sentry.getTraceData()
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/bobz.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}