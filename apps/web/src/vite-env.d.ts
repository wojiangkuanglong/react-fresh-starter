interface ImportMetaEnv {
  readonly VITE_PROXY_TARGET: string;
  readonly VITE_PROXY_WS_TARGET: string;
  readonly VITE_PROXY_COOKIE: string;
  readonly VITE_CDN_URL: string;
  readonly VITE_MOCK: boolean;
  readonly VITE_RADAR: boolean;
  readonly VITE_REACT_QUERY_DEVTOOLS: boolean;
  readonly VITE_TANSTACK_ROUTER_DEVTOOLS: boolean;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
