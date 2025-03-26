interface ImportMetaEnv {
  readonly VITE_PROXY_TARGET: string;
  readonly VITE_PROXY_COOKIE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
