import React from "react";
import ReactDOM from "react-dom/client";

// import router from "@presentation/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import { RouterProvider } from "@tanstack/react-router";

import "./index.css";

import App from "@presentation/App";

import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const QueryDevtools =  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() => import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        })));

/* const RouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      ); 
*/

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const { default: worker } = await import("../mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(
  () => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <RouterProvider router={router} />
          <RouterDevtools
            initialIsOpen={false}
            router={router}
            position="bottom-right"
          /> */}
          <QueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </React.StrictMode>
    );
  },
  () => {}
);

reportWebVitals();
