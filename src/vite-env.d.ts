/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_APP_BASE_URL: string;
  readonly VITE_SERVER_HOST: string;
  readonly VITE_SERVER_PORT: string;
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
