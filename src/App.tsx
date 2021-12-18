import { Component, createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { createTRPCClient } from "@trpc/client";
import type { AppRouter } from "../api/trpc/[trpc]";

const data = async () => {
  const client = createTRPCClient<AppRouter>({ url: "/api/trpc" });

  return await client.query("hello");
};

const App: Component = () => {
  const [sig, updateSig] = createSignal("Loading...");

  data().then((res) => updateSig(res.greeting));

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h2>{sig}</h2>
        <p>
          The content above is loaded from a tRPC endpoint hosted via a Vercel
          serverless function
        </p>
      </header>
    </div>
  );
};

export default App;
