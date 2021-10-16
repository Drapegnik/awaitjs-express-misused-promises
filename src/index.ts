import express from "express";
import { addAsync, Router } from "@awaitjs/express";

const app: express.Application = addAsync(express());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = Router();

// `useAsync()` is like `app.use()`, but supports async functions
router.useAsync(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 50));
});

// `getAsync()` is like `app.get()`, but supports async functions
router.getAsync("*", async (req, res, next) => {
  throw new Error("Oops!");
});

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
