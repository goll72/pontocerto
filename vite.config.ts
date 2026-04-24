import type { UserConfig } from "vite";

import devtools from "solid-devtools/vite";
import { VitePWA } from "vite-plugin-pwa";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default {
    appType: "spa",
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                silenceDeprecations: [
                    // Não temos como escapar do `@import` ao usar Bootstrap
                    "import",
                ],
            },
        },
    },
    plugins: [devtools(), solidPlugin(), solidSvg(), VitePWA()],
    server: {
        port: 3000,
        open: "/login/",
        proxy: {
            "/api": "http://localhost:8080",
        },
    },
    build: {
        target: "esnext",
        outDir: "../dist",
        emptyOutDir: true,
    },
    publicDir: "assets/static",
    root: "src",
    resolve: {
        tsconfigPaths: true,
    },
} satisfies UserConfig;
