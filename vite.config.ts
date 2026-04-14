import type { UserConfig } from "vite";

import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import devtools from "solid-devtools/vite";
import { VitePWA } from "vite-plugin-pwa";

const page = (endpoint: string) =>
    `${import.meta.dirname}/src${endpoint}index.html`;

export default {
    appType: "mpa",
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
    },
    build: {
        target: "esnext",
        outDir: "../dist",
        emptyOutDir: true,
        rolldownOptions: {
            input: {
                home: page("/home/"),
                orders: page("/orders/"),
                finances: page("/finances/"),
                documents: page("/documents/"),
                suppliers: page("/suppliers/"),
                login: page("/login/"),
                signup: page("/signup/"),
            },
        },
    },
    publicDir: "assets/static",
    root: "src",
    resolve: {
        tsconfigPaths: true,
    },
} satisfies UserConfig;
