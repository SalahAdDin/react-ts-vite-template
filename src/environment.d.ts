declare global {
  namespace NodeJS {
    type ProcessEnv = {
      NODE_ENV: "development" | "production";
    };
  }
}

export {};
