import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  Scripts,
  HeadContent,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

import ChatWidget from "@/college-navigator-bot/src/chat-components/ChatWidget";
import { PromotionalModal } from "@/components/site/PromotionalModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        404
      </p>

      <h1 className="mt-3 font-display text-4xl text-foreground">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-base text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Go home
      </Link>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="font-display text-4xl text-foreground">
        This page didn&apos;t load
      </h1>

      <p className="mt-4 max-w-md text-base text-muted-foreground">
        Something went wrong on our end. You can try refreshing or head back
        home.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try again
        </button>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Crescent Institute — Centre for Distance and Online Education",
      },
      {
        name: "description",
        content:
          "Crescent Institute Centre for Distance and Online Education — UG, PG and certification programmes.",
      },
      {
        property: "og:title",
        content:
          "Crescent Institute — Centre for Distance and Online Education",
      },
      {
        property: "og:description",
        content:
          "Explore UG, PG and certification programmes with online admission support.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>{children}</body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ChatWidget />
      <PromotionalModal />
      <Scripts />
    </QueryClientProvider>
  );
}