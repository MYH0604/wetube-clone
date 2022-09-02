import express from "express";

const PORT = 4000;

const app = express();

const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
};
const timeLogger = (req, res, next) => {
  const date = new Date();
  console.log(
    `Time: ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  );
  next();
};
const securityLogger = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("secure");
    next();
  }
  console.log("insecure");
  next();
};
const protecterMiddleware = (req, res, next) => {
  if (req.url === "/protected") {
    return res.send("<h1>Not Allowed<h1>");
  }
  next();
};

app.use(urlLogger, timeLogger, securityLogger, protecterMiddleware);
app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(PORT, () => `Listening!✅`);
