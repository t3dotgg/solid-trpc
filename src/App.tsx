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
        <p>{sig}</p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
