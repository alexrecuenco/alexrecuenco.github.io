    interface ImportMetaEnv {
    readonly SITE_URL: string;
    // more env variables...
    }

interface ImportMeta {
readonly env: ImportMetaEnv;
}
