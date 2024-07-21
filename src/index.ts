import { Client } from "pg";

export async function getClient() {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgress",
    database: "postgres",
  });
  await client.connect();
  return client;
}

