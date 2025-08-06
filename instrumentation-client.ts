import * as Sentry from "@sentry/nextjs";

// Only initialize Sentry in production or when explicitly enabled
const shouldInitializeSentry = 
  process.env.NODE_ENV === 'production' || 
  process.env.NEXT_PUBLIC_SENTRY_ENABLED === 'true';

// Use global flag to prevent multiple initializations
declare global {
  var __SENTRY_INITIALIZED__: boolean | undefined;
}

if (shouldInitializeSentry && !globalThis.__SENTRY_INITIALIZED__) {
  globalThis.__SENTRY_INITIALIZED__ = true;
  
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    // Add optional integrations for additional features
    integrations: [
      Sentry.replayIntegration({
        // Optional: Configure replay settings
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

    // Define how likely Replay events are sampled.
    replaysSessionSampleRate: 0.1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: process.env.NODE_ENV !== 'production',
  });
}

// Export the required hook for navigation instrumentation
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;