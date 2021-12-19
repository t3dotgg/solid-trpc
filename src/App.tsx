import { Component } from "solid-js";

import styles from "./App.module.css";
import { createTrpcQuery } from "./lib/trpc";

const App: Component = () => {
  const [data] = createTrpcQuery("hello");

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h2>{data()?.greeting ?? "Loading..."}</h2>
        <p>
          The content above is loaded from a tRPC endpoint hosted via a Vercel
          serverless function
        </p>
        <a href="https://github.com/TheoBr/solid-trpc" class={styles.link}>
          Github Repo
        </a>
      </header>
    </div>
  );
};

export default App;
