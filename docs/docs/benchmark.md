---
title: Benchmark
---

# Benchmark

We compared **Cog (1.0.0)**, **Hono (4.7.10) & @hono/node-server (1.14.1)** and **Express (5.1.0)**
using [loadtest](https://www.npmjs.com/package/loadtest) with the following command:

```bash
npx loadtest -n 50000 -c 400 -k http://localhost:3000
```

## Results

| Metric                                              | Express  | Hono    | Cog     |
| --------------------------------------------------- | -------- | ------- | ------- |
| Max requests                                        | 50000    | 50000   | 50000   |
| Concurrent clients                                  | 1600     | 1600    | 1600    |
| Total time                                          | 6.014 s  | 2.82 s  | 4.322 s |
| Total errors                                        | 0        | 0       | 0       |
| Mean latency                                        | 132.9 ms | 52.2 ms | 71.1 ms |
| Effective requests/s                                | 8314     | 17730   | 11569   |
| Percentage of requests served within a certain time |          |         |         |
| 50%                                                 | 10 ms    | 6 ms    | 11 ms   |
| 90%                                                 | 14 ms    | 9 ms    | 18 ms   |
| 95%                                                 | 18 ms    | 99 ms   | 123 ms  |
| 99%                                                 | 4058 ms  | 1549 ms | 2218 ms |
| 100%                                                | 5988 ms  | 2790 ms | 4191 ms |

## Summary

Hono demonstrates the best performance across all key metrics and is well-suited for high-load
Node.js applications. Cog performs significantly better than Express and offers a good balance of
simplicity and speed. Express shows the slowest performance in this comparison.

:::caution

All benchmarks were run locally with Node.js v22.11.0 on a MacBook Air M1. Results may vary
depending on hardware and environment.

:::

## Apps code

### Cog app

```ts
import { Cog } from "cog-http";

const app = new Cog();

app.use("*", (_req, _res, next) => {
    next();
});

app.get("/", (_, res) => {
    res.set("X-Powered-By", "Cog");
    res.send({ message: "Hello from Cog!" });
});

app.listen(3000, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3000");
});
```

### Hono app

```ts
import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.use("*", (_, next) => {
    return next();
});

app.get("/", (c) => {
    c.header("X-Powered-By", "Hono");
    return c.json({ message: "Hello from Hono!" });
});

serve({
    fetch: app.fetch,
    hostname: "127.0.0.1",
    port: 3002
});
console.log("Listening on 127.0.0.1:3002");
```

### Express app

```ts
import express, { type NextFunction, type Request, type Response } from "express";

const app = express();

app.use((_req: Request, _: Response, next: NextFunction) => {
    next();
});

app.get("/", (_, res) => {
    res.set("X-Powered-By", "Express");
    res.json({ message: "Hello from Express!" });
});

app.listen(3001, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1:3001");
});
```
