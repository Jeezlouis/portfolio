"use client";

import * as Sentry from "@sentry/nextjs";
import { ErrorBoundary as SentryErrorBoundary } from "@sentry/nextjs";
import { ReactNode, ReactElement, JSXElementConstructor } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactElement<any, string | JSXElementConstructor<any>> | (() => ReactElement);
}

export default function ErrorBoundary({ children, fallback }: Props) {
  return (
    <SentryErrorBoundary
      fallback={fallback || <ErrorFallback />}
      beforeCapture={(scope) => {
        scope.setTag("errorBoundary", true);
      }}
    >
      {children}
    </SentryErrorBoundary>
  );
}

function ErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-600 mb-6">
        We&apos;ve been notified about this error and will fix it soon.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Reload Page
      </button>
    </div>
  );
}