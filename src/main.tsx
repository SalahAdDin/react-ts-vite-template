import React from "react";
import ReactDOM from "react-dom/client";

import App from "@presentation/App";
// import router from "@presentation/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { RouterProvider } from "@tanstack/react-router";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const ReactQueryDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        }))
      );

/* const ReactRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      ); */

async function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { default: worker } = await import("../mocks/browser");

    return worker.start();
  }

  return Promise.resolve();
}

prepare().then(
  () => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
          {/*
        <RouterProvider router={router} />
         <ReactRouterDevtools
          initialIsOpen={false}
          router={router}
          position="bottom-right"
        />
        */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  },
  () => {}
);

reportWebVitals();
