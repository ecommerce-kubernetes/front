import express from "express";
import cors from "cors";
import productRouter from "./routes/product-service.mjs";
import userRouter from "./routes/user-service.mjs";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/user-service", userRouter);
app.use("/product-service", productRouter);

app.listen(8000, () => {
  console.log("mock API 게이트웨이 실행");
});
