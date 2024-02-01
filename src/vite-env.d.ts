interface ImportMetaEnv {
  readonly VITE_PROXY_TARGET: string;
  readonly VITE_BUILD_ANALYSIS: string;
  readonly VITE_PROXY_COOKIE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
