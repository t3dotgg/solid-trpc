import { Component, createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { createTrpcQuery } from "./lib/trpc";

const App: Component = () => {
  const [data] = createTrpcQuery("hello");

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <h2>{data()?.greeting ?? "Loading..."}</h2>
        <p>
          The content above is loaded from a tRPC endpoint hosted via a Vercel
          serverless function
        </p>
      </header>
    </div>
  );
};

export default App;
