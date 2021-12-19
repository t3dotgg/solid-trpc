import { createTRPCClient } from "@trpc/client";
import { createResource } from "solid-js";
import type { AppRouter } from "../../api/trpc/[trpc]";

const client = createTRPCClient<AppRouter>({ url: "/api/trpc" });

const data = async () => {
  return await client.query("hello");
};
type AppQueries = AppRouter["_def"]["queries"];

type AppQueryKeys = keyof AppQueries & string;

export const createTrpcQuery = (path: AppQueryKeys) => {
  const fetchData = async () => {
    return client.query(path);
  };

  return createResource(fetchData);
};
