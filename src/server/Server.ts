import express from "express";

const server = express();

server.get("/", (_, res) => {
  return res.send("Olá, Mundo e olá dev");
});

export { server };
