import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setup } from "./dojo/generated/setup.ts";
import { DojoProvider } from "./dojo/DojoContext.tsx";
import { dojoConfig } from "../dojoConfig.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

async function init() {
    const rootElement = document.getElementById("root");
    if (!rootElement) throw new Error("React root not found");
    const root = ReactDOM.createRoot(rootElement as HTMLElement);

    const setupResult = await setup(dojoConfig());

    const queryClient = new QueryClient();

    root.render(
        <React.StrictMode>
            <DojoProvider value={setupResult}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </DojoProvider>
        </React.StrictMode>
    );
}

init();
