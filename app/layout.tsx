import type { Metadata } from "next";
import * as Sentry from '@sentry/nextjs';
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import "./globals.css";
import { ThemeProvider } from "./provider";

// Dynamically import ErrorBoundary to prevent SSR issues
const ErrorBoundary = dynamic(() => import("@/components/ErrorBoundary"), {
  ssr: false
});

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
      <body className={inter.className} suppressHydrationWarning>
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