interface ImportMetaEnv {
  readonly VITE_PROXY_TARGET: string;
  readonly VITE_PROXY_COOKIE: string;
  readonly VITE_CDN_URL: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
