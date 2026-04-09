import type { UserConfig } from "vite";

import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import { VitePWA } from "vite-plugin-pwa";

export default {
    plugins: [devtools(), solidPlugin(), VitePWA()],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
        outDir: "../dist",
    },
    root: "src",
} satisfies UserConfig;
