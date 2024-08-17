declare global {
  namespace NodeJS {
    type ProcessEnv = {
      NODE_ENV: "development" | "production";
      VITE_SERVER_HOST: string;
      VITE_SERVER_PORT: number;
      VITE_APP_BASE_URL: string;
      CI: boolean;
    };
  }
}

export {};
